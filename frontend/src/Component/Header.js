import React from "react"

function Header(){

    return(
         <div >
           <img src="../images/SLIIT.png" style={{width:"300px", height:"90px", marginLeft:"70px",marginTop:"20px", marginBottom:"20px"}}/>
              <nav class="navbar navbar-expand-lg navbar-dark bg-dark" style={{marginLeft:"60px", marginRight:"60px", borderBottom:"4px solid orange"}}>
                <div class="container-fluid">
                 
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                   <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                     <li class="nav-item">
                       <a class="nav-link active" aria-current="page" href="#">Home</a>
                     </li>
                     <li class="nav-item">
                       <a class="nav-link" href="#">Link</a>
                     </li>
                     <li class="nav-item">
                       <a class="nav-link" href="#">Link</a>
                     </li>
                     <li class="nav-item">
                       <a class="nav-link" href="#">Link</a>
                     </li>
                     <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                        </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><hr class="dropdown-divider"/></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                    </li>
                   
                    </ul>
                   <form class="d-flex">
                       <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                       <button class="btn btn-outline-success" type="submit">Search</button>
                   </form>
             </div>
          </div>
       </nav>
<br/>
<br/>
         </div>
    )
}

export default Header;