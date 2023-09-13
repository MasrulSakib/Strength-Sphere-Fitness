import React, { useEffect, useState } from 'react';
import GymPlan from './GymPlan';

import "./Gym.css"
import Activity from '../Activity/Activity';
import { addToDb, getRequiredItems } from '../Utilities/fakeDb';



const Gym = () => {
    const [cards, setCard] = useState([]);
    const [elements, setElements] = useState([]);


    useEffect(() => {
        fetch('FakeData.json')
            .then(res => res.json())
            .then(data => setCard(data))
    }, [])

    useEffect(() => {
        const storedItems = getRequiredItems()
        const savedData = [];
        for (const id in storedItems) {
            const addedItems = cards.find(card => card.id === id)
            if (addedItems) {
                const quantity = storedItems[id];
                addedItems.quantity = quantity;

                savedData.push(addedItems);
            }
        }
        setElements(savedData);
    }, [cards])

    const addListHandler = (selectedCard) => {
        let newCard = [];
        const exist = elements.find(cards => cards.id === selectedCard.id)
        if (!exist) {
            selectedCard.quantity = 1;
            newCard = [...elements, selectedCard];
        }
        else {
            const rest = elements.filter(cards => cards.id !== selectedCard.id)
            exist.quantity = exist.quantity + 1;
            newCard = [...rest, exist];
        }

        setElements(newCard);
        addToDb(selectedCard.id);




        // const getWorkoutTime = document.getElementById('addWorkoutTime');
        // const innerTextField = parseInt(getWorkoutTime.innerText);
        // const currentTotalTime = innerTextField + parseInt(card.time);
        // getWorkoutTime.innerText = currentTotalTime;
    }
    return (
        <div className='gym'>
            <div className='gym-container'>
                {
                    cards.map(card =>
                        <GymPlan key={card.id}
                            card={card}
                            addListHandler={addListHandler}
                        >
                        </GymPlan>)
                }
            </div>
            <div className='activity-container'>
                {
                    <Activity elements={elements}></Activity>
                }
            </div>
        </div>
    );
};

export default Gym;