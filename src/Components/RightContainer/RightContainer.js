import React, { useState } from 'react';
import { StyledContainerRight } from "./RightContainer.styled";

import MessageContainer from "../MessageContainer/MessageContainer"
import ContactContainer from "../ContactContainer/ContactContainer"

import InfoIcon from '../InfoIcon/InfoIcon'
import phone from './MessageNav-icons/Phone.svg'


const RightContainer = () => {
    const [open, setOpen] = useState(false);
    return (
    <StyledContainerRight>

    {/* Message nav */}
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
                <InfoIcon open={open} setOpen={setOpen} />
            </div>
        </div>

    {/* Other Containers */}
    <div className="right-side-container">
        <MessageContainer />
        <ContactContainer open={open} setOpen={setOpen}/>
    </div>
    </StyledContainerRight>
    )
}

export default RightContainer;