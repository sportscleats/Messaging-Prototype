import styled from "styled-components";

export const StyledToggle = styled.nav`

/** Toggle Slide **/

.container {
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
  font-weight: bold;
}


`;