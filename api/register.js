const express = require("express");
const User = require("../models/User");

const router = express.Router();

router.post("/register", async (req, res) => {

    const { firstName, lastName, address1, address2, city, state, zipcode, country, email, acceptedTerms, jobType } = req.body;

    const alreadyExistsUser = await User.findOne({ email: email }).catch(
        (err) => {
            console.log("Error: ", err);
        }
    );

  if (alreadyExistsUser) {
    return res.status(409).json({ message: "User with email already exists!" });
  }

  const newUser = new User({ firstName, lastName, address1, address2, city, state, zipcode, country, email, acceptedTerms, jobType });
  const savedUser = await newUser.save().catch((err) => {
    console.log("Error: ", err);
    res.status(500).json({ error: "Cannot register user at the moment!" });
  });

    if (savedUser) {
        //TODO: Return ID from mongodb or anything else from the record
        res.json({ message: "Thanks for registering" });
    }
});

module.exports = router;