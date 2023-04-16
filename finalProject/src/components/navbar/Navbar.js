import "./navbar.scss"
import React, {Component, Fragment} from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import {Link} from "react-router-dom";


class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchInput : "",
      user : this.props.content,
      username : this.props.content.username,
      id : this.props.content._id
    }
    // this.handleInput = this.handleInput.bind(this);
    // this.searchPost = this.searchPost.bind(this);
    console.log(this.state.username);

    // console.log(this.props.onChange);
    // console.log(this.props.onClick);
  }



  render(){
    return(
      <div className='navbar'>
        <div className="left">
            <Link to ="/home" style={{textDecoration:"none"}}>
              <span>HYPERINKER</span>
            </Link>
        </div>

        <div className="search middle">
          {/* <span onClick={""}>MyPost</span>
          <span onClick={""}>FriendsPost</span> */}
          <input 
          type="text" 
          placeholder="Search..." 
          onChange = {this.props.onChange}
          />
          <button 
          onClick={this.props.onClick}
          ><SearchOutlinedIcon /></button>
        </div>

        <div className="right">
          <Link to={`/profile/${this.state.id}`}>
            <div className="user">
              {/* <img src="" alt=""/> */}
              <PersonOutlinedIcon/>
              <span>
                {this.state.username}
              </span>  
            </div>
          </Link>
        </div>
      </div>
    );
    }


};

export default Navbar;