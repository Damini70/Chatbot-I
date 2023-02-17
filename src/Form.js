import { hover } from '@testing-library/user-event/dist/hover';
import React from 'react';
import { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


function Form(props) {
    const [isOpen,setisOpen]=useState(false);
  

    function form(){
        setisOpen(true);
        console.log(isOpen)
        
    }
    function submit(e){
        e.preventDefault();
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
        setisOpen(false);
    }
   
    return (
        <div style={{marginLeft:"2.5rem"}}>
          {
            isOpen?<div><form onSubmit={submit}><input style={{padding:"0.3rem"}} type="text" placeholder='Name' required/><br/>
            <input style={{padding:"0.3rem"}}  type="number" placeholder='Phone Number' maxLength="10" required></input><br/>
            <input style={{padding:"0.3rem"}} type="email" placeholder='Email' required/><br/>
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