import React from 'react';
import SongList from "../src/Component/HooksComp/Song"
import NavCom from './Component/HooksProComp/NavCom';
import BookContext from './ContextComponent/HooksContext/BookContext';
const App = () => {
    return (
        <div className="Ap">
           <BookContext>
            <NavCom/>
            </BookContext>
        </div>
    );
}

export default App;
