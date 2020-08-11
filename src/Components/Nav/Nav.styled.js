import styled from "styled-components";

export const StyledTopNav = styled.nav`
    display: flex;
    height: 56px;
    width: 100vw;
    background: #fff;
    color: #111;
    border-bottom: 1px solid #ddd;
    font-size: 14px;
    font-weight: 600;
}

.nav-item {
    padding: 0px 16px;
    align-self: center;
    cursor: pointer;
}

.nav-item:hover {
    opacity: .6;
}

.nav-logo {
    padding: 0px 24px;
    display: flex;
    align-items: center;
}

.logo {
    height: 32px;
    line-height: 64px;
    margin-right: auto;
}

.icon-links {
    padding: 0px 12px;
    cursor: pointer;
}

.icon-links:hover {
    opacity: .6;
}

.text-links:nth-child(5n) {
    margin-right: 48px;
  }

.avatar-nav {
    background-color: #ddd;
    height: 40px;
    width: 40px;
    border-radius: 100px;
    border: 1px solid #ddd;
    align-self: center;
    margin-left: auto;
}

.avatar-nav:hover {
    opacity: .6;
    cursor: pointer;
}

.secondary {
    color: #0077DB;
    outline: none;
    border: 1px solid #0077DB;
    background-color: white;
    border-radius: 5px;
    height: 32px;
    margin: 0 24px;
    font-size: 14px;
    padding: 0 16px;
  }

.rest-nav {
    margin-left: auto;
    display: flex;
    align-items: center;
  }

.nav-name {
    font-size: 10px;
    color: #9C9C9C;
    margin-top: 2px;
  }

.sales-tools {
    font-size: 10px;
    color:#0077DB;
    font-weight: 600;
    margin-top: 2px;
  }

.nav-info {
    text-align: left;
    padding-left: 8px;
  }

.burg {
    display: none;
}

@media screen and (max-width: 1000px) {
.nav-item{
	   display: none;
    }

.avatar-nav {
    margin-right: 8px;
}

.burg {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    padding: 0px;
    height: 48px;
    width: 48px;
    margin-right: 24px;
    cursor: pointer;
}

.burg:hover {
    background-color: #eee;
    opacity: 1;
}
    
}
`;