import React from 'react';
import Booklist from './Component/Booklist';
import NavBar from './Component/NavBar';
import ContextApi from './ContextComponent/ContextApi';
import ThemeChanger from './Component/ThemeChanger';
import AuthContext from './ContextComponent/AuthContext';
import BookListContext from '../../ContextComponent/BasicContext/BookListContext';

const App = () => {
    return (
        <div className="App">
            <ContextApi>
            <AuthContext>
            <NavBar/>
 <BookListContext>
 <Booklist/>
 </BookListContext>
           

            <ThemeChanger/>
            </AuthContext>
            </ContextApi>

        </div>
    );
}

export default App;
