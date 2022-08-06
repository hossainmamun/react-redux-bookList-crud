import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import BookList from "./Component/BookList.js";
import AddBook from './Component/AddBook.js';
import EditBook from "./Component/EditBook.js";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="book_list" element={<BookList />} />
        <Route path="add_book" element={<AddBook />} />
        <Route path="edit_book" element={<EditBook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
