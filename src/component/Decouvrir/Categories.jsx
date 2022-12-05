import React from 'react'
import "./cssFile.css"
const Categories=({categories,filterItem}) =>{
  return (
    <div className='btn-container-categorie'>
      {categories.map((category, index)=>{
 return (
<button type="button"
className="filter-btn"
key={index}
onClick={
  ()=>filterItem(category)
}
>

{category}

</button> )
     })

      }
    </div>
  )
}

export default Categories
