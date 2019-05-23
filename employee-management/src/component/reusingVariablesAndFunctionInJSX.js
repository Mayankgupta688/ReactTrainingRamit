import React from "react";
import ReactDOM from "react-dom";

var name = "Mayank"

function App() {
    return <div>{getData()}</div>;
}

function getData() {
    return <b>Hi.. This is {name}</b>;
}

ReactDOM.render(<App></App>, document.getElementById("root"));