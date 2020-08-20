import React, { useState } from 'react';
import { StyledContainerContact } from "./ContactContainer.styled";

import sevenEleven from './assets/7-11.png'
import visited from './assets/Eye.svg'


const ContactContainer = ({ open }) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggleButton = () => setIsOpen(!isOpen);

    return (
    <StyledContainerContact open={open}>

    {/* Container */}

    <div className="right-container">
        <div className="content">

            {/* Top right */}

            <div className="top-right">
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

                {/* About Content */}

                <div className={isOpen ? "about" : "about hide"}>
                <div className="drawer-content about">

                        {/* <!-- top section --> */}

                            <div className="name">Contact Details</div>
                        <div className="about-info">
                            <div className="about-row">
                                <div className="about-item about-left">Phone</div>
                                <div className="about-item about-line"></div>
                                <div className="about-item name">323-555-5555</div>
                            </div>

                            <div className="about-row">
                                <div className="about-item about-left">Email</div>
                                <div className="about-item about-line"></div>
                                <div className="about-item name">gvanderbilt@gmail.com</div>
                            </div>

                            <div className="about-row">
                                <div className="about-item about-left">Location</div>
                                <div className="about-item about-line"></div>
                                <div className="about-item name">Atlanta, GA</div>
                            </div>

                            <div className="about-row">
                                <div className="about-item about-left">Level of Interest</div>
                                <div className="about-item about-line"></div>
                                <div className="about-item name">Executed CA</div>
                            </div>
                        </div>

                        {/* <!-- mid section --> */}

                            <div className="name about-section">Buyer Evaluation</div>
                        <div className="about-info">
                            <div className="about-row">
                                <div className="about-item about-left">Team Rank</div>
                                <div className="about-item about-line"></div>
                                <div className="about-item name">Select rank</div>
                            </div>

                            <div className="about-row">
                                <div className="about-item about-left">Funds</div>
                                <div className="about-item about-line"></div>
                                <div className="about-item name">$2,000,000</div>
                            </div>

                            <div className="about-row">
                                <div className="about-item about-left">Assets Under Mangagement</div>
                                <div className="about-item about-line"></div>
                                <div className="about-item name">$7,000,000</div>
                            </div>

                            <div className="about-row">
                                <div className="about-item about-left">Interested in Fincancing</div>
                                <div className="about-item about-line"></div>
                                <div className="about-item name">Yes</div>
                            </div>
                            <div className="about-row">
                                <div className="about-item about-left">1031 Exchange</div>
                                <div className="about-item about-line"></div>
                                <div className="about-item name">No</div>
                            </div>

                        </div>

                        {/* <!-- Activity Feed --> */}
                            <div className="name about-section">Activity Feed</div>
                        <div className="about-info">
                            {/* <!-- First row--> */}
                            <div className="about-row">
                                <div className="activity-container">
                                    <div className="activity-block">
                                        <div className="activity-item">
                                            <img src={visited} className="" />
                                        </div>
                                        <div className="activity-item act-right">
                                            <div className="feed-title">Executed CA</div>
                                            <div className="feed-date">2 days ago</div>
                                        </div>
                                    </div>
                                    {/* <!--<div className="activity-line"></div>--> */}
                                    <div className="activity-right-block">
                                        <div className="activity-property"><img className="act-property" src={sevenEleven} /></div>
                                        <div className="activity-property name">7-11 on 785 Main St. Grand...</div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Second row--> */}
                            <div className="about-row">
                                <div className="activity-container">
                                    <div className="activity-block">
                                        <div className="activity-item">
                                            <img src={visited} className="" />
                                        </div>
                                        <div className="activity-item act-right">
                                            <div className="feed-title">Visited Page</div>
                                            <div className="feed-date">4 days ago</div>
                                        </div>
                                    </div>
                                    {/* <!--<div className="activity-line"></div>--> */}
                                    <div className="activity-right-block">
                                        <div className="activity-property"><img className="act-property" src={sevenEleven} /></div>
                                        <div className="activity-property name">7-11 on 785 Main St. Grand...</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        
        </div>
    </div>
    </StyledContainerContact>
    )
}

export default ContactContainer;