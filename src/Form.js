// import { hover } from '@testing-library/user-event/dist/hover';
// import axios from "axios";
import React, { useEffect } from 'react';
import { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


function Form(props) {
  
    const [isOpen,setisOpen]=useState(false);
    const [name, setName] = useState('');

    const user={full_name:'',email_id:'',phone_no:'',address:'',password:''}

    // function form(){
    //     setisOpen(true);
    //     // console.log(isOpen)
        
    // }
    function fillName(e){
      e.preventDefault();
      setName(e.target.value)
    }   
    function submit(e){
        e.preventDefault();
        toast.success(' Thanku for your name', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
       sessionStorage.setItem('full_name', name);
       console.log(sessionStorage)
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
        // fetchApi();
    
        }
   
    return (
        <div style={{marginLeft:"2.5rem"}}>
        <form onSubmit={submit}>
          <input type="text" onChange={fillName} placeholder="Name" required></input>
          <input type="submit"></input>
        </form>
         
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