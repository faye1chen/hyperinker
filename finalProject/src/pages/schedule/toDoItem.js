import React, {Component} from "react";

class ToDoItem extends Component{
  constructor(props){
    super(props);
    this.state = {
      isHidden : true ,
      isCompleted : this.props.content.status
    }
  }

 
  render(){
  
    return(
      <li className= {String(this.state.isCompleted)} >
        <div onClick={this.detail.bind(this)}>{this.props.content.title}</div>
        <div hidden ={this.state.isHidden}>
          {/* detail of todo item */}
          <ul>
            <li>title: {this.props.content.title}</li>
            <li>discription: {this.props.content.discription}</li>
            <li>Is Complete:  {String(this.props.content.status)}</li>
            <li>due Date: {this.props.content.dueDate}</li>
            <li>due Time: {this.props.content.dueTime}</li>
            <li>create Data: {this.props.content.createdAt}</li>
            <li>Modify Data: {this.props.content.updatedAt}</li>
          </ul>
        </div>
        <button onClick={this.handleComplete.bind(this)}>Complete</button>
        <button onClick={this.handleClick.bind(this)}>Delete</button>
      </li>
    )
  }
  //show and hiden item detail
  detail(){
    console.log(this.props.content);
    if(this.state.isHidden === false){
      this.setState({
        isHidden : true
      })
    }
    if(this.state.isHidden === true){
      this.setState({
        isHidden : false
      })
    }
  }

  //change todo status to true
  handleComplete(){
    const id = this.props.content._id;
    const data = {"status" : true};
    // this.setState({isCompleted : true})
    // console.log("isComplete");
    // console.log(this.state.isCompleted)
    fetch("http://localhost:8080/todos/"+String(id), {
      method: "PUT",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(data => {
        window.location.reload(false);
      })
  }
  
//delete by id
  handleClick(){
    const id = this.props.content._id;
    console.log(id);
    fetch("http://localhost:8080/todos/"+String(id), {method: "DELETE"})
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // window.alert('DELETED TODO');
        window.location.reload(false);
      })
    
  }
}



export default ToDoItem;