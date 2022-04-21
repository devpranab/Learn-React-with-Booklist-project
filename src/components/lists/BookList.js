import React, { Component } from "react";
import Book from "../representational/Book";
import {Link} from "react-router-dom";

//Book Component list(passing props)
class BookList extends Component {
 render(){
    return(
    this.props.books.map((book, index) =>{
        return(
          <Link to={"/" + book.id} key={book.id} style={{textDecoration: "none"}}>
         <Book bookName={book.bookName}
         writter={book.writter}
         key={book.id} //pass method in map - list
         selectedBookHandler={() => this.props.selectedBookHandler(book.id)}/>
        </Link>
        );
      })
    )
 }
}

export default BookList;