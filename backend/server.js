const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const morgan = require("morgan")
const cookieParser = require("cookie-parser");
const multer = require("multer");

const app = express();
app.use(morgan("tiny"));
app.use(express.json());
app.use(cors({origin : "*"}));
app.use(cookieParser());

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../client/public/images')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now()+file.originalname)
    },
  });
  
const upload = multer({ storage})

app.post('/upload', upload.single('file'),function(req,res){
    const file = req.file;
    res.status(200).json(file.filename);
});

const userRoute = require('./routes/users')
app.use('/', userRoute)

const authRoute = require('./routes/auth')
app.use('/',authRoute)

const bugRoute = require('./routes/bugPosts')
app.use('/', bugRoute)




app.listen(process.env.PORT,()=>{
    console.log(`Server listening on ${process.env.PORT}`)
})