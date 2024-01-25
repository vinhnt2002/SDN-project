const mongoose = require("mongoose");
const Schema = mongoose.Schema;
require("mongoose-currency").loadType(mongoose);

const categorySchema = new Schema(
  {
    nameCategory: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
var Category = mongoose.model("Category", categorySchema);
module.exports = Category;