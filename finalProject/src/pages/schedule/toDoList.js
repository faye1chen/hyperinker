import React, {Component, Fragment} from "react";
import "./toDoList.scss"
import ToDoItem from "./toDoItem";

class TodoList extends Component{
//init the state
  constructor(props){
    super(props);
    this.state = {
      inputTitleValue: "",
      inputDiscription: "",
      inputDueData: "",
      inputDueTime: "",
      createData: "",
      modifyData: "",
      list: [],
      isHidden: true
    }
  }

  //get data from database
  componentDidMount() {
    fetch("http://localhost:8080/todos/", {method : "GET"})
    .then(res=>res.json())
    .then((data)=>{
      this.setState({list:data})
      console.log(data)
    }) 
    
  }

  //render DOM
  render(){
    return(
      <Fragment>
        <h1>You can schedule your daily work here.</h1>
        <div className="container">
        <button onClick={this.detail.bind(this)}>Add ToDo</button>
        {/* input!!! */}
        <div className="inputField" hidden = {this.state.isHidden}>
          
          <div>
            <label>Title: </label>
            <input 
              required
              type={"text"}
              value = {this.state.inputTitleValue}
              onChange = {this.handleInputTitle.bind(this)}
            />
          </div>

          <div>
            <label>Distcription: </label>
            <input 
              required
              type={"text"}
              value = {this.state.inputDiscription}
              onChange = {this.handleInputDiscription.bind(this)}
            />
          </div>  

          <div>
            <label>Due Data: </label>
            <input 
              required
              type={"date"}
              value = {this.state.inputDueData}
              onChange = {this.handleInputData.bind(this)}
            />
          </div>    

          <div>
            <label>Due Time: </label>
            <input 
              required
              type= {'time'}
              value = {this.state.inputDueTime}
              onChange = {this.handleInputTime.bind(this)}
            />
          </div>
          <button onClick={this.handleSubmitClick.bind(this)}>Submit</button>
        </div>
        </div>
        
        {/* to show list */}
        <ul>
          {
            this.state.list.map((item, index) => {
              return(
              <ToDoItem 
                key = {index}
                content = {item} 
                index = {index} 
              />
              )
            })
          }
        </ul>
      </Fragment>
    )
  }

  handleInputTitle(event){
    this.setState({
      inputTitleValue : event.target.value
    });
  }
  handleInputDiscription(event){
    this.setState({
      inputDiscription : event.target.value
    });
  }
  handleInputData(event){
    this.setState({
      inputDueData : event.target.value
    });
  }
  handleInputTime(event){
    this.setState({
      inputDueTime : event.target.value
    });
  }
    

  handleSubmitClick(){
    console.log("adddddddddd")
    console.log("state")
    console.log(this.state)
    const data = {
      "title": this.state.inputTitleValue,
      "discription" : this.state.inputDiscription,
      "dueDate" : this.state.inputDueData,
      "dueTime" : this.state.inputDueTime
    };
    console.log("data");
    console.log(data);
    fetch("http://localhost:8080/todos/", {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        window.location.reload(false);
      })
    // this.setState({
    //   inputTitleValue : "",
    //   inputDiscription: "",
    //   inputDueData: "",
    //   inputDueTime: "",
    // })
  }

  
  detail(){

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
}

export default TodoList;