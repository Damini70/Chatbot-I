import React from 'react';
import {FcManager } from "react-icons/fc";

function MyAvatar(props) {
    return (
        <div style={{marginRight:"1rem"}}>
           {/* < FcBusinesswoman style={{fontSize:"1.5rem"}}/> */}
           <img src={process.env.PUBLIC_URL + '/image/Pic.jpg'}  style={{ width:35,height:35 }} alt="Example" />

        </div>
    );
}

export default MyAvatar;