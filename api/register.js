const express = require("express");
const User = require("../models/User");

const router = express.Router();

router.post("/register", async (req, res) => {
    // console.log(req.body);
    //NOTE: JWP: USING req.body.VALUES is the key if you're getting from Formik. It's sending actions as well (currently).
    const { showcode, firstName, lastName, address1, address2, city, state, zipcode, country, email, acceptedTerms, jobType } = req.body.values;

    const alreadyExistsUser = await User.findOne({ email: email, showcode: showcode }).catch(
        (err) => {
            console.log("Error: ", err);
        }
    );

  if (alreadyExistsUser) {
    return res.status(409).json({ message: "User with email already exists for that showcode!" });
  }

  const newUser = new User({ showcode, firstName, lastName, address1, address2, city, state, zipcode, country, email, acceptedTerms, jobType });
  const savedUser = await newUser.save().catch((err) => {
    console.log("Error: ", err);
    res.status(500).json({ error: "Cannot register user at the moment!" });
  });

    if (savedUser) {
        //TODO: Return ID from mongodb or anything else from the record
        savedUuid = savedUser.uuid;
        savedShowcode = savedUser.showcode;
        res.json({
            // message: "Thanks for registering",
            // registrantData: {
                uuid: savedUuid,
                showcode: savedShowcode
            // }
        });
    }
});

module.exports = router;