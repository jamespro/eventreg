const express = require("express");
const Items = require("../models/Items");

const router = express.Router();

router.post("/addItems", async (req, res) => {
    // console.log(req.body);
    //NOTE: JWP: USING req.body.VALUES is the key if you're getting from Formik. It's sending actions as well (currently).
    //TODO: WHERE DO I LOOP THROUGH ALL ITEMS? FRONT-END OR BACK-END?
    //TODO: Maybe addItem is different from addItems?
    //TODO: I should delete all items --TEMP STATUS ITEMS-- when I addItems

    const { uuid, showcode, itemEXPO, itemCONF, itemCONFPREMIUM, itemONEDAYSAT, itemONEDAYSUN, itemBANQ, itemBANQTABLE, itemTOUR1, itemTOUR2, itemTSHIRT } = req.body.values;

//     const alreadyExistsItems = await Items.findOne({ uuid: uuid, showcode: showcode }).catch(
//         (err) => {
//             console.log("Error: ", err);
//         }
//     );

//   if (alreadyExistsItems) {
//     return res.status(409).json({ message: "User already has items!" });
//   }

    const newItems = new Items({
        uuid,
        showcode,
        itemEXPO,
        itemCONF,
        itemCONFPREMIUM,
        itemONEDAYSAT,
        itemONEDAYSUN,
        itemBANQ,
        itemBANQTABLE,
        itemTOUR1,
        itemTOUR2,
        itemTSHIRT
    });
  const savedItems = await newItems.save().catch((err) => {
    console.log("Error: ", err);
    res.status(500).json({ error: "Cannot add items at the moment!" });
  });

    if (savedItems) {
        //TODO: Return ID from mongodb or anything else from the record
        savedUuid = savedItems.uuid;
        savedShowcode = savedItems.showcode;
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