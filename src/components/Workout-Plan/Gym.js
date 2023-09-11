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
                <div className='inner-activity'>
                    <h2 >Activity Details</h2>
                    <div className='icon-config'>
                        <p className='user'><FontAwesomeIcon icon={faCircleUser} size="lg" /> </p>
                        <p>John Rifter</p>
                        <small className='location'><FontAwesomeIcon icon={faLocationDot} /> California, USA</small>
                    </div>
                    <div>
                        <h3>Adjust Your Time</h3>
                        <div className='activity-time'>
                            <button>10s</button>
                            <button>15s</button>
                            <button>20s</button>
                            <button>25s</button>
                            <button>30s</button>
                        </div>
                    </div>
                    <div>
                        <h3>Workout Time Planing</h3>
                        <div className='addTime'>
                            <p>Workout Time: </p>
                        </div>
                        <div className='breakTime'>
                            <p>Break Time: </p>
                        </div>

                        <div className='completed'>
                            <h3>Workout Complete</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gym;