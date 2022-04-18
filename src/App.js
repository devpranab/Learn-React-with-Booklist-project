import React,{Component} from 'react';
import './App.css';
//import Person from './components/Person';
import Book from './components/Book';

//Class component
class App extends Component{
  //State
  state = {
    books: [
      {id: 1, bookName: "Math", writter: "Pranav Sarkar"},
      {id: 2, bookName: "Computer", writter: "Dr. Subir Das"},
      {id: 3, bookName: "DSA", writter: "Dr. AK Ghos"}
    ],
    showBooks: true
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
  //const books = this.state.books.slice();
  //or
  //const books = this.state.books.map(item => item);
  //or
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


  render(){
    // let obj = new Component();//inheritance to Component
    // console.log(obj);

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
      books = this.state.books.map((book, index) =>{
        return(
         <Book bookName={book.bookName}
         writter={book.writter}
         delete={() => this.deleteBookState(index)}
         key={book.id}
         inputName={(e) => this.changeInputState(e, index)}/>
        )
      })
    }
    // Component list end

    return(
      <div className='App'>
        <p>Learn React with  project</p>
        <h1 style={style}>BookList:</h1>

        <button onClick={this.toggleBooks}>Toggle Books</button>

        {books}
        {/* conditional rendering */}
        {/* {this.state.showBooks ? books : null} */}
     
      </div>
    )
  }
}




export default App;
