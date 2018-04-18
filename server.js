const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const dotenv = require("dotenv").config();

// Middleware setups
app.use(express.static(path.join(__dirname, "client", "build")))

// // Database setup 
// const MONGODB_URI = mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/redefiningtech")

// Right before your app.listen(), add this:
app.get("*", (req, res) => {  
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
