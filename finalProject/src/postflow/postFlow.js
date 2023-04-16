//import logo from './logo.svg';
import './styles/postFlow.scss';
import React, {Component,Fragment} from "react";
import PostItem from './postItem';
import { Link } from 'react-router-dom';
import { res } from '../serverCalls';

//import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
//import NavBar from './navBar';
import Navbar from '../components/navbar/Navbar';




class PostFlow extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      postList: [],
      newPostHidden : true,
      newPostContent : "",
      user : res,
      searchContext : "",
      currentUser : JSON.parse(localStorage.getItem("USERINFO"))
    }
    //console.log(localStorage.getItem("USERINFO"));
    // this.setState ({thisUser : localStorage.getItem("USERINFO")});
    // console.log(this.state.currentUser);
    // console.log(this.state.currentUser.username);

    // console.log("loginCall");
    //  console.log(res)
    //  console.log(this.state.user.data);
    //  console.log(this.state.user.data.username);

    this.showNewPostInput = this.showNewPostInput.bind(this);
    this.postSubmittion = this.postSubmittion.bind(this);
    this.handleInputBox = this.handleInputBox.bind(this);
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.searchPost = this.searchPost.bind(this);
    
  }


  componentDidMount() {
    fetch("http://localhost:8080/posts/", {method : "GET"})
    .then(res=>res.json())
    .then((data)=>{
      this.setState({postList:data})
      console.log(this.state.postList)
      document.title = "Magic App. Hyperinker"
    })  
  }

  render(){
 
    return (
      

      <Fragment>
        <Navbar
        onClick = {this.searchPost}
        onChange = {this.handleSearchInput}
        content = {this.state.currentUser}
        />


        <div id='newPost'>
          <button id='newPostButton' onClick={this.showNewPostInput}>NewPost</button>
          <div className="inputField" hidden = {this.state.newPostHidden}>
            <div>
              <textarea 
                content = {this.state.newPostContent}
                onChange = {this.handleInputBox}
                type = "textarea" 
                placeholder = "Post Something..."
              />
            </div>
            <button onClick={this.postSubmittion}>Submit</button>
          </div>
        </div>

        <div className='postContainer'>
        {
          this.state.postList.map((postItem, index) => {
            return(
              <PostItem 
                index = {index}
                content = {postItem}
                key = {`postItem${index}`}
                currentUser = {this.state.currentUser}
              />
            )
          })
        }
            {/* <PostItem /> */}
        </div>
      </Fragment>
    );
  }
  searchPost(){
    const toSearch = this.state.searchContext;
    console.log("toSearch.........."); 
    console.log(toSearch);
    fetch(`http://localhost:8080/posts?search=${toSearch}`, {method: "GET",})
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState(
          {postList : data}
        )

    //    window.location.reload(false);      
      })
  }

  showNewPostInput(){
    if(this.state.newPostHidden === false){
      this.setState({newPostHidden : true})
    }
    if(this.state.newPostHidden === true){
      this.setState({newPostHidden : false})
    }
  }

  handleSearchInput(event){
    this.setState(
      {searchContext : event.target.value}
    )
    console.log(this.state.searchContext)
  }

  handleInputBox(event){
    this.setState(
      {newPostContent : event.target.value}
    )
  }

  postSubmittion(){
    const toPost = {
      "content" : this.state.newPostContent,
      "poster" : this.state.currentUser.username
    }
    const data = toPost;
    fetch("http://localhost:8080/posts/", {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        console.log(this.state.postList);
        this.state.postList.push(data)
        this.setState(
          {postList : this.state.postList}
        )
        // window.location.reload(false);
      })
  }

}
export default PostFlow;

