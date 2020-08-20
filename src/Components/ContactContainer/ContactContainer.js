import React, { useState } from 'react';
import { StyledContainerContact } from "./ContactContainer.styled";


const ContactContainer = ({ open }) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggleButton = () => setIsOpen(!isOpen);

    return (
    <StyledContainerContact open={open}>

    {/* Container */}

    <div className="right-container">
        <div className="content">
            <div class="top-right">
                <img src="https://images.crexi.com/users/77872/c1da142587284cf3a18fb696aeb7dc66_164x164.jpg" className="contact-avatar margin-b" />
                <h2 className="right-name margin-b">Gillian Vanderbilt</h2>
                <div className="badge margin-b">Broker</div>
            </div>

            {/* Toggle */}

            <div className="toggle-container">
                <div
                className={isOpen ? "left option selected-toggle" : "left option"}
                onClick={toggleButton}
                >
                About
                </div>
                <div
                className={isOpen ? "right option" : "right option selected-toggle"}
                onClick={toggleButton}
                >
                Notes
                </div>
            </div>

            {/* Inner Drawer Content */}
                
                {/* About Content */}

                <div className={isOpen ? "about" : "about hide"}>
                    about stuff
                </div>

                {/* Notes Content */}
                <div className={isOpen ? "notes hide" : "notes"}>
                notes stuff
                </div>
        
        </div>
    </div>
    </StyledContainerContact>
    )
}

export default ContactContainer;