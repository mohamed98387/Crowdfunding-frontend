
import './App.css';
import { useState } from "react";
import Navbar from './component/Navbar';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import FirstSection from './component/firstSection/firstSection';
import Signin from './component/Signin/Signin';
import Decouvrir from './component/Decouvrir/Decouvrir';
import Aide from './component/Aide/Aide';
import PageFourOne from './component/Aide/PageFourOne';
import PageTwoThree from './component/Aide/PageTwoThree';
import PageThreeOne from './component/Aide/PageThreeOne';
import PageTwoTwo from './component/Aide/PageTwoTwo';
import PageTwoOne from './component/Aide/PageTwoOne';
import PageOneOne from './component/Aide/PageOneOne';
import PageOneTwo from './component/Aide/PageOneTwo';
import PageOneThree from './component/Aide/PageOneThree';
import STwoOne from './component/Aide/STwoOne';
import STwoOneTwo from './component/Aide/STwoOneTwo';
import STwoOneOne from './component/Aide/STwoOneOne';
import STwoTwo from './component/Aide/STwoTwo';
import STwoFive from './component/Aide/STwoFive';
import STwoSix from './component/Aide/STwoSix';

import PageOneFour from './component/Aide/PageOneFour';
import PageOneFive from './component/Aide/PageOneFive';
import PageOneSix from './component/Aide/PageOneSix';
import SOneTwo from './component/Aide/SOneTwo';
import SOneOne from './component/Aide/SOneOne';
import SOneThree from './component/Aide/SOneThree';
import SOneFour from './component/Aide/SOneFour';
import STwoThree from './component/Aide/STwoThree';
import STwoFour from './component/Aide/STwoFour';
import SThreeOne from './component/Aide/SThreeOne';
import SThreeTwo from './component/Aide/SThreeTwo';
import SThreeThree from './component/Aide/SThreeThree';
import SThreeFour from './component/Aide/SThreeFour';
import SThreeFive from './component/Aide/SThreeFive';
import SFourOne from './component/Aide/SFourOne';
import SFourTwo from './component/Aide/SFourTwo';
import SFourThree from './component/Aide/SFourThree';
import SFourFour from './component/Aide/SFourFour';

import Admin from './component/Admin/Admin';
import AdminProfile from './component/Admin/AdminProfile';
import AdminProjects from './component/Admin/AdminProjects';
import AdminUsers from './component/Admin/AdminUsers';


import Signup from './component/Signup/Signup';
import Lancer from './component/lancer/Lancer';
import ProjetReussis from './component/projetReussis/projetReussis';
import EditProject from './component/EditProject/EditProject';
import EditProjecttwo from './component/EditProject/EditProjecttwo';
import EditProjectthree from './component/EditProject/EditProjectthree';
import Dpf from './component/DPF/Dpf';
import Alu from './component/Alu/Alu';
import ProjectDetails from './component/projectDetails/ProjectDetails';
import Dashboard from './component/Dashboard/Dashboard';
import MyProfile from './component/Dashboard/pages/MyProfile';
import MyProjects from './component/Dashboard/pages/MyProjects';
import MyContributions from './component/Dashboard/pages/MyContributions';
import Marketing from './component/Dashboard/pages/Marketing';
import Java from './component/Dashboard/pages/Java';
import MyFavourites from './component/Dashboard/pages/MyFavourites';
import MyQuestions from './component/Dashboard/pages/MyQuestions';

