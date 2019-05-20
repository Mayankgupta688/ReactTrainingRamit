import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(<div className="my-name">Hello World.. This is Test..</div>, document.getElementsByClassName("another-div")[0]);

ReactDOM.render(<div className="my-name">Hello World.. Another Component...</div>, document.getElementById("root"));

ReactDOM.render(<div className="my-name">Hello World.. Another Component... Again...</div>, document.getElementsByTagName("b")[0]);

