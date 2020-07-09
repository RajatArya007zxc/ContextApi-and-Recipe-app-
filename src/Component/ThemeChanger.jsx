import React, { Component } from 'react';
import { ThemeContext } from '../ContextComponent/ContextApi';

class ThemeChanger extends Component {
    static contextType=ThemeContext;
    render() {
        const{changer}=this.context
        return (
            <div>
                <button onClick={changer}>Change the look</button>
            </div>
        );
    }
}

export default ThemeChanger;
