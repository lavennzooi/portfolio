import React from 'react';
import '../style/nav.css';

class Nav extends React.Component {

    render(){
        return (
            <div class="navbar">
                <div class="tab" href="#">ABOUT</div>
                <div class="tab" href="#">EXPERIENCE</div>
                <div class="tab" href="#">PROJECT</div>
            </div>
        );
    }
}
 
export default Nav;