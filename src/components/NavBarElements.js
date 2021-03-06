
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
background-color: #F3EBF6;
height: 85px;
display: flex;
justify-content: space-between;
width:'100vw';
padding: 0.2rem calc((100vw - 1000px) / 2);
z-index: 12;
/* Third Nav */
/* justify-content: flex-start; */
`;

export const NavLink = styled(Link)`
color: 'black';
display: flex;
align-items: center;
text-decoration: none;
max-width:150px ;
padding: 0 1rem;
height: 100%;
cursor: default;
&.active {
	color: #000000;
}
`;

export const NavMenu = styled.div`
display: flex;
align-items: center;
`;

export const NavBtn = styled.nav`
display: flex;
align-items: center;
margin-right: 24px;
justify-content: space-between;
 justify-content: flex-end;
width: 100vw; 

`;

export const NavBtnLink = styled(Link)`
border-radius: 4px;
background: #3F51B5;
padding: 10px 22px;
color: #000000;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
/* Second Nav */
margin-left: 24px;
&:hover {
	transition: all 0.2s ease-in-out;
	background: #fff;
	color: #808080;
}
`;
