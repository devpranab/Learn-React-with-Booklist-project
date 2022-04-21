import React, {Component} from "react";

class NewBook extends Component{
    constructor(props){
        super(props);
        this.state = {
            bookName: "",
            writter: "",
            description: ""
        }
        // binding
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

// handleInputChange function start
handleInputChange = e => {
    // console.log(e.target);
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
        [name]: value
    })
}
// handleInputChange function end

// handleSubmit function start
handleSubmit = e => {
    console.log(this.state);
    e.preventDefault();
}
// handleSubmit function end

    render(){
        return(
            <div>
                <h1>New book entry</h1>
                  <form onSubmit={this.handleSubmit}> 
                    <label>Book Name:</label>
                    <br/>
                    <input type="text" name="bookName" value={this.state.bookName}
                    onChange={this.handleInputChange}/>
                    <br/>
                    <label>Writter:</label>
                    <br/>
                    <input type="text" name="writter" value={this.state.writter}
                    onChange={this.handleInputChange}/>
                    <br/>
                    <label>Description</label>
                    <br/>
                    <textarea type="text" name="description" value={this.state.description}
                    onChange={this.handleInputChange}/>
                    <br/>
                    <input type="submit" value="submit"/>
                </form> 
    
            </div>
        )
    }
  
    
}

export default NewBook;