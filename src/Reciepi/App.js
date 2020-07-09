import React,{useState,useEffect} from 'react';
//import logo from './logo.svg';
import Recipe from './recipe.js';
import './App.css'


const App=()=>{

 const app_id="94a87d13";
  const app_key= "3bbc2c7063eda22cf5079b6db195d4ad";
  
 //const userReq=`https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`
 
 const[recipes,setRecipes]=useState([]);
 const[search,setSearch]=useState("");
 const[query,setQuery]=useState('chicken');

  useEffect(()=>{
   getRecipes();
  },[query])


  const getRecipes= async ()=>{
    const response=await fetch(`https://api.edamam.com/search?q=${query}&app_id=${app_id}&app_key=${app_key}`
    );
    const data=await response.json();
    //console.log(data.hits);
    setRecipes(data.hits)
  }


let updateSearch=(e)=>{
setSearch(e.target.value);
}  

const getSearch=(e)=>{
  e.preventDefault();
  setQuery(search)
  setSearch(' ');
}

  return (
    <div className="App">
      <form onSubmit={getSearch} className="main-form">
        <input className="input-bar" value={search} onChange={updateSearch}/>
  <button  className="buttons" type="submit">Click Me</button>
      </form>
      <div className="mains">
        
      {
        recipes.map(r=>(
          <Recipe
          key={r.recipe.label}
          title={r.recipe.label}
          calories={r.recipe.calories}
          image={r.recipe.image}
          ingredients={r.recipe.ingredients}
          />
        ))
      }
      </div>
    </div>
  )
}

export default App;
