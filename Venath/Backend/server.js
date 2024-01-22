const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
//const dotenv = require("dotenv");
const app = express();
//require("dotenv").config();

//const PORT = process.env.PORT || 8070;
const PORT =8020;
const MONGODB_URL='mongodb+srv://venath1:venath@prjapp.9knjsqh.mongodb.net/crud?retryWrites=true&w=majority'



app.listen(PORT,()=>{console.log(`App is running on ${PORT}`);
});

app.use(cors());
 app.use(bodyParser.json());

// const URL = process.env.MONGODB_URL;

mongoose.connect(MONGODB_URL)
.then(()=>{
    console.log('DB connected');
})
.catch((err)=>{ console.log('DB connection error',err);})

const candidateRouter =require("./routes/candidates");
const loginsRouter = require('./routes/signup');

app.use(candidateRouter);
app.use(loginsRouter);
// mongoose.connect(URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
//   });
  
  

// const connection = mongoose.connection;
// connection.once("open", () => {
//     console.log("Connection success");
// });

// app.listen(PORT, () => {
//     console.log(`port is ${PORT}`);
// });
