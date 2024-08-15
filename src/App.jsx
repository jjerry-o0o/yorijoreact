import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Recipe from "./components/Recipe.jsx";
import RecipeButton from './components/RecipeButton.jsx';
import {RECIPE_CONTENTS} from "./assets/recipeData.js";

function App() {
  const [selectedMenu, setSelectedMenu] = useState();

  const handleSelected = (menuTitle) =>  {
      setSelectedMenu(menuTitle);
  }

  return (
    <>
      <div>
        <Header />
        <main>
          <section>
            <menu className="menu">
                {RECIPE_CONTENTS.map((item) => (
                    <RecipeButton
                        key={item.title}
                        isSelected={selectedMenu === item.title}
                        onSelect={() => handleSelected(item.title)}
                    >
                        {item.title}
                    </RecipeButton>
                ))}
            </menu>

              {!selectedMenu ? (
                  <p>먹고 싶은 메뉴를 골라주세요 !</p>
              ) : (
                  RECIPE_CONTENTS.filter(item => item.title === selectedMenu)
                      .map((item) => (
                          <Recipe key={item.title} {...item}/>
                      ))
              )}
          </section>
        </main>
      </div>
    </>
  )
}

export default App
