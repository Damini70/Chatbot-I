import React, { useEffect } from 'react';
import { useState } from 'react';

function Service(props) {
    const [show,setShow]=useState(true);
    const [service,setService]=useState([]);
    useEffect(()=>{
        const fetchApi = async () => {
            try {
              const response = await fetch(
                "https://chatapi.iotasonl.com/api/web/Master/Service_List",
                {
                  method: "POST"
                }
              );
              const data = await response.json();
            //   console.log(data);
              setService(data)
            //   console.log("service",service);
            } catch (error) {
              console.error(error);
            }
          };
          fetchApi();
        },[])
    function set(e){
        setShow(false)
       


    }
    return (
        <div style={{marginLeft:"2.5rem"}}>
            {show?<button style={{padding:"0.5rem",borderRadius:"1rem",cursor:"pointer"}} onClick={set}>Our Services</button>:<>{service.data.map((item)=>{
               return<> <button style={{padding:"0.5rem",borderRadius:"1rem",cursor:"pointer"}}>{item.service_name}</button></>
            })}</>}
        </div>
    );
}

export default Service;