import styled from "styled-components";

export const StyledInfo = styled.nav`

.selected {
    background-color: ${({ open }) => open ? '#EEEEEE' : '#105A98'};
    transition: transform .3s ease-in, opacity .2s ease-in;
    }
.toggle-icon {
    fill: ${({ open }) => open ? '#4A4A4A' : 'white'};
    transition: transform .3s ease-in, opacity .2s ease-in;
}

`;