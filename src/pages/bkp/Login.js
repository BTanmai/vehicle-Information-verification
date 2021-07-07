import React,{useState,useEffect} from 'react'
import {auth} from '../firebase'
import {useHistory } from 'react-router-dom'
import './Login.css'
import Button from '@material-ui/core/Button'
import { Link as LinkRoute } from 'react-router-dom'
function Login() {
    let history = useHistory()
    const [email, setEmail] = useState('')
    const [pwd, setPwd] = useState('')
    useEffect(()=>{},[email,pwd])
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
          if (authUser) {
            history.push('/');
          }
        });
        return unsubscribe;
      }, []);
    const signIn =(e)=>{
        e.preventDefault();
    auth.signInWithEmailAndPassword(email, pwd)
      .catch((error) => { alert(error); return })
    }
    return (
        <div class="main">
    <p class="sign" align="center">Sign in</p>
    <form class="form1">
      <input class="un " type="text" align="center" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Username" />
      <input class="un" type="password" align="center" value={pwd} onChange={(e)=>{setPwd(e.target.value)}} placeholder="Password" />
      <div >
      <Button class='submit' onClick={signIn}>Signin</Button></div>
      
    </form>
    </div>
    )
}

export default Login
