import React,{useState,useEffect}from 'react'
import Sidebar from './Sidebar'
import axios from "axios"
import img36 from '../../images/img-36.jpg'
import "./MyProfile.css";
import {connect} from "react-redux"
import {lodedUser,editeUser} from '../../actions/AuthActions'
import {getProject} from "../../actions/ProjectActions"
import { FaEdit } from "react-icons/fa";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {Form} from "react-bootstrap"
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const AdminProfile=props=> {
  useEffect(() => {
    console.log(props)
   props.lodedUser()
   props.getProject()
  }, []);

   const _id=props.auth.user._id;
   
  const [email, setEmail] = useState(props.auth.user.email);
  const [firstname, setFirstName] = useState(props.auth.user.firstname);
  const [lastname, setLastName] = useState(props.auth.user.lastname);
  const [password, setPassword] = useState(props.auth.user.password);
  const [cin, setCin] = useState(props.auth.user.cin);
  const [phone, setPhone] = useState(props.auth.user.phone);
  const [country, setCountry] = useState(props.auth.user.country);
  const [picc, setPic] = useState([]);
  const [file, setFile] = useState(null);
  const pic=picc[1];
const[model,setModel]=useState(false);
const openModel=()=>{
 
  return setModel(true)
 
}
const updateUser={_id,email,firstname,lastname,password,pic,cin,phone,country}
const handleSubmit = (e)=>{
  const formData = new FormData();
  
  e.preventDefault()
 props.editeUser(updateUser);
 console.log(picc[1])
 console.log(props.auth.user.pic)
 if(updateUser.email !== props.auth.user.email || updateUser.firstname !== props.auth.user.firstname
 || updateUser.lastname !== props.auth.user.lastname || updateUser.cin !== props.auth.user.cin 
 || updateUser.phone !== props.auth.user.phone || updateUser.country !== props.auth.user.country
 || updateUser.pic !== props.auth.user.pic   ){
  alert("update success")
 }

}
const upload = (e)=>{
  
 let formDataa = new FormData();
    const config = {
      header: { "content-type": "multipart/form-data" },
    };
    formDataa.append("file", file);
 

    //save the Image we chose inside the node server
    axios.post("/api/user/uploadImage", formDataa, config).then((response) => {
      if (response.data.success) {
        setPic([picc, response.data.path]);
      
      } else {
        alert("failed to save the image in server");
        console.log(response.data)
      }
    }).catch((err)=>{
      console.log('err',err)
    })

}

const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
 
  const onInputChange = (e) =>{
    setFile(e.target.files[0])
  }
  return (
    <React.Fragment>
    

    <div className='container-dashboard'>
    <div style={{backgroundColor:"black","width":"220px","height":"750px"}}>
     <Sidebar />
    </div>
    <div style={{"width":"800px","paddingLeft":"200px"}}  className='content-dashboard'>
    
    <div style={{"alignItems":"center","marginTop":"20px","marginLeft":"130px"}}>
         
         <img style={{"height":"60px","width":"60px"}} src={props.auth.user.pic=== undefined ? img36 : props.auth.user.pic} alt="img1" /> 
         </div>
         <div style={{"paddingTop":"10px","marginLeft":"10px"}}>
 
       {/* <h1 style={{"marginLeft":"5px"}}>{props.auth.user.firstname + ' ' + props.auth.user.lastname}</h1>*/}
       <h4 style={{"marginTop":"10px"}}>firstname</h4>
       <p style={{"marginTop":"10px","backgroundColor":"white","padding":"10px"
     ,"borderRadius":"5px","border":"0.1px solid grey","maxWidth":'50%'}}>
         {props.auth.user.firstname}</p>
         <h4 style={{"marginTop":"10px"}}>lastname</h4>
       <p style={{"marginTop":"10px","backgroundColor":"white","padding":"10px"
     ,"borderRadius":"5px","border":"0.1px solid grey","maxWidth":'50%'}}>
         {props.auth.user.lastname}</p>
         <h4 style={{"marginTop":"10px"}}>email</h4>
       <p style={{"marginTop":"10px","backgroundColor":"white","padding":"10px"
     ,"borderRadius":"5px","border":"0.1px solid grey","maxWidth":'50%'}}>
         {props.auth.user.email}</p>
         <h4 style={{"marginTop":"10px"}}>cin</h4>
       <p style={{"marginTop":"10px","backgroundColor":"white","padding":"10px"
     ,"borderRadius":"5px","border":"0.1px solid grey","maxWidth":'50%',"height":"45px"}}>
         {props.auth.user.cin}</p>
         <h4 style={{"marginTop":"10px"}}>Phone</h4>
       <p style={{"marginTop":"10px","backgroundColor":"white","padding":"10px"
     ,"borderRadius":"5px","border":"0.1px solid grey","maxWidth":'50%',"height":"45px"}}>
         {props.auth.user.phone}</p>
         <h4 style={{"marginTop":"10px"}}>country</h4>
       <p style={{"marginTop":"10px","backgroundColor":"white","padding":"10px"
     ,"borderRadius":"5px","border":"0.1px solid grey","maxWidth":'50%',"height":"45px"}}>
         {props.auth.user.country}</p>
         
 
 
  
 
     
 <FaEdit  onClick={handleOpen} size={25} style={{"color":"blue",'marginLeft':"458px","marginTop":"15px"}} />
 
         </div>
     
    </div>
    </div>

 
    <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box  sx={style}>
    <Form onSubmit={handleSubmit}>
    <h3>firstname</h3>
  <input onChange={(e)=>{setFirstName(e.target.value)}}  name="firstname" value={firstname}></input>
  <h3>lastname</h3>
  <input  onChange={(e)=>{setLastName(e.target.value)}} name="lastname" value={lastname}></input>
  <h3>email</h3>
 
  <input  onChange={(e)=>{setEmail(e.target.value)}} name="email" value={email}></input>
  <h3>cin</h3>
 
 <input  onChange={(e)=>{setCin(e.target.value)}} name="cin" value={cin}></input>
 <h3>phone</h3>
 
 <input  onChange={(e)=>{setPhone(e.target.value)}} name="phone" value={phone}></input>
 <h3>country</h3>
 
 <input  onChange={(e)=>{setCountry(e.target.value)}} name="country" value={country}></input>
  <h3>image</h3>
  <input type="file" 
       name='file'
        onChange={(e)=>setFile(e.target.files[0])} />
       <button
       style={{"backgroundColor":"blue","borderRadius":"5px","marginTop":"5px"}}
        onClick={upload}>upload</button>
          <div  >
            <img
              style={{  width: "200px", height: "150px" ,marginLeft:'40px',marginTop:'10px',borderRadius:'5px'}}
              src={picc[1]=== undefined ? props.auth.user.pic : `http://localhost:5000/${picc[1]}`}
              alt={`image`}
            />
          </div>
        
  <br />
  <button  style={{"backgroundColor":"green","borderRadius":"5px","marginTop":"5px"}}>Valider</button>
  
  </Form>
  </Box>
</Modal>

 
 </React.Fragment>
  )
}
const mapStateToProps = state =>{
  return{
    auth:state.auth,
    save:state.auth.user
 
  }
  }
export default connect(mapStateToProps,{lodedUser,editeUser,getProject})(AdminProfile) 
