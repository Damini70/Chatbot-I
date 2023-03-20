import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


function NameForm() {
  const [email, setEmail] = useState('');
  const[address,setAddress]=useState('')
  const [no,setNo]=useState("");
  const[pass,setPass]=useState("")


  const handleC=(e)=>{
    setAddress(e.target.value)
  }
  const handle=(e)=>{
    setNo(e.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    sessionStorage.setItem('email_id',email);
    sessionStorage.setItem('address',address);
    sessionStorage.setItem('phone_no',no);
    sessionStorage.setItem("password",pass)
    
    const fetchApi=async()=>{
        try{
          await fetch("https://chatapi.iotasonl.com/api/web/UserRegistration/AddUserData",{    method: "POST",
   
          // Adding body or contents to send
                headers:{'Content-Type': 'application/x-www-form-urlencoded'},
                  body: new URLSearchParams(sessionStorage)}).then(response => response.json()).then((data)=>{
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
      fetchApi();

    console.log(sessionStorage);
    // toast.success(' Thanku for your Address, Email and Phone Number', {
    //     position: "top-center",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "light",
    //     });
    
  };
  const h=(e)=>{
    setPass(e.target.value)
  }

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div style={{marginLeft:"2.5rem"}}>
        <form onSubmit={handleSubmit}>
      
        
      <input type="email"  onChange={handleChange} placeholder="Email" required />
      <input type="address"  onChange={handleC} placeholder="Address" required />
      <input type="number"  onChange={handle} placeholder="Number" minLength={10} maxLength={10} required />
      <input type="password" onChange={h} placeholder="Password" required/>
  
    <input type="submit"/>
  </form>
    </div>
    
  );
}

export default NameForm;