import React, { useEffect, useState } from 'react';
import GymPlan from './GymPlan';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import "./Gym.css"

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
            <div className='activity-container'>
                <div className='activity-header'>
                    <h2 >Activity Details</h2>
                    <div className='icon-config'>
                        <p className='user'><FontAwesomeIcon icon={faCircleUser} size="lg" /> </p>
                        <p>John Rifter</p>
                        <small className='location'><FontAwesomeIcon icon={faLocationDot} /> California, USA</small>
                    </div>
                    <div>
                        <h3>Adjust Your Time</h3>
                        <div className='activity-time'>
                            <button>10</button>
                            <button>15</button>
                            <button>20</button>
                            <button>25</button>
                            <button>30</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gym;