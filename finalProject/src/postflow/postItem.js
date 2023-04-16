import React, {Component,Fragment} from "react";

import './styles/postFlow.scss';
import Face5OutlinedIcon from '@mui/icons-material/Face5Outlined';
import { Link } from "react-router-dom";
import Comments from "./comment";
class PostItem extends Component{

  constructor(props){
    super(props);
    this.state = {
      commentList : this.props.content.reply,
      poster : this.props.content.poster
      
    }
    //console.log(this.state.commentList)
  }
    

  render(){
    return(
      //<div>test</div>
      <div className="postItem">
        <div className="userInfo">
          <Link to="person perfile">
            <div className="left">
              <Face5OutlinedIcon />
              <Link to={`/profile/639230efeff26bcf61915bc0`}>
                <span>{this.props.content.poster}</span>
              </Link>
            </div>
          </Link>
          {/* <div>
            <button className="right">FollowUser</button>
            <button className="right">AddtoMyCalender</button>
          </div> */}
        </div>
        <div className="postContextContainer">
          <div className="postContext">
            {this.props.content.content}
          </div>
          <div className="commentContainer">
            {this.state.commentList.map((comment, Item) => 
              {
                return(
                  
                  <div className="comment">{comment}</div>
                )
              }
            )}
          </div>

          <Comments
          content = {this.props}
          />
        </div>
      </div>
    ) 
  }
}

export default PostItem;