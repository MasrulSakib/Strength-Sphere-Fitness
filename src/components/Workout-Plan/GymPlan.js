import React from 'react';
import './GymPlan.css'

const GymPlan = ({ card, addListHandler }) => {

    const { name, age, about, picture, time } = card;


    return (
        <div className='gymplan-container'>
            <img src={picture} alt="" />
            <div className='gymplan-text'>
                <h3>{name}</h3>
                <h4>Age required: {age}</h4>
                <h5>Time Limit: {time}</h5>
                <small>{about.slice(0, 150)}...</small><br />
            </div>
            <button onClick={() => { addListHandler(card) }} className='btn-add'>Add To List</button>
        </div>
    );
}

export default GymPlan;