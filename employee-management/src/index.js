import React from "react";
import ReactDOM from "react-dom";

class UpdateConcepts extends React.Component {
    constructor() {
        super();

        this.state = {
            name: "Mayank",
            age: 20,
            designation: "Developer"
        }

        setTimeout(() => {
            alert("Component Updated..")
            this.setState({
                designation: "Senior Developer"
            })

            this.setState({
                name: "Anshul"
            })
        }, 3000)


        setTimeout(()=> {

            this.state.age = 100;
            
            
        }, 10000);
    }

    shouldComponentUpdate(nextProps, nextState) {
        // alert("Should Component Update Called...")
        // if(this.state.name === nextState.name && this.state.age === nextState.age) {
        //     return false;
        // } else return true;

        return false;
    }

    render() {
        alert("Component Re-Rendered")
        return (
            <div>
                <h1>User name: {this.state.name}</h1>
                <h2>User age: {this.state.age}</h2>
            </div>
        )
    }
}

ReactDOM.render(<UpdateConcepts></UpdateConcepts>, document.getElementById("root"));
