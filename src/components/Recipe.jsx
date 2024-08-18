import './Recipe.css';
import {useState} from 'react'

export default function Recipe({title, img, ingredients, recipe, setSelectedMenu}) {
    return (
        <>
            <div className="recipe-div">
                <img className="recipe-img" src={img} alt={title}/>
                <h3 className="recipe-title">{title}</h3>
                <p className="recipe-ingredients">&lt; 재료 &gt;<br/>{ingredients}</p>
                <p style={{whiteSpace: "pre-line"}}>&lt; 요리조리법 &gt;<br/>{recipe}</p>
            </div>
            <button onClick={() => setSelectedMenu(null)}>닫기</button>
        </>
    );
}