import React, { Component } from 'react';
import { ThemeContext } from '../../ContextComponent/BasicContext/ContextApi';
import { AuthCon } from '../../ContextComponent/BasicContext/AuthContext';
/*
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
*/
const Navbar = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const { isAuth, verify } = useContext(AuthCon);
    const theme = isLightTheme ? light : dark;
    return (
      <nav style={{ background: theme.ui, color: theme.syntax }}>
        <h1>Context App</h1>
        <div onClick={() => verify()}>
          { isAuth ? 'Logged in' : 'Logged out' }
        </div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    );
  }
export default NavBar;
