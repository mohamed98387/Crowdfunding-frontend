import React, { useState, useEffect }  from 'react'
import axios from "axios";
import Sidebar from './Sidebar'
import { AiFillDelete } from "react-icons/ai";
function AdminUsers() {
  const [Users, setUsers] = useState([]);
  const getUsers = () => {
    axios.get("/api/user/all").then((res) => {
      setUsers(res.data)
      console.log(Users)
    });
  };
  useEffect(() => {
    getUsers();
  }, []);
 
  const deleteUser = (id) => {
    axios.delete(`/api/user/admin/${id._id}`).then((res) => {
      if (res.data) {
        console.log(res.data)
        alert("user deleted")
   
      } else {
        alert("failed to delete project");
      }
    });
  };
  const renderTab = Users.map((el, i) => {
    return (
      <tr key={i}>
   
          <td style={{ textAlign: "center" }}> {el.firstname}</td>
          <td style={{ textAlign: "center" }}> {el.lastname}</td>
          <td style={{ textAlign: "center" }}> {el.email}</td>
          <td style={{ textAlign: "center" }}> {el.cin}</td>
          <td style={{ textAlign: "center" }}> {el.country}</td>
          <td style={{ textAlign: "center" }}> {el.phone}</td>
          <td style={{ textAlign: "center" }}>   <AiFillDelete onClick={()=>deleteUser(el)} color='red'
          style={{"cursor":"pointer"}} /></td>
        
     
      </tr>
    );
  });
  return (
    <React.Fragment>
    

   <div style={{"display":"flex"}}>
    <div style={{backgroundColor:"black","width":"220px",height:"660px"}}>
     <Sidebar />
    </div>
    <div style={{width:"900px",marginLeft:"30px"}}>
    <div>
      <table  style={{ width: "1100px",marginTop:"50px"}}>
        <thead style={{ textAlign: "center" }}>
          <tr style={{ textAlign: "center" }}>
            <th style={{"color":"blue"}}>firstname</th>
            <th  style={{"color":"blue"}}>lastname</th>
            <th  style={{"color":"blue"}}>email</th>
            <th  style={{"color":"blue"}}>cin</th>
            <th  style={{"color":"blue"}}>country</th>
            <th  style={{"color":"blue"}}>phone</th>
           
           
    
            <th  style={{"color":"blue"}}>delete</th>
            
            
           
          </tr>
        </thead>
        <tbody style={{marginLeft:"50px"}} >
   
        {renderTab}
      
          </tbody>
      </table>
    </div>
     
    </div>
 

    </div>


 
 </React.Fragment>
  )
}

export default AdminUsers
