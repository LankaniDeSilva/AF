import React, { useState } from 'react'
import axios from "axios";


function AddStudent(){

    const [itNumber, setITNumber] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");

    function sendStudentData(){

        const newStudent = {
            itNumber,
            name,
            email,
            phoneNumber,
            password
        };

        axios.post("http://localhost:8001/Student/add",newStudent).then(()=>{
               alert("Successfully added..")
          }).catch((err)=>{
               alert(err)
          })
    }

    return(

        <div style={{margin:"10%", padding:"50px", backgroundColor:'orange',borderColor:" solid" }}>
            <div className='container'>
                <h1>Registration Form</h1>
                <form onSubmit={sendStudentData}>
                    <div className="form-group">
                        <label for="itnumber">ITNumber</label>
                        <input type="text" className="form-control" id="itnumber" placeholder="Enter ITNumber" onChange={(e)=>{
                            setITNumber(e.target.value);
                        }}/>
                    </div>
                    <div className="form-group">
                        <label for="name">Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Enter Name" onChange={(e)=>{
                            setName(e.target.value);
                        }}/>
                    </div>
                    <div className="form-group">
                        <label for="email">Email address</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter email" onChange={(e)=>{
                            setEmail(e.target.value);
                        }}/>
                    </div>
                    <div className="form-group">
                        <label for="phone">Phone Number</label>
                        <input type="tel" className="form-control" id="phone" placeholder="Enter Phone Number" onChange={(e)=>{
                            setPhoneNumber(e.target.value);
                        }}/>
                    </div>
                    <div className="form-group">
                        <label for="password">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Enter Password" onChange={(e)=>{
                            setPassword(e.target.value);
                        }}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>

    )


}

export default AddStudent;
