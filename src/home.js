import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Tt from "./onboard";
import { globalContext } from './App'; // Ensure this path is correct

function Home() {
    // Use the context provided by App.js
    const { globalIsLogin, setGlobalLogin } = useContext(globalContext);

    return (
        <div>
            {globalIsLogin ? (
                <div>
                    <h1>SVES Commerce</h1>
                    <Link to="/products">View products</Link>
                </div>
            ) : (
                <Tt />
            )}
        </div>
    );
}

export default Home;
