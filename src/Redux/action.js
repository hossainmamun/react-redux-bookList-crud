import { ADD_BOOK, DELETE_BOOK, INITIAL_BOOK_LIST, UPDATE_BOOK } from "./constant.js"


// INITIAL BOOK LIST ACTION
export const initialBookList_action = () => {
    return {
        type: INITIAL_BOOK_LIST
    }
}

// ADD BOOK ACTION
export const addBook_action = (book) => {
    return {
        type: ADD_BOOK,
        payload: book
    }
}

// DELETE BOOK ACTION
export const deleteBook_action = (id) => {
    return {
        type: DELETE_BOOK,
        payload: id
    }
}

// UPDATE BOOK ACTION
export const updateBook_action = (book) => {
    return {
        type: UPDATE_BOOK,
        payload: book
    }
}