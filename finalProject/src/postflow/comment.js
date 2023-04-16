import React, {Component,Fragment} from "react";
import { Form } from "react-router-dom";
import './styles/postFlow.scss';

class Comments extends Component{

  constructor(props){
    super(props); 
    this.state = {
      commentList : this.props.content.content.reply,
      newComment : "",
      id : this.props.content.content._id

    }
    this.addComment = this.addComment.bind(this);
    this.handleInput = this.handleInput.bind(this);

    // console.log("comment props")
    // console.log(this.props)
    // console.log(this.props.content.content._id)
    // console.log(this.state.commentList)
  }
  

  render(){
    return(
      <div className="comments">
        <div className="write">
          <input 
            type="text" 
            placeholder="write a comment"
            onChange={this.handleInput}
           />
          <div>
            {this.props.connent}
          </div>
          <button onClick={this.addComment} >Send Comment</button>
        </div>
      </div>
    )
  }



  handleInput(event){
    this.setState(
      {newComment : event.target.value}
    )
    // console.log(this.state.newComment)
  }

  addComment(){
    //const newCommentList = this.state.commentList.push(this.state.newComment)
    this.state.commentList.push(this.state.newComment)
    //console.log(newCommentList);
    const updatedData = {
      "reply" : this.state.commentList
    }
    const data = updatedData;
    fetch(`http://localhost:8080/posts/${this.state.id}`, {
      method: "PUT",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
      
      })
      .then(response => response.json())
      .then(data => {
        console.log("new comment list")
        console.log(data);
        window.location.reload(false);
      })
  }

}

export default Comments;