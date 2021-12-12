import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import FizzBuzz from "./component/fizz-buzz/fizz-buzz";
import Increment from "./component/increment/increment";

export default function Nav() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/increment">Increment</Link>
            </li>
            <li>
              <Link to="/fizzBuzz">FizzBuzz</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/increment">
            <Increment />
          </Route>
          <Route path="/fizzBuzz">
            <FizzBuzz />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
