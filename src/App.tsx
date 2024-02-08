import { Link } from "react-router-dom";
import "./App.css";

export const totalBuckets = 4;
export const bucketHeight = 10;

function App() {

  return (
    <nav>
    <ul>
      <li>
        <Link to={`water-balancer`}>Water Balancer</Link>
      </li>
      <li>
        <Link to={`accordion`}>Accordion</Link>
      </li>
      <li>
        <Link to={`searchbar`}>Searchbar</Link>
      </li>
    </ul>
  </nav>
  );
}

export default App;
