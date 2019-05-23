import React from "react";
import ReactDOM from "react-dom";


class EmployeeDetails extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "Mayank",
            age: 10
        }
    }

    changeValue = () => {
        this.setState({
            name: 'Anshul'
        })
    }

    render() {
        return (
            <div>
                <b>Hello World... My name is: {this.state.name}</b><br></br><br></br>
                <input type="button" value="Click Me" onClick={this.changeValue} />
            </div>
        )
    }
}


ReactDOM.render(<EmployeeDetails></EmployeeDetails>, document.getElementById("root"));
