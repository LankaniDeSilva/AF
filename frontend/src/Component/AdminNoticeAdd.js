import React,{useState} from "react"
import axios from "axios";

const set={
  color: 'blue',
  
}


 function AddNotice(){

          const [topic, settopic] = useState("");
          const [date, setdate] = useState("");
          const [description, setdescription] = useState("");

        function sendData(){
          

          const newNotice = {

            topic,
            date,
            description
          }
         
          axios.post("http://localhost:8001/Notice/save",newNotice).then(()=>{
               alert("Add Notice")
          }).catch((err)=>{
               alert(err)
          })
        }

    return(
       <div>
      
     

        <center>
        <div style={{margin:"10%", padding:"50px", backgroundColor:'orange',borderColor:" solid" }}>
          <table>
              <tr>
                  <td>
                  <center>
                  <h1 style={set}>Add Notice</h1>
                  </center>
         <form onSubmit={sendData}>
   
              <label style={{fontSize:"20px"}}>Enter Topic : </label><br/>
                 <input type="text" id="name"  style={{borderRadius:"15px", width:"400px", height:"40px"}}
                    onChange={(e)=>{
                          settopic(e.target.value);
                }} /><br/>
 
              <label style={{fontSize:"20px"}}>Select date : </label><br/>
                 <input type="date" id="name"  style={{borderRadius:"15px", width:"400px", height:"40px", padding:"10px"}}
                    onChange={(e)=>{
                          setdate(e.target.value);
                }} /><br/>

              <label style={{fontSize:"20px"}}>Enter Notice : </label><br/>
                 <input type="box" id="name"  style={{borderRadius:"15px", width:"400px", height:"40px"}}
                    onChange={(e)=>{
                          setdescription(e.target.value);
                }} /><br/><br/>
              <center>
             <button type="submit" class="btn btn-primary" >Submit</button>
             </center>
         </form>
         </td>
         <td>
             <img src="../image/noticeman.jpg" style={{width:'150px', height:'300px', paddingLeft:"20px"}}/>
         </td>
         </tr>
         </table>
</div>

</center>


</div>
    )
}
export default AddNotice;