import React,{useContext} from 'react';
import { BookConGo } from '../../ContextComponent/HooksContext/BookContext';

const NavCom = () => {
    const {books} = useContext(BookConGo);
    return (
        <div className="navbar">
            <h1>The Books & Author</h1>
    <p>the total books is {books.length}</p>
        </div>
    );
}

export default NavCom;
