const express = require("express");
const Student =  require("../Models/Student");

const srouter = express.Router();

//save Student
srouter.post("/Student/add", (req, res) => {
    let newStudent = new Student(req.body);

    newStudent.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Student saved successfully"
        });
    });

});

module.exports = srouter;