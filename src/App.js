import "./css/app.css";
import Login from "./pages/Login";
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
<img src={Dogtor} alt="" />
    </div>
  );
}

export default App;