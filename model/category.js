
const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
 
            category: {
                type: String,
            },
            delete: {
                type: Boolean,
                default: false
            }

});

module.exports = mongoose.model("category", categorySchema);

