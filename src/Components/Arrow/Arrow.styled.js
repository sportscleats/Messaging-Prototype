import styled from "styled-components";

export const StyledArrow = styled.nav`
    height: 71px;
    padding: 24px 16px;
    box-sizing: border-box;
    width: 56px;
    border-right: 1px solid #ddd;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: width .1s ease-in;
    width: ${({ open }) => open ? '281px' : '100%'};
}

.side-nav-icon {
    transition: transform .2s ease-in-out;
    transition-delay: .1s;
    transform: ${({ open }) => open ? 'rotate(180deg)' : 'rotate(0deg)'};
    margin-right: ${({ open }) => open ? '8px' : '0px'};
    float: right;
}

.side-nav-head-sect {
    float: left;
}

.side-nav-header {
    font-size: 18px;
    font-weight: 600;
    transform: ${({ open }) => open ? 'translateX(0px)' : 'translateX(4px)'};
    transition: transform .3s ease-in, opacity .2s ease-in;
    transition-delay: ${({ open }) => open ? '.2s' : '-.2s'};
    opacity: ${({ open }) => open ? '1' : '0'};
    width: ${({ open }) => open ? '100%' : '0'};
}

.side-nav-switch {
    color: #0077DB;
    margin-top: 4px;
    transform: ${({ open }) => open ? 'translateX(0px)' : 'translateX(4px)'};
    transition: transform .3s ease-in, opacity .2s ease-in;
    transition-delay: ${({ open }) => open ? '.2s' : '-.2s'};
    opacity: ${({ open }) => open ? '1' : '0'};
    width: ${({ open }) => open ? '100%' : '0'};
}

`;