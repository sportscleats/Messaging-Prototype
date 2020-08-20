import styled from "styled-components";

export const StyledSearch = styled.nav`
.search-bar {
    height: 40px;
    width: 100%;
    border-bottom: 1px solid #ddd;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0px 12px;
}

.input-icon {
    height: 20px;
    width: 20px;
}

.search-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
}

.filter {
    padding: 4px;
}

.filter:hover {
    background: #eee;
    border-radius: 100px;
    cursor: pointer;
}

.search-input {
    height: 36px;
    font-size: 14px;
    outline: none;
    border:none;
    padding-left:4px;
    width: 100%;
}

.search-input::placeholder {
    color: #bbb;
}

`;