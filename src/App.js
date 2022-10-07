import "./css/app.css";
// import Hello from "./components/Hello";
// import Goodbye from "./components/Goodbye";
// import Login from './components/Login';
// import Register from './components/Register';
// import Patient from "./components/Patient";
// import Department from "./components/Department";
// import Medication from "./components/Medication";
import Counter from "./components/Counter";

function App() {
  // <div className="App"> </div>;
  return (
    <div className="App">
    {/* <Patient name="Mephisto" age="267">
      <Department dept="x-ray" doctor="Dr Strange" nurse="Florence"/>
      <Medication medicine="xanax" dose="all of it"/>
    </Patient> */}
    <Counter />
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
