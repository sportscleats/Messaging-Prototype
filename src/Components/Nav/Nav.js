import React from 'react';
import { StyledTopNav } from "./Nav.styled";

import logo from './nav-icons/crex-log.png'
import star from './nav-icons/Star.svg'
import message from './nav-icons/message-filled.svg'
import bell from './nav-icons/Bell.svg'
import avi from './nav-icons/am.jpg'
import burg from './nav-icons/burgNav.svg'


const names = ['For Sale', 'For Lease', 'Comps', 'Auctions', 'Products'];

const Nav = () => {
    return (
        <StyledTopNav>
            <div className="nav-logo"><img className="logo" src={logo} /></div>
            <div class="rest-nav">
                {names.map((name, index) => (
                    <div className="nav-item text-link" key={index}>
                        {name}
                    </div>
                ))}
                
                <div className="icon-links"><img src={star}/></div>
                <div className="icon-links"><img src={message}/></div>
                <div className="icon-links"><img src={bell}/></div>


                <button className="secondary nav-item">Add Listings</button>
                <img className="avatar-nav" src={avi} />
                <div className="icon-links burg"><img src={burg}/></div>
                <div className="nav-item nav-info">
                    <div className="myCrex">My CREXi</div>
                    <div className="nav-name">Jon Fletcher</div>
                    <div className="sales-tools">Sales Tools</div>
                </div>
            </div>
        </StyledTopNav>
    );
}

export default Nav;