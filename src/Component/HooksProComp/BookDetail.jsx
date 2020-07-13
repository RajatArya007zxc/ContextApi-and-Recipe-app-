import React,{useContext} from 'react';
import { BookConGo } from '../../ContextComponent/HooksContext/BookContext';

const BookDetail = ({book}) => {
    const{dispatch}=useContext(BookConGo)
    return (
        <li onClick={()=>dispatch({type:'REMOVE_BOOK',id:book.id})}>
 <div className="title">{book.title}</div>
 <div className="author">{book.author}</div>
        </li>
    );
}

export default BookDetail;
