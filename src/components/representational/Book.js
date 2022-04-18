import React from "react";
import "../../styles/Book.css";

//Book component
const Book = props => {
    return(
        <div className="bookStyle">
            <h2 onClick={props.delete}>BookName: {props.bookName} Writter: {props.writter}</h2>
            <input type="text" onChange={props.inputName} value={props.bookName}/>
        </div> 
    )
}

export default Book;