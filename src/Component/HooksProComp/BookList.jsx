import React,{useContext} from 'react';
import { BookConGo } from '../../ContextComponent/HooksContext/BookContext';
import BookDetail from './BookDetail';

const BookList = (props) => {
 const {books}=useContext(BookConGo);
    return books.length?(
        <div className="book-list">
            <ul>
                {books.map(book=>{
                    return (<BookDetail book={book} key={book.id}/>)
                })}
            </ul>

        </div>
    ):(
        <div className="empty">
        No Books Are There
        </div>
    )
}

export default BookList;
