import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
function Nav(){
    return(
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',background:'lemonchiffon',padding:'5px'}}>
            <div style={{display:'flex',gap:'10px',cursor:'points'}}>
            <Link to="/">Home</Link>
            <Link to="/Ass3">Products</Link>
            </div>
        </div>
    );
}
export default Nav;