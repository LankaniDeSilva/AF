import logo from './logo.svg';
import './App.css';

import AdminNotice from './Component/AdminNoticeAdd';
import AdminNoticeView from './Component/AdminNoticeView';
import AddStudent from './Component/StudentAdd';

import {BrowserRouter as Router, Route} from "react-router-dom"
import Header from './Component/Header'
import AdminNotice from './Component/AdminNoticeAdd'
import AdminNoticeView from './Component/AdminNoticeView'
import UserNoticeView from './Component/UserNoticeView'
import AdminSubmition from './Component/AdminSubmition'
import Admingetpdf from './Component/AdminUserPDF'
import AdminNoticepdf from './Component/AdminNoticePDF'


function App() {
  return (
    <Router>
    <div>

       <AdminNotice/>
       <AdminNoticeView/> 
       <AddStudent/>

        <Header/>
        <AdminNoticepdf/>
             
       
       

       
   
     

    </div>
    </Router>
  );
}

export default App;
