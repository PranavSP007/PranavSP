import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";

function App() {
  const [{ basket }, dispatch] = useStateValue();

  useEffect(() => {
    //only runs once whn app component loads...
    auth.onAuthStateChanged((authUser) => {
      //whenever authentication changes
      console.log("THE USER IS >>>>", authUser);
      if (authUser) {
        //the user just logged in
        dispatch({
          //if logged in shooots the user information to the data layer
          //when logged out removes the user data from the data layer
          type: "SET_USER",
          user: authUser,
          //when page refreshed the user still stays logged-in if logged-in
        });
      } else {
        console.log("the user logged out");
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Payment />
          </Route>
          {/* note: default route must be at the bottom when having multiple routes */}
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
