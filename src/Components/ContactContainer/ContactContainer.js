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

            {/* Top right */}

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
                    <div className="note-container">
                        <div className="top note">Today 9:35 AM by <b>Jon Fletcher</b></div>
                        <div className="note-box">
                            <div className="actual-note">Had a call with Gillian last week. She sounded very interested in moving forward with 7-11</div>
                        </div>
                        <div className="bottom-note note">Posted on <b>7-11</b></div>
                    </div>
                    
                    <div className="note-input-section">
                        <textarea className="note-textarea" disabled="disabled" type="text" name="sentence" placeholder="Type your message here..."></textarea>
                        <button className="note-button">Post to Notes</button>
                    </div>
                </div>
        
        </div>
    </div>
    </StyledContainerContact>
    )
}

export default ContactContainer;