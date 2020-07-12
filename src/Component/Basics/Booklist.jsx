import React, { Component,useContext } from 'react';
import { ThemeContext } from '../../ContextComponent/BasicContext/ContextApi';
import BookListContext, { BookContx } from '../../ContextComponent/BasicContext/BookListContext';
/*
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
*/
/*
const BookList = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    return ( 
      <div className="book-list" style={{ color: theme.syntax, background: theme.bg }}>
        <ul>
          <li style={{ background: theme.ui }}>the way of kings</li>
          <li style={{ background: theme.ui }}>the name of the wind</li>
          <li style={{ background: theme.ui }}>the final empire</li>
        </ul>
      </div>
    );
  }
export default Booklist;
*/
const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  const {book}=useContext(BookContx);
  return ( 
    <div className="book-list" style={{ color: theme.syntax, background: theme.bg }}>
      <ul>
        {book.map(b=>{
          return (
          <li keys={b.id}  style={{ background: theme.ui }} >{b.title}</li>
          )
        })}
         </ul>
    </div>
  );
}
export default Booklist;