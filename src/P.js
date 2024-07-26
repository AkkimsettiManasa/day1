import { useEffect,useState } from "react";
//import Ft from "./Gui";
function P(){
    const [count,setCount]=useState(1);
   useEffect(()=>{
    //setCount(500);
    console.log("use effect is called only once");
   },[count]);
      const b=()=>{
        setCount(count+1);
      }
        const c=()=>{
            setCount(count-1);
        }
        const batc=()=>{
            setCount(1);
        }
        
    
      return(
        <div> 
            {(count==0)?
            <div><button className="btn-yellow " onClick={batc} >add to cart</button></div>
            :
            <div style={{display:'flex'}}>
                <button className="btn btn-outline-primary btn-sm" onClick={b}> + </button><h1>{count}</h1>
                <button className="btn btn-outline-info btn-lg" onClick={c}>- </button>
            </div>
            }
           
        </div>
      );
 }
      

export default P;