import { useState } from "react";
import React from "react";
import Dogtor from "../images/dogtor.png";

const Login = () => {
  // password show/hide set up
  const [passwordShown, setPasswordShown] = useState(false);
  // icon color switch se up
  const [isActive, setIsActive] = useState(false);

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
