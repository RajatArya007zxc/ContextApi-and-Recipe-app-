import React, { Component, createContext } from 'react';

export const ThemeContext = createContext();

class ContextApi extends Component {
  state = {
    isLightTheme: true,
    light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
    dark: { syntax: '#ddd', ui: '#333', bg: '#555'}
  }
  themechanger=()=>{
      this.setState({isLightTheme:!this.state.isLightTheme})
  }
  render() { 
    return (
      <ThemeContext.Provider value={{...this.state,changer:this.themechanger}}>
          
      {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
 
export default ContextApi;