import React from "react";
import ReactDOM from "react-dom";

export default class ParentComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            empArray: [
                { name: "A", age: 10 },
                { name: "B", age: 30 },
                { name: "C", age: 20 },
                { name: "c", age: 20 }
            ], 
            name: "Mayank"
        }
    }

    updateNameValue(event) {
        this.refs.uncontrolledElement.style.color = "red";
        console.dir(event)
        this.setState({
            name: event.target.value
        })

        this.refs.uncontrolledElement.value = event.target.value;
    }

    render() {
        return (
            <div>
                
                {
                    this.state.empArray.map((employee) => {
                        return(
                            <div key={employee.name}>
                                <b style={{"marginRight": "30px"}}>Employee Name: {employee.name}</b>
                                <b>Employee Name: </b>
                            </div>
                        )
                    })
                }

                <br></br><br></br><input type="text" ref="uncontrolledElement"></input>

                <br></br><br></br><input onChange={this.updateNameValue.bind(this)} type="text" value={this.state.name} />
        
            </div>
        );
    }
}



ReactDOM.render(<ParentComponent></ParentComponent>, document.getElementById("root"));
