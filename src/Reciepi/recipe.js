import React from 'react';
import  './recipe.css';

 const Recipe=({title,calories,image, ingredients})=>{
    return(
    <div className="recipes">
        <h1>{title}</h1>
        <ol>
             {ingredients.map(ing=>(<li>
                 {ing.text}
             </li>))}
        </ol>
        <p>{calories}</p>
        <img src={image} className="img"/>
    </div>
)
}
export default Recipe;