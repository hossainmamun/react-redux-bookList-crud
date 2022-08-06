import React from 'react';
import { Link } from 'react-router-dom';
import '../Scss/Style.scss';

const Navigation = () => {
    return (
        <div id='navigation' className='container'>
            <div className="row">
                <div className="col-md-6 p-0">
                    <Link to="/book_list" style={{ textDecoration: 'none' }}>
                        <button className='btn btn-success w-100 d-block rounded-0 py-3'>Books List</button>
                    </Link>
                </div>

                <div className="col-md-6 p-0">
                    <Link to="/add_book" style={{ textDecoration: 'none' }}>
                        <button className='btn btn-primary w-100 d-block rounded-0 py-3'>Add Book</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navigation;