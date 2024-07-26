import { useEffect,useState } from "react";

function R(){
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
    
      return(<div>
        <h1>count{count}</h1>
        <button className="btn btn-primary" onClick={b}> + </button><h1>{count}</h1>
       <button className="btn btn-primary" onClick={c}>- </button>

         </div>);

}
export default R;