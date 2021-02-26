var express = require("express");
var router = express.Router();
const documentController = require("../controller/documentController");
const reqAuth = require("../middleware/auth");

router.get("/document-service", reqAuth, documentController.get_document);

module.exports = router;
