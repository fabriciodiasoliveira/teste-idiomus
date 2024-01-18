import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from "./pages/notfound";
import Leaderboard from "./pages/leaderboard";
import Schedule from "./pages/schedule";

export default function App() {
  return (
    <Router>
      <div className="body">
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/leaderboard">
            <Leaderboard />
          </Route>
          <Route path="/">
            <Schedule />
          </Route>
          <Route path="/*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}