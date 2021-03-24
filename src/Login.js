import React , {useState} from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase'

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const login = e => {
        e.preventDefault();
        // do Login logic
        auth.signInWithEmailAndPassword(email,password)
          .then((auth) => {
            history.push("/");
          })
          .catch(e => alert(e.message))
    }

    const register = e => {
        e.preventDefault();
        // do Register logic

        auth.createUserWithEmailAndPassword(email,password)
        .then(auth => {
            // created user and logged in...
            history.push("/");
        })
        .catch(e => alert(e.message))
    }

    return (
        <div className="login">
            <Link to="/">
              <img 
                className="login__logo" 
                src="https://cdn0.iconfinder.com/data/icons/most-usable-logos/120/Amazon-512.png" 
                alt=""/>
            </Link>
            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={email} onChange = {e => setEmail(e.target.value)} type="email"/>
                    <h5>Password</h5>
                    <input value={password} onChange = {e => setPassword(e.target.value)} type="password"/>
                    <button onClick={login} className="login__signInButton" type ="submit">Sign In</button>
                </form>
                <p>
                By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
                <button onClick={register} className="login__registerButton">Create Your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
