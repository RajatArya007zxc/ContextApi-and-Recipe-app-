import React, { Component } from 'react';
import { ThemeContext } from '../ContextComponent/ContextApi';

class Booklist extends Component {
    static contextType=ThemeContext;
    render() {
        const {isLightTheme,light,dark}= this.context;
        const theme=isLightTheme?light:dark;

        return (
            <div className="book-list" style={{background:theme.bg,
            color:theme.syntax}}>
                <ul>
                    <li style={{background:theme.ui}} >First Book</li>
                    <li style={{background:theme.ui}}>SEcond Book</li>
                    <li style={{background:theme.ui}}> Third Book</li>
                </ul>
            </div>
        );
    }
}

export default Booklist;
