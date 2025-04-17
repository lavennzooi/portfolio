import React from 'react';
import { Navbar } from 'react-bootstrap';
import '../style/navbar.css';

class NavBar extends React.Component {
    render(){
        return (
            <Navbar fixed="top" >Top Navigation Bar</Navbar>
        );
    }
}

export default NavBar;