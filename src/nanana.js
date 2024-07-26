import { useRef, useState } from "react";
function Ten(){
    const collegeRef=useRef(null);
    const passwordRef=useRef(null);
    const [loginMsg,setMsg]=useState('');
    const formSubmit= (event) => {
        event.preventDefault();
        if(collegeRef.current.value===passwordRef.current.value){
            setMsg("correct")
        }
        else{
            setMsg("Incorrect")
        }

    }
    return(
        <div className="card" style={{align:'center',width:'300px',padding:'20px'}}>
            <h1>Login</h1>
            <p>Enter your details</p>
            <form onSubmit={formSubmit} style={{display:'flex',flexDirection:'column',gap:'10px'}}>
                <label>College Id</label>
                <input type="text" ref={collegeRef} placeholder="College Id"/><br></br>
                <label>Password</label>
                <input type="password" ref={passwordRef} placeholder="Password"/>
                <button type="submit">Submit</button>
                <p>{loginMsg}</p>
            </form>
        </div>
    );
}
export default Ten;