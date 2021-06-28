const express = require("express");
const completeApi = require("./complete");
const orderApi = require("./order");
const registerApi = require("./register");
const itemApi = require("./item");
const itemsApi = require("./items");
const usersApi = require("./users");
// const paymentApi = require("./payment");

const router = express.Router();

router.use(completeApi);
router.use(orderApi);
router.use(registerApi);
router.use(itemApi);
router.use(itemsApi);
router.use(usersApi);
// router.use(paymentApi);

module.exports = router;
