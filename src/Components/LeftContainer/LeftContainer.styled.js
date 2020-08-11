import styled from "styled-components";

export const StyledContainerLeft = styled.nav`
width: 40%;
font-size: 13px;
text-align: left;
border-right: 1px solid #ddd;
height: 100vh;
}

.left-header {
    box-sizing: border-box;
    display: flex;
    padding: 8px 16px;
    height: 72px;
    border-bottom: 1px solid #ddd;;
    justify-content: space-between;
    align-items; center;
}

.dots {
    margin-top: 8px;
}

h1 {
    font-weight: 600;
}

@media (max-width: 1000px) {
    width: 35vw;
}

`;