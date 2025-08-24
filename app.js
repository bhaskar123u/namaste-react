// creating element
/*
    <div id="parent">
        <div id="child">
            <h1>Hello World</h1>
            <h1>Hello World Sibling</h1>
        </div>
    </div>

*/

const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement("div", { id: "child" }, [
        React.createElement("h1", { id: "heading", key: 'value1' }, "Hello world"),
        React.createElement("h1", { id: "heading", key: 'value2' }, "Hello world from sibling"),
    ])
);

console.log(parent);

// creating root using ReactDOM
const root = ReactDOM.createRoot(document.getElementById("root"));

// rendering
root.render(parent);