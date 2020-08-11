import React from 'react';
import { StyledCard } from "./Card.styled";
// import { cardDetails, amPm } from "../Data/contacts"



//------------------------------------------------
// Utility Functions
//------------------------------------------------

const utilRandomNumberBetween = (low, high)=> {
  return Math.floor(Math.random() * high) + low;
}

const utilArrayRandom = (arr)=> {
  return arr[Math.floor(Math.random() * arr.length)];
}

const addZero = (n)=> {
  return n > 9 ? "" + n: "0" + n;
}

//------------------------------------------------
// Objects
//------------------------------------------------

const amPm = ["AM", "PM"]

const cardDetails = [
    {
      avatar: 'https://images.crexi.com/users/77872/c1da142587284cf3a18fb696aeb7dc66_164x164.jpg',
      name: 'Gillian Vanderbilt',
      preview: 'That sounds good, thanks Gillian.',
      time: utilRandomNumberBetween(1,12) + ":" + addZero(utilRandomNumberBetween(0,59)) + utilArrayRandom(amPm),
      id: utilRandomNumberBetween(1,1000),
    },
    {
      avatar: 'https://images.crexi.com/users/6287/6ec182e5f5e04a5aba2de154f8d2cf9f_164x164.jpg',
      name: 'Jake Fitzgerald',
      preview: 'Great,  I’ll keep you updates with any changes. Thanks!',
      time: utilRandomNumberBetween(1,12) + ":" + addZero(utilRandomNumberBetween(0,59)) + utilArrayRandom(amPm),
    },
  ];


//------------------------------------------------
// Component
//------------------------------------------------

const Card = () => {
    return (
        <StyledCard>
            {cardDetails.map(detail => (
                <div className="card" data-id={detail.id}>
                  <img className="card-avatar" src={detail.avatar}></img>
                  <div className="card-text">
                      <div className="card-upper">
                          <div className="username">{detail.name}</div>
                          <div className="time">{detail.time}</div>
                      </div>
                      <div className="preview">{detail.preview}</div>
                  </div>
                </div>

            ))}
        </StyledCard>
    );
}




export default Card;