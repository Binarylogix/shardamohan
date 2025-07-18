
const express = require('express');
const { submitHealthForm, getAllForms } = require("../controller/healthFormController");

const router = express.Router();

router.post("/submitHealthForm", submitHealthForm);
router.get("/getAllForms", getAllForms);
module.exports = router;
