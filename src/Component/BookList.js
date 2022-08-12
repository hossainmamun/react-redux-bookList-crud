import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteBook_action } from "../Redux/action.js";
import Navigation from "./Navigation.js";
import bookListImg from "../image/bookList.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";

const BookList = () => {
  const bookList = useSelector(
    (state) => state.initialBookListReducer.bookList
  );
  const dispatch = useDispatch();

  // delete book
  const handleBookDelete = (bookId) => {
    dispatch(deleteBook_action(bookId));
  };

  return (
    <div className="container">
      <Navigation />

      {bookList.length === 0 ? (
        <div className="text-center my-5">
          <div className="my-5">
            <img
              src={bookListImg}
              className="img-fluid"
              alt={bookList}
              style={{ width: "800px", height: "400px" }}
            />
          </div>

          <h3>There are no books on the current list</h3>
          <Link to="/add_book" style={{ textDecoration: "none" }}>
            <h5>Click here to Add book</h5>
          </Link>
        </div>
      ) : (
        <div className="text-center my-5">
          <h3>Book List</h3>
          <h5>Total Books: {bookList.length}</h5>
        </div>
      )}

      {bookList.length !== 0 && (
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr className="text-capitalize text-center">
                <th>no</th>
                <th>Id</th>
                <th>book</th>
                <th>author</th>
                <th colSpan="2">actions</th>
              </tr>
            </thead>
            <tbody>
              {bookList.map((item, index) => {
                const { id, title, author } = item;
                return (
                  <tr key={id} className="text-capitalize">
                    <td className="text-center" style={{ width: "50px" }}>
                      {(index = index + 1)}
                    </td>
                    <td style={{ width: "150px" }}>{item.id}</td>
                    <td>{title}</td>
                    <td>{author}</td>
                    <td className="text-center p-0" style={{ width: "80px" }}>
                      <Link
                        to="/edit_book"
                        className="btn btn-primary rounded-0 d-block px-0"
                        state={item}
                        style={{ textDecoration: "none", cursor: "pointer" }}
                      >
                        <FontAwesomeIcon icon={faEdit} />
                      </Link>
                    </td>
                    <td className="text-center p-0" style={{ width: "80px" }}>
                      <div
                        onClick={() => handleBookDelete(id)}
                        className="btn btn-danger rounded-0 d-block px-0"
                      >
                        <FontAwesomeIcon icon={faTrashAlt} />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default BookList;
