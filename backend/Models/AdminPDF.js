const mongoose = require('mongoose');

const pdfSchema = new mongoose.Schema({

    groupid:{
        type:String,
        required:true
    },
    select:{
        type:String,
        required:true
    },
    comment:{
        type:String,
        required:true
    },
    files:{
        type:String,
        required:true
    },
    mark:{
        type:String,
        default: 1
    }
  
});

module.exports = mongoose.model('adminpdf', pdfSchema)