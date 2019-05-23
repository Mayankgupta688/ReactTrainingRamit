import React from "react";
import ReactDOM from "react-dom";

var currentTime = new Date().toLocaleTimeString()

ReactDOM.render(<App time={currentTime} name="Mayank" age="20"></App>, document.getElementById("root"));

function App(props) {
    console.dir(props)
    return <div>My name is {props.name} and my age is {props.age} and the current time is: {props.time}</div>;
}