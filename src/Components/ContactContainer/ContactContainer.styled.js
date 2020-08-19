import styled from "styled-components";

export const StyledContainerContact = styled.nav`
    background: #fff;
    height: 100vh;
    transition: transform .9s ease-in-out, width .4s;
    transition-delay: ${({ open }) => open ? '.05s' : '-.2s'};
    width: ${({ open }) => open ? '0px' : '480px'};
    opacity: ${({ open }) => open ? '0' : '1'};
    box-sizing: border-box;
    padding: ${({ open }) => open ? '0px' : '16px'};

.content {
    transition: transform .4s ease-in, opacity .4s ease-in;
    transition-delay: ${({ open }) => open ? '.2s' : '.2s'};
    opacity: ${({ open }) => open ? '0' : '1'};
    transform: ${({ open }) => open ? 'translateY(8px)' : 'translateY(0px)'};
}
.contact-container-header {
    margin-bottom: 32px;
    display: flex;
    justify-content: center;
}
}
`;