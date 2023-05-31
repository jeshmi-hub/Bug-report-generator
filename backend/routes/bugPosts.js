const bugCtrl = require("../controllers/bugPost")

const express = require("express");

const router = express.Router();

router.get("/bugs", bugCtrl.getBugs);
router.get("/bug/:id",bugCtrl.getBug);
router.post("/postBug",bugCtrl.addBug);
router.delete("/deleteBug/:id",bugCtrl.deleteBug);
router.put("/updateBug/:id",bugCtrl.updateBug);

module.exports = router;