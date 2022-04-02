const express = require('express');
const { findById, findByIdAndUpdate } = require('../Models/AdminNotice');
const Notices = require('../Models/AdminNotice');

const router = express.Router();

//save Notice

router.post('/Notice/save', (req,res) =>{

    let newNotice = new Notices(req.body);

    newNotice.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Notice saved successfully"
        });
    });
});




module.exports = router;