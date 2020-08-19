import React, { useState } from 'react';
import { StyledMessageNav } from "./MessageNav.styled";
import InfoIcon from '../InfoIcon/InfoIcon'


import phone from './MessageNav-icons/Phone.svg'
// import info from './MessageNav-icons/Info -  Tool tip.svg'


const MessageNav = () => {
    return (
    <StyledMessageNav>
        <div className="messagenav-container">
            <div className="avatar">
                {/* <img className="avatar" src=""/> */}
            </div>
            <div className="name-property">
                <h3 clasNames="messagenav-name">Gillian Vanderbilt</h3>
                <h3 className="center-prop">7-11 on 785 Main St. Grand Rapids MI </h3>
            </div>
            <div className="center-icon">
                <div className="icon"><img src={phone}/></div>
                {/* <div className="icon info selected"><img src={info}/></div> */}
                <InfoIcon />
            </div>
        </div>

    </StyledMessageNav>
    )
}

export default MessageNav;