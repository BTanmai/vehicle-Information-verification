import React, { useState, useEffect } from 'react'
import { auth } from '../firebase'
import { useHistory } from 'react-router-dom'
import './Login.css'
import Button from '@material-ui/core/Button'
import { Link as LinkRoute } from 'react-router-dom'

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
function Login() {
  let history = useHistory()
  const [email, setEmail] = useState('')
  const [pwd, setPwd] = useState('')
  const [open, setOpen] = React.useState(true);
  useEffect(() => { }, [email, pwd])
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        history.push('/');
      }
    });
    return unsubscribe;
  }, []);
  
  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, pwd)
      .catch((error) => { alert(error); return })
  }
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Dialog open={open} onClose={handleClose} style={{ borderRadius: '100px' }} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title"> <h2>Vehicle Information Verification</h2></DialogTitle>
        <DialogContent>
          <DialogContentText style={{ display: 'flex', justifycontent: 'center' }}>
            <div class="about-section">
              <p><h2 align="center">This website helps the department people to verify the vehicle and person documents.Please sign in with valid username and password inorder to verify the documents. </h2></p>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="secondary" variant="contained" style={{ borderRadius: '25px' }} onClick={handleClose} >
            CLOSE
          </Button>
        </DialogActions>
      </Dialog>
      <div class="main">
        <p class="sign" align="center">Sign in</p>
        <form class="form1">
          <input class="un " type="text" align="center" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Username" />
          <input class="un" type="password" align="center" value={pwd} onChange={(e) => { setPwd(e.target.value) }} placeholder="Password" />
          <div >
            <Button class='submit' onClick={signIn}>Signin</Button></div>

        </form>
      </div>
    </>
  )
}

export default Login
