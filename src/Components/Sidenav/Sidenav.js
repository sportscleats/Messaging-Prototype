import React from 'react';
import { bool } from 'prop-types';
import { StyledNav } from "./Sidenav.styled";

import Arrow from "../Arrow/Arrow"


import doubleArrow from './sideNav-icons/doubleArrow.svg'
import savedSearch from './sideNav-icons/saved-search.svg'
import savedProp from './sideNav-icons/saved.svg'
import actionHistory from './sideNav-icons/action.svg'

import dashboard from './sideNav-icons/dashboard.svg'
import myListings from './sideNav-icons/listings.svg'
import activityFeed from './sideNav-icons/activity.svg'
import contacts from './sideNav-icons/contacts.svg'
import emailLists from './sideNav-icons/email-lists.svg'
import emailCamp from './sideNav-icons/e-campaigns.svg'
import pursuits from './sideNav-icons/pursuits.svg'
import tracker from './sideNav-icons/tracker.svg'
import comps from './sideNav-icons/comps.svg'

import profile from './sideNav-icons/profile.svg'
import account from './sideNav-icons/account.svg'
import notificationSet from './sideNav-icons/notification-settings.svg'
import messages from './sideNav-icons/messages.svg'



const buyItems = [
    {
        img:`${savedSearch}`,
        title: 'Saved Searches'
    },
    {
        img:`${savedProp}`,
        title: 'Saved Properties'
    },
    {
        img:`${actionHistory}`,
        title: 'Action History'
    }
    ]

const sellItems = [
    {
        img:`${dashboard}`,
        title: 'Dashboard'
    },
    {
        img:`${myListings}`,
        title: 'My Listings'
    },
    {
        img:`${activityFeed}`,
        title: 'Activity Feed'
    },
    {
        img:`${contacts}`,
        title: 'Contacts'
    },
    {
        img:`${emailLists}`,
        title: 'Email lists'
    },
    {
        img:`${emailCamp}`,
        title: 'Email Campaigns'
    },
    {
        img:`${pursuits}`,
        title: 'Pursuits'
    },
    {
        img:`${tracker}`,
        title: 'Closing Tracker'
    },
    {
        img:`${comps}`,
        title: 'My Sales Comps'
    },
    ]

const acctItems = [
    {
        img:`${profile}`,
        title: 'View Profile'
    },
    {
        img: `${account}`,
        title: 'Account Settings'
    },
    {
        img:`${notificationSet}`,
        title: 'Notifications Settings'
    },
    {
        img:`${messages}`,
        title: 'Messages'
    },
    ]


const Sidenav = ({ open }) => {
    return (
        <StyledNav open={open}>
           
            <div className="side-nav-item side-nav-sub top">BUY</div>
            
                {buyItems.map((item) => (
                <div className="side-nav-item">
                    <img className="side-nav-icon" src={item.img}></img>
                    <div className="side-nav-title">{item.title}</div>
                </div>
                ))}

            <div className="side-nav-item side-nav-sub top">SELL</div>

                {sellItems.map((item) => (
                <div className="side-nav-item">
                    <img className="side-nav-icon" src={item.img}></img>
                    <div className="side-nav-title">{item.title}</div>
                    </div>
                ))}

            <div className="side-nav-item side-nav-sub top">ACCT</div>

                {acctItems.map((item) => (
                <div className="side-nav-item">
                    <img className="side-nav-icon" src={item.img}></img>
                    <div className="side-nav-title">{item.title}</div>
                </div>
                ))}

        </StyledNav>
    );
}

Sidenav.propTypes = {
    open: bool.isRequired,
  }


export default Sidenav;