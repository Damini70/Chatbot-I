import React from 'react';
import { useState } from 'react';

function Service(props) {
    const [isDisable,setisDisable]=useState(false)
    function set(e){
        console.log(e.target.innerText);
        setisDisable(true)

    }
    return (
        <div style={{marginLeft:"2.5rem"}}>
            <button disabled={isDisable} style={{padding:"0.5rem",borderRadius:"1rem",cursor:"pointer"}} onClick={set}>Custom&W/Web</button><br/>
            <button disabled={isDisable} style={{padding:"0.5rem",borderRadius:"1rem",cursor:"pointer"}} onClick={set}>IOT</button>
            <button disabled={isDisable} style={{padding:"0.5rem",borderRadius:"1rem",cursor:"pointer"}} onClick={set}>Automation</button>
            <button disabled={isDisable} style={{padding:"0.5rem",borderRadius:"1rem",cursor:"pointer"}} onClick={set}>TurnKeyProject</button>
            <button disabled={isDisable} style={{padding:"0.5rem",borderRadius:"1rem",cursor:"pointer"}} onClick={set}>Other Services</button>
        </div>
    );
}

export default Service;