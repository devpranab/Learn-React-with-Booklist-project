import React, {Component, createRef} from "react";

class NewBook extends Component{
    constructor(props){
        super(props);
            this.bookName = createRef();
            this.writter = createRef();
            this.description = createRef();
            this.handleSubmit = this.handleSubmit.bind(this);
    }
    

// handleSubmit function start
handleSubmit = e => {
    console.log(this.bookName.current.value);
    console.log(this.writter.current.value);
    console.log(this.description.current.value);
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
                    <input type="text" name="bookName" ref={this.bookName}/>
                    <br/>
                    <label>Writter:</label>
                    <br/>
                    <input type="text" name="writte" ref={this.writter}/>
                    <br/>
                    <label>Description</label>
                    <br/>
                    <textarea type="text" name="description" ref={this.description}/>
                    <br/>
                    <input type="submit" value="submit"/>
                </form> 
    
            </div>
        )
    }
  
    
}

export default NewBook;