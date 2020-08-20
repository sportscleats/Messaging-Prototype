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
    transition-delay: ${({ open }) => open ? '.2s' : '0s'};
    opacity: ${({ open }) => open ? '0' : '1'};
    transform: ${({ open }) => open ? 'translateY(8px)' : 'translateY(0px)'};
}
.contact-container-header {
    margin-bottom: 32px;
    display: flex;
    justify-content: center;
}

/* Top header */

.contact-avatar {
    border: 1px solid #ddd;
    border-radius: 100px;
    height: 56px;
    width: 56px;
}

.top-right {
    display: flex;
    flex-direction: column;
    justify-contnet: center;
    align-items: center;
    box-sizing: border-box;
    padding: 8px;
}

/* Toggle */

.toggle-container {
  display: flex;
  width: 400px;
  border-bottom: 1px solid black;
  justify-content: space-around;
  align-items: center;
}

.option {
  height: 40px;
  width: 50%;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  font-size: 16px;
}

.selected-toggle {
  border-bottom: 2px solid black;
  transition: 0.4s ease-in-out, font-weight 0.2s ease-in;
  font-weight: 600;
}

/* inner sections */
.about {

}

.notes {

}

.hide {
    display: none;
}

`;