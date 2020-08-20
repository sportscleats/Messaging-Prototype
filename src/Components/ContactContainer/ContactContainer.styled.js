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

/********** Notes *************/

.notes {
    box-size: border-box;
    padding: 32px 8px;
    ${'' /* width: 100%; */}
}

.note {
  font-size: 11px;
  color: #6C6C6C;
}

.actual-note {
  font-size: 13px;
  line-height: 1.2;
}

.note-box {
  box-sizing: border-box;
  padding: 16px;
  border: 1px solid #D8D8D8;
  border-radius: 5px;
  margin: 8px 0;
}

.bottom-note {
  text-align: right;
}

.note-textarea {
    height: 72px;
    outline:none;
    border: 1px solid #9C9C9C;
    resize: none;
    font-family: "Proxima Nova";
    box-sizing: border-box;
    padding: 12px 12px;
    border-radius: 5px;
    ${'' /* width: 21vw; */}
    margin-bottom: 16px;
    margin-top: 38vh;
}

.note-textarea::placeholder {
  color: #9C9C9C;
  font-family: "Proxima Nova";
}

.note-button {
  padding: 12px 24px;
  border: none;
  background: rgba(0, 119, 219, 0.48);
  border-radius: 5px;
  color: white;
  margin-left: auto;
  cursor: not-allowed;
}

.note-button:active {
  background-color: rgba(0, 119, 219, 0.48);
  transform: scale(1);
}

.note-input-section {
  display: flex;
  flex-direction: column;
}

.hide {
  display: none;
}

`;