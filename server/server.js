const app = require("./app");
const connectDB = require("./config/database");

// Connect to the database
connectDB();

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
