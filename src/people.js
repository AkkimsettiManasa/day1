
function F19(){
    return(
        <div className="card" style={{width:'300px',padding:'20px'}}>
            <h1>Register</h1>
            <p>Provide your details to login</p>
            <form style={{display:'flex',flexDirection:'column',gap:'10px'}}>
                <label>College Id</label>
                <input type="text" placeholder="College Id" required/>
                
                <label>Password</label>
                <input type="password" placeholder="Password" required/>
                <label>conform password</label>
z                <label>Email address</label>
                <input type="text" placeholder="Email address" required/>
                <label>Branch</label>
                <select id="options">
                    <option value="" >Select an option</option>
                    <option value="1">CSE</option>
                    <option value="2">IT</option>
                    <option value="3">AI</option>
                    <option value="4">ECE</option>
                    <option value="5">EEE</option>
                    <option value="6">CIVIL</option>
                    <option value="7">MECH</option>
                </select>
                <label>Choose a year:</label>
                <select id="year">
                    <option value="">Select a year</option>
                    <option value="1">First Year</option>
                    <option value="2">Second Year</option>
                    <option value="3">Third Year</option>
                    <option value="4">Fourth Year</option>
                </select>
                <div>
                    <label name="gender">Gender</label><br/>
                    <input type="radio" id="male" name="gender" value="a"/>
                    <label>Male</label> 
                    <input type="radio" id="female" name="gender" value="b"/>
                    <label>Female</label>
                    <input type="radio" id="other" name="gender" value="c"/>
                    <label>Other</label>
                </div>
                <button type="submit" className="btn btn-dark btn-sm">Register</button>
            </form>
        </div>
    );
}
export default F19;