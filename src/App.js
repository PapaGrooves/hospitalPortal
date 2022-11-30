import "./css/app.css";
// import Login from "./pages/Login";
import Header from "./components/Header";
import Circle from "./components/Circle";
import Dogtor from "./images/dogtor.png";

function App() {
  return (
    <div className="App">
{/* <Login /> */}
<div className="is--back">
<Header />
<Circle />
</div>

<div className="dogtorWrap2">
<img src={Dogtor} alt="Cartoon dog doctor" className="dogtor" />
</div>

<div className="buttons">
  <button>Profile</button>
  <button>Departments</button>
  <button>Play</button>
  <button>Learn</button>
</div>

    </div>
  );
}

export default App;