import React, { useEffect, useState } from 'react';
import GymPlan from './GymPlan';

import "./Gym.css"
import Activity from '../Activity/Activity';

const Gym = () => {
    const [cards, setCard] = useState([]);
    useEffect(() => {
        fetch('FakeData.json')
            .then(res => res.json())
            .then(data => setCard(data))
    }, [])

    return (
        <div className='gym'>
            <div className='gym-container'>
                {
                    cards.map(card =>
                        <GymPlan key={card.id}
                            card={card}
                        >
                        </GymPlan>)
                }
            </div>
            <div>
                {
                    <Activity></Activity>
                }
            </div>
        </div>
    );
};

export default Gym;