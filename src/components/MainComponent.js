import React,{Component} from 'react';
import BookList from './lists/BookList.js';
import bookList from '../assets/BookState.js';
import NewBook from './representational/NewBook.js';
import {Route, Routes, NavLink, Navigate, Redirect} from 'react-router-dom';
import BookDetails from './representational/BookDetails.js';
import Page404 from './representational/Page404.js';

//Class component
class MainComponent extends Component{
  constructor(props){
    super(props);
    //State
    this.state = { 
      books: bookList,
      selectedBook: null
   }
}

//selectedBookHandler function
selectedBookHandler = bookId => { //receive
  const book = this.state.books.filter(book =>
    book.id === bookId)[0];
  this.setState({
    selectedBook: book //set after receive
  })

}

  render(){
    // Component list start
     const books = <BookList 
     books={this.state.books}
     selectedBookHandler={this.selectedBookHandler}/>
    // Component list end

    return(
      <div className='App'>
         <span>Learn React with  project</span>
         <nav className='nav-bar'>
          <ul>
            <li><NavLink to='/' activeclassname="active">Home</NavLink></li>
            <li><NavLink to='/new-book' activeclassname="active">New Book</NavLink></li>
          </ul>
        </nav> 
    
        <Routes>
        <Route path="/" element={books}/>
        <Route path="/new-book" element={<NewBook />}/>
        <Route path="/:id" element={<BookDetails book={this.state.selectedBook}/>}/>
        </Routes>

      </div>
    )
  }
}




export default MainComponent;
