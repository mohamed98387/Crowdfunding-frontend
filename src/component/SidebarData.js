
import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
 
export const SidebarData=[
    {
        title:'Welcome',
        path:'home',
        icon:<AiIcons.AiFillHome />,
        cName:'nav-text'

    },
    {
        title:'In the Spotlight',
        path:'alu',
        icon:<AiIcons.AiFillFire />,
        cName:'nav-text'

    },
    {
        title:'Successful project',
        path:'projetReussis',
        icon:<AiIcons.AiFillCheckSquare />,
        cName:'nav-text'

    },
    {
        title:'Latest funded projects',
        path:'Dpf',
        icon:<AiIcons.AiFillDatabase />,
        cName:'nav-text'

    }
  
  
]
export default SidebarData