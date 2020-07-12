import React,{useContext} from 'react';
import { BookConGo } from '../../ContextComponent/HooksContext/BookContext';

const BookDetail = ({book}) => {
    const{DeleteBooks}=useContext(BookConGo)
    return (
        <li onClick={()=>DeleteBooks(book.id)}>
 <div className="title">{book.title}</div>
 <div className="author">{book.author}</div>
        </li>
    );
}

export default BookDetail;
