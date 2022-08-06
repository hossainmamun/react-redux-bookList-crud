import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateBook_action } from '../Redux/action.js';
import Navigation from './Navigation.js';

const EditBook = () => {
    const location = useLocation();
    const [id, setId] = useState(location.state.id);
    const [title, setTitle] = useState(location.state.title);
    const [author, setAuthor] = useState(location.state.author);
    const dispatch = useDispatch();
    const navigation = useNavigate();

    const newBookInfo = {
        id, title, author
    }

    // book information update
    const handleUpdateBookInfo = (e) => {
        e.preventDefault();
        dispatch(updateBook_action(newBookInfo));
        navigation('/book_list', {replace: true});
    }

    return (
        <div>
            <Navigation />

            <div className='text-center text-capitalize my-5'>
                <h3>Edit Book Info</h3>
                <h5>Book Id: {id}</h5>
            </div>

            <div className="row justify-content-center">
                <div className="col-md-5 p-5" style={{ boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px' }}>
                    <form onSubmit={handleUpdateBookInfo}>
                        <div className="form-group my-3">
                            <input type="text" name="title" id="" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control p-3" placeholder='Enter Book Name' required />
                        </div>

                        <div className="form-group my-3">
                            <input type="text" name="author" id="" value={author} onChange={(e) => setAuthor(e.target.value)} className="form-control p-3" placeholder='Enter Author' required />
                        </div>

                        <input type="submit" className='btn btn-success py-2 px-4' value="Update" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditBook;