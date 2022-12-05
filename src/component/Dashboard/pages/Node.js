import React from 'react'
import Sidebar from '../Sidebar'

const Node = () => {
  return (
    <React.Fragment>
    
    <section>
    <div className='container-dashboard'>
       <div className='sidebar-dashboard'>
        <Sidebar />
       </div>
       <div className='content-dashboard'>
        
      this is node
        
       </div>
     
    </div>
    </section>
    
    </React.Fragment>
  )
}

export default Node