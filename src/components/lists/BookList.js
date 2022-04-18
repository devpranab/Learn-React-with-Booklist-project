import React from "react";
import Book from "../representational/Book";

const BookList = props => {
  //console.log(props);
    return(
    props.books.map((book, index) =>{
        return(
         <Book bookName={book.bookName}
         writter={book.writter}
         delete={() => props.deleteBookState(index)}
         key={book.id}
         inputName={(e) => props.changeInputState(e, index)}/> //pass method in map - list
        )
      })
    );
}

export default BookList;