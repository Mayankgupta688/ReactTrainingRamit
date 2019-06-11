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
        return true;
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


    static getDerivedStateFromProps(nextProps, prevState) {
        console.log("Component State Created From Props...");
        return {
            userName: nextProps.name,
            userAge: nextProps.age
        }
    }

    componentWillMount() {
        console.log("Component Will Mount Called.....");
    }

    componentWillUpdate() {
        console.log("Component Will Update Called.....");
    }

    shouldComponentUpdate() {
        console.log("Component Should Component Update Called.....");
        return true;
    }

    componentDidUpdate() {
        console.log("Component Did Update Called")
    }

    render() {

        console.log("Component Rendered...");
        return (
            <div>
                <h1>User name: {this.state.userName}</h1>
                <h2>User age: {this.state.userAge}</h2>
            </div>
        )
    }

    componentDidMount() {
        console.log("Component Mounted...");
    }
}

ReactDOM.render(<ParentComponent></ParentComponent>, document.getElementById("root"));
