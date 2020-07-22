// Import the React and REACT DOM libraries
import React from 'react'
import ReactDOM from 'react-dom'

// Create a React component
const App = () => {
    return <div>My first JSX</div>;
};

//Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));