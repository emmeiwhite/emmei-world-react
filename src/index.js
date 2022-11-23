import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

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

const Book = ({ author, title, price, img }) => (
  <article className="book">
    <img src={img} alt="It starts with us" className="book-img" />
    <h3 className="book-name">{title}</h3>
    <p className="book-author">{author}</p>
    <span className="book-prize">Rs {price} /-</span>
  </article>
);

const BookList = () => (
  <section className="booklist-container">
    <Book
      author="Emmeisoft"
      price="320"
      title="I love time"
      img="	https://m.media-amazon.com/images/I/51Zu0ZwT0jL._SX320_BO1,204,203,200_.jpg"
    />
    <Book
      author="Imran Rafiq"
      price="450"
      title="life is not a race"
      img="https://m.media-amazon.com/images/I/31+HzMd+yZL._SX311_BO1,204,203,200_.jpg"
    />
    <Book
      author="Mr. Rouf"
      price="657"
      title="Memories of true game"
      img="https://m.media-amazon.com/images/I/418s6dqXrsL._SX328_BO1,204,203,200_.jpg"
    />
    <Book
      author="Mahesh Sharma"
      price="265"
      title="The love poems"
      img="https://m.media-amazon.com/images/I/51g4lC6Q2NL._SX315_BO1,204,203,200_.jpg"
    />
    <Book
      author="Elif Shafak "
      price="292"
      title="The Forty Rules of Love"
      img="https://m.media-amazon.com/images/I/51S9hxaZfdL._SX324_BO1,204,203,200_.jpg"
    />
    <Book
      author="Vanita Godara"
      price="198"
      title="Beauty of True Love"
      img="https://m.media-amazon.com/images/I/41-LKNiQyrL._SX318_BO1,204,203,200_.jpg"
    />
  </section>
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BookList />
  </React.StrictMode>
);
