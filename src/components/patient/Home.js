import { useState } from "react";
import React from "react";
import Login from "../examples/Login";
import Register from "../examples/Register";


const Home = () => {
    const [openLoginModal, setLoginModal] = useState(false);
    const [openRegiModal, setRegiModal] = useState(false);

    return (
        <>
        <div className="container">
        <div className="banner-text">
        <h1>WELCOME TO CLYDE CHILDRENS HOSPITAL</h1>
        <p>LOGIN OR REGISTER TO ENTER THE HOSPITAL PORTAL</p>
        </div>
        <div className="buttons">
            <button className="btn login-btn" onClick={() => {setLoginModal(true);}}>Login</button>
            <button className="btn signup-btn" onClick={() => {setRegiModal(true);}}>Register</button>
        </div>
        {/* signup container */}
        {/* <Register /> */}

        {/* login container */}
        {openLoginModal && <Login closeModal = {setLoginModal}/>}
        {openRegiModal && <Register closeModal = {setRegiModal}/>}
        </div>
        </>
    );
}

export default Home;