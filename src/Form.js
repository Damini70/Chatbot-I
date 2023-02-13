import React from 'react';
import { useState } from "react";

function Form(props) {
    const [isOpen,setisOpen]=useState(false);
    function form(){
        setisOpen(true);
        console.log(isOpen)
        
    }
    function submit(e){
        e.preventDefault();
        alert("Thanks for the details.")
        setisOpen(false);
    }
   
    return (
        <div style={{marginLeft:"2.5rem"}}>
          {
            isOpen?<div><form onSubmit={submit}><input type="text" placeholder='Name' required/><br/>
            <input type="number" placeholder='Phone Number' maxLength="10" required></input><br/>
            <input type="email" placeholder='Email' required/><br/>
            <input type="submit"/>
            </form></div>: <button style={{padding:"0.5rem",borderRadius:"1rem",cursor:"pointer"}} onClick={form}>Enter Your Details</button>
          }
          
        </div>
    );
}

export default Form;