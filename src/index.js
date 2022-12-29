import React from "react";
import ReactDOM from "react-dom/client";

import img from "./images/img.jpeg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.png";

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
  // img: "https://m.media-amazon.com/images/I/51Zu0ZwT0jL._SX320_BO1,204,203,200_.jpg",
  img,
};

const book2 = {
  author: "Kiran Nagawara",
  price: "150",
  title: "Life and rise",
  alt: "life is not to be wasted",
  // img: "https://m.media-amazon.com/images/I/31+HzMd+yZL._SX311_BO1,204,203,200_.jpg",
  img2,
};

const books = [
  {
    id: 1,
    author: "Mahesh poonawala",
    price: "320",
    title: "The important of time",
    alt: "time is crucial",
    // img: "https://m.media-amazon.com/images/I/51Zu0ZwT0jL._SX320_BO1,204,203,200_.jpg",
    img: img,
  },
  {
    id: 2,
    author: "Kiran Nagawara",
    price: "150",
    title: "Life and transformation",
    alt: "life is not to be wasted",
    // img: "https://m.media-amazon.com/images/I/31+HzMd+yZL._SX311_BO1,204,203,200_.jpg",
    img: img2,
  },
  {
    id: 3,
    author: "Tumbakh Karamandala",
    price: "300",
    title: "Better now than never",
    alt: "time never comes back",
    // img: "https://m.media-amazon.com/images/I/41NmiyLR0dL._BG0,0,0,0_FMpng_AC_SY480_SX480_.jpg",
    img: img3,
  },
];

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
const Book = ({ id, author, title, price, img, alt, getBook, index }) => (
  <article className="book">
    <h2 className="book-number">#{index}</h2>
    <img src={img} alt={alt} className="book-img" />
    <h3 className="book-name">{title}</h3>
    <p className="book-author">{author}</p>
    <span className="book-prize">Rs {price} /-</span>

    <button className="btn" onClick={() => getBook(id)}>
      Book Info
    </button>
  </article>
);

const BookList = () => {
  const getBook = (id) => {
    const book = books.find((book) => {
      return book.id === id;
    });
    console.log(book);
  };
  return (
    <section className="booklist-container">
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
        Books are a source of light
      </h1>
      {books.map((book, index) => {
        return <Book {...book} index={index} key={book.id} getBook={getBook} />;
      })}
    </section>
  );
};

// USERS

const UserList = () => {
  return (
    <section className="userlist">
      {users.map((user) => {
        return <User key={user.id} {...user} />;
      })}
    </section>
  );
};

const User = ({ id, title, body }) => {
  const handleClick = (e) => {
    console.log(e.target);
  };

  const handleMouseOver = (e) => {
    console.log("Mouse hovered on the User Component");
  };

  //  Getting value on Event Handler
  const handleClickWithValue = (title) => {
    console.log(title);
  };

  return (
    <article className="user" onMouseOver={handleMouseOver}>
      <h1>{title}</h1>
      <p>{body}</p>
      <div className="btns-container">
        <button className="btn" onClick={handleClick}>
          Handler Btn{" "}
        </button>

        <button className="btn" onClick={() => handleClickWithValue(title)}>
          Get Title{" "}
        </button>
      </div>

      <h3 style={{ color: "#000", margin: "2rem 0rem" }}>Kashmir Mountains</h3>
      <img
        src="./mountains.jpeg"
        alt="Mountains"
        style={{ objectFit: "cover", maxWidth: "300px" }}
      />
    </article>
  );
};

const doctors = [
  { id: 1, doctorName: "Dr. Rouf", specialization: "vatenary" },
  { id: 2, doctorName: "Dr. Rafia", specialization: "Dental" },
  { id: 3, doctorName: "Dr. Shifa", specialization: "Heart Specialist" },
  { id: 4, doctorName: "Dr. Anisa", specialization: "ENT" },
];

const DoctorList = () => {
  return (
    <section>
      {doctors.map((doctor) => {
        return <Doctor key={doctor.id} {...doctor} />;
      })}
    </section>
  );
};

// Components are independent by default
const Doctor = ({ doctorName, specialization }) => {
  console.log(doctorName);
  return (
    <section
      style={{ color: "white", border: "1px solid white", padding: "2rem" }}
    >
      <h1>Doctor Details</h1>
      <h4>Name: {doctorName}</h4>
      <h4>Specialization: {specialization}</h4>
      <button
        className="btn"
        onClick={() => {
          console.log(doctorName);
        }}
      >
        Doctor Name
      </button>
    </section>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<React.StrictMode>{<UserList />}</React.StrictMode>);
// root.render(<React.StrictMode>{<DoctorList />}</React.StrictMode>);
root.render(<React.StrictMode>{<BookList />}</React.StrictMode>);
