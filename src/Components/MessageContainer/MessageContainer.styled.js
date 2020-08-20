import styled from "styled-components";

export const StyledContainerMessage = styled.nav`
    width: 100%;
    background: #fff;
    height: 100vh;
    margin: 0;
    border-right: 1px solid #ddd;
    transition: width 1s;
    box-sizing: border-box;
    padding: 0px;
    }

    ${'' /* .message-container {
    display: flex;
    width: 25vw;
    height: 100vh;
    flex-direction: column;
  } */}
  
  .inner-message-container {
    padding: 24px;
    display: flex;
    height: 63vh;
    ${'' /* display: grid;
    grid-template-columns: 48px auto;
    border-right: 1px solid #D8D8D8;
    grid-gap: 24px 0;
    align-items: center;
    border-bottom: 1px solid #D8D8D8;
    height: 50vh;
    overflow: scroll;
    width: 45vw;
    position: relative;
    top: 0;
    box-sizing: border-box;
    align-content: start; */}
  }
  
  .first-message {
    margin-bottom: 8px;
    opacity:0;
    background-color: papayawhip;
    height: 80px;
    width: 100%;
    text-align: center;
    padding: 24px;
    box-sizing: border-box;
    border-radius: 10px;
    border: 2px solid black;
    font-size: 24px;
    
  }
  
  .name {
      font-weight: 600;
  }

  .avatar {
    width: 40px;
    height:40px;
    border-radius: 100px;
    align-self: start;
    /*animation: hero-animation 2s 0.2s forwards cubic-bezier(0.2, 0.8, 0.2, 1);*/
  }

  .small {
      width: 32px;
      height: 32px;
      opacity: 0;
    animation: hero-animation;
        animation-duration: .25s;
        animation-delay: 0.1s;
        animation-fill-mode: forwards;
        animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  /*****Text area **************/

  .write {
      display: flex;
      ${'' /* width: 45vw; */}
      background-color: #EEEEEE;
      height: 20vh;
      box-sizing: border-box;
      padding: 16px;
  }

  .input-container {
    display: flex;
    align-items: center;
    height: 48px;
    width: 100%;
  }

  .white {
      background-color: white;
      margin-right: 8px;
  }
  
  button.message-button {
    border: none;
    border-radius: 100px;
    padding: 16px 16px;
    background-color: #105A98;
    color: white;
    border-radius: 100px;
    font-size: 16px;
    bottom:16px;
    height: 32px;
    width:32px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
    margin-left: auto;
    /*position: fixed;
    bottom: 75px;
    left: 967px;*/
  }

  .type-container {
    display: flex;
    align-items: center;
    background-color: white;
    border-radius: 100px;
    height: 48px;
    width:100%;
    padding-right: 8px;
    box-sizing: border-box;
  }

  button:focus { 
      outline:none; 
    }

  button:hover { 
      background-color: #3E7AAB; 
    }

  button:active {
        background-color: #083256;
        transform: scale(1.1);
    }

  textarea.message{
      height: 48px;
      outline:none;
      border: none;
      resize: none;
      font-family: "Proxima Nova";
      box-sizing: border-box;
      padding:16px;
      border-radius: 100px;
      width: 36vw;
  }

  textarea::placeholder {
    color: #9C9C9C;
    font-family: "Proxima Nova";
  }
  

  /***** Message response ********/
.message-name-time {
    display: flex;
}

.message-name {
    font-weight: 600;
    opacity: 0;
    animation: hero-animation;
        animation-duration: .25s;
        animation-delay: 0.1s;
        animation-fill-mode: forwards;
        animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);
}

.upper-message {
    display: flex;
    flex-direction: column;
}

.message-text {
    margin-top: 4px;
    line-height: 1.4;
    opacity: 0;
    animation: hero-animation;
        animation-duration: .5s;
        animation-delay: 0.1s;
        animation-fill-mode: forwards;
        animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);
}

/*
.delay {
    animation: hero-animation;
        animation-duration: 1.5s;
        animation-delay: 0.1s;
        animation-fill-mode: forwards;
        animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);
}*/

.message-time {
    margin-left: 4px;
    font-size: 11px;
    color: #6C6C6C;
    opacity: 0;
    animation: hero-animation;
        animation-duration: .25s;
        animation-delay: 0.1s;
        animation-fill-mode: forwards;
        animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);
}

  /***** Center Header ********/

  .center-header {
      display: flex;
      border: 1px solid #D8D8D8;
      box-sizing: border-box;
      padding: 16px;
      width: 75vw;
      align-items: center;
  }

  .center-name {
      font-weight: 600;
      margin: 4px 16px;
      font-size: 18px;
  }

  .center-prop {
    font-size: 16px;
    color: #4A4A4A;
  }



  /***** Animation ********/
  
    @keyframes hero-animation {
      0% {
        opacity: 0;
        transform: translateY(20px);
      }
      100% {
        opacity: 1;
        transform: translateY(0px);
      }
    }

    @keyframes drawer-animation {
        0% {
          opacity: 0;
          transform: translateX(20px);
        }
        100% {
          opacity: 1;
          transform: translateX(0px);
        }
      }

/******** toggle expand *******/
/******* info transition *********/
.open {
    display: none;
    transition-timing-function: ease-in-out;
    transition: .4s cubic-bezier(0.2, 0.8, 0.2, 1);
  }
  
  .expand {
    width: 70vw;
    transition-timing-function: ease-in-out;
    transition: .4s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  .type-expand {
    width:62vw;
    transition-timing-function: ease-in-out;
    transition: .6s cubic-bezier(0.2, 0.8, 0.2, 1);
  }


  @media (max-width: 1100px) {
    .inner-message-container {
        width: 70vw;
        transition-timing-function: ease-in-out;
        transition: .4s cubic-bezier(0.2, 0.8, 0.2, 1);
    }
    .type-container {
        width:60vw;
        transition-timing-function: ease-in-out;
        transition: .6s cubic-bezier(0.2, 0.8, 0.2, 1);
        padding: 24px;
    }

    .write {
        width:70vw;
        transition-timing-function: ease-in-out;
        transition: .6s cubic-bezier(0.2, 0.8, 0.2, 1);
    }
  }

`;