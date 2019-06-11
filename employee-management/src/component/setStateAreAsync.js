import React from "react";
import ReactDOM from "react-dom";

export default class ParentComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        }
    }

    updateStateCounter = () => {
        this.setState((state) => {
            return {
                counter: state.counter + 1
            }
        });

        this.setState((state) => {
            return {
                counter: state.counter + 1
            }
        });

        this.setState((state) => {
            return {
                counter: state.counter + 1
            }
        });

        this.setState((state) => {
            return {
                counter: state.counter + 1
            }
        });

    }

    render() {
        return (
            <div>
                <b>Counter Value: {this.state.counter}</b><br></br><br></br>
                <input type="button" value="Click Me" onClick={this.updateStateCounter} />
            </div>
        )
    }
}



ReactDOM.render(<ParentComponent></ParentComponent>, document.getElementById("root"));
