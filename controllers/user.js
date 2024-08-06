const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Patient = require('../models/Patient'); 
const FormData = require('../models/FormData'); // Create this model
const axios = require('axios');




const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      msg: "Bad request. Please add email and password in the request body",
    });
  }


  let foundUser = await User.findOne({ email: req.body.email });
  if (foundUser) {
    const isMatch = await foundUser.comparePassword(password);

    if (isMatch) {
      const token = jwt.sign(
        { id: foundUser._id, name: foundUser.name },
        process.env.JWT_SECRET,
        {
          expiresIn: "30d",
        }
      );

      return res.status(200).json({ msg: "user logged in", token });
    } else {
      return res.status(400).json({ msg: "Bad password" });
    }
  } else {
    return res.status(400).json({ msg: "Bad credentails" });
  }
};



const getAllUsers = async (req, res) => {
  let users = await User.find({});
  return res.status(200).json({ users });
};

const getUserDetails = async (req, res) => {
  try {
      const userId = req.user.id; // Assuming you have user ID in the request after authentication
      const user = await User.findById(userId);
      res.status(200).json({ user });

      if (!user) {
          return res.status(404).json({ msg: 'User not found' });
      }}
      catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }};

const register = async (req, res) => {
  let foundUser = await User.findOne({ email: req.body.email });
  if (foundUser === null) {
    let { username, email, password } = req.body;
    if (username.length && email.length && password.length) {
      const person = new User({
        name: username,
        email: email,
        password: password,
      });
      await person.save();
      return res.status(201).json({ person });
    }else{
        return res.status(400).json({msg: "Please add all values in the request body"});
    }
  } else {
    return res.status(400).json({ msg: "Email already in use" });
  }
};


const form =async (req, res) => {
  try {
    const formData = new FormData(req.body); // Create an instance of the Mongoose model
    await formData.save(); // Save to the database
    // Send data to FastAPI for prediction
    const response = await axios.post('http://localhost:8000/predict', req.body);
    res.json({ prediction: response.data.prediction });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error processing');
  }
};
const form1 = async (req, res) => {
  res.send("welocmee");
};
module.exports = {
  login,
  form,
  form1,
  register,
  getAllUsers,
  getUserDetails,
};
