import React from 'react';
import { StyledInfo } from "./InfoIcon.styled";
import { bool, func } from 'prop-types';


const InfoIcon = ({ open, setOpen }) => {
    return (
        <StyledInfo open={open} onClick={() => setOpen(!open)}>
            <div className="icon info selected">
            
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0)">
                <path className="toggle-icon" d="M10 2.96873C13.8614 2.96873 17.0312 6.09617 17.0312 9.99998C17.0312 13.8832 13.8864 17.0312 10 17.0312C6.11835 17.0312 2.96875 13.8879 2.96875 9.99998C2.96875 6.11967 6.11334 2.96873 10 2.96873ZM10 1.92706C5.54176 1.92706 1.92708 5.54305 1.92708 9.99998C1.92708 14.4595 5.54176 18.0729 10 18.0729C14.4582 18.0729 18.0729 14.4595 18.0729 9.99998C18.0729 5.54305 14.4582 1.92706 10 1.92706ZM8.82812 13.125H9.21875V9.21873H8.82812C8.6124 9.21873 8.4375 9.04383 8.4375 8.82811V8.56769C8.4375 8.35197 8.6124 8.17706 8.82812 8.17706H10.3906C10.6063 8.17706 10.7812 8.35197 10.7812 8.56769V13.125H11.1719C11.3876 13.125 11.5625 13.2999 11.5625 13.5156V13.776C11.5625 13.9917 11.3876 14.1666 11.1719 14.1666H8.82812C8.6124 14.1666 8.4375 13.9917 8.4375 13.776V13.5156C8.4375 13.2999 8.6124 13.125 8.82812 13.125ZM10 5.31248C9.4247 5.31248 8.95833 5.77885 8.95833 6.35415C8.95833 6.92944 9.4247 7.39581 10 7.39581C10.5753 7.39581 11.0417 6.92944 11.0417 6.35415C11.0417 5.77885 10.5753 5.31248 10 5.31248Z" fill="white"/>
                </g>
                <defs>
                <clipPath id="clip0">
                <rect width="16.6667" height="16.6667" fill="white" transform="translate(1.66666 1.66666)"/>
                </clipPath>
                </defs>
            </svg>


            </div>
        </StyledInfo>
    );
}

InfoIcon.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
  };

export default InfoIcon;