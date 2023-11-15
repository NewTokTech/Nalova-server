
const mongoose = require("mongoose");

const sizeSchema = new mongoose.Schema({
    size: {
        type: String,
    },
    delete: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model("size", sizeSchema);