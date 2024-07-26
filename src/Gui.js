import React ,{ useState } from "react";

function Ft(){
    const[review,setReview]=useState('');
    const[reviewToDisplay,setDisplay]=useState([]);


    const ar=()=>{
        console.log("review adding..........");
        //review to display=review
        setDisplay(review);

    }
    const intt=(event)=>{
        console.log("input chnged");
        console.log(event.target.value);/*dynamic accesss for triggered //for every change of event the input is dispalyed in console*/
        setReview(event.target.value);
    }

    return(
       //onchange() or handle change methods to change in input field
       //placeholder temporarily stores the data until actual data occurs//

        <div style={{dispaly:'flex'}}>
            <input type="text" placeholder="enter a review" onChange={intt}/>
            <button className="btn-outline-danger btn-sm" onClick={ar} >add review</button>
        <p>{reviewToDisplay}</p>
        </div>
    );

}
export default Ft;