import { ADD_BOOK, DELETE_BOOK, INITIAL_BOOK_LIST, UPDATE_BOOK } from "../constant.js";

const initialState = {
    bookList: []
}

// reducer function
// action list = INITIAL_BOOK_LIST, ADD_BOOK, DELETE_BOOK, UPDATE_BOOK, 
export const initialBookList_reducer = (state = initialState, action) => {
    switch (action.type) {
        
        case INITIAL_BOOK_LIST:
            return {
                ...state
            }

        case ADD_BOOK:
            const pushBook = state.bookList.push(action.payload);
            return {
                ...state,
                pushBook,
            }

        case DELETE_BOOK:
            const delete_id = action.payload;
            const deleteBook = state.bookList.filter(item => item.id !== delete_id);
            return {
                ...state,
                bookList: deleteBook
            }

        case UPDATE_BOOK:
            const { id, title, author } = action.payload;
            const updateBook = state.bookList.filter(item => item.id === id);
            if (updateBook) {
                updateBook[0].title = title;
                updateBook[0].author = author;
            }

            return {
                ...state,
                updateBook
            }

        default:
            return state;
    }
}
