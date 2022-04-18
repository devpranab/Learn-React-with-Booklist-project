import React, { Component } from "react";

//Dynamic functional component
//Person component
// const Person = props => {
//     //console.log(props);
//     return(
//       <div>
//         <h1>Person name:  {props.name} title: {props.title}</h1>
//         <h4>Extra info: {props.children}</h4>
//       </div>
//     );
//   }

//Class functional component
class Person extends Component{
    // constructor(props){
    //     super(props); //for access
    // }
    render(){
        console.log(this.props);
            return(
      <div>
        <h1>Person name:  {this.props.name} title: {this.props.title}</h1>
        <h4>Extra info: {this.props.children}</h4>
      </div>
    );
    }
}


  export default Person;