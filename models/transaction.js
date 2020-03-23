// use mongoose ORM
const mongoose = require("mongoose")

// activate our schema as an expression of the mongoose ORM
const Schema = mongoose.Schema

const transactionSchema = new Schema({
    name: {
        type: String,
        trim: true,
        require: "Enter a name for the transaction"
    },
    value: {
        type: Number,
        required: "Enter an amount" 
    },date:{
        type: Date,
        default: Date.now 
    }

})

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;