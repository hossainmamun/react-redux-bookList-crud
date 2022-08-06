import React, { useState } from 'react';
import Navigation from './Navigation.js';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook_action } from '../Redux/action.js';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
    const id = uuidv4();
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const dispatch = useDispatch();
    const navigation = useNavigate();

    const bookInfo = {
        id, title, author
    }

    const handleBookInfoSubmit = (e) => {
        e.preventDefault();
        dispatch(addBook_action(bookInfo));
        navigation('/book_list', { replace: true });
    }

    return (
        <div>
            <Navigation />

            <div className='text-center text-capitalize my-5'>
                <h3>add new book</h3>
            </div>

            <div className="row justify-content-center">
                <div className="col-md-5 p-5" style={{ boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px' }}>
                    <form onSubmit={handleBookInfoSubmit}>
                        <div className="form-group my-3">
                            <input type="text" name="title" id="" onChange={(e) => setTitle(e.target.value)} className="form-control p-3" placeholder='Enter Book Name' required />
                        </div>

                        <div className="form-group my-3">
                            <input type="text" name="author" id="" onChange={(e) => setAuthor(e.target.value)} className="form-control p-3" placeholder='Enter Author' required />
                        </div>

                        <input type="submit" className='btn btn-success py-2 px-4' value="Add Book" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddBook;