/*import { useContext, useState } from "react";
import { globalContext } from './App';
function Register() {
    const [collegeIdValue, setCollegeId] = useState('');
    const [passwordValue, setPassword] = useState('');
    const [emailValue, setEmail] = useState('');
    const [genderValue, setGender] = useState('');
    const [branchValue, setBranch] = useState('');
    const [yearValue, setYear] = useState('');
    const [userValue,setUser]= useState('');
    //use context provided by app.js
    const{globalUSerObject,setGlobalUSerObject}=useContext(globalContext)
    const getCollegeId = (event) => {
        setCollegeId(event.target.value);
        console.log(collegeIdValue);
    };
    const getPassword = (event) => {
        setPassword(event.target.value);
        console.log(passwordValue);
    };
    const getEmail = (event) => {
        setEmail(event.target.value);
        console.log(emailValue);
    };
    const getGender = (event) => {
        setGender(event.target.value);
        console.log(genderValue);
    };
    const getBranch = (event) => {
        setBranch(event.target.value);
        console.log(branchValue);
    };
    const getYear = (event) => {
        setYear(event.target.value);
        console.log(yearValue);
    };
    const getuser=(event)=>{
        setUser(event.target.value);
        console.log(userValue);
    }
    const submitData=(event)=>{
        event.preventDefault();
        const obj={
            collegeIdValue,passwordValue,emailValue,branchValue,genderValue
        }
        setUser (obj);
        //set the global uset object/
        setGlobalUSerObject(obj);
        console.log(obj);
        console.log(setUser (obj));
        console.log(obj);
        console.log(userValue);
    }
    return (
        <div className="card" style={{backgroundColor:'aqua', width: '300px', padding: '20px' }}>
            <h1>Register</h1>
            <p>Enter your details</p>
            <form onSubmit={submitData}style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <label>CollegeId</label>
                <input type="text" onChange={getCollegeId} placeholder="Enter your name" required/>
                <label>Password</label>
                <input type="password" onChange={getPassword} placeholder="Password" required/>
                <label>Email</label>
                <input type="email" onChange={getEmail} placeholder="email" required/>
                <label>Branch</label>
                <select className="form-select" value={branchValue} onChange={getBranch}>
                    <option value="">Select Branch</option>
                    <option value="CSE">CSE</option>
                    <option value="IT">IT</option>
                    <option value="ECE">AI</option>
                    <option value="EEE">ECE</option>
                    <option value="5">EEE</option>
                    <option value="6">CIVIL</option>
                    <option value="7">MECH</option>
                </select>
                <label>Year</label>
                <select className="form-select" value={yearValue} onChange={getYear}>
                    <option value="">Select year</option>
                    <option value="1st">1st</option>
                    <option value="2nd">2nd</option>
                    <option value="3rd">3rd</option>
                    <option value="4rth">4rth</option>
                </select>
                <label>Gender</label>
                <label>
                    <input type="radio" name="gender" value="male" checked={genderValue === 'male'} onChange={getGender} />
                Male</label>
                <label>
                    <input type="radio" name="gender" value="female" checked={genderValue === 'female'} onChange={getGender} />
                Female</label>
                <label>
                        <input type="radio" id="other" name="gender" value="c"/>
                Other</label>
                <button className="btn btn-primary btn-sm">Register</button>
            </form>
        </div>
    );
}

export default Register;*/
/*import React, { useContext, useState } from 'react';
import { globalContext } from './App'; // Import globalContext from its definition file

function Register() {
    const [collegeIdValue, setCollegeId] = useState('');
    const [passwordValue, setPassword] = useState('');
    const [emailValue, setEmail] = useState('');
    const [genderValue, setGender] = useState('');
    const [branchValue, setBranch] = useState('');
    const [yearValue, setYear] = useState('');
    const [userValue, setUser] = useState('');

    // Use context provided by App.js
    const { globalUSerObject, setGlobalUSerObject } = useContext(globalContext);

    const getCollegeId = (event) => {
        setCollegeId(event.target.value);
    };

    const getPassword = (event) => {
        setPassword(event.target.value);
    };

    const getEmail = (event) => {
        setEmail(event.target.value);
    };

    const getGender = (event) => {
        setGender(event.target.value);
    };

    const getBranch = (event) => {
        setBranch(event.target.value);
    };

    const getYear = (event) => {
        setYear(event.target.value);
    };

    const getUser = (event) => {
        setUser(event.target.value);
    };

    const submitData = (event) => {
        event.preventDefault();
        const obj = {
            collegeId: collegeIdValue,
            password: passwordValue,
            email: emailValue,
            branch: branchValue,
            gender: genderValue,
            year: yearValue
        };
        setUser(obj);
        // Set the global user object
        setGlobalUSerObject(obj);
        console.log(obj);
    };

    return (
        <div className="card" style={{ backgroundColor: 'aqua', width: '300px', padding: '20px' }}>
            <h1>Register</h1>
            <p>Enter your details</p>
            <form onSubmit={submitData} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <label>College Id</label>
                <input type="text" onChange={getCollegeId} placeholder="Enter your college id" required />
                <label>Password</label>
                <input type="password" onChange={getPassword} placeholder="Password" required />
                <label>Email</label>
                <input type="email" onChange={getEmail} placeholder="Email" required />
                <label>Branch</label>
                <select className="form-select" value={branchValue} onChange={getBranch} required>
                    <option value="">Select Branch</option>
                    <option value="CSE">CSE</option>
                    <option value="IT">IT</option>
                    <option value="ECE">ECE</option>
                    <option value="EEE">EEE</option>
                    <option value="CIVIL">CIVIL</option>
                    <option value="MECH">MECH</option>
                </select>
                <label>Year</label>
                <select className="form-select" value={yearValue} onChange={getYear} required>
                    <option value="">Select Year</option>
                    <option value="1st">1st</option>
                    <option value="2nd">2nd</option>
                    <option value="3rd">3rd</option>
                    <option value="4th">4th</option>
                </select>
                <label>Gender</label>
                <label>
                    <input type="radio" name="gender" value="male" checked={genderValue === 'male'} onChange={getGender} required />
                    Male
                </label>
                <label>
                    <input type="radio" name="gender" value="female" checked={genderValue === 'female'} onChange={getGender} required />
                    Female
                </label>
                <label>
                    <input type="radio" name="gender" value="other" checked={genderValue === 'other'} onChange={getGender} required />
                    Other
                </label>
                <button className="btn btn-primary btn-sm">Register</button>
            </form>
        </div>
    );
}

export default Register;*/
import React, { useContext, useState } from 'react';
import { globalContext } from './App'; // Adjust the path if necessary

function Register() {
    const [collegeIdValue, setCollegeId] = useState('');
    const [passwordValue, setPassword] = useState('');
    const [emailValue, setEmail] = useState('');
    const [genderValue, setGender] = useState('');
    const [branchValue, setBranch] = useState('');
    const [yearValue, setYear] = useState('');
    const [userValue, setUser] = useState('');

    // Use context provided by App.js
    const { setGlobalUserObject } = useContext(globalContext);

    const getCollegeId = (event) => {
        setCollegeId(event.target.value);
    };

    const getPassword = (event) => {
        setPassword(event.target.value);
    };

    const getEmail = (event) => {
        setEmail(event.target.value);
    };

    const getGender = (event) => {
        setGender(event.target.value);
    };

    const getBranch = (event) => {
        setBranch(event.target.value);
    };

    const getYear = (event) => {
        setYear(event.target.value);
    };

    const submitData = (event) => {
        event.preventDefault();
        const obj = {
            collegeId: collegeIdValue,
            password: passwordValue,
            email: emailValue,
            branch: branchValue,
            gender: genderValue,
            year: yearValue
        };
        setUser(obj);
        // Set the global user object
        setGlobalUserObject(obj);
        console.log(obj);
    };

    return (
        <div className="card" style={{ backgroundColor: 'aqua', width: '300px', padding: '20px' }}>
            <h1>Register</h1>
            <p>Enter your details</p>
            <form onSubmit={submitData} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <label>College Id</label>
                <input type="text" onChange={getCollegeId} placeholder="Enter your college id" required />
                <label>Password</label>
                <input type="password" onChange={getPassword} placeholder="Password" required />
                <label>Email</label>
                <input type="email" onChange={getEmail} placeholder="Email" required />
                <label>Branch</label>
                <select className="form-select" value={branchValue} onChange={getBranch} required>
                    <option value="">Select Branch</option>
                    <option value="CSE">CSE</option>
                    <option value="IT">IT</option>
                    <option value="ECE">ECE</option>
                    <option value="EEE">EEE</option>
                    <option value="CIVIL">CIVIL</option>
                    <option value="MECH">MECH</option>
                </select>
                <label>Year</label>
                <select className="form-select" value={yearValue} onChange={getYear} required>
                    <option value="">Select Year</option>
                    <option value="1st">1st</option>
                    <option value="2nd">2nd</option>
                    <option value="3rd">3rd</option>
                    <option value="4th">4th</option>
                </select>
                <label>Gender</label>
                <label>
                    <input type="radio" name="gender" value="male" checked={genderValue === 'male'} onChange={getGender} required />
                    Male
                </label>
                <label>
                    <input type="radio" name="gender" value="female" checked={genderValue === 'female'} onChange={getGender} required />
                    Female
                </label>
                <label>
                    <input type="radio" name="gender" value="other" checked={genderValue === 'other'} onChange={getGender} required />
                    Other
                </label>
                <button className="btn btn-primary btn-sm">Register</button>
            </form>
        </div>
    );
}

export default Register;
