const db = require("../db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const useCtrl ={
    register: async(req,res)=>{
        const q = "SELECT * FROM user WHERE email = ? OR username = ?"
        db.query(q,[req.body.email, req.body.username], (err, data)=>{
            if (err) return res.json(err);
            if(data.length) return res.status(409).json("User already exists!");

            const salt = bcrypt.genSaltSync(10);
            const password = req.body.password;
            const confirmPassword = req.body.confirmPassword;
            try{
                if(password===confirmPassword){
                    const hash = bcrypt.hashSync(password, salt);
                    const confirmHash = bcrypt.hashSync(confirmPassword, salt)
                

                    const q = "INSERT INTO user(`username`, `email`, `password`, `confirmPassword`) VALUES(?)"
                    const values = [
                        req.body.username,
                        req.body.email,
                        hash,
                        confirmHash
                    ]

                    db.query(q,[values], (err,data)=>{
                        if(err) return res.json(err);
                        return res.status(200).json("User has been created");
                    })
                }else{
                    return res.status(500).json("Password and confirm password does not match")
                }
            }catch(err){
                return res.json(err.message, "err")
            }
            
        })

    },
    login: async(req,res)=>{
        const q = "SELECT * FROM user WHERE email = ?";

        db.query(q, [req.body.email], (err,data) => {
            if(err) return res.json(err);
            if(data.length === 0) return res.status(400).json("User not found!");

            const isPasswordCorrect = bcrypt.compareSync(req.body.password, data[0].password);
            if(!isPasswordCorrect) return res.status(400).json("Wrong username and password!");

            const token = jwt.sign({id:data[0].id}, "jwtkey");
            const {password, ...other} = data[0]
            res.cookie("access_token", token, {
                httpOnly: true,
            }).status(200).json(other);

        });

    },
    logout: async(req,res)=>{

    }
}

module.exports = useCtrl;