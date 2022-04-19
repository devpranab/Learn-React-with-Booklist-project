import React, { Component } from "react";
import Book from "../representational/Book";

//Book Component list(passing props)
class BookList extends Component {
  constructor(props){
    super(props);
    console.log("BookList constructor");
  }

  
// UNSAFE_componentWillMount(){
//   console.log("BookList componentWillMount");
// }
componentDidMount(){
  console.log("BookList componentDidMount");
}

//Component Update LifeCycle (by props) start
// UNSAFE_componentWillReceiveProps(nextProps){
//   console.log("U BookList componentWillReceiveProps", nextProps);
// }
shouldComponentUpdate(nextProps, nextState){
  console.log("U BookList shouldComponentUpdate", nextProps, nextState);
  return true;
}
// UNSAFE_componentWillUpdate(nextProps, nextState){
//   console.log("U BookList componentWillUpdate");
// }
componentDidUpdate(){
  console.log("U BookList componentDidUpdate");
}

// exchange of UNSAFE- updated method start
static getDerivedStateFromProps(nextProps, prevState){
  console.log("BookList getDerivedStateFromProps", nextProps, prevState);
  return prevState;
}
// exchange of UNSAFE- updated method end
//Component Update LifeCycle (by props) end

getSnapshotBeforeUpdate(){
  console.log("U BookList getSnapshotBeforeUpdate");
}

  render(){
    console.log("BookList render");
    return(
    this.props.books.map((book, index) =>{
        return(
         <Book bookName={book.bookName}
         writter={book.writter}
         delete={() => this.props.deleteBookState(index)}
         key={book.id}
         inputName={(e) => this.props.changeInputState(e, index)}/> //pass method in map - list
        )
      })
    );
}
}

export default BookList;