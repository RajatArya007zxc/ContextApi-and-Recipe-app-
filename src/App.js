import React from 'react';
import Booklist from './Component/Booklist';
import NavBar from './Component/NavBar';
import ContextApi from './ContextComponent/ContextApi';
import ThemeChanger from './Component/ThemeChanger';

const App = () => {
    return (
        <div className="App">
            <ContextApi>
            <NavBar/>
            <Booklist/>
            <ThemeChanger/>
            </ContextApi>

        </div>
    );
}

export default App;
