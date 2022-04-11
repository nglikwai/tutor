import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from '../GoogleAuth';
import styled from 'styled-components'

const Header = () => {
    return (
        <Narbar>
            <StyledLink to='/' >DSE00 Tutor</StyledLink>
            <StyledLink to='/tutor/find'>揾學生</StyledLink>
            <StyledLink to='/student/find'>揾老師</StyledLink>
            <GoogleAuth />
        </Narbar>)
}

const Narbar = styled.div`
    background-color: #cc0000;
    color:white;
    width:100%;
    box-sizing: border-box;
    padding:20px 40px;
`
const StyledLink = styled(Link)`
    color:white;
    margin-right:26px;
    font-size:18px;
    text-decoration: none;
    font-weight: bold;
    margin-right: 50px;
    font-size: 20px;

`


export default Header;