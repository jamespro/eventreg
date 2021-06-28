const express = require("express");
const Item = require("../models/Item");

const router = express.Router();

router.post("/addItem", async (req, res) => {
    // console.log(req.body);
    //NOTE: JWP: USING req.body.VALUES is the key if you're getting from Formik. It's sending actions as well (currently).
    //TODO: WHERE DO I LOOP THROUGH ALL ITEMS? FRONT-END OR BACK-END?
    //TODO: Maybe addItem is different from addItems?
    //TODO: I should delete all items --TEMP STATUS ITEMS-- when I addItems

    const { uuid, showcode, itemcode, itempricekey, price } = req.body.values;

    const alreadyExistsItem = await Item.findOne({ uuid: uuid, showcode: showcode, itemcode: itemcode }).catch(
        (err) => {
            console.log("Error: ", err);
        }
    );

  if (alreadyExistsItem) {
    return res.status(409).json({ message: "User already has that item!" });
  }

  const newItem = new Item({ uuid, showcode, itemcode, itempricekey, price });
  const savedItem = await newItem.save().catch((err) => {
    console.log("Error: ", err);
    res.status(500).json({ error: "Cannot add items at the moment!" });
  });

    if (savedItem) {
        //TODO: Return ID from mongodb or anything else from the record
        savedUuid = savedItem.uuid;
        savedShowcode = savedItem.showcode;
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