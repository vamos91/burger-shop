import React, { useState } from 'react';
import Burger from './components/Burger';
import './App.css'
import Articles from './components/Articles';

const App = () => {
  const burgers = ["Le new yorker", "Le vegan", "Le chicken"]
  const [ordered, setOrdered] = useState('')
  const [sauce, setSauce] = useState([])

  const handleClick = (burger) => {
    setOrdered(burger)
  }

  const addSauce = (item) => {
    if (!sauce.includes(item)){
      setSauce([...sauce, item])
    } 
  }

  return (
    <>
    <Articles />
      <h3>Vous avez commander: {ordered}</h3>
      <button onClick={() => addSauce('Mayo')}>Mayo</button>
      <button onClick={() => addSauce('keychup')}>Ketchup</button>
      <h3>Vous avez choisi: {sauce.join(',')}</h3>
      <div className='burger'>
        {
          burgers.length > 0 && (
            burgers.map((burger, item) => (
              <div><Burger key={item} burgerName={burger} handleClickParent={handleClick} /></div>
            ))
          )
        }
      </div>
    </>   
  );
};

export default App;