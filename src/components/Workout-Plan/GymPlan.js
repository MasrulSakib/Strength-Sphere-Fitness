import React from 'react';
import './GymPlan.css'

const GymPlan = ({ card }) => {
    const { name, age, about, picture } = card;
    return (
        <div className='gymplan-container'>
            <img src={picture} alt="" />
            <div className='gymplan-text'>
                <h3>{name}</h3>
                <h4>Age required: {age}</h4>
                <small>{about.slice(0, 150)}...</small><br />
            </div>
            <button className='btn-add'>Add To List</button>
        </div>
    );
};

export default GymPlan;