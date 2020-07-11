import React, { Component } from 'react';
import { ThemeContext } from '../ContextComponent/ContextApi';
import { AuthCon } from '../ContextComponent/AuthContext';

class NavBar extends Component {
   // static contextType=ThemeContext;
    
    render() {
       
        return (
            <AuthCon.Consumer>
            {(e)=>(
               
                <ThemeContext.Consumer>{(context)=>{
                    const {isAuth,verify}=e
                    const {isLightTheme,light,dark}= context;
                    const theme=isLightTheme?light:dark;
            
                    return(
                       
                       
                    <nav style={{color:theme.syntax,background:theme.ui}}>
                    <h1>Context App</h1>
                    <div onClick={verify}>
                        
                    {isAuth?'Logged In':'Logged Out'}
                    </div>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </nav>
             
    
                    )
                }}
                
                </ThemeContext.Consumer>

            )}
            </AuthCon.Consumer>

            
        );
    }
}

export default NavBar;
