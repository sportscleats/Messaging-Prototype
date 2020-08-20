import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@font-face {
    font-family: "Proxima Nova";
    font-weight: 400;
    src: local("Proxima Nova") url("./assets/Proxima\ Nova-Regular.otf") format("opentype");
  }
  
  @font-face {
    font-family: "Proxima Nova";
    font-weight: 600;
    src: local("Proxima Nova") url("./assets/Proxima\ Nova-Semibold.otf") format("opentype");
  }
  
  .flex {
    display: flex;
  }
  
  body {
    margin: 0;
    font-family: 'Proxima Nova', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow: hidden;
    position: fixed;
    font-size: 13px;
  }

  h3, h2 {
    font-weight: 600;
    margin: 0;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  
  li {
    list-style: none;
  }


  .icon {
    background-color: #EEEEEE;
    border-radius: 100px;
    height: 32px;
    width: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: transform .3s ease-in, opacity .2s ease-in;
}

.icon:hover {
  opacity: .8;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .25);
  transform: translateY(-2px);
  fill: black;
}

/* Global helpers */

.margin-b {
    margin-bottom: 8px;
}

.badge {
  background: #eee;
  border-radius: 2.5px;
  padding: 4px;
  font-size: 10px;
  text-transform: uppercase;
  font-weight: 600;
  color: #6C6C6C;
  margin-top: 4px;
}
  
`;