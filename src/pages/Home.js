import React from 'react'
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom'
function Home() {
    return (
        <div style={{display:'flex',flexDirection:'column',placeItems:'center'}}>
            <h2 style={{marginTop:'10vh'}}>Please choose</h2>      

            <Button  style={{maxWidth:'250px',marginTop:'25px',marginLeft:'auto',color:'white',width:'250px',background:'linear-gradient(to right, #9C27B0, #E040FB)',border:0,marginRight:'auto',height:'50px',borderRadius:'5em',marginBottom:'50px'}}><Link to='/aadharSearch' style={{textDecoration:'none',color:'inherit'}}>Search by aadhar</Link></Button>
            <Button  style={{maxWidth:'250px',color:'white',width:'250px',background:'linear-gradient(to right, #9C27B0, #E040FB)',height:'50px',borderRadius:'5em',marginLeft:'auto',marginRight:'auto'}}><Link to='/vehicleSearch' style={{textDecoration:'none',color:'inherit'}}>Search by Vehicle Number</Link></Button>
        </div>
    )
}

export default Home
