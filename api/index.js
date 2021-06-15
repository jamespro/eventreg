const express = require("express");
const completeApi = require("./complete");
const orderApi = require("./order");
const registerApi = require("./register");
// const paymentApi = require("./payment");

const router = express.Router();

router.use(completeApi);
router.use(orderApi);
router.use(registerApi);
// router.use(paymentApi);

module.exports = router;
