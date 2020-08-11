import React from 'react';
import { StyledArrow } from "./Arrow.styled";
import { bool, func } from 'prop-types';
// import { StyledNav } from "../Sidenav/Sidenav.styled";

import doubleArrow from './doubleArrow.svg'


const Arrow = ({ open, setOpen }) => {
    return (
        <StyledArrow open={open} onClick={() => setOpen(!open)}>
            <div className="side-nav-head-sect">
                <div className="side-nav-header">Sales Dashboard</div>
                <div className="side-nav-switch">Switch to Lease</div>
            </div>
            <div className="side-nav-button"><img className="side-nav-icon" src={doubleArrow}></img></div>
        </StyledArrow>
    );
}

Arrow.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
  };

export default Arrow;