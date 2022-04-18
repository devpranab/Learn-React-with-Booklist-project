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
    ]
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
    const books = this.state.books.map((book, index) =>{
      return(
       <Book bookName={book.bookName}
       writter={book.writter}
       delete={() => this.deleteBookState(index)}
       key={book.id}
       inputName={(e) => this.changeInputState(e, index)}/>
      )
    })
    // Component list end

    return(
      <div className='App'>
        <p>Learn React with  project</p>
        <h1 style={style}>BookList:</h1>

        {/* <button onClick={this.changeBookState.bind(this, "Nineteen")}>Change State</button> */}

        {/* <input type="text" onChange={this.changeInputState}/> */}

        {/* <Book bookName={this.state.books[0].bookName} writter={this.state.books[0].writter}/>
        <Book bookName={this.state.books[1].bookName} writter={this.state.books[1].writter}/>
        <Book bookName={this.state.books[2].bookName} writter={this.state.books[2].writter}
        change={() => this.changeBookState("Nine")} //pass method ref
        inputName={this.changeInputState}/> */}

        {books}
     
      </div>
    )
  }
}




export default App;
