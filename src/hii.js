function CardList(){
    const name="watch";
    const college="SVECW";
    const userObject={name:"name1",branch:"branchName",year:"2024"};
    const users=["name1","name2","name3","name4"]
    return (
        <div style={{display:'flex',flexWrap:'wrap'}}>
            {
                users.map(
                    (user,index)=>(<Card key={index}
                        program={name}
                        col={college}
                        user={userObject}
                        userFromArray={user}/>
                     )
            
                    )
                }

        </div>
    );
}
export default CardList;