import Node from './component/Dashboard/pages/Node';
import Figma from './component/Dashboard/pages/Figma';
import FormOne from './component/forms/FormOne';
import FormTwo from './component/forms/FormTwo';
import Alerts from './component/Alert/Alerts';
import setAuthToken from "./utils/setAuthToken"
import SignupWithRouter from "./component/Signin/Signin"
import img1 from './images/img-1.jpg'
import img2 from './images/img-2.jpg'
import img3 from './images/img-3.jpg'
import img4 from './images/img-4.jpg'
import img5 from './images/img-5.jpg'
import img6 from './images/img-6.jpg'
import {connect} from "react-redux"
import loadedUser from '../src/actions/AuthActions'
if(localStorage.token){
  setAuthToken(localStorage.token)
}
function App() {
  

  const [location, setSelectedthree] = useState("Choose One");
  return (
    <div>
    
    <Router>

   
    
  
    <Navbar />


 
    <div>
    
   
    
    <Routes> 
    
    
    <Route path='/AdminUsers' exact  element={<AdminUsers />} />
    <Route path='/AdminProjects' exact  element={<AdminProjects />} />
    <Route path='/AdminProfile' exact  element={<AdminProfile />} />
    <Route path='/Admin' exact  element={<Admin />} />

    <Route path='/SFourOne' exact  element={<SFourOne />} />
    <Route path='/SFourTwo' exact  element={<SFourTwo />} />
    <Route path='/SFourThree' exact  element={<SFourThree />} />
    <Route path='/SFourFour' exact  element={<SFourFour />} />

    <Route path='/MyQuestions' exact  element={<MyQuestions />} />


    <Route path='/SThreeFive' exact  element={<SThreeFive />} />
    <Route path='/SThreeFour' exact  element={<SThreeFour />} />
    <Route path='/SThreeThree' exact  element={<SThreeThree />} />
    <Route path='/SThreeTwo' exact  element={<SThreeTwo />} />
    <Route path='/SThreeOne' exact  element={<SThreeOne />} />
    <Route path='/STwoSix' exact  element={<STwoSix />} />
    <Route path='/STwoFive' exact  element={<STwoFive />} />
    <Route path='/STwoFour' exact  element={<STwoFour />} />
    <Route path='/STwoThree' exact  element={<STwoThree />} />
    <Route path='/STwoTwo' exact  element={<STwoTwo />} />
    <Route path='/STwoOneTwo' exact  element={<STwoOneTwo />} />
    <Route path='/STwoOneOne' exact  element={<STwoOneOne />} />
    <Route path='/STwoOne' exact  element={<STwoOne />} />
    <Route path='/SOneFour' exact  element={<SOneFour />} />
    <Route path='/SOneThree' exact  element={<SOneThree />} />
    <Route path='/SOneTwo' exact  element={<SOneTwo />} />
    <Route path='/SOneOne' exact  element={<SOneOne />} />
    <Route path='/PageFourOne' exact  element={<PageFourOne />} />
    <Route path='/PageThreeOne' exact  element={<PageThreeOne />} />
    <Route path='/PageTwoThree' exact  element={<PageTwoThree />} />
    <Route path='/PageTwoTwo' exact  element={<PageTwoTwo />} />
    <Route path='/PageTwoOne' exact  element={<PageTwoOne />} />
    <Route path='/PageOneOne' exact  element={<PageOneOne />} />
    <Route path='/PageOneTwo' exact  element={<PageOneTwo />} />
    <Route path='/PageOneThree' exact  element={<PageOneThree />} />
    <Route path='/PageOneFour' exact  element={<PageOneFour />} />
    <Route path='/PageOneFive' exact  element={<PageOneFive />} />
    <Route path='/PageOneSix' exact  element={<PageOneSix />} />

    <Route path='/' exact  element={<FirstSection />} />
    <Route path="/formTwo"  element={<FormTwo location={location} setSelectedthree={setSelectedthree} 
     />}  />
    <Route path="/formOne"  element={<FormOne  />}  />
    <Route path='/Aide' exact   element={<Aide />}/>
    <Route path='/projetReussis'   element={<ProjetReussis />}/>
    <Route path='/Dpf'   element={<Dpf/>}/>
    <Route path='/Alu'   element={<Alu/>}/>
    <Route path='/Alu'   element={<Alu/>} />
    <Route path='/editproject'  element={<EditProject />} />
    <Route path='/editprojecttwo'  element={<EditProjecttwo />} />
    <Route path='/editprojectthree'  element={<EditProjectthree />} />
    <Route path='/signup'  element={<Signup />} />
    <Route path='/login'  element={<Signin />} />
    <Route path='/Decouvrir'   element={<Decouvrir />} />
    <Route path='/lancer'   element={<Lancer />} />
    <Route path='/projectDetails'   element={<ProjectDetails />} />
  
    <Route path='/Dashboard'   element={<Dashboard />} />
    <Route path='/MyProfile'  element={<MyProfile />} />
      <Route path='/myProjects'  element={<MyProjects />} />
      <Route path='/mycontributions'  element={<MyContributions />} />
      <Route path='/java'  element={<Java />} />
      <Route path='/myFavourites'  element={<MyFavourites />} />
      <Route path='/node'  element={<Node />} />
      <Route path='/figma'  element={<Figma />} />
      <Route path='/marketing'  element={<Marketing />} />
    </Routes>
       
    </div>
      </Router>
      </div>
  );
}

export default App;
