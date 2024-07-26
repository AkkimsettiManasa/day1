import React, { createContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Ass3 from './product';
import Home from './home';
import CardList from './hii';
import Profile from './profile'; // Ensure this import is correct based on your file structure

// Define the global context
export const globalContext = createContext();

function App() {
    const [globalCount, setGlobalCount] = useState(0);
    const [globalUserObject, setGlobalUserObject] = useState({});
    const [globalIsLogin, setGlobalLogin] = useState(false);

    return (
        <globalContext.Provider value={{ globalCount, setGlobalCount, globalUserObject, setGlobalUserObject, globalIsLogin, setGlobalLogin }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Ass3 />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </BrowserRouter>
        </globalContext.Provider>
    );
}

export default App;
