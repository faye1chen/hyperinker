import { useState,useRef } from "react";
import "./update.scss";
import { useParams } from "react-router";

// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import CloudUploadIcon from "@mui/icons-material/CloudUpload";
// import { dataBinding } from "@syncfusion/ej2-react-schedule";

import { makeRequest } from "../../axios";

const Update = (data ) => {
    const formRef = useRef(null);
    const [texts, setTexts] = useState({
        email: data.email,
        desc: data.desc,
        username: data.username,
        city: data.city,
      });
      
    const {id} = useParams()
     
    const onUpdate=() =>{
      console.log(3333,formRef);
      const paramsList={
        email:formRef.current[0].value,
        desc:formRef.current[1].value,
        username:formRef.current[2].value,
        city:formRef.current[3].value
      }
      makeRequest.put(`users/${id}`,paramsList).then((res)=>{
        // console.log(res);
        // console.log(data.updateData);
        data.updateData(paramsList)
      });
    }
    const [userid,setuserId]=useState(useParams().id);


  return (
    <div className="update">
      <div className="wrapper">
        <h1>Update Your Profile</h1>
        <form  ref={formRef}>
          <label>Email</label>
          <input
            type="text"
            value={texts.email}
            name="email"
          />
          <label>Description</label>
          <input
            type="text"
            value={texts.desc}
            name="desc"
          />
          <label>Name</label>
          <input
            type="text"
            value={texts.username}
            name="username"
          />
          <label>City</label>
          <input
            type="text"
            name="city"
            value={texts.city}
          />
          </form>
          <div>
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
                 <button onClick={onUpdate} type="submit">Submit Picture</button>
             </div>
         </form>
     </div>
          <button onClick={onUpdate} >Update Profile</button>
        
        
      </div>
    </div>
  );
};

export default Update;