const express = require("express");
const jwt = require("jsonwebtoken");
const { ObjectId } = require("mongodb");
const { v4: uuidv4 } = require("uuid");

const authRouter = express.Router();
const JWT_SECRET =
  "53b99e8b91f67d12e04508c91d59b87620edd27c0f28ec01a517cee81d4b87bf";

const user = {};

//signup
authRouter.post("/signup", async (req, res) => {
  const { account, password } = req.body;
  //construct use object
  user["account"] = account;
  user["password"] = password; // need to dcript

  try {
    // check if account exist
    const targetAccount = await req.dbClient
      .db("charity")
      .collection("accounts")
      .findOne({ account: account });

    if (targetAccount) {
      res.status(403).json({ message: "Account Already Exist" });
    } else {
      // insert one account
      let accountInfo = {};
      if (req.body.type === "organization") {
        accountInfo = {
          type: req.body.type,
          account: req.body.account, //used to be: username: req.body.username,  // should be the email address
          password: req.body.password,
          program_type: req.body.program_type, // may need change
          accountId: uuidv4(),
          program_name: req.body.program_name, // may need change
          location: req.body.location,
          geolocation: req.body.geolocation,
          image: "https://content.hostgator.com/img/weebly_image_sample.png", // may need change
          description: req.body.description,
          website: req.body.website,
        };
      } else {
        accountInfo = {
          type: req.body.type,
          account: req.body.account, //used to be: username: req.body.username,  // should be the email address
          password: req.body.password,
          accountId: uuidv4(),
          program_name: req.body.program_name, // may need change
          location: req.body.location,
          geolocation: req.body.geolocation,
          image: "https://content.hostgator.com/img/weebly_image_sample.png", // may need change
          description: req.body.description,
        };
      }
      const newAccount = await req.dbClient
        .db("charity")
        .collection("accounts")
        .insertOne({ ...accountInfo });

      console.log(
        `A document was inserted with the _id: ${newAccount.insertedId}`
      );

      // get this account by id
      const result = await req.dbClient
        .db("charity")
        .collection("accounts")
        .findOne({ _id: newAccount.insertedId });

      console.log(result);

      if (result) {
        res.status(200).json({ message: "success" });
      } else {
        res.status(404).json({ message: "Account Not Found" });
      }
    }
  } catch (e) {
    res.status(500).json({ message: "Something went wrong" });
  } finally {
  }
});

//login
authRouter.post("/login", async (req, res) => {
  const { account, password } = req.body;
  console.log(req.body)

  try {
    const result = await req.dbClient
      .db("charity")
      .collection("accounts")
      .findOne({ account: account });

    console.log('result',result);

    if (result) {
      if (result.password === password) {
        const token = jwt.sign({ account: result.account }, JWT_SECRET, {
          expiresIn: "24h",
        });

        console.log(token);

        res.status(200).json({ token });
      } else {
        res.status(204).json({ message: "Account and Password Not Match" });
      }
    } else {
      res.status(404).json({ message: "Account Not Found. Please Sign Up" });
    }
  } catch (e) {
    res.status(500).json({ message: "Something went wrong" });
  } finally {
  }
});

//profile
const authorize = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ message: "not authorized" });
  }

  const authToken = req.headers.authorization.split(" ")[1];
  console.log(authToken)
  jwt.verify(authToken, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "not authorized" });
    }

    if (Date.now() > new Date(decoded.exp * 1000)) {
      return res.status(401).json({ message: "token expired" });
    }
    req.decoded = decoded;
    console.log(decoded)
    next();
  });
};

authRouter.get("/profile", authorize, async (req, res) => {
  res.json(req.decoded);
});

authRouter.get("/login/:account", async (req, res) => {
  console.log(req.params)
  try {
    const targetAccount = await req.dbClient
      .db("charity")
      .collection("accounts")
      .findOne({ account: req.params.account });

    console.log('target',targetAccount);

    if (targetAccount) {
      res.status(200).json(targetAccount);
    } else {
      res.status(404).json({ message: "Account Not Found" });
    }
  } catch (e) {
    res.status(500).json({ message: "Something went wrong" });
  } finally {
  }
});

module.exports = authRouter;
