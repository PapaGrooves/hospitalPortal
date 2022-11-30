import "./css/app.css";
import Header from "./components/Header";
import Circle from "./components/Circle";
import Dogtor from "./images/dogtor.png";

function Home() {
  return (
    <div className="App">
<div className="is--back">
<Header />
<Circle />
</div>

<div className="dogtorWrap">
<img src={Dogtor} alt="Cartoon dog doctor" className="dogtor" />
</div>
</div>
  );
}

export default Home;