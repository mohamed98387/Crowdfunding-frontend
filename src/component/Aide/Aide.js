import React from 'react'
import './Aide.css'
import { VscSearch } from "react-icons/vsc";
import {Link as LinkRoll} from "react-scroll"
import { BsCardList } from "react-icons/bs";
import {Link} from "react-router-dom"
import Modal from '@mui/material/Modal';
import {Form} from "react-bootstrap"
import Box from '@mui/material/Box';
class Aide extends React.Component  {
  constructor(props){
		super(props);
		this.state = {
       open:false,
       selected:"four"
		}
	}
  selectOne=()=>{
   this.setState({selected:"one"})
  }
  selectTwo=()=>{
    this.setState({selected:"two"})
   }
   selectThree=()=>{
    this.setState({selected:"three"})
   }
   selectFour=()=>{
    this.setState({selected:"four"})
   }
   selectFive=()=>{
    this.setState({selected:"five"})
   }
   selectSix=()=>{
    this.setState({selected:"six"})
   }
   selectSeven=()=>{
    this.setState({selected:"seven"})
   }
   selectEight=()=>{
    this.setState({selected:"eight"})
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
      height:600,
    
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 0,
    };
  return (
    <div className='contaide' >
      
<div className='secOne'>
<h1 style={{color:"white","marginLeft":"550px","paddingTop":"100px"}}>Need help ?</h1>
<form style={{"marginLeft":"400px","marginTop":"10px"}}>
    
    <input className='inputone' type='text' name='' placeholder=' Rechercher dans le rebriques aide de contrast' />
    <input className='inputtwo'  type="submit"  name='' value="Rechercher" />
</form>
</div>
<div className='secTwo'>
<h1 style={{"paddingTop":"50px","paddingLeft":"40px","color":""}}
>Most Viewed Articles</h1>
<div style={{"display":"flex"}}>

<div style={{height:"100%","width":"450px","marginTop":"50px","marginLeft":"50px"}}>

         <div style={{"display":"flex","textDecoration":"none"}}>
       
          <BsCardList size={15} style={{"marginTop":"5px"}} />
          <Link to="/PageOneOne" style={{"textDecoration":"inherit"}}>
          <p style={{"marginLeft":"10px","cursor":"pointer","color":"rgb(51, 51, 51)"}}>How to create a project?</p>
          </Link>
         </div>
       
         <div style={{"display":"flex" ,"marginTop":"20px"}}>
          <BsCardList size={15} style={{"marginTop":"5px"}} />
          <Link to="/PageTwoOne" style={{"textDecoration":"inherit"}}>
          <p style={{"marginLeft":"10px","cursor":"pointer","color":"rgb(51, 51, 51)"}}>Who can use contrast and for which project?</p>
          </Link>
         </div>

      
</div>





<div style={{height:"100%","width":"550px","marginTop":"50px"}}>


         <div style={{"display":"flex" }}>
          <BsCardList size={15} style={{"marginTop":"5px"}} />
          <Link to="/PageThreeOne" style={{"textDecoration":"inherit"}}>
          <p style={{"marginLeft":"10px","cursor":"pointer","color":"rgb(51, 51, 51)"}}>How to contribute to a project on contrast?</p>
          </Link>
         </div>

         <div style={{"display":"flex","marginTop":"20px"}}>
          <BsCardList size={15} style={{"marginTop":"5px"}} />
          <Link to="/PageFourOne" style={{"textDecoration":"inherit"}}>
          <p style={{"marginLeft":"10px","cursor":"pointer","color":"rgb(51, 51, 51)"}}>
          Obtain an invoice or a tax receipt following my contribution?</p>
          </Link>
         </div>
  
</div>



</div>
</div>

<div className='secThree'>
<LinkRoll to="secfour" smooth={true} durationn={1000} >
<div onClick={this.selectOne}
 className='cardaide'><h2  style={{paddingTop:"60px","marginLeft":"50px"}}>The fundamentals</h2></div>
</LinkRoll>
<LinkRoll to="secfour" smooth={true} durationn={1000} >
<div onClick={this.selectTwo}
 className='cardaide'><h2 style={{paddingTop:"60px","marginLeft":"50px"}}>For contributors</h2></div>
</LinkRoll>
<LinkRoll to="secfour" smooth={true} durationn={1000} >
<div onClick={this.selectThree}
 className='cardaide'><h2 style={{paddingTop:"60px","marginLeft":"50px"}}>For project leaders</h2></div>
</LinkRoll>
<LinkRoll to="secfour" smooth={true} durationn={1000} >
<div onClick={this.selectFour}
 className='cardaide'><h2 style={{paddingTop:"60px","marginLeft":"50px"}}>My contrast account</h2></div>
</LinkRoll>
<LinkRoll to="secfour" smooth={true} durationn={1000} >
<div  onClick={this.selectFive}
className='cardaide'><h2 style={{paddingTop:"60px","marginLeft":"50px"}}>For mentors</h2></div>
</LinkRoll>
<LinkRoll to="secfour" smooth={true} durationn={1000} >
<div  onClick={this.selectEight}
className='cardaide'><h2 style={{paddingTop:"60px","marginLeft":"50px"}}>contact form template</h2></div>
</LinkRoll>

<LinkRoll to="btnaide" smooth={true} durationn={1000} >
<div  onClick={this.selectSeven}
className='cardaide'><h2 style={{paddingTop:"60px","marginLeft":"50px"}}>contact U.S</h2></div>
</LinkRoll>


</div>

<div  className='secfour' style={{"paddingTop":"90px","marginLeft":"170px"}}  >

{ this.state.selected === "one" ?
 <div>
<h1>The fundamentals</h1>
<div style={{"display":"flex"}}>
<div style={{"display":"flex","textDecoration":"none","marginTop":"20px"}}>
       
       <BsCardList size={25} style={{"marginTop":"3px"}} />
       <Link to="/SOneOne" style={{"textDecoration":"inherit"}}>
       <h3 style={{"marginLeft":"10px","cursor":"pointer","color":"rgb(51, 51, 51)"}}>
       Contrast, what is it?
        </h3>
       </Link>
      </div>
    
      <div style={{"display":"flex" ,"marginTop":"20px","marginLeft":"200px"}}>
       <BsCardList size={25} style={{"marginTop":"3px"}} />
       <Link to="/SOneTwo" style={{"textDecoration":"inherit"}}>
       <h3 style={{"marginLeft":"10px","cursor":"pointer","color":"rgb(51, 51, 51)"}}>
       How do I contact Contrast?</h3>
       </Link>
      </div>
      </div>

      <div style={{"display":"flex"}}>
<div style={{"display":"flex","textDecoration":"none","marginTop":"20px"}}>
       
       <BsCardList size={25} style={{"marginTop":"3px"}} />
       <Link to="/SOneThree" style={{"textDecoration":"inherit"}}>
       <h3 style={{"marginLeft":"10px","cursor":"pointer","color":"rgb(51, 51, 51)"}}>
       What is a quid pro quo?
        </h3>
       </Link>
      </div>
    
      <div style={{"display":"flex" ,"marginTop":"20px","marginLeft":"170px"}}>
       <BsCardList size={25} style={{"marginTop":"3px"}} />
       <Link to="/SOneFour" style={{"textDecoration":"inherit"}}>
       <h3 style={{"marginLeft":"10px","cursor":"pointer","color":"rgb(51, 51, 51)"}}>
       Do I keep the intellectual property of my project?</h3>
       </Link>
      </div>
      </div>
 </div> 
 :
 this.state.selected === "two" ? 
 <div>
<h1>Contribute to a project</h1>
<div style={{"display":"flex"}}>
<div style={{"width":"550px"}} >
<div style={{"display":"flex","textDecoration":"none","marginTop":"20px"}}>
       
       <BsCardList size={25} style={{"marginTop":"3px"}} />
       <Link to="/PageThreeOne" style={{"textDecoration":"inherit"}}>
       <h3 style={{"marginLeft":"10px","cursor":"pointer","color":"rgb(51, 51, 51)"}}>
       How to contribute to a project on contrast?
        </h3>
       </Link>
      </div>
    
      <div style={{"display":"flex" ,"marginTop":"20px"}}>
       <BsCardList size={25} style={{"marginTop":"3px"}} />
       <Link to="/STwoTwo" style={{"textDecoration":"inherit"}}>
       <h3 style={{"marginLeft":"10px","cursor":"pointer","color":"rgb(51, 51, 51)"}}>
       Can I contribute anonymously?</h3>
       </Link>
      </div>
 
     
      <div style={{"display":"flex","textDecoration":"none","marginTop":"20px"}}>
       
       <BsCardList size={35} style={{"marginTop":"3px"}} />
       <Link to="/STwoFour" style={{"textDecoration":"inherit"}}>
       <h3 style={{"marginLeft":"10px","cursor":"pointer","color":"rgb(51, 51, 51)"}}>
       What happens if a project I've contributed to doesn't reach its goal?
        </h3>
       </Link>
      </div>
      <div style={{"display":"flex","textDecoration":"none","marginTop":"20px"}}>
       
       <BsCardList size={25} style={{"marginTop":"3px"}} />
       <Link to="/STwoSix" style={{"textDecoration":"inherit"}}>
       <h3 style={{"marginLeft":"10px","cursor":"pointer","color":"rgb(51, 51, 51)"}}>
       What are the payment options available ?
        </h3>
       </Link>
      </div>
 </div>



<div >

      <div style={{"display":"flex" ,"marginTop":"20px"}}>
       <BsCardList size={25} style={{"marginTop":"3px"}} />
       <Link to="/STwoOne" style={{"textDecoration":"inherit"}}>
       <h3 style={{"marginLeft":"10px","cursor":"pointer","color":"rgb(51, 51, 51)"}}>
       How to follow the progress of a project?</h3>
       </Link>
      </div>
    
    
<div style={{"display":"flex","textDecoration":"none","marginTop":"20px"}}>
       
       <BsCardList size={25} style={{"marginTop":"3px"}} />
       <Link to="/STwoThree" style={{"textDecoration":"inherit"}}>
       <h3 style={{"marginLeft":"10px","cursor":"pointer","color":"rgb(51, 51, 51)"}}>
       What is Mangopay?
        </h3>
       </Link>
      </div>
    
      <div style={{"display":"flex" ,"marginTop":"20px"}}>
       <BsCardList size={25} style={{"marginTop":"3px"}} />
       <Link to="/STwoFive" style={{"textDecoration":"inherit"}}>
       <h3 style={{"marginLeft":"10px","cursor":"pointer","color":"rgb(51, 51, 51)"}}>
       How do I pay my contribution?</h3>
       </Link>
      </div>
      </div>
      </div>

 
 </div>


:
 this.state.selected === "three" ? 
 <div>
<h1>Pour les porteurs de projets</h1>
<div style={{"display":"flex"}}>
<div style={{"width":"550px"}} >
<div style={{"display":"flex","textDecoration":"none","marginTop":"20px"}}>
       
       <BsCardList size={25} style={{"marginTop":"3px"}} />
       <Link to="/PageOneOne" style={{"textDecoration":"inherit"}}>
       <h3 style={{"marginLeft":"10px","cursor":"pointer","color":"rgb(51, 51, 51)"}}>
       How to create a project?
        </h3>
       </Link>
      </div>
    
      <div style={{"display":"flex" ,"marginTop":"20px"}}>
       <BsCardList size={25} style={{"marginTop":"3px"}} />
       <Link to="/SThreeOne" style={{"textDecoration":"inherit"}}>
       <h3 style={{"marginLeft":"10px","cursor":"pointer","color":"rgb(51, 51, 51)"}}>
       Fonctionnalités marketing</h3>
       </Link>
      </div>
 
     
      <div style={{"display":"flex","textDecoration":"none","marginTop":"20px"}}>
       
       <BsCardList size={35} style={{"marginTop":"3px"}} />
       <Link to="/SThreeTwo" style={{"textDecoration":"inherit"}}>
       <h3 style={{"marginLeft":"10px","cursor":"pointer","color":"rgb(51, 51, 51)"}}>
       Partager un aperçu de mon projet à mes proches avant son lancement ?
        </h3>
       </Link>
      </div>
  
 </div>



<div >

      <div style={{"display":"flex" ,"marginTop":"20px"}}>
       <BsCardList size={25} style={{"marginTop":"3px"}} />
       <Link to="/SThreeThree" style={{"textDecoration":"inherit"}}>
       <h3 style={{"marginLeft":"10px","cursor":"pointer","color":"rgb(51, 51, 51)"}}>
       Comment compléter mon brouillon et partager mon projet ?</h3>
       </Link>
      </div>
    
    
<div style={{"display":"flex","textDecoration":"none","marginTop":"20px"}}>
       
       <BsCardList size={25} style={{"marginTop":"3px"}} />
       <Link to="/SThreeFour" style={{"textDecoration":"inherit"}}>
       <h3 style={{"marginLeft":"10px","cursor":"pointer","color":"rgb(51, 51, 51)"}}>
       Quels sont les objectifs maximum et minimum d'un projet ?
        </h3>
       </Link>
      </div>
    
      <div style={{"display":"flex" ,"marginTop":"20px"}}>
       <BsCardList size={25} style={{"marginTop":"3px"}} />
       <Link to="/SThreeFive" style={{"textDecoration":"inherit"}}>
       <h3 style={{"marginLeft":"10px","cursor":"pointer","color":"rgb(51, 51, 51)"}}>
       Est-il possible de collecter plus que l'objectif de mon projet ?</h3>
       </Link>
      </div>
      </div>
      </div>
      <div>
<h1 style={{"marginTop":"20px"}}>Compléter la description de mon projet
</h1>
<div style={{"display":"flex"}}>
<div style={{"width":"550px"}} >
<div style={{"display":"flex","textDecoration":"none","marginTop":"10px"}}>
       
       <BsCardList size={25} style={{"marginTop":"3px"}} />
       <Link to="/SFourOne" style={{"textDecoration":"inherit"}}>
       <h3 style={{"marginLeft":"10px","cursor":"pointer","color":"rgb(51, 51, 51)"}}>
       L'image de couverture
        </h3>
       </Link>
      </div>
    
      <div style={{"display":"flex" ,"marginTop":"20px"}}>
       <BsCardList size={25} style={{"marginTop":"3px"}} />
       <Link to="/SFourTwo" style={{"textDecoration":"inherit"}}>
       <h3 style={{"marginLeft":"10px","cursor":"pointer","color":"rgb(51, 51, 51)"}}>
       La vidéo de présentation</h3>
       </Link>
      </div>
 
     
    
     
 </div>



<div >

      <div style={{"display":"flex" ,"marginTop":"20px"}}>
       <BsCardList size={25} style={{"marginTop":"3px"}} />
       <Link to="/SFourThree" style={{"textDecoration":"inherit"}}>
       <h3 style={{"marginLeft":"10px","cursor":"pointer","color":"rgb(51, 51, 51)"}}>
       Comment compléter Reward de mon projet ?</h3>
       </Link>
      </div>
    
    
<div style={{"display":"flex","textDecoration":"none","marginTop":"20px"}}>
       
       <BsCardList size={25} style={{"marginTop":"3px"}} />
       <Link to="/SFourFour" style={{"textDecoration":"inherit"}}>
       <h3 style={{"marginLeft":"10px","cursor":"pointer","color":"rgb(51, 51, 51)"}}>
       Comment ajouter des collaborateur?
        </h3>
       </Link>
      </div>
    
   
      </div>
      </div>

 
 </div>
 
 </div>



 :
 this.state.selected === "five" ? 
 <div>
  <h1 style={{"marginTop":"20px"}}>Pour les mentors

</h1>
<div style={{"display":"flex"}}>
<div style={{"width":"550px" ,"marginTop":"10px"}} >
<div style={{"display":"flex","textDecoration":"none","marginTop":"10px"}}>
       
       <BsCardList size={25} style={{"marginTop":"3px"}} />
       <Link to="/PageOneOne" style={{"textDecoration":"inherit"}}>
       <h3 style={{"marginLeft":"10px","cursor":"pointer","color":"rgb(51, 51, 51)"}}>
       Qu'est-ce qu'un "Mentor" sur contrast ?
        </h3>
       </Link>
      </div>
    
      <div style={{"display":"flex" ,"marginTop":"20px"}}>
       <BsCardList size={25} style={{"marginTop":"3px"}} />
       <Link to="/STwoTwo" style={{"textDecoration":"inherit"}}>
       <h3 style={{"marginLeft":"10px","cursor":"pointer","color":"rgb(51, 51, 51)"}}>
       Comment devenir mentor ?</h3>
       </Link>
      </div>
  
   
    
     
 </div>



<div >

      <div style={{"display":"flex" ,"marginTop":"20px"}}>
       <BsCardList size={25} style={{"marginTop":"3px"}} />
       <Link to="/STwoOne" style={{"textDecoration":"inherit"}}>
       <h3 style={{"marginLeft":"10px","cursor":"pointer","color":"rgb(51, 51, 51)"}}>
       Comment mentorer un projet ?</h3>
       </Link>
      </div>
    
    

          

   
      </div>
      </div>
 </div> :
 this.state.selected === "four" ? 

 <div>
  <h1 style={{"marginTop":"20px"}}>Mon compte Contrast
</h1>
<div style={{"display":"flex"}}>
<div style={{"width":"550px" ,"marginTop":"10px"}} >
<div style={{"display":"flex","textDecoration":"none","marginTop":"10px"}}>
       
       <BsCardList size={25} style={{"marginTop":"3px"}} />
       <Link to="/PageOneOne" style={{"textDecoration":"inherit"}}>
       <h3 style={{"marginLeft":"10px","cursor":"pointer","color":"rgb(51, 51, 51)"}}>
       Comment retrouver mes projets ?
        </h3>
       </Link>
      </div>
    
      <div style={{"display":"flex" ,"marginTop":"20px"}}>
       <BsCardList size={25} style={{"marginTop":"3px"}} />
       <Link to="/STwoTwo" style={{"textDecoration":"inherit"}}>
       <h3 style={{"marginLeft":"10px","cursor":"pointer","color":"rgb(51, 51, 51)"}}>
       Je ne parviens pas à modifier mon mot de passe</h3>
       </Link>
      </div>
  
      <div style={{"display":"flex" ,"marginTop":"20px"}}>
       <BsCardList size={25} style={{"marginTop":"3px"}} />
       <Link to="/STwoTwo" style={{"textDecoration":"inherit"}}>
       <h3 style={{"marginLeft":"10px","cursor":"pointer","color":"rgb(51, 51, 51)"}}>
       Comment retirer un projet ?</h3>
       </Link>
      </div>
     
    
     
 </div>



<div >

      <div style={{"display":"flex" ,"marginTop":"20px"}}>
       <BsCardList size={25} style={{"marginTop":"3px"}} />
       <Link to="/STwoOne" style={{"textDecoration":"inherit"}}>
       <h3 style={{"marginLeft":"10px","cursor":"pointer","color":"rgb(51, 51, 51)"}}>
       Comment créer un compte contrast ?</h3>
       </Link>
      </div>
    
    
<div style={{"display":"flex","textDecoration":"none","marginTop":"20px"}}>
       
       <BsCardList size={25} style={{"marginTop":"3px"}} />
       <Link to="/STwoThree" style={{"textDecoration":"inherit"}}>
       <h3 style={{"marginLeft":"10px","cursor":"pointer","color":"rgb(51, 51, 51)"}}>
       Comment modifier mon profil contrast ?
        </h3>
       </Link>
      </div>
          
<div style={{"display":"flex","textDecoration":"none","marginTop":"20px"}}>
       
       <BsCardList size={25} style={{"marginTop":"3px"}} />
       <Link to="/STwoThree" style={{"textDecoration":"inherit"}}>
       <h3 style={{"marginLeft":"10px","cursor":"pointer","color":"rgb(51, 51, 51)"}}>
       Comment me désinscrire de la newsletter ?
        </h3>
       </Link>
      </div>
  
   
      </div>
      </div>
 </div>
 
 :


 <div>eight</div> 
}






</div>

<div className='secfive' style={{"marginTop":"50px"}}>
<h1 style={{'marginLeft':"330px"}}>Can not find what you are looking for ?</h1>

<button onClick={this.handleOpen} className='btnaide' >contact us</button>
<Modal
  open={this.state.open}
  onClose={this.handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box  sx={style}>
    <div style={{"height":"80px","backgroundColor":"black","color":"white"}}>
      <h3 style={{"paddingTop":"10px","paddingLeft":"20px"}}>contact us</h3> 
    </div>
    <h2 style={{"marginLeft":"30px","marginTop":"20px"}}>Type your question below</h2>
    <p style={{"marginLeft":"30px","marginTop":"20px"}}>We will find the best answer for you.</p>
    <input placeholder='Ex. creer des etpes  choix multiple'
     style={{"width":"900px","marginLeft":"30px","marginTop":"20px","height":"200px"}}>
    </input>
    <button  className='btnaidemodl' >ask a question</button>

    <Form >
    
  </Form>
  </Box>
</Modal>

<h5 style={{"opacity":"0.5","paddingTop":"150px","marginLeft":"580px"}}>© 2022 contrast & Co</h5>
</div>



    </div>
  )
  }
}

export default Aide
