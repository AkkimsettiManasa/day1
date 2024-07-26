import { useContext } from "react";
import Nav from "./navi";
import { globalContext } from './App';

function Profile(){
    const {globalUSerObject,setGlobalUSerObject}=useContext(globalContext);
    const {globalIsLogin,setGlobalIsLogin}=useContext(globalContext)
    const logout=()=>{setGlobalIsLogin(false);}
        

    return(
       
        <div>
            <Nav/>
            <div className="container card" style={{display:"flex",
        gap:'20px',flexDirection:'column',width:'1300px',padding:'20px'}}>
             {globalUSerObject.collegeIdvalue}
             <button className="btn-outline-primary" onClick={logout}></button>
             </div>
             </div>
            
 
    );
}
export default Profile;