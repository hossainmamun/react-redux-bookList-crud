import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteBook_action } from '../Redux/action.js';
import Navigation from './Navigation.js';
import bookListImg from '../image/bookList.png'

const BookList = () => {
    const bookList = useSelector(state => state.initialBookListReducer.bookList);
    const dispatch = useDispatch();

    // delete book
    const handleBookDelete = (bookId) => {
        dispatch(deleteBook_action(bookId));
    }


    return (
        <div className='container'>
            <Navigation />

            {
                bookList.length === 0 ?
                    <div className='text-center my-5'>
                        <div className='my-5'>
                            <img src={bookListImg} className='img-fluid' alt={bookList} style={{ width: '800px', height: '400px' }} />
                        </div>

                        <h3>There are no books on the current list</h3>
                        <Link to="/add_book" style={{ textDecoration: 'none' }}>
                            <h5>Click here to Add book</h5>
                        </Link>
                    </div> :
                    <div className='text-center my-5'>
                        <h3>Book List</h3>
                        <h5>Total Books</h5>
                    </div>
            }

            {
                bookList.length !== 0 &&
                <div className="table-responsive">
                    <table className='table table-bordered'>
                        <thead>
                            <tr className='text-capitalize text-center'>
                                <th>no</th>
                                <th>book name</th>
                                <th>author</th>
                                <th colSpan="2">action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bookList.map((item, index) => {
                                    const { id, title, author } = item;
                                    return (
                                        <tr key={id} className="text-capitalize">
                                            <td>{index = index + 1}</td>
                                            <td>{title}</td>
                                            <td>{author}</td>
                                            <td className='text-center p-0'>
                                                <Link to="/edit_book" state={item} style={{ textDecoration: 'none' }}>
                                                    <div className="btn btn-info rounded-0 d-block">edit</div>
                                                </Link>
                                            </td>
                                            <td className='text-center p-0'>
                                                <div onClick={() => handleBookDelete(id)} className="btn btn-danger rounded-0 d-block">delete</div>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            }
        </div>
    );
};

export default BookList;