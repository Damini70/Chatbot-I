import React,{useState} from 'react';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


function Address(props) {
    const[address,setAddress]=useState('')
    const [no,setNo]=useState("")
    const handleChange=(e)=>{
      setAddress(e.target.value)
    }
    const handle=(e)=>{
      setNo(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        sessionStorage.setItem('address', address);
        toast.success(' Thanku for your Address and Phone Number', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
            console.log(address+  no)
    }
    return (
        <div style={{marginLeft:"2.5rem"}}>
        <form onSubmit={handleSubmit}>
      
        
      <input type="address"  onChange={handleChange} placeholder="Address" required />
      <input type="number"  onChange={handle} placeholder="Number" minLength={10} maxLength={10} required />
  
  
    <input type="submit"/>
  </form>
    </div>
    );
}

export default Address;