import React,{useEffect,useState} from 'react'
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import db from '../firebase'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

function VehicleSearch() {
    const [uid, setUid] = useState()
    const [open, setOpen] = React.useState(false);
    const [data,setData] = useState()
    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    const fetch_data =(e)=>{
        e.preventDefault();
        db.collection("LicenseVerifications")
            .where("vehicleNo", "==", uid)
            .get() 
            .then((querySnapshot) => {
                if(querySnapshot.size>0)
                {
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    console.log(doc.data())
                    setData(doc.data())
                    handleClickOpen();
                });}
                else{
                    alert('Please Enter a Valid ID')
                }
            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
            });

    }
    return (
        <div style={{display:'flex',flexDirection:'column',placeItems:'center'}}>
            <h1>Welcome</h1>
            <TextField label="Please enter Vehicle Number"
             value={uid}
             onChange={(e)=>{setUid(e.target.value)}}
             style={{ width: '80vw', maxWidth: '370px', marginLeft: 'auto', marginRight: 'auto' }} variant="outlined" />
             <Button onClick={fetch_data}  
             style={{maxWidth:'250px',
                     marginLeft:'auto',
                     color:'white',
                     width:'250px',
                     background:'linear-gradient(to right, #9C27B0, #E040FB)',
                     border:0,
                     marginRight:'auto',
                     height:'50px',
                     borderRadius:'5em',
                     marginTop:'5vh',}}>
                        FETCH DETIALS
             </Button>
             <Dialog open={open} onClose={handleClose} style={{borderRadius:'100px'}} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Person Detials</DialogTitle>
        <DialogContent>
        <DialogContentText style={{display:'flex',justifycontent:'center'}}>
           <p style={{fontWeight:'bold'}}>Name:</p>&nbsp;<p>{data?.name}</p>
          </DialogContentText>
          <DialogContentText style={{display:'flex',justifycontent:'center'}}>
           <p style={{fontWeight:'bold'}}>Age:</p>&nbsp;<p>{data?.age}</p>
          </DialogContentText>
          <DialogContentText style={{display:'flex',justifycontent:'center'}}>
           <p style={{fontWeight:'bold'}}>Driving License:</p>&nbsp;<p>{data?.dl_num}</p>
          </DialogContentText>
          <DialogContentText style={{display:'flex',justifycontent:'center'}}>
           <p style={{fontWeight:'bold'}}>Insurance Start Date:</p>&nbsp;<p>{data?.insu_start}</p>
          </DialogContentText>
          <DialogContentText style={{display:'flex',justifycontent:'center'}}>
           <p style={{fontWeight:'bold'}}>Insurance End Date:</p>&nbsp;<p>{data?.insu_end}</p>
          </DialogContentText>
          <DialogContentText style={{display:'flex',justifycontent:'center'}}>
           <p style={{fontWeight:'bold'}}>Aadhar Number:</p>&nbsp;<p>{data?.aadhar}</p>
          </DialogContentText>
          <DialogContentText style={{display:'flex',justifycontent:'center'}}>
           <p style={{fontWeight:'bold'}}>Vehicle Number:</p>&nbsp;<p>{data?.vehicleNo}</p>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="secondary" variant="contained" style={{borderRadius:'25px'}} onClick={handleClose} >
            CLOSE
          </Button>
        </DialogActions>
      </Dialog>
        </div>
    )
}

export default VehicleSearch
