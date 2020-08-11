import styled from "styled-components";

export const StyledNav = styled.nav`
    width: 56px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-right: 1px solid #ddd;
    transition: width .1s ease-in-out;
    width: ${({ open }) => open ? '280px' : '56px'};
}

.side-nav-item {
    box-sizing: border-box;
    padding: 8px 16px 10px 16px;
    width: 100%;
    display: flex;
}

.side-nav-title {
    transform: ${({ open }) => open ? 'translateX(0px)' : 'translateX(4px)'};
    padding: 8px 16px 8px 16px;
    transition: transform .3s ease-in, opacity .2s ease-in;
    transition-delay: ${({ open }) => open ? '.2s' : '-.2s'};
    opacity: ${({ open }) => open ? '1' : '0'};
    max-height: 8px;
}


.side-nav-sub {
    font-weight: 600;
    height: 40px; 
    border-top: 1px solid #ddd;
}

.top {
    padding-top: 16px;
}

.side-nav-last {
    padding-bottom: 8px;
}

.side-nav-item:last-child {
    background: #E1F1FF;
    box-sizing: border-box;
    border-radius: 5px;
    width: ${({ open }) => open ? '276px' : '52px'};
    transition: width .1s ease-in;
    transition-delay: ${({ open }) => open ? '.1s' : '-.2s'};
    align-self: flex-start;
    margin-left: 2px;
}



@meda (min-height:1000px;) {
    display: none;
}

`;