import React,{Component} from 'react';
import './App.css';
//import Person from './components/Person';
import Book from './components/Book';

//Class component
class App extends Component{
  //State
  state = {
    books: [
      {bookName: "Math", writter: "Pranav Sarkar"},
      {bookName: "Computer", writter: "Dr. Subir Das"},
      {bookName: "DSA", writter: "Dr. AK Ghos"}
    ]
  }

//define as a method  not function
//changeBookState function start
changeBookState = newBookAdd => {
  this.setState({
    books: [
      {bookName: newBookAdd, writter: "Pranav Sarkar"},
      {bookName: "Computer", writter: "Dr. Subir Das"},
      {bookName: "DSA", writter: "Dr. AK Ghos"}
    ]
  })
}
//changeBookState function start

//changeInputState function start
changeInputState = e => {
  this.setState({
    books: [
      {bookName: e.target.value, writter: "Pranav Sarkar"},
      {bookName: "Computer", writter: "Dr. Subir Das"},
      {bookName: "DSA", writter: "Dr. AK Ghos"}
    ]
  });
}
//changeInputState function end


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

    return(
      <div className='App'>
        <p>Learn React with  project</p>
        <h1 style={style}>BookList:</h1>

        <button onClick={this.changeBookState.bind(this, "Nineteen")}>Change State</button>

        <input type="text" onChange={this.changeInputState}/>

        <Book bookName={this.state.books[0].bookName} writter={this.state.books[0].writter}/>
        <Book bookName={this.state.books[1].bookName} writter={this.state.books[1].writter}/>
        <Book bookName={this.state.books[2].bookName} writter={this.state.books[2].writter}
        change={() => this.changeBookState("Nine")} //pass method ref
        inputName={this.changeInputState}/>
     
      </div>
    )
  }
}




export default App;
