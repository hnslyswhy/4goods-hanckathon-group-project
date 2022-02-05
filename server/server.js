const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const accountRouter = require("./routes/account");
//const singupAndLoginRoute = require("./routes/singupAndLogin");
const donationRouter = require("./routes/donation");

/// mongodb
const { MongoClient } = require("mongodb");
const authRouter = require("./routes/auth");
let client;

async function main() {
  const uri = process.env.MONGODB_URL;
  client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  try {
    await client.connect();
  } catch (e) {
    console.error(e);
  } finally {
  }
}
/* let client;
console.log(client);
async function main() {
  const uri = process.env.MONGODB_URL;
  const options = {
    sslValidate: false,
  };
  client = new MongoClient(uri, options);
  console.log("hi");
  try {
    await client.connect();
  } catch (e) {
    console.error(e);
  } finally {
  }
} */

main().catch(console.error);

const app = express();

// middleware
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  //add mongo client
  req.dbClient = client;
  next();
});

//routes
app.use("/account", accountRouter);
app.use("/auth", authRouter);
app.use("/donation", donationRouter);

//port
app.listen(process.env.PORT || 5050, () => {
  console.log(`🚀 Server listening on ${process.env.PORT}`);
});
