const express = require("express");
const User = require("../models/Order");

const router = express.Router();
//TODO: I don't love the naming... Is it "Order" or "complete"... because this is a temporary situation of submitting everything for the entire order, once at the end. Order should just have order information eventually, e.g. should not include all the user information, just a reference to the user record. So rename this file "complete"?
//TODO: change everything below to have all the fields that are submitted at the end of the last step. Check the JSON output so that it matches.
//TODO: update the model so it matches the fields that are output in JSON at the end of the order.
router.post("/complete", async (req, res) => {
  const { fullName, email, password } = req.body;

  const alreadyExistsUser = await User.findOne({ where: { email } }).catch(
    (err) => {
      console.log("Error: ", err);
    }
  );

  if (alreadyExistsUser) {
    return res.status(409).json({ message: "User with email already exists!" });
  }

  const newUser = new User({ fullName, email, password });
  const savedUser = await newUser.save().catch((err) => {
    console.log("Error: ", err);
    res.status(500).json({ error: "Cannot register user at the moment!" });
  });

  if (savedUser) res.json({ message: "Thanks for registering" });
});

module.exports = router;