const express = require("express");
const accountRouter = express.Router();

//get all accounts
accountRouter.get("/", async (req, res) => {
  if (!Object.keys(req.query).length) {
    try {
      const results = await req.dbClient
        .db("charity")
        .collection("accounts")
        .find({})
        .toArray();
      if (results.length !== 0) {
        res.status(200).json(results);
      } else {
        res.status(404).json({ message: "No user Yet" });
      }
    } catch (e) {
    } finally {
      res.status(500).json({ message: "Something went wrong" });
    }
  } else {
    try {
      // how to query search multiple place
      const filteredResults = await req.client
        .db("charity")
        .collection("accounts")
        .find({ location: { $regex: query } })
        .toArray();
      if (results.length !== 0) {
        res.status(200).json(results);
      } else {
        res.status(404).json({ message: "No results Found" });
      }
    } catch (e) {
    } finally {
      res.status(500).json({ message: "Something went wrong" });
    }
  }
});

//get one account by Id
accountRouter.get("/:accountId", async (req, res) => {
  try {
    const result = await req.dbClient
      .db("charity")
      .collection("accounts")
      .find({ accountId: req.params.accountId })
      .toArray();
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: "No Donation Yet" });
    }
  } catch (e) {
    res.status(500).json({ message: "Something went wrong" });
  } finally {
  }
});

//update an account by id
accountRouter.patch("/:accountId", async (req, res) => {
  try {
    const result = await req.dbClient
      .db("charity")
      .collection("accounts")
      .updateOne(
        { accountId: req.params.accountId },
        {
          $set: {
            location: req.body.location,
            website: req.body.website,
            image: req.body.image,
            description: req.body.description,
            image: req.body.image,
          },
        }
      );
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({ message: "Something went wrong" });
  } finally {
  }
});

module.exports = accountRouter;