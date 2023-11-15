const mongoose = require("mongoose");

const colorSchema = new mongoose.Schema({
    color: [
        {
            stock : {
                type: Number,
            },
            color: {
                type: String,
            },
        },
    ],
});

module.exports = mongoose.model("color", colorSchema);