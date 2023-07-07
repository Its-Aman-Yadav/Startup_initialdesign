const express = require("express");
const bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");
const path = require("path");

const app = express();
const port = 3000;

// Parse URL-encoded bodies (for form data)
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB
const uri = "mongodb://localhost:27017/your_database_name";
const client = new MongoClient(uri);

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// Define route for handling form submission
app.post("/submit", (req, res) => {
  const { name, email, message } = req.body;

  // Insert form data into MongoDB
  client.connect((err) => {
    if (err) {
      console.error("Error connecting to MongoDB:", err);
      res.sendStatus(500);
      return;
    }

    const database = client.db("mydatabase");
    const collection = database.collection("mycollection");

    const formData = { name, email, message };

    collection.insertOne(formData, (error) => {
      if (error) {
        console.error("Error inserting form data into MongoDB:", error);
        res.sendStatus(500);
      } else {
        console.log("Form data inserted into MongoDB");
        res.sendStatus(200);
      }
    });
  });
});

// Define route for serving the index.html file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
