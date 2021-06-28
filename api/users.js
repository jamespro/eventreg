const express = require("express");
const User = require("../models/User");

const router = express.Router();
//  * GET_LIST     => GET http://my.api.url/posts?sort=['title','ASC']&range=[0, 24]
//  * GET_ONE      => GET http://my.api.url/posts/123
//  * GET_MANY     => GET http://my.api.url/posts?filter={ids:[123,456,789]}
//  * UPDATE       => PUT http://my.api.url/posts/123
//  * CREATE       => POST http://my.api.url/posts
//  * DELETE       => DELETE http://my.api.url/posts/123

//GET_LIST
//GET_MANY
// I think I need to put these in the same section because the difference is 
router.get("/users", async (req, res) => {
    if (req.query.sort) {
        //TODO: deconstruct the sort and range
        let { sortbyType, sortbyOrder } = req.query.sort;
        let { rangeStart, rangeEnd } = req.query.range; //range: array
    }
    if (req.query.filter) {
        let { filterIds } = req.query.filter; //range: array
    }
    //TODO: Figure out how to insert the parameters
    const users = await User.find({}).catch(
        (err) => {
            console.log("Error: ", err);
        }
    );
    res.json({users});
});

//GET_ONE
router.get("/users/:userId", async (req, res) => {
    let userId = req.params.userId.toLowerCase() //this is going to be a Mongo _id

    const foundUser = await User.findOne({ _id: userId }).catch(
        (err) => {
            console.log("Error: ", err);
        }
    );

  if (!foundUser) {
    return res.status(409).json({ message: "Could not find user" });
  }

    if (foundUser) {
        //TODO: NEED TO RETURN ALL THE USER INFO IN JSON
        //TODO: CAN WE JUST SET IT TO SEND WHATEVER IT FINDS? NOT LIST EVERYTHING
        //WILL THIS WORK?
        res.json({foundUser});
    }
});

//CREATE
router.post("/users", async (req, res) => {
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