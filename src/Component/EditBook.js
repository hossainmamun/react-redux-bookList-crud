import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { updateBook_action } from "../Redux/action.js";
import Navigation from "./Navigation.js";

const EditBook = () => {
    const location = useLocation();
    console.log(location.state)
  const [id, setId] = useState(location.state.id);
  const [title, setTitle] = useState(location.state.title);
  const [author, setAuthor] = useState(location.state.author);
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const newBookInfo = {
    id,
    title,
    author,
  };

  // book information update
  const handleUpdateBookInfo = (e) => {
    e.preventDefault();
    dispatch(updateBook_action(newBookInfo));
    navigation("/book_list", { replace: true });
  };

  return (
    <div className="container">
      <Navigation />

      <div className="row justify-content-center mt-5">
        <div className="col-md-5">
          <div className="text-center text-capitalize">
            <h3 className="fw-bolder">Edit Book</h3>
            <p>ID: {id}</p>
          </div>
          <form onSubmit={handleUpdateBookInfo}>
            <div className="form-group my-3">
              <label>Book Name</label>
              <input
                type="text"
                name="title"
                id=""
                value={title}
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
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="form-control py-2 rounded-1"
                placeholder="Enter Author"
                required
              />
            </div>

            <input
              type="submit"
              className="btn btn-outline-primary py-2 px-4 rounded-1"
              value="Update"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditBook;
