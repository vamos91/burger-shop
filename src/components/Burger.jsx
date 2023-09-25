import React, { useState } from 'react';
import './burger.css'

const Burger = ({burgerName, handleClickParent}) => {
    const [counter, setCounter] = useState(0)
    const [isOrdered, setIsOrdered] = useState(false)
    
    const handleClick = () => {
        setCounter(counter + 1)
        console.log(counter)
    }

    const orderBurger = () => {
        handleClickParent(burgerName)
        setIsOrdered(!isOrdered)
    }

    return (
        <div className='burger-item' style={ isOrdered ? {backgroundColor: 'red'} : {} }>
            <img width={200} src="https://www.biofournil.com/wp-content/uploads/2021/02/BRIOCHE-BIOFOURNIL_web.jpg" alt="" />
            <div className="burger-name">{burgerName}</div>
            <div className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, cupiditate.</div>
            <button onClick={() => handleClick()}>Like {counter ? counter : ''}</button>
            <button onClick={() => orderBurger()}>Commander</button>
        </div>
    );
};

export default Burger;