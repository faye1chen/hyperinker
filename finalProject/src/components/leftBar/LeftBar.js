import "./leftBar.scss";
import {Link} from "react-router-dom";
import Img1 from '../../assets/1.jpeg';
import Img2 from '../../assets/profile.jpeg'
import { AuthContext } from "../../context/authContext";
import axios from "axios";
import { useContext, useEffect, useState } from "react";

const LeftBar =() => {

    // const [friends, setFriends] = useState([]);
    // const { user: currentUser, dispatch } = useContext(AuthContext);


    // useEffect(() => {
    //     const getFriends = async () => {
    //       try {
    //         const friendList = await axios.get("/users/friends/" + user._id);
    //         setFriends(friendList.data);
    //       } catch (err) {
    //         console.log(err);
    //       }
    //     };
    //     getFriends();
    //   }, [user]);


    return(
        <div className='leftBar'>
            <div className="container">


                    <div className="luckNumber">
                        <Link to="/horoscope">
                        <h3>My horoscope</h3>
                        </Link>
                    </div>
                <hr/>

                <div className="item">
                    <h3>Friend List</h3>

                    <div className="user">
                        <div className="userInfo">
                            <img
                                src="https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                                alt=""
                                />
                            <div className="online">
                            <p>
                <span>Jane Doe</span> 
              </p>                            </div>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img
                                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                alt=""
                                />
                            <div className="online">
                                <p>Tommy</p>
                            </div>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img
                                src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                alt=""
                                />
                            <div className="online">
                                <p>Kate</p>
                            </div>
                        </div>
                    </div>

                    <div className="user">
                        <div className="userInfo">
                            <img
                                src={Img2}
                                alt=""
                                />
                            <div className="online">
                                <p>May</p>
                            </div>
                        </div>
                    </div>

                    <div className="user">
                        <div className="userInfo">
                            <img
                                src={Img2}
                                alt=""
                                />
                            <div className="online">
                                <p>Smith</p>
                            </div>
                        </div>
                    </div>

                    <div className="user">
                        <div className="userInfo">
                            <img
                                src={Img1}
                                alt=""
                                />
                            <div className="online">
                                <p>Jerry</p>
                            </div>
                        </div>
                    </div>

                    <div className="user">
                        <div className="userInfo">
                            <img
                                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                alt=""
                                />
                            <div className="online">
                                <a href="http://localhost:3000/profile/63925400c6811e7ff7153a44">Ketty</a>
                            </div>
                        </div>
                    </div>

                </div>  
            </div> 
        </div>


    );
};

export default LeftBar