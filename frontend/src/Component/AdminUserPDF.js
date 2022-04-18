import { Component} from "react";

import axios from "axios";



 export default class Getnotice extends Component{

     constructor(props){
         super(props);

         this.state={
            pdfs:[]
         };
     }

    componentDidMount(){
        this.retrivePosts();
    }

     retrivePosts(){
         axios.get("http://localhost:8001/getpdf").then(res =>{
             if(res.data.success){
                 this.setState({
                    pdfs:res.data.existingPosts
                 });
                 console.log(this.state.pdfs)
             }
         })
     }

   filterData(pdfs,searchKey){

        const result=pdfs.filter((pdf) =>
            pdf.select.includes(searchKey)||
            pdf.groupid.includes(searchKey)
            
          
        )
        this.setState({pdfs:result})
    }

    handleSearchArea = (e) =>{

        const searchKey = e.currentTarget.value;

         axios.get("http://localhost:8001/getpdf").then(res =>{
             if(res.data.success){
                this.filterData(res.data.existingPosts,searchKey) 
             }
         });
     }

     onDelete = (id) =>{

        axios.delete(`http://localhost:8001/pdf/delete/${id}`).then((res) =>{ 
        alert("Delete Successfully");
        this.retrivePosts();
    });
     }

  
   
 
 render(){
      return(
         
        <div className="container">
        <center>
        <h1>All Document Submition</h1>
        </center>
        <div className="search" style={{width:"300px"}}>
               <lable>Search :</lable>
               <input type="search" 
                  class="form-control" 
                  name="searchQuary"
                  onChange={this.handleSearchArea}
               />
         </div>
      <br/>
      <table className="table" style={{background:"#f3d8f3"}}>
          <thead>
              <tr>
                  <th scope="col">#</th>
                  <th scope="col">GROUP ID</th>
                  <th scope="col">Document Type</th>
                  <th scope="col">Comment</th>
                  <th scope="col">Document</th>
                 
              </tr>
          </thead>
          <tbody>
              {this.state.pdfs.map((pdfs,index) =>(
                  <tr>
                      <th scope="row">{index+1}</th>
                      
                      <td>{pdfs.groupid}</td>
                      <td>{pdfs.select}</td>
                      <td>{pdfs.comment}</td>
                      <td>{pdfs.files}</td>
                      <td>{pdfs.mark}</td>

                      
                     
                      <td>
                          
                          &nbsp;
                          <a   onClick={() =>this.onDelete(pdfs._id)}>
                          <button type="submit" class="btn btn-danger" >Delete  <i className="fas fa-trash-alt"></i></button>
                          </a>
                      </td>
                  </tr>
              ))}
          </tbody>
      </table>
   </div> 
      )
 }
}
 
