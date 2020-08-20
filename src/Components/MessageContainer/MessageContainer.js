import React from 'react';
import { StyledContainerMessage } from "./MessageContainer.styled";

import arrow from "./assets/Arrow.svg";
import clip from "./assets/clip.svg";



const MessageContainer = () => {
    return (
    <StyledContainerMessage>

<div class="container center-box">
                <div class="message-container">
                    <div class="inner-message-container" id="messages">
                        <img src="https://images.crexi.com/users/77872/c1da142587284cf3a18fb696aeb7dc66_164x164.jpg" class="avatar small" />
                        <div class="upper-message">
                            <div class="message-name-time">
                                <div class="name">Gillian Vanderbilt</div>
                                <div class="message-time">• Yesterday</div>
                            </div>
                            <div class="message-text">Hey Jon, I'm very interested in your listing for the 7-11 on Main. When are you expecting offers by?</div>
                        </div>
                        
                    </div>

                    <div class="write">
                        <div class="input-container">
                            <div class="icon white"><img src={clip}/></div>
                            <div class="type-container">
                            <textarea class="message" type="text" name="sentence" placeholder="Type your message here..."></textarea>
                            <button class="message-button"><img src={arrow} width="16px" height="16px"/></button>
                            </div>
                            </div>
                    </div>
                </div>
            </div>
        

    </StyledContainerMessage>
    )
}

export default MessageContainer;