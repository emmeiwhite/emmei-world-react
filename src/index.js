import React from "react";
import ReactDOM from "react-dom/client";

// function Greeting() {
//   return (
//     <div>
//       <h1>Hard work always pays-off ! </h1>
//     </div>
//   );
// }

// We are basically rendering the JSX !!!
const Greeting = () =>
  React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Welcome to the world of JSX")
  );

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Greeting />
  </React.StrictMode>
);
