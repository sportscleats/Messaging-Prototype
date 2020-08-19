import React from 'react';
import { StyledContainerContact } from "./ContactContainer.styled";

import ToggleSlide from "../ToggleSlide/ToggleSlide"



const ContactContainer = ({ open }) => {
    return (
    <StyledContainerContact open={open}>
    <div className="right-container">
        <div className="content">
        <h2 className="contact-container-header">Contact Container</h2>
        <ToggleSlide />
        </div>
        
    </div>
    </StyledContainerContact>
    )
}

export default ContactContainer;