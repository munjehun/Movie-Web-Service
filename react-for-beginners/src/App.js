import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie/:id" component={Detail} />
        {/* /movie/id 가 아니라 movie/:id로 id에 변수가 들어올 수 있게 한다 */}
        {/* <Detail />
        </Route> */}
        {/* <Route path="/hello">
          <h1>Hello</h1>  꼭 컴포넌트가 아니어도 된다!
        </Route> */}
        <Route exact={true} path="/" component={Home} />
        {/* <Home />
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
