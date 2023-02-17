import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function Budget(props) {
    function result(){
        toast.success(' Thanku for the response. We will get back to you in 24 hours.', {
            position: "top-center",
            autoClose: 10000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        
    }
    return (
        <div  style={{marginLeft:"2.5rem"}}>
           <button onClick={result}  style={{padding:"0.5rem",borderRadius:"1rem",cursor:"pointer"}}>50K to 1L</button>
           <button onClick={result}  style={{padding:"0.5rem",borderRadius:"1rem",cursor:"pointer"}}>1L to 3L</button>
           <button onClick={result}  style={{padding:"0.5rem",borderRadius:"1rem",cursor:"pointer"}}>3L to 5L</button>
           <button onClick={result}  style={{padding:"0.5rem",borderRadius:"1rem",cursor:"pointer"}}>5L above</button>
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

export default Budget;