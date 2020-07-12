import React,{createContext,useState} from 'react';

export const BookContx=createContext();
const BookListContext = (props) => {
    const[book,setBook]=useState([{title:"the wings of fire",id:1},{
        title:"I done nothing",id:2},{title:"the Witcher",id:3},{title:"the Vinci Code",id:4}
    ])


    return (
       <BookContx.Provider value={{book}}>
           {props.children}

       </BookContx.Provider>
    );
}

export default BookListContext;
