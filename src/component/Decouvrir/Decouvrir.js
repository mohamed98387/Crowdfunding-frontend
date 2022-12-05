import React,{useState,useEffect} from 'react'
import "./cssFile.css"
import axios from "axios";
import Menu from './Menu';
import Categories from './Categories';
import items from "./data"


function Decouvrir() {
  const getProjects = () => {
    axios.get("/api/project/all").then((res) => {
      setProjects(res.data)
      console.log(Projects)
    });
  };
  useEffect(() => {
    getProjects();
    console.log(Projects)
  }, []);


  const [Projects, setProjects] = useState([]);
  const allCategories = ['all', ...new Set(items.map((item)=>item.category))]
  const [menuItems,setMenusItems] = useState(Projects)
  const [category,setCategories] = useState(allCategories)
  const filterItem =(category)=>{
    if(category == 'all'){
      const newItem = Projects.filter((item)=>item.validation === true);
      setMenusItems(newItem)
      return;
    }

    const newItem = Projects.filter((item)=>item.category == category && item.validation === true);
    setMenusItems(newItem)
 }


  return (
   
      <>
     <div className="menu section">
             <div className="title">
                 <h2 className='h2-title'>Find The Projects</h2>
                 <div className="underline"></div>
             </div>
             <Categories categories ={category} filterItem={filterItem}  />
              <Menu items={menuItems} />
          
     </div>
    </>
   
  )
}

export default Decouvrir





