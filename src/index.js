// Import the React and REACT DOM libraries
import React from "react";
import ReactDOM from "react-dom";

// Create a React component
const App = () => {
  return (//cuando se tiene un jsx con multiples lineas se debe poner entre parentesis, en caso de que sea de una sola linea, la etiqueta debe estar al mismo nivel del return para que logre identificarlo.
  <div>
      <label class="label" for="name">Enter your name:</label>
      <input id="name" type="text"></input>
      <button style="background-color:#000; color:white;">Submit</button>
  </div>
  );
};

//Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
