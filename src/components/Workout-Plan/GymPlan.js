import React from 'react';
import './GymPlan.css'

const GymPlan = ({ card }) => {
    const { age, about } = card;
    return (
        <div className='gymplan-container'>
            <h4>age: {age}</h4>
            <p> details: {about}</p>
        </div>
    );
};

export default GymPlan;