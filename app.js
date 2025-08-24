import React from "react";
import ReactDOM from "react-dom/client"

// creating elements
const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement("div", { id: "child" }, [
        React.createElement("h1", { id: "heading", key: 'value1' }, "Hello world"),
        React.createElement("h1", { id: "heading", key: 'value2' }, "Hello world from sibling"),
    ])
);

// creating root using ReactDOM
const root = ReactDOM.createRoot(document.getElementById("root"));

// rendering parent in div tag with id - 'root'
root.render(parent);