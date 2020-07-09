import React, { Component } from 'react';
import { ThemeContext } from '../ContextComponent/ContextApi';

class NavBar extends Component {
    static contextType=ThemeContext;
    
    render() {
        const {isLightTheme,light,dark}= this.context;
        const theme=isLightTheme?light:dark;

        return (
            <div>
                <nav style={{color:theme.syntax,background:theme.ui}}>
                <h1>Context App</h1>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default NavBar;
