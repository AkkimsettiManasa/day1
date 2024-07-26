import { useEffect,useState } from "react";

function F9(){
    /*hooks 
    useeffect -it will get call when the component get the call onces,backend,only called once,
    use state-manuplate or update the data inside the variable */
   const [count,setCount]=useState(1);
   useEffect(()=>{
    //setCount(5);
    console.log("use effect is called only once");


   },[count]);
      const b=()=>{
        setCount(count+1);
      }
      return(<div>
        <h1>count{count}</h1>
        <button className="btn btn-danger" onClick={b}> click on me </button>

         </div>);

    
}
export default F9;