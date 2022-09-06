import React, { useState } from "react";
import "./UseStateObjecAsVeriableDemo.css";
export const UseStateObjecAsVeriableDemo = () => {
  //declearing state for object
  const [book, setBook] = useState({
    name: "",
    writer: "",
    price: "",
  });
  //declearing state for array
  const [books, setBooks] = useState([]);

  const handleChange = (e) => {
    let value = e.target.value;
    switch (e.target.name) {
      case "name":
        //setting name property of object book
        setBook((existingBook) => ({
          ...existingBook,
          name: value,
        }));
        console.log(book);
        break;
      case "writer":
        //setting writer property of object book
        setBook((existingBook) => ({
          ...existingBook,
          writer: value,
        }));
        console.log(book);
        break;
      case "price":
        //setting price property of object book
        setBook((existingBook) => ({
          ...existingBook,
          price: value,
        }));
        console.log(book);
        break;

      default:
        break;
    }
  };
  const AddBooks = (event) => {
    event.preventDefault();
    //updating bookArray by adding new book in list
    setBooks((previousBooks) => {
      return [...previousBooks, book];
    });
    console.log("------------------------");
    console.log(books);
  };

  return (
    <div>
      {
        <div>
          <table className="table table-bordered">
            <tr>
              <th>Name</th>
              <th>Writer</th>
              <th>Price</th>
            </tr>

            {books.map((book) => {
              return (
                <tr>
                  <td>{book.name}</td>
                  <td>{book.writer}</td>
                  <td>{book.price}</td>
                </tr>
              );
            })}
          </table>
        </div>
      }

      <form>
        <h1>Add New Book</h1>
        <label>NAME : </label>
        <input
          type="text"
          name="name"
          id="name"
          value={book.name}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Writer : </label>
        <input
          type="text"
          name="writer"
          id="writer"
          value={book.writer}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Price : </label>
        <input
          type="text"
          name="price"
          id="price"
          value={book.price}
          onChange={handleChange}
        />
        <br />
        <br />
        <button onClick={AddBooks}>add books</button>
      </form>
    </div>
  );
};
