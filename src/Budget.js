import React,{useEffect,useState} from 'react';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function Budget(props) {
    const [budget,setBudget]=useState([]);
    const [show,setShow]=useState(false);
    useEffect(()=>{
        const fetchApi = async () => {
            try {
              const response = await fetch(
               "https://chatapi.iotasonl.com/api/web/Master/Budget_List",
                {
                  method: "POST"
                }
              );
              const data = await response.json();
              console.log(data);
              setBudget(data.data);
              console.log("service",budget);
            } catch (error) {
              console.error(error);
            }
          };
          fetchApi();
        },[])

        function list(){
          setShow(true)
        }
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
         
     {show?<>{budget.map((item)=>{
            return  <><button onClick={result}  style={{padding:"0.5rem",borderRadius:"1rem",cursor:"pointer"}}>{item.budget_name}</button></> 
        })}</>:<> <button onClick={list}  style={{padding:"0.5rem",borderRadius:"1rem",cursor:"pointer"}}>Our Budget</button></>} 
       
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