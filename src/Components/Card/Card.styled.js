import styled from "styled-components";

export const StyledCard = styled.nav`


.card {
    display: flex;
    box-sizing: border-box;
    margin: 0px 0px 0px 24px ;
    padding: 16px;
    /* border-top: 1px solid #ddd; */
    border-bottom: 1px solid #ddd;
    
}

.card-avatar{
    height: 48px;
    width: 48px;
    border-radius: 100px;
    border: 1px solid #ddd;
}

.card-text {
    display: flex;
    flex-direction: column;
    padding: 0px 8px;
    width: 100%;
}

.card-upper {
    display: flex;
}

.username {
    font-weight: 600;
}

.preview {
    padding-top: 4px;
    color: #6C6C6C;
}

.time {
   margin-left: auto;
}

`;