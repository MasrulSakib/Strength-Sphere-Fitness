import React from 'react';
import './QA.css'
const QA = () => {
    return (
        <div>
            <article className='text-area'>
                <h2 className='top-text'>Some common questions and answers</h2>
                <h3>1. How does React work?</h3>
                <p> React works by representing the user interface as a Virtual DOM, a lightweight in-memory copy of the actual DOM. Components, the building blocks of React apps, have their state and receive data via props. When data changes, React efficiently updates the Virtual DOM, compares it to the previous version, and computes the minimal changes required to update the actual DOM. This process, known as reconciliation, ensures fast and efficient UI updates. </p><br />

                <h3>2. What are the differences between props & states?</h3>
                <p> Props and state are both fundamental concepts in React but serve different purposes.
                    Props (short for properties) are used to pass data from a parent component to a child component. They are immutable and read-only within the child component, making them ideal for sharing data across the application and maintaining component purity.
                    State, on the other hand, is used to manage a component's internal data. It is mutable and allows a component to keep track of changing information. When state changes, React re-renders the component, updating the user interface accordingly. State is specific to each component and should only be modified using the setState method.</p><br />

                <h3>3. How we can use useEffect except data loading?</h3>
                <p>The useEffect hook in React is not limited to data loading; it's a versatile tool for handling side effects in functional components. You can use it for various tasks like setting up event listeners, subscribing to data streams, performing cleanup, or triggering actions in response to component updates. For instance, you can use useEffect to set up a timer, interact with the browser's local storage, integrate with third-party libraries, or manage animations. </p><br />
            </article>
        </div>
    );
};

export default QA;