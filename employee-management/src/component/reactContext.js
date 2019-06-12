import React from "react";
import ReactDOM from "react-dom";

const FamilyContext = React.createContext({});
const FamilyProvider = FamilyContext.Provider;
const FamilyConsumer = FamilyContext.Consumer;


class GrandParent extends React.Component {
    constructor() {
        super();
        this.state = {
            surname: "Gupta",
            nativeTown: "Haryana"
        }
    }

    render() {
        return (
            <FamilyProvider value={this.state}>
                <b>Grand Parents Info: {this.state.surname}</b><hr></hr>
                <Parents></Parents>
            </FamilyProvider>
        )
    }
}


class Parents extends React.Component {
    render() {
        return (
            <div>
                <b>This is the Parent Div</b><hr></hr>
                <Child></Child>
            </div>
        )
    }
}


class Child extends React.Component {
    render() {
        return (
            <>
                <div>Native town Details:Doesnt Matter to me..</div><hr></hr>
                <GrandChild></GrandChild>
            </>
        )
    }
}

class GrandChild extends React.Component {
    render() {
        return (
            <FamilyConsumer>
                {(context) => (
                    <>
                        <b>Grand Child Native town Details: {context.nativetown}</b><br></br><br></br>
                        <b>Grand Child Native surname Details: {context.surname}</b>
                    </>
                )}
            </FamilyConsumer>
        )
    }
}




ReactDOM.render(<GrandParent />, document.getElementById("root"))