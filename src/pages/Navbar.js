
import { React, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import {
	Nav,
	NavMenu,
	NavBtn
} from '../components/NavBarElements';
import { auth } from '../firebase';
export default function Navbar(props) {
	const defaultProps = {
		options: projectTitles,
		getOptionLabel: (option) => option.title,
	  };
	const [StateChange, setStateChange] = useState(props.user)
	let history = useHistory();
	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((authUser) => {
			setStateChange(authUser)
			if (authUser === null) { 
			}
		});
		return unsubscribe;
	}, []);
	const signOut = (e) => {
		e.preventDefault();
		auth.signOut().catch(function (error) {
			console.log(error)
			console.log("An error occurred")
		});
	}
	useEffect(() => {
		props.onChangeUser(StateChange)
		history.push('/')
	}, [StateChange])
	useEffect(() => {
		setStateChange(props.user)
	}, [props.user])
	return (
		<>
			<Nav>
				<NavMenu>
				<Button 
					variant="contained" 
					style={{ fontWeight: 'bold', borderRadius: '25px'}} 
					onClick={()=>{history.push('/')}}>
						Back
					</Button>
				

					{/* style={{ 
							 width:'120px',
							 marginTop:'25px', 
							 alignItems: 'left',
							 marginTop:'-5px'
						    }} onClick={()=>{history.push('/')}} /> */}
				</NavMenu>
				<NavBtn>
					<Button 
					variant="contained" 
					style={{ fontWeight: 'bold', borderRadius: '25px'}} 
					onClick={signOut}>
						SignOut
					</Button>
				</NavBtn>
			</Nav>
		</>
	);
};

const projectTitles = [
	{ title: 'Piracy video detection '},
	{ title: 'Fare trade'},
	{ title: 'Weed Wacker'},
	{ title: 'Smart Helmet' },
	{ title: 'Cantouche App' },
	{ title: "Skin App" },
	{ title: 'Project Approval System' },
	{ title: 'Agri Revender' },
	{ title: 'Smart Dustbin' },
	{ title: 'Smart watch' },
  ];