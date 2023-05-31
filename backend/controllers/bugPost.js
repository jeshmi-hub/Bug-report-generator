const db = require("../db");
const bugCtrl ={
    getBugs :async(req,res)=>{
        const q = "SELECT * FROM bugs"
        db.query(q,(err, data)=>{
            if(err) return res.status(500).json(err);
            console.log(data)
            return res.status(200).json(data);
        })
        

    },
    getBug: async(req,res)=>{
        const bugId = req.params.id
        const q = "SELECT * FROM bugs WHERE `bug_id`=?"
        db.query(q,(bugId),(err, data)=>{
            if(err) return res.status(500).json(err);
            return res.status(200).json(data);
        })

    },

    addBug: async(req,res)=>{
        const q = "INSERT INTO bugs(`title`,`description`,`system`,`browser`,`priority`,`image1`,`image2`,`status`) VALUES(?,?,?,?,?,?,?,?)"
        const values = [
            req.body.title,
            req.body.description,
            req.body.system,
            req.body.browser,
            req.body.priority,
            req.body.image1,
            req.body.image2,
            req.body.status 
        ]

        db.query(q,values,(err,data)=>{
            if(err) return res.status(500).json(err);
            return res.json("Bug has been created.");
        })

    },
    deleteBug: async(req,res)=>{
        const bugId = req.params.id;
        const q = "DELETE FROM bugs WHERE `bug_id` = ?";
        db.query(q, (bugId), (err, data)=>{
            if(err) return res.status(400).json(err)

            return res.json("Bug has been deleted!!");
        })

    },
    updateBug: async(req,res)=>{
        const bugId = req.params.id;
        const q = "UPDATE bugs SET `title`=?, `description`=?,`system`=?, `browser`=?,`priority`=?,`image1`=?, `image2`=?, `status`=? WHERE `bug_id`=?";
        const values = [
            req.body.title,
            req.body.description,
            req.body.system,
            req.body.browser,
            req.body.priority,
            req.body.image1,
            req.body.image2,
            req.body.status 
        ]

        db.query(q, [...values, bugId], (err,data)=>{
            if(err) return res.status(500).json(err);
            return res.json("Bug has been updated!!");
        })

    }
}

module.exports = bugCtrl;