import styled from "styled-components";

export const StyledMessageNav = styled.nav`

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
    width: 48px;
    height: 48px;
    background: #ddd;
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