const documentServices = require("../services/documentServices");
const responseFormatter = require("../responses/responses");

module.exports.get_document = (req, res, next) => {
  // console.log("coba");
  res.send({
    message: "Ini get document",
  });
};

// module.exports = documentController;
