const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const cookie = require("cookie-parser");

const app = express();

app.use(express.json());
app.use(cors({origin : "*"}));
app.use(cookie());

const userRoute = require('./routes/users')
app.use('/', userRoute)

const authRoute = require('./routes/auth')
app.use('/',authRoute)




app.listen(process.env.PORT,()=>{
    console.log(`Server listening on ${process.env.PORT}`)
})