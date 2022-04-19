import React,{Component} from 'react';
import BookList from './lists/BookList.js';
import bookList from '../assets/BookState.js';

//Class component
class MainComponent extends Component{
  constructor(props){
    super(props);
    //State
    this.state = { books: bookList,
      showBooks: true
   }
   console.log("MainComponent Constructor");
  }

//define as a method  not function
//changeInputState function start
changeInputState = (e, index) => {
  //filter index
 const book = {
   ...this.state.books[index]
 }
 //change
 book.bookName = e.target.value;
 //update
 const books = [...this.state.books];//cpoy
 books[index]  = book;
 this.setState({books:books})
}
//changeInputState function end

//deleteBookState function start
deleteBookState = index => {
  //bring
  const books = [...this.state.books];
  //hold
  books.splice(index, 1)
  //do uppdate
  this.setState({
    books: books
  })

}
//deleteBookState function end

//toggleBooks function start
toggleBooks = () => {
  this.setState({
    //conditional
    showBooks: !this.state.showBooks
  });

}
//toggleBooks function end

// UNSAFE_componentWillMount(){
//   console.log("MainComponent componentWillMount");
// }
componentDidMount(){
  console.log("MainComponent componentDidMount");
}

//Component Update LifeCycle (by state) start
shouldComponentUpdate(nextProps, nextState){
  console.log("U MainComponent shouldComponentUpdate", nextState, nextProps);
  return true;
}
// UNSAFE_componentWillUpdate(nextProps, nextState){
//   console.log("U MainComponent componentWillUpdate");
// }
componentDidUpdate(){
  console.log("U MainComponent componentDidUpdate");
}
//Component Update LifeCycle (by state) end

// exchange of UNSAFE- updated method start - after 16.3
static getDerivedStateFromProps(nextProps, prevState){
  console.log("MainComponent getDerivedStateFromProps", nextProps, prevState);
  return prevState;
}
// exchange of UNSAFE- updated method end

getSnapshotBeforeUpdate(){
  console.log("U MainComponent getSnapshotBeforeUpdate");
}

  render(){
    console.log("MainComponent render");

    //inline css
    const style = {
      border: "1px solid red",
      borderRadius: "5px",
      color: "white",
      backgroundColor: "black"
    }

    // Component list start
    //Conditional rendering
    let books = null;
    if(this.state.showBooks){
      books = <BookList books={this.state.books}
      deleteBookState={this.deleteBookState}
      changeInputState={this.changeInputState}/>
    }
    // Component list end

    return(
      <div className='App'>
        <span>Learn React with  project</span>
        <h1 style={style}>BookList:</h1>

        <button onClick={this.toggleBooks}>Toggle Books</button>

        {books}
      </div>
    )
  }
}




export default MainComponent;
