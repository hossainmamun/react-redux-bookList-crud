import React, { useState } from "react";
import Navigation from "./Navigation.js";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addBook_action } from "../Redux/action.js";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const bookId = uuidv4();
  const id = bookId.slice(0, 8);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const bookInfo = {
    id,
    title,
    author,
  };

  const handleBookInfoSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook_action(bookInfo));
    navigation("/book_list", { replace: true });
  };

  return (
    <div className="container">
      <Navigation />

      <div className="row justify-content-center mt-5">
        <div className="col-md-5">
          <div className="text-center text-capitalize">
            <h3 className="fw-bolder">add new book</h3>
          </div>
          <form onSubmit={handleBookInfoSubmit}>
            <div className="form-group my-3">
              <label>Book Name</label>
              <input
                type="text"
                name="title"
                id=""
                onChange={(e) => setTitle(e.target.value)}
                className="form-control py-2 rounded-1"
                placeholder="Enter Book Name"
                required
              />
            </div>

            <div className="form-group my-3">
              <label>Author Name</label>
              <input
                type="text"
                name="author"
                id=""
                onChange={(e) => setAuthor(e.target.value)}
                className="form-control py-2 rounded-1"
                placeholder="Enter Author Name"
                required
              />
            </div>

            <input
              type="submit"
              className="btn btn-outline-success py-2 px-4 rounded-1"
              value="Add Book"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
