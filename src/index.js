import React from "react";
import ReactDOM from "react-dom/client";

function Greeting() {
  return (
    <div>
      <Dedication />
      <AimBig />
    </div>
  );
}

const Dedication = () => (
  <h2 className="dedication">
    Dedication is perseverance is the key to success
  </h2>
);

const AimBig = () => {
  return (
    <section>
      <p>We got to aim big to achieve big!</p>
      <input
        type="button"
        value="aim big"
        onClick={() => console.log("Aim Big!!!")}
      />
    </section>
  );
};

/*
// We are basically rendering the JSX !!!
const Greeting = () =>
  React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Welcome to the world of JSX")
  );
*/

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Greeting />
  </React.StrictMode>
);
