require("dotenv").config();
require('express-async-errors');
const connectDB = require("./db/connect");
const express = require("express");
const app = express();  // Initialize Express app
const cors = require('cors');
const bodyParser = require ('body-parser');
const path = require("path");
const formDataRoutes = require("./routes/formData"); // Add this line
const FormData = require('./models/FormData'); // Create this model
const axios = require('axios');





app.use(cors({}));
app.use(bodyParser.json()); // Parses incoming JSON requests
 
// const mainRouter = require("./routes/user");
app.use(express.json());
app.use("/api/v1",require("./routes/user"));


const start = async () => {

  try {        
      await connectDB(process.env.MONGO_URI);
      app.listen(port, () => {
          console.log(`Server is listening on port ${port}`);
      })

  } catch (error) {
     console.log(error); 
  }
}

const port = process.env.PORT || 3000;

 // Route to handle form submission

 



start();

