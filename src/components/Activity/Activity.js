import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import "./Activity.css"

const Activity = (props) => {

    const { elements } = props;
    console.log(elements);


    let total = 0;
    for (const item of elements) {
        total = total + parseInt(item.time) * item.quantity;
    }

    return (
        <div className='inner-activity'>
            <h2 >Activity Details</h2>
            <div className='icon-config'>
                <p className='user'><FontAwesomeIcon icon={faCircleUser} size="lg" /> </p>
                <p>John Rifter</p>
                <label className='location' htmlFor="location"><FontAwesomeIcon icon={faLocationDot} /> California, USA</label>
            </div>

            <div className='user-info'>
                <div>
                    <h3>78kg</h3>
                    <p className='user-text'>WEIGHT</p>
                </div>
                <div>
                    <h3>5'10"</h3>
                    <p className='user-text'>HEIGHT</p>
                </div>
                <div>
                    <h3>27yrs</h3>
                    <p className='user-text'>AGE</p>
                </div>



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
                    <p>Workout Time: <span id='addWorkoutTime'>{total}</span> Seconds</p>
                </div>
                <div className='breakTime'>
                    <p>Break Time: </p>
                </div>

                <div className='completed'>
                    <h3>Workout Complete</h3>
                </div>
            </div>
        </div>
    );
};

export default Activity;