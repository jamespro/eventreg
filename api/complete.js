const express = require("express");
const Complete = require("../models/Complete");

const router = express.Router();
//TODO: I don't love the naming... Is it "Order" or "complete"... because this is a temporary situation of submitting everything for the entire order, once at the end. Order should just have order information eventually, e.g. should not include all the user information, just a reference to the user record. So rename this file "complete"?
//TODO: change everything below to have all the fields that are submitted at the end of the last step. Check the JSON output so that it matches.
//TODO: update the model so it matches the fields that are output in JSON at the end of the order.
//TODO: maybe this route should be named createOrder or createComplete
router.post("/complete", async (req, res) => {
//TODO: Can I just use the spread/rest operator here instead of listing every field?
const { firstName, lastName, address1, address2, city, state, zipcode, country, useAddressForPaymentDetails, nameOnCard, cardNumber, expirationDate, cvv } = req.body;

//   const alreadyExistsUser = await User.findOne({ where: { email } }).catch(
    //     (err) => {
        //       console.log("Error: ", err);
        //     }
        //   );
        
        //   if (alreadyExistsUser) {
            //     return res.status(409).json({ message: "User with email already exists!" });
            //   }
            
//TODO: Can I just use the spread/rest operator here instead of listing every field?
  const newComplete = new Complete({ firstName, lastName, address1, address2, city, state, zipcode, country, useAddressForPaymentDetails, nameOnCard, cardNumber, expirationDate, cvv });
//TODO: I'm not using axios, so I think I need to modify savedComplete to save the record to the mongodb database instead of this syntax; instead of save(). Check controllers. -- switch save() to create()
    const savedComplete = await newComplete.create().catch((err) => {
    console.log("Error: ", err);
    res.status(500).json({ error: "Cannot create complete order at the moment!" });
  });

    if (savedComplete){
        res.json({ message: "Your order has been submitted" });
    }
});

module.exports = router;