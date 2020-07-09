import React, { Component } from 'react';
import { createContext } from 'react';
export const AuthCon=createContext();

class AuthContext extends Component {
    state={
        isAuth:false
    }
    Checkauth=()=>{
        this.setState({isAuth:!this.state.isAuth})
    }
    render() {
        return (
           <AuthCon.Provider value={{...this.state,verify:this.Checkauth}}>
 {this.props.children}
           </AuthCon.Provider>
        );
    }
}

export default AuthContext;
