import React,{useState,useContext} from 'react';
import { BookConGo } from '../../ContextComponent/HooksContext/BookContext';

const AddBooks = () => {
 const{dispatch}=useContext(BookConGo)
 const[title,setTitle]=useState('')
 const[author,setAuthor]=useState('');

    return (
        <form onSubmit={(e)=>{
            e.preventDefault();
            dispatch({type:'ADD_BOOK',book:{title,author}})
            setTitle('');
            setAuthor('')            }}>
            <input value={title}  type="text" placeholder="Add Book Name" onChange={e=>setTitle(e.target.value)}/>
            <input value={author}  type="text" placeholder="Add Book Author Name" onChange={e=>setAuthor(e.target.value)}/>
            <input type="submit" value="Click"/>
        </form>
    );
}

export default AddBooks;
