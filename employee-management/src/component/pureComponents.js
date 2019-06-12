import React from "react";
import ReactDOM from "react-dom";

export default class PureComponentParent extends React.Component {
    constructor() {
        super();
        this.state = {
            user: {
                name: "Mayank"
            }
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                user: {
                    name: this.state.user.name + "1"
                }
            });
        }, 1000)
    }

    render() {
        return (
            <div>
                Parent Component Data: {this.state.user.name}
                <ChildComponent name={this.state.user.name}></ChildComponent>
            </div>
        )
    }
}

class ChildComponent extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            counterData: 0
        }
    }
    
    render() {
        console.log("Rerendered");
        return (
            <div>
                User Name: {this.props.name}
            </div>
        )
    }
}

ReactDOM.render(<PureComponentParent></PureComponentParent>, document.getElementById("root"))