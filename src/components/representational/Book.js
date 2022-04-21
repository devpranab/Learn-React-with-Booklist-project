import React from "react";
import "../../styles/Book.css";

//Book component
const Book = props => {
    return(
        <div className="bookStyle" onClick={props.selectedBookHandler}>
            <h2>BookName: {props.bookName} Writter: {props.writter}</h2>
        
        </div> 
    )
}

export default Book;