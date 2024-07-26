import Card from "./m8js";
function CardLi(){
    const n="student";
    const college="SVECW";
    const userObject={name:"p",branch:"branchNAme",year="4"};
    const users=["NAme 1","NAme 2","Name 3","Name 4","Name5","NAme 6"];
    return(<div style={{display:'flex',flexWrap:'wrap'}}>
        {
            users.map((user,index)=>(<Card key={index}
        program={n}
       S={college} user={userObject}
       userFromatArray={user}/>)
            )
       
        }
        <div/>
    );

    

}export default CardLi;