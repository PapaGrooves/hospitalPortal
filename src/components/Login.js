import { useState } from "react";
import React from "react";

const Login = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {
      setPasswordShown(!passwordShown);
    }
  return (
    < >
        <form className="login" action="">
{/* patient ID */}
        <label htmlFor="patient_id">Patient ID</label>
        <input type="text" name="patient_id" />
{/* password */}
        <label htmlFor="password">Password</label>
        <input type={passwordShown ? "text" : "password"} name="password" id="password" />
        <i class="far fa-eye" onClick={togglePassword} id="togglePassword"></i>
{/* submit button */}
        <button type="submit">Login</button>

        </form>

      {/* <div className="strips">
        <div></div>
        <div></div>
      </div> */}
      
    </>
  );
};


export default Login;
