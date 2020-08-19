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
    transition: transform .9s ease-in, opacity .4s ease-in;
    transition-delay: ${({ open }) => open ? '.2s' : '.4s'};
    opacity: ${({ open }) => open ? '0' : '1'};
    transform: ${({ open }) => open ? 'translateY(24px)' : 'translateY(0px)'};
}
}
`;