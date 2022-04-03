import { Component } from "react";
import axios from "axios";



 export default class Getnotice extends Component{
     constructor(props){
         super(props);

         this.state={
             notices:[]
         };
     }

    componentDidMount(){
        this.retrivePosts();
    }

     retrivePosts(){
         axios.get("http://localhost:8001/notice").then(res =>{
             if(res.data.success){
                 this.setState({
                     notices:res.data.existingPosts
                 });
                 console.log(this.state.notices)
             }
         })
     }

   filterData(notices,searchKey){

        const result= notices.filter((notice) =>
            notice.name.toLowerCase().includes(searchKey)//||
          //  notice.price.includes(searchKey)||
           // notice.quentity.includes(searchKey)
        )
        this.setState({notices:result})
    }

    handleSearchArea = (e) =>{

        const searchKey = e.currentTarget.value;

         axios.get("http://localhost:8001/notice").then(res =>{
             if(res.data.success){
                this.filterData(res.data.existingPosts,searchKey) 
             }
         });
     }
 

    onDelete = (id) =>{

        axios.delete(`http://localhost:8001/notice/delete/${id}`).then((res) =>{ 
        alert("Delete Successfully");
        this.retrivePosts();
    });
    }

 render(){
      return(
         
          <div className="container">
               <h1>All Details</h1>
               <div className="search">
                      <lable>Search :</lable>
                      <input type="search" 
                         class="form-control" 
                         name="searchQuary"
                         onChange={this.handleSearchArea}
                      />
                </div>
             <br/>
             <table className="table">
                 <thead>
                     <tr>
                         <th scope="col">#</th>
                         <th scope="col">Topic</th>
                         <th scope="col">Date</th>
                         <th scope="col">Description</th>
                        
                     </tr>
                 </thead>
                 <tbody>
                     {this.state.notices.map((notices,index) =>(
                         <tr>
                             <th scope="row">{index+1}</th>
                             
                             <td>
                                 <a href={`/Notice/${notices._id}`} style={{textDecoration:'none'}}>
                                 {notices.topic}
                                 </a>
                                 </td>
                             <td>{notices.date}</td>
                             <td>{notices.description}</td>
                            
                             <td>
                                 
                                 &nbsp;
                                 <a className="btn btn-danger"  onClick={() =>this.onDelete(notices._id)}>
                                     <i className="fas fa-trash-alt"></i>&nbsp;Delete
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
