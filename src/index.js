import React from "react";
import ReactDOM from "react-dom/client";

/*
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
*/

/*
// We are basically rendering the JSX !!!
const Greeting = () =>
  React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Welcome to the world of JSX")
  );
*/

// BookList (we will render a list of Books) - Reusuablity, Structuring app into lego blocks - components

const Book = () => (
  <article>
    <h1>BookName</h1>
    <img src="" alt="Book photo goes here" />
    <p>Book description goes here</p>
    <p>Book Author goes here</p>
  </article>
);
const BookList = () => (
  <section>
    <Book />
    <Book />
    <Book />
  </section>
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BookList />
  </React.StrictMode>
);
