const mongoose = require("../config/database");
const userSchema = new mongoose.Schema({
  name: String,
});

module.exports = userSchema;
