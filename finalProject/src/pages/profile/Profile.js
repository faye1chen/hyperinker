import "./profile.scss";
import PlaceIcon from "@mui/icons-material/Place";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
//import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import axios from "axios";
// import { useLocation } from "react-router-dom";
import { useEffect,useState } from "react";
// import { AuthContext } from "../../context/authContext";
import { useParams } from "react-router";
import PostFlow from "../../postflow/postFlow";
// import Navbar from "../../components/navbar/Navbar";
// import LeftBar from "../../components/leftBar/LeftBar";
import Update from "../../components/update.js/Update";



const Profile =() => {


    const[followText,setfollowText]=useState("unfollow");

    const [picdata, setpicData] = useState([]);
    useEffect(() => {
    axios
      .get("http://localhost:8080/userImages")
      .then((res) => setpicData(res.data))
      .catch((err) => console.log(err, "it has an error"));
  });

        // const [user, setUser] = useState({});
    // const username = useParams().username;
  
    // useEffect(() => {
    //   const fetchUser = async () => {
    //     const res = await axios.get(`/users`);
    //     setUser(res.data);
    //   };
    //   fetchUser();
    // }, [username]);

    const [openUpdate,setOpenUpdate] = useState(false);
    const [ishidden, setHidden] = useState(true);
    //const { currentUser } = useContext(AuthContext);

    const {id} = useParams()
    const {currentUser} = JSON.parse(localStorage.getItem("USERINFO"))
    
    const [data,setData] = useState({city:"",email:"",name:"",desc:""});
    const [userid, setuserId] = useState(useParams().id);
    useEffect(()=>{
        makeRequest.get(`/users/${id}`).then((res)=>{
            console.log(res);
            setData(res.data)
        });
    },[]);

    const OpenUpdateModel=()=>{
        console.log("update");
        setOpenUpdate(true)
    }
    
    const handleImage=()=>{
        return(<div>
            <form class="mt-4" action="http://localhost:8080/userImages" 
         method="POST" enctype="multipart/form-data">
             
             <div>
                 {/* <label for="name">Image Name</label>
                 <input type="text" id="name" placeholder="Name"
                      name="name" required/> */}
             </div>
             
             <div>
                 <label for="image">Upload Image</label>
                 <input type="file" id="image"
                     name="image"  required/>
             </div>
             <div>
                 <button type="submit">Submit</button>
             </div>
         </form>
     </div>)
    }

    

    const handleClick =() => {
        setfollowText(prev => prev === "follow" ? "unfollow" : "follow");
    };

    const onUpdate=(data)=>{
        console.log(data);
        setData(data)
    }

    const updateHidden = () => {
        if(ishidden === true){
            setHidden(false)
        }
        if(ishidden === false){
            setHidden(true)
        }
    }



    return(
        <div className='profile'>

        {/* <Navbar/> */}
             

            

            <div className="images">
            <img
                src="https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
                className="cover"
            />
            <img
                src="https://images.pexels.com/photos/14028501/pexels-photo-14028501.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                alt=""
                className="profilePic"
            />

                {/* <img src="../../assets/1.jpeg" alt="" className="cover" />
                <img src="../../https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600/2.jpeg" alt="" className="profilePic" />
                 */}
                {picdata.map((singleData) => {
                    const base64String = btoa(
                        String.fromCharCode(...new Uint8Array(singleData.img.data.data))
                    );
                    return <img src={`data:image/png;base64,${base64String}`} width="500" className="profilePic"/>
                })}
            </div>
            <div className="profileContainer">
                <div className="uInfo">
                    <div className="left">
                    <div className="info">
                            <div className="item">
                                <PlaceIcon/>
                                <span>{data.city}</span>
                            </div>
                            <div className="item">
                                <span>email:</span>
                                <span>{data.email}</span>
                            </div>
                        </div>
                    </div>
                    <div className="center">
                        <p>{data.username}</p>
                        <span>{data.desc}</span>
                        {/* <button>update</button> */}

                    {/* {userid === currentUser.id 
                    ? ( <button>update</button>)
                    :( */}
                    <button onClick={handleClick}>{followText}</button>
                     {/* )}as */}
                    </div>
                    <div className="right">
                        <EmailOutlinedIcon/>
                        <MoreVertIcon onClick={updateHidden}/>
                    </div>
                </div>
                <div hidden = {ishidden}>

                    <Update updateData={onUpdate}/>

                </div>
                <PostFlow/>
            </div>
        </div>
    );
};

export default Profile