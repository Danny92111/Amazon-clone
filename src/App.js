import './App.css';
import Header from "./Header.js";
import Home from "./Home.js"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import { useEffect } from 'react';

function App() {
  const [{ user }, dispatch] = useStateValue();

  // Piece of code which runs based on a given condition
  // ---> useEffect

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: Array.from(authUser)
        })
      }
      else {
        dispatch({
          type:"SET_USER",
          user:null
        })
      }
    })

    return () => {
      unsubscribe();
    }
   
  }, []);


console.log("USER is >>>>", user)

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
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
