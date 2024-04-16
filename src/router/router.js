const abhiController = require("../controller/testController")

const express = require("express");

const router = express.Router();

router.get("/abhi", abhiController)

module.exports= router