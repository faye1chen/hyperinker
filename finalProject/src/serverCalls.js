import axios from "axios";
import { useState } from "react";


// export const loginCall = (userCredential) => {
//   return async (dispatch, getState) => {
//     dispatch(LOGIN_START());
//     try {
//       const res = await axios.post("/login", userCredential);
//       dispatch(CLOGIN_SUCCESS(res.data));
//     } catch (error) {
//       dispatch(LOGIN_FAILURE());
//     }
//   }
// }


// export const loginCall = async (userCredential, dispatch) => {
//   dispatch({ type: "LOGIN_START" });
//   try {
//     const res = await axios.post("/login", userCredential);

//     dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
//   } catch (err) {
//    dispatch({ type: "LOGIN_FAILURE", payload: err });
//   }
// };

export let res = {};

export const loginCall = async (userCredential) => {
  
    res = await axios.post("/login", userCredential);
    console.log(res.data.username);
    
    return res;
    // if valid
    // return true
    // if not valid
    // return false
    console.log(res);
    //dispatch({ type: "LOGIN_SUCCESS", payload: res.data });

    //dispatch({ type: "LOGIN_FAILURE", payload: err });
    
};