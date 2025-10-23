import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import fs from "fs";

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

// Path to data file
const dataFile = "./data.json";

// Create data.json if not exists
if (!fs.existsSync(dataFile)) {
  fs.writeFileSync(
    dataFile,
    JSON.stringify({ urls: [], admin: {} }, null, 2)
  );
}

// Test route
app.get("/", (req, res) => {
  res.send("Backend is running ✅");
});

app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
