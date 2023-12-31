import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import "./Activity.css"
import { deleteRequiredItems } from '../Utilities/fakeDb';

const Activity = (props) => {

    const { elements } = props;
    console.log(elements);

    const Notify = () => {
        toast.success('Congratulations!!! You did it.', {
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
        deleteRequiredItems();
        setTimeout(() => {
            window.location.reload();
        }, 5500);

    }

    const [breakTime, setBreakTime] = useState(0);

    // Function to handle button clicks
    const handleButtonClick = (time) => {
        setBreakTime(time);
        localStorage.setItem('breakTime', time.toString());
    };

    // Use useEffect to load data from local storage on component mount
    useEffect(() => {
        const storedBreakTime = localStorage.getItem('breakTime');
        if (storedBreakTime) {
            setBreakTime(parseInt(storedBreakTime));
        }
    }, []);


    let total = 0;
    for (const item of elements) {
        total = total + parseInt(item.time) * item.quantity;
    }

    return (
        <div className='top-inner-items'>
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
                        <button onClick={() => handleButtonClick(10)}><span>10</span>s</button>
                        <button onClick={() => handleButtonClick(15)}><span>15</span>s</button>
                        <button onClick={() => handleButtonClick(20)}><span>20</span>s</button>
                        <button onClick={() => handleButtonClick(25)}><span>25</span>s</button>
                        <button onClick={() => handleButtonClick(30)}><span>30</span>s</button>
                    </div>
                </div>
                <div>
                    <h3>Workout Time Planing</h3>
                    <div className='addTime'>
                        <p>Workout Time: <span>{total}</span> Seconds</p>
                    </div>
                    <div className='breakTime'>
                        <p>Break Time: <span>{breakTime}</span> Seconds</p>
                    </div>

                    <div >
                        <ToastContainer
                            position="top-center"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="dark"
                        />
                        <button className='completed' onClick={() => Notify()}>Workout Complete</button>
                        <ToastContainer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Activity;