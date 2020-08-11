import React from 'react';
import { StyledContainerLeft } from "./LeftContainer.styled";
import Card from '../Card/Card'
import Search from '../Search/Search'

import dots from './left-assets/3-dot.svg'


const LeftContainer = () => {
    return (
    <StyledContainerLeft>
    <div className="left-header">
    <h1>Messages</h1>
    <div className="icon dots"><img src={dots}/></div>
    </div>
    <Search />
    <Card />
    </StyledContainerLeft>
    )
}

export default LeftContainer;