const express = require("express");
const router = express.Router();
const formDataRoutes = require('./formData');
const { getUserDetails } = require('../controllers/user.js');
const cors = require('cors');
const app = express();
const axios = require('axios');



const { form,form1,login, register, getAllUsers } = require("../controllers/user");
const authMiddleware = require('../middleware/auth')
router.route("/login").post(login);
router.route("/register").post(register);
router.route("/dashboard").get(getUserDetails);
router.route("/form").post(form);
router.route("/form").get(form1);



module.exports = router;