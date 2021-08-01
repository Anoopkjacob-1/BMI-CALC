const express = require("express");
const { userCreate,allUsers } = require("../controllers/usercontroller");

const router = express.Router();


router.post('/usersave', userCreate);
router.get('/allusers', allUsers);

module.exports = router;