import React from 'react';
import SongList from "../src/Component/HooksComp/Song"
import NavCom from './Component/HooksProComp/NavCom';
import BookContext from './ContextComponent/HooksContext/BookContext';
import BookList from './Component/HooksProComp/BookList';
import AddBooks from './Component/HooksProComp/AddBooks';

const App = () => {
    return (
        <div className="App">
           <BookContext>
            <NavCom/>
            <BookList/>
            <AddBooks/>
            </BookContext>
        </div>
    );
}

export default App;
