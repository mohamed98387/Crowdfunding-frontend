import React from 'react'
import {SidebarData}  from "../data/SidebarData"
import { NavLink } from "react-router-dom";
import "./Sidebar.css"
const Sidebar = () => {
    /*const activeLink = 'hover:bg-red-500 mt-7 pl-7 w-full h-14 flex justify-start items-center text-white text-2xl space-x-1 font-bold bg-red-500'
    const normalLink = 'hover:bg-red-500 pl-7 mt-7 w-full h-14 flex justify-start items-center text-white text-2xl space-x-1 font-bold'*/
    const activeLink ="activeLink"
    const normalLink = "normalLink"
    return (
    <React.Fragment>
    <section>
    <div>
      {
               SidebarData.map((item, index)=>{
                return(
                    <div key={index}>
                        <NavLink to={item.path}
                        className="activeLink"
                      
                         >
                        <span>{item.icon}</span>
                        <span >{item.title}</span>
                        </NavLink>
                        
                    </div>
                )
              })
          }
    </div>
    </section>
  </React.Fragment>
  )
}

export default Sidebar
