import { hover } from '@testing-library/user-event/dist/hover';
import axios from "axios";
import React, { useEffect } from 'react';
import { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


function Form(props) {
    const [isOpen,setisOpen]=useState(false);
    const [user,setUser]=useState({full_name:'',email_id:'',phone_no:'',address:'',password:''});
  

    function form(){
        setisOpen(true);
        // console.log(isOpen)
        
    }
    function fill(e){
      e.preventDefault();
      setUser({ ...user, [e.target.name]: e.target.value })
    }   
    function submit(e){
        e.preventDefault();
       
        const fetchApi=async()=>{
          try{
            await fetch("https://chatapi.iotasonl.com/api/web/UserRegistration/AddUserData",{    method: "POST",
     
            // Adding body or contents to send
                  headers:{'Content-Type': 'application/x-www-form-urlencoded'},
                    body: new URLSearchParams(user)}).then(response => response.json()).then((data)=>{
                      if(data.status===true){
                        toast.success(' Thanku for the details', {
                          position: "top-center",
                          autoClose: 5000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                          theme: "light",
                          });
                      }else{
                        toast.error(data.msg, {
                          position: "top-center",
                          autoClose: 5000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                          theme: "light",
                          });
                      }
                    })

          }catch(err){
            // console.log(err);
          }
        }
        fetchApi();
    
        }
   
    return (
        <div style={{marginLeft:"2.5rem"}}>
          {
            isOpen?<div><form onSubmit={submit}>
            <input style={{padding:"0.3rem"}} type="text" placeholder='Name' name="full_name" value={user.full_name}  onChange={fill} required/><br/>
            <input style={{padding:"0.3rem"}}  type="number" placeholder='Phone Number' name="phone_no" maxLength="10" value={user.phone_no} onChange={fill} required></input><br/>
            <input style={{padding:"0.3rem"}} type="email" placeholder='Email' value={user.email_id} name="email_id" onChange={fill} required/><br/>
            <input style={{padding:"0.3rem"}} type="address" placeholder='Address' value={user.address} name="address" onChange={fill} required/>
            <input style={{padding:"0.3rem"}} type="password" placeholder='Password' value={user.password} name="password" onChange={fill} required/>
            <input type="submit" style={{cursor:"pointer"}} />
          
            </form>
           
          </div>: <button style={{padding:"0.5rem",borderRadius:"1rem",cursor:"pointer"}} onClick={form}>Enter Your Details</button>
          }
          <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
          
        </div>
    );
}

export default Form;