import { useState } from "react";
import Nav from "./navi";
import Qi from "./Login";
import Register from "./Register";

function Tt(){
    const [isLogin,setISLogin]=useState(true);
    const show=()=>{setISLogin(true)}
    const sR=()=>{setISLogin(false)}
    return(
        <div>
            <Nav/>
            <button onClick={show}>login</button>
            <button onClick={sR}>Register</button>
            {isLogin ?
            <Qi/>
            :
            <Register/>

            }
        </div>
    )
}
export default Tt;