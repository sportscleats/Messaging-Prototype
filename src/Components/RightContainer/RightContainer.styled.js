import styled from "styled-components";

export const StyledContainerRight = styled.nav`
    width: 100%;
    height: 100vh;
    transition: transform .3s ease-in-out;
    transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
}
.right-side-container {
    display: flex;
    width: 100%;
}

.info {
    margin-left: 8px;
}

.selected {
    background-color: #105A98;
    fill: white;
}

.center-icon {
    margin-left: auto;
    display: flex;
  }


/** message nav */

.messagenav-container {
display: flex;
border-bottom: 1px solid #D8D8D8;
box-sizing: border-box;
padding: 16px;
align-items: center;
height: 72px;
width: 100%;
}


.avatar {
    width: 40px;
    height: 40px;
    background: #ddd;
    border: 1px solid #ddd;
    border-radius: 100px;
    margin-right: 8px;
}

.info {
    margin-left: 8px;
}

.selected {
    background-color: #105A98;
    fill: white;
}

.center-icon {
    margin-left: auto;
    display: flex;
  }

h3 {
    margin: 0px 0px 4px 0px;
}


`;