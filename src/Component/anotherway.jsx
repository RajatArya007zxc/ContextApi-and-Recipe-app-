import React, { Component } from 'react';
import { ThemeContext } from '../ContextComponent/ContextApi';

class NavBar extends Component {
   // static contextType=ThemeContext;
    
    render() {
       
        return (
            <ThemeContext.Consumer>{(context)=>{
                const {isLightTheme,light,dark}= context;
                const theme=isLightTheme?light:dark;
        
                return(
                   
                   
                <nav style={{color:theme.syntax,background:theme.ui}}>
                <h1>Context App</h1>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
         

                )
            }}
            
            </ThemeContext.Consumer>
        );
    }
}

export default NavBar;
