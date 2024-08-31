// Create a React element
// import React from "react";
// import ReactDOM from "react-dom/client";

// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "hello world from react"
// );
// console.log(heading); // returns an object

// Corrected reference to ReactDOM
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

/*
 <div id="parent">
    <div id="child1">
    <h1>I 'm h1 tag</h1>
    <h2>I'm h2 tag</h2>
    </div>

    <div id="child2">
      <h1>I'm h1 tag</h1>
      <h2>I'm h2 tag</h2>
    </div>
 </div>
 */

 //by using react creating above
 const parent = React.createElement("div",{id:"parent"},[
  React.createElement("div",{id:"child1"},[
    React.createElement("h1",{},"I'm an h1 tag"),
    React.createElement("h2",{},"I'm an h2 tag"),
  ]),
  React.createElement("div",{id:"child2"},[
    React.createElement("h1",{},"I'm an h1 tag"),
    React.createElement("h2",{},"I'm an h2 tag"),
  ])
]);
root.render(parent);