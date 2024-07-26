function F4(){
    const a=[1,2,3,4];
    const al=a.map((a,index)=> <li key={index}>{a}</li>);
    return (
        <div>
            <h1> numbers</h1>
            <ul>{al}</ul>
            
           
        </div>
    )

}
export default F4;