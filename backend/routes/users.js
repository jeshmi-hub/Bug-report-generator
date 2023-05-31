const userCtrl = require("../controllers/user");
const express = require("express");

const router = express.Router();

router.get("/users", userCtrl.getUsers);
router.get("/user/:id", userCtrl.getOneUser);
router.delete("/deleteUser/:id",userCtrl.deleteUser);
router.put("/updateUser/:id", userCtrl.updateUser);

module.exports = router;