import './css/app.css';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
     <div className="container">
      <div className="banner-text">
        <h1>WELCOME TO CLYDE CHILDRENS HOSPITAL</h1>
        <p>LOGIN OR REGISTER TO ENTER THE HOSPITAL PORTAL</p>
      </div>
      <div className="btns">
        <button className="btn login-btn">Login</button>
        <button className="btn signup-btn">Register</button>
      </div>
      <div className="form-container">
       {/* TODO login container */}
        <Login />
        {/* TODO signup container */}
       <Register />
      </div>
    </div>
    </div>
  );
}


export default App;

// const signupModal = document.querySelector(".signup-form-wrapper");
// const loginModal = document.querySelector(".login-form-wrapper");
// const signupBtn = document.querySelector(".signup-btn");
// const loginBtn = document.querySelector(".login-btn");
// const signupX = document.querySelector(".signup-x");
// const loginX = document.querySelector(".login-x");
// const formContainer = document.querySelector(".form-container");

// signupBtn.addEventListener("click", () => {
//   signupModal.classList.add("display");
//   formContainer.classList.add("disable");
// });

// loginBtn.addEventListener("click", () => {
//   loginModal.classList.add("display");
//   formContainer.classList.add("disable");
// });

// signupX.addEventListener("click", () => {
//   signupModal.classList.remove("display");
//   formContainer.classList.remove("disable");
// });

// loginX.addEventListener("click", () => {
//   loginModal.classList.remove("display");
//   formContainer.classList.remove("disable");
// });
