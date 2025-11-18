require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();
const PORT = process.env.PORT || 5000;

// Connect DB
connectDB(process.env.MONGO_URI);

// Middleware
app.use(cors()); // configure origins if needed: cors({ origin: 'http://localhost:3000' })
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/products", require("./routes/products"));

// simple health check
app.get("/", (req, res) => res.send({ status: "ok", timestamp: Date.now() }));

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
