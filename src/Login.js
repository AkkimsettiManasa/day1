import { useRef, useState } from "react";
function Qi(){
    const nameRef=useRef(null);
    const passwordRef=useRef(null);
    const [loginMsg,setMessage]=useState('');
    const formSubmit= (event) => {
        event.preventDefault();
        if(nameRef.current.value===passwordRef.current.value){
            setMessage("correct");
        }
        else{
            setMessage("Incorrect");
        }

    }
    return(
        <div className="card" style={{align:'center',width:'300px',padding:'20px'}}>
            <h1>Login</h1>
            <p>Enter your details</p>
            <form onSubmit={formSubmit} style={{display:'flex',flexDirection:'column',gap:'10px'}}>
                <label>Name</label>
                <input type="text" ref={nameRef} placeholder="Enter your name"/><br></br>
                <label>Password</label>
                <input type="password" ref={passwordRef} placeholder="Password"/>
                <button type="submit">Submit</button>
                <p>{loginMsg}</p>
            </form>
        </div>
    );
}
export default Qi;