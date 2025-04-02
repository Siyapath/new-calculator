import "./components/Styles.css";
import Heron from "./components/HeronsFormula";
import Ambiguous from "./components/AmbiguousCase";
import Newton from "./components/NewtonsMethod";
import Polynomial from "./components/PolynomialFunction";


function App() {
  

  return (
    <div className="container">
    <>
      <Heron />
      <Ambiguous />
      <Newton />
      <Polynomial />
    </>
    </div>
  );
  
}

export default App