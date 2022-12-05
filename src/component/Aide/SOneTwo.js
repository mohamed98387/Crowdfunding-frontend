import React from 'react'
import img49 from '../../images/img-49.png'
import {Link} from "react-router-dom"
import { AiFillCaretLeft } from "react-icons/ai";
import Modal from '@mui/material/Modal';
import {Form} from "react-bootstrap"
import Box from '@mui/material/Box';
class SOneTwo extends React.Component  {
    constructor(props){
		super(props);
		this.state = {
       open:false
		}
	}
    handleOpen = () => this.setState({open:true});
    handleClose = () =>  this.setState({open:false});
    render(){
        const style = {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 1000,
            height:650,
          
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 0,
          };
   
  return (
    <div style={{"display":"flex"}}>
    <div style={{"width":"700px","backgroundColor":"rgb(230, 233, 233)","height":"587px" }}>
      <img src={img49} style={{"height":"330px","width":"600px","marginTop":"120px"
   ,"marginLeft":"30px"}}></img>
    </div>
    <div style={{"width":"700px","height":"587px"}}>
  <h1 style={{"marginTop":"20px","marginLeft":"50px"}}>Comment contacter Contrast ?</h1>

  <p style={{"marginTop":"20px","marginLeft":"50px","width":"500px"}}>Tout dépend de la raison pour laquelle vous souhaitez nous contacter.
</p>


<p style={{"marginLeft":"50px","width":"500px"}}>
-Si vous
 avez une question concernant la livraison de votre contrepartie ou l'avancement d'un projet auquel vous avez contribué, nous vous invitons à prendre directement contact avec le porteur de projet en suivant ce guide.
</p>
<br/>

<p style={{"marginLeft":"50px","width":"500px"}}
>-Si vous avez un projet à nous soumettre, <a href='/lancer'>nous vous invitons à créer dès maintenant votre page projet.</a>
 Un membre de notre équipe reviendra vers vous dans les meilleurs délais.</p>
 <br/>
 <p style={{"marginLeft":"50px","width":"500px"}}
>-Si vous nous avez déjà partagé un projet, ou si celui-ci est en cours ou terminé, n
ous vous invitons à <b>contacter votre coach dédié par téléphone ou par email pour lui poser vos questions.</b></p>
<br/>
<p  style={{"marginLeft":"50px","width":"500px"}}>
Dans tous les autres cas, vous pouvez contacter notre équipe pour nous poser une question, signaler un problème ou nous proposer des améliorations au moyen du formulaire de contact proposé ci-dessous.
</p>
<div style={{"display":"flex"}}>
<div  style={{"marginLeft":"50px","backgroundColor":"#EA1A47","color":"white"
,"height":"30px","width":"30px","marginTop":"23px","borderRadius":"10px"}}>
   <Link to="/Aide"> 
<AiFillCaretLeft size={15}  style={{"backgroundColor":"#EA1A47","color":"white"
,"marginLeft":"4px","marginTop":"8px"}}/>
  </Link>
</div>
<div>



  <button onClick={this.handleOpen}
   style={{"marginLeft":"10px","width":"170px","height":"36px","marginTop":"20px","cursor":"pointer"
,"color":"white","backgroundColor":"#EA1A47","borderRadius":"10px","border":"black solid 1px"}}>
  Nous Contacter</button>

  <Modal
  open={this.state.open}
  onClose={this.handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box  sx={style}>
    <div style={{"height":"80px","backgroundColor":"black","color":"white"}}>
      <h3 style={{"paddingTop":"10px","paddingLeft":"20px"}}>Contactez-nous</h3> 
    </div>
    <h2 style={{"marginLeft":"30px","marginTop":"20px"}}>On vous écoute !</h2>
  <h5 style={{"marginLeft":"30px","marginTop":"20px","opacity":"0.5"}}>Tapez votre adresse email</h5>
    <input placeholder='bill.bown@gmail.com'
     style={{"width":"600px","marginLeft":"30px","marginTop":"5px","height":"30px"}}>
    </input>
    <h5 style={{"marginLeft":"30px","marginTop":"20px","opacity":"0.5"}}>sujet</h5>
    <input placeholder='soyez clir et concai'
     style={{"width":"600px","marginLeft":"30px","marginTop":"5px","height":"30px"}}>
    </input>
    <h5 style={{"marginLeft":"30px","marginTop":"20px","opacity":"0.5"}}>Description</h5>
    <input placeholder='Expliquez-nous en detaills la raison de votre prise de contact
    Plus nousen sourrons,plus il nous sera facile de vous aider
    '
     style={{"width":"600px","marginLeft":"30px","marginTop":"5px","height":"150px"}}>
    </input>
   
    <button style={{"marginTop":"120px","marginLeft":"750px"}} className='btnaidemodl' >Envoyer</button>

    <Form >
    
  </Form>
  </Box>
</Modal>
  </div>
  </div>
   </div>
   </div>
  )
}
}

export default SOneTwo
