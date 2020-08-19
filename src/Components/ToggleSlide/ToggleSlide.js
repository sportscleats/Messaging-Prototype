import React, { useState } from 'react';
import { StyledToggle} from "./ToggleSlide.styled";



export default function Toggle() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleButton = () => setIsOpen(!isOpen);

  Toggle.handleClickOutside = () => setIsOpen(false);

  return (
      <StyledToggle>
            <div className="container">
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
    </StyledToggle>
  );
}
