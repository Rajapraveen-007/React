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

const page = React.createElement("h2", {}, "My Favorite Fruits",React.createElement("ol", {}, [
    React.createElement("li", {}, "Apple"),
    React.createElement("li", {}, "Banana"),
    React.createElement("li", {}, "Orange"),
    React.createElement("li", {}, "Grapes"),
    React.createElement("li", {}, "Mango"),
  ]));

const hello = React.createElement("h1", {}, "hello world");



 console.log(page);

const root = ReactDOM.createRoot(document.getElementById("root")); // createRoot is a new API in React 18

console.log(page);

root.render(page); // render is a new API in React 18





