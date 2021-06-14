import logo from "./logo.svg";

import Cityhall from "./Card/Cityhall";
import Planning from "./Card/Planning";
import Places from "./Card/Places";

import "./App.css";

function App() {
  return (
    <div className="container">
      <img src={logo} alt="" />
      <main>
        <h1 className="title">Save the date</h1>
        <h2 className="sub-title">
          Sarah &amp; Julien
          <br />
          vont <em>essayer</em> de se marier le
          <br />
          <strong>samedi 4 Septembre 2021</strong>
        </h2>
        <p className="description">Et un brunch est prévu le dimanche !</p>

        <div className="timeline">
          <div className="grid">
            <Cityhall />
            <Planning />
            <Places />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
