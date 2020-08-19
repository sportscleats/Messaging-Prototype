import React from 'react';
import { StyledContainerContact } from "./ContactContainer.styled";



const ContactContainer = ({ open }) => {
    return (
    <StyledContainerContact open={open}>
    <div className="right-container">
        <h2 className="content">Contact Container</h2>
    </div>
    </StyledContainerContact>
    )
}

export default ContactContainer;