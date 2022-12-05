import React from 'react'
import Sidebar from './Sidebar'
import NavPage from './NavPage'
import "./Dashboard.css"
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import {BrowserRouter } from 'react-router-dom';
function Dashboard() {
  return (
  /*sidebar section */
  <React.Fragment>
    
    <section>
    <div className='container-dashboard'>
       <div className='sidebar-dashboard'>
        <Sidebar />
       </div>
       <div className='content-dashboard'>
        
        <NavPage />
        
       </div>
     
    </div>
    </section>
    
    </React.Fragment>
  )
}

export default Dashboard
