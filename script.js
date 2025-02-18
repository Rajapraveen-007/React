import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

// const heading = React.createElement("div", { className: "parent" }, [
//   React.createElement("div", { className: "child" }, [
//     React.createElement("h1", { className: "title" }, "Hello world"),
//     React.createElement("h3", { className: "title2" }, "Hello world2"),
//   ]),
//   React.createElement("div", { className: "child" }, [
//     React.createElement("h1", { className: "title" }, "Hello world"),
//     React.createElement("h3", { className: "title2" }, "Hello world2"),
//   ]),
// ]);

const Hello = () => (
  <div className="title">
    <h1>
      <marquee>Arutperunjothi Is Here😘!</marquee>
    </h1>
  </div>
);

const Welcome = () => {
  return (
    <div>
      {Hello()}
      <Hello></Hello>
      <h1>Hello world 😍!</h1>
    </div>
  );
}; // React component

const root = ReactDOM.createRoot(document.getElementById("root")); // createRoot is a new API in React 18

root.render(<Welcome />); // render is a new API in React 18
