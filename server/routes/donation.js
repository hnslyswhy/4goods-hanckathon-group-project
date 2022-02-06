const express = require("express");
const { ObjectId } = require("mongodb");
const donationRouter = express.Router();

//get all donation
donationRouter.get("/", async (req, res) => {
  try {
    const results = await req.dbClient
      .db("charity")
      .collection("donation")
      .find({})
      .toArray();
    if (results.length !== 0) {
      res.status(200).json(results);
    } else {
      res.status(404).json({ message: "No Donation Yet" });
    }
  } catch (e) {
    res.status(500).json({ message: "Something went wrong" });
  } finally {
  }
});

//get all donation belongs to an account
donationRouter.get("/account/:accountId", async (req, res) => {
  console.log('hi')
  try {
    const results = await req.dbClient
      .db("charity")
      .collection("donation")
      .find({ accountId: req.params.accountId })
      .toArray();
      console.log(results)
    if (results.length !== 0) {
      res.status(200).json(results);
    } else {
      res.status(404).json({ message: "No Donation Yet" });
    }
  } catch (e) {
    res.status(500).json({ message: "Something went wrong" });
  } finally {
  }
});

//get a donation by Id
donationRouter.get("/:donationId", async (req, res) => {
  console.log(req.params.donationId);
  try {
    const result = await req.dbClient
      .db("charity")
      .collection("donation")
      .findOne({ _id: ObjectId(req.params.donationId) });

    console.log(result);

    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: "Donation Not Found" });
    }
  } catch (e) {
    res.status(500).json({ message: "Something went wrong" });
  } finally {
  }
});

//post a new donation
donationRouter.post("/", async (req, res) => {
  try {
    const result = await req.dbClient
      .db("charity")
      .collection("donation")
      .insertOne({
        accountId: req.body.accountId,
        date: Date.now(),
        itemName: req.body.itemName,
        information: req.body.information,
        status: req.body.status,
        image:
          req.body.image === undefined
            ? "https://ecowaterqa.vtexassets.com/arquivos/ids/156130-800-auto?width=800&height=auto&aspect=true"
            : req.body.image,
      });

    console.log(`A document was inserted with the _id: ${result.insertedId}`);

    const newDonation = await req.dbClient
      .db("charity")
      .collection("donation")
      .findOne({ _id: ObjectId(result.insertedId) });

    if (newDonation) {
      res.status(200).json(newDonation);
    } else {
      res.status(404).json({ message: "Item Not Found" });
    }
  } catch (e) {
    res.status(500).json({ message: "Something went wrong" });
  } finally {
  }
});

//delete a donation by id
donationRouter.delete("/:itemId", async (req, res) => {
  try {
    const result = await req.dbClient
      .db("charity")
      .collection("donation")
      .deleteOne({ _id: ObjectId(req.params.itemId) });
    if (result) {
      res
        .status(200)
        .json(`${result.modifiedCount} document(s) was/were deleted.`);
    } else {
      res.status(404).json({ message: "Item Not Found" });
    }
  } catch (e) {
    res.status(500).json({ message: "Something went wrong" });
  } finally {
  }
});

//get a donation by Id
donationRouter.get("/:donationId", async (req, res) => {
  console.log(req.params.donationId);
  try {
    const result = await req.dbClient
      .db("charity")
      .collection("donation")
      .findOne({ _id: ObjectId(req.params.donationId) });

    console.log(result);

    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: "Donation Not Found" });
    }
  } catch (e) {
    res.status(500).json({ message: "Something went wrong" });
  } finally {
  }
});

//get all donation belongs to an account
donationRouter.get("/account/:accountId", async (req, res) => {
  try {
    const results = await req.dbClient
      .db("charity")
      .collection("donation")
      .find({ accountId: req.params.accountId })
      .toArray();
    if (results.length !== 0) {
      res.status(200).json(results);
    } else {
      res.status(404).json({ message: "No Donation Yet" });
    }
  } catch (e) {
    res.status(500).json({ message: "Something went wrong" });
  } finally {
  }
});

//update a donation by id
donationRouter.patch("/:itemId", async (req, res) => {
  try {
    const result = await req.dbClient
      .db("charity")
      .collection("donation")
      .updateOne(
        { _id: ObjectId(req.params.itemId) },
        {
          $set: {
            itemName: req.body.itemName,
            information: req.body.information,
            location: req.body.location,
            status: req.body.status,
            date: Date.now(),
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

module.exports = donationRouter;
