
import React,{ createContext,useState } from 'react';
import uuid from 'react-uuid';

export const BookConGo=createContext();

const BookContext = (props) => {

    const[books,setbooks]=useState([{title:"the wings of fire",author:"Abdul Kalam",id:1},{
        title:"the Vinci Code",author:"unknown",id:2
    }])

    const AddBook=(t,a)=>{
        return setbooks([...books,{title:t,author:a,id:uuid()}])
    }
    const DeleteBooks=(id)=>{
       setbooks( books.filter(b=>b.id !=id))
    }
    return (
       // <BookConGo.Provider value={{...books,ForAdd:AddBooks,ForDel:DeleteBooks}}>
        <BookConGo.Provider value={{books,AddBook,DeleteBooks}}>
{props.children}
        </BookConGo.Provider>
        
    );
}

export default BookContext;
