import React from 'react';

function Budget(props) {
    function result(){
        alert("Thanks for the response. We will get back to you in 24 hours")
    }
    return (
        <div  style={{marginLeft:"2.5rem"}}>
           <button onClick={result}  style={{padding:"0.5rem",borderRadius:"1rem",cursor:"pointer"}}>50K to 1L</button>
           <button onClick={result}  style={{padding:"0.5rem",borderRadius:"1rem",cursor:"pointer"}}>1L to 3L</button>
           <button onClick={result}  style={{padding:"0.5rem",borderRadius:"1rem",cursor:"pointer"}}>3L to 5L</button>
           <button onClick={result}  style={{padding:"0.5rem",borderRadius:"1rem",cursor:"pointer"}}>5L above</button>
        </div>
    );
}

export default Budget;