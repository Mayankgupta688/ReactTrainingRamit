import React from "react";
import ReactDOM from "react-dom";



class ParentComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "Mayank",
            age: 1
        }

        setInterval(() => {
            console.log(this.state.age)
            this.setState({
                age: this.state.age + 1
            })
        }, 1000)
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div>
                <h1>Current Age: {this.state.age}</h1>
                <UpdateConcepts name={this.state.name} age={this.state.age}></UpdateConcepts>
            </div>
        )
    }
}



class UpdateConcepts extends React.Component {

    shouldComponentUpdate(nextProps) {
        if(this.props.age === nextProps.age) {
            return false;
        } else return true;
    }

    render() {
        return (
            <div>
                <h1>User name: {this.props.name}</h1>
                <h2>User age: {this.props.age}</h2>
            </div>
        )
    }
}

ReactDOM.render(<ParentComponent></ParentComponent>, document.getElementById("root"));
