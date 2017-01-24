var mongoose = require('mongoose')
  , Schema = mongoose.Schema

var grantSchema = new mongoose.Schema({
        drejtoria: {
            type: String,
            required: true
        },
        lloji: {
            type: String,
            required: true
        },
        prej: {
            type: String,
            required: true
        },
        deri: {
            type: String,
            required: true
        },
        file: {
            fileName: String,
            destination: String
        }
});

mongoose.model('Grant', grantSchema);
