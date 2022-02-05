const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5050;

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`🚀 Server listening on ${PORT}`);
});
