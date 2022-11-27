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
const book1 = {
  author: "Mahesh poonawala",
  price: "320",
  title: "The important of time",
  alt: "time is crucial",
  img: "https://m.media-amazon.com/images/I/51Zu0ZwT0jL._SX320_BO1,204,203,200_.jpg",
};

const book2 = {
  author: "Kiran Nagawara",
  price: "150",
  title: "Life and rise",
  alt: "life is not to be wasted",
  img: "https://m.media-amazon.com/images/I/31+HzMd+yZL._SX311_BO1,204,203,200_.jpg",
};

/** LET'S Iterate over each item in an Array (Later we will get it from an API and make use of this) */

const users = [
  {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  },
  {
    userId: 1,
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
  },
  {
    userId: 1,
    id: 4,
    title: "eum et est occaecati",
    body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
  },
  {
    userId: 1,
    id: 5,
    title: "nesciunt quas odio",
    body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
  },
  {
    userId: 1,
    id: 6,
    title: "dolorem eum magni eos aperiam quia",
    body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
  },
];
/** Props are special in React.  */
const Book = ({ author, title, price, img, alt }) => (
  <article className="book">
    <img src={img} alt={alt} className="book-img" />
    <h3 className="book-name">{title}</h3>
    <p className="book-author">{author}</p>
    <span className="book-prize">Rs {price} /-</span>
  </article>
);

const BookList = () => (
  <section className="booklist-container">
    <Book {...book1} />
    <Book {...book2} />
  </section>
);

// USERS

const UserList = () => {
  return (
    <section className="userlist">
      {users.map((user) => {
        return <User {...user} />;
      })}
    </section>
  );
};

const User = ({ id, title, body }) => {
  return (
    <article className="user">
      <h1>{title}</h1>
      <p>{body}</p>
    </article>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<React.StrictMode>{<UserList />}</React.StrictMode>);
