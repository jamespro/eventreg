const express = require("express");
const orderApi = require("./order");
// const registerApi = require("./register");
// const paymentApi = require("./payment");

const router = express.Router();

router.use(orderApi);
// router.use(registerApi);
// router.use(paymentApi);

module.exports = router;
