// Import the React and REACT DOM libraries
import React from "react";
import ReactDOM from "react-dom";

let getButtonText = () => {
  return "Click On Me!";
};

// Create a React component
const App = () => {
  // const buttonText = "Click Me"; esto era inicialmente
  const buttonText = { text: "Click Me!", text2: "Click Me!Bitch!" };
  // <button style={{backgroundColor: '#000', color: 'white'}}>  asi era en un inicio
  const style = {backgroundColor: '#000', color: 'white'}

  return (
    //cuando se tiene un jsx con multiples lineas se debe poner entre parentesis, en caso de que sea de una sola linea, la etiqueta debe estar al mismo nivel del return para que logre identificarlo.
    <div>
      <label className="label" for="name">
        Enter your name:
      </label>
      <input id="name" type="text"></input>
      <button style={style}>
        {buttonText.text}
        {/* {buttonText} */}
      </button>
    </div>
  );
};

//Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
