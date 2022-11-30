import { useState } from "react";
import React from "react";
import Dogtor from "../images/dogtor.png";

const Login = () => {

    // icon color switch 
    const [isActive, setIsActive] = useState(false);

  // password show/hide
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
    setIsActive((current) => !current);
  };
  return (
    <>
      <form className="login" action="">
        {/* patient ID */}
        <label htmlFor="patient_id">Patient ID</label>
        <input type="text" name="patient_id" />
        {/* password */}
        <label htmlFor="password">Password</label>
        <input
          type={passwordShown ? "text" : "password"}
          name="password"
          id="password"
        />
        {/* Eye icon, onclick will show/hide password
            and change color.  */}
        <i
          class="far fa-eye"
          id="togglePassword"
          style={{ color: isActive ? "gray" : "" }}
          onClick={togglePassword}
        ></i>
        {/* submit button */}
        <button type="submit">Login</button>
      </form>

      <div className="dogtorWrap">
        <img src={Dogtor} alt="Cartoon dog doctor" className="dogtor"/>
      </div>
      {/* <div className="strips">
        <div></div>
        <div></div>
      </div> */}
    </>
  );
};

export default Login;
