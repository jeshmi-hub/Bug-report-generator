const db = require("../db");
const userCtrl ={
    getUsers: async(req,res)=>{
        const q = "SELECT * FROM user"
        db.query(q,(err, data)=>{
            if(err) return res.status(500).json(err);
            return res.status(200).json(data);
        })

    },
    getOneUser: async(req,res)=>{
        const userId = req.params.id;
        const q = "SELECT * FROM user WHERE `id`=?"
        db.query(q,(userId),(err, data)=>{
            if(err) return res.status(500).json(err);
            return res.status(200).json(data);
        })

    },
    updateUser:async(req,res)=>{
        const userId = req.params.id;
        const q = "UPDATE user SET `username`=?, `email`=? WHERE `id`=?";
        const values = [
            req.body.username,
            req.body.email,
        ]

        db.query(q, [...values, userId], (err, data)=>{
            if(err) return res.status(500).json(err);
            return res.status(200).json(data);
        })

    },
    deleteUser:async(req,res)=>{
        const userId = req.params.id;
        const q = "DELETE FROM user WHERE `id`=?"
        db.query(q, (userId), (err,data)=>{
            if(err) return res.status(400).json(err)

            return res.status(200).json("User deleted successfully");
        })
    }
}

module.exports = userCtrl;