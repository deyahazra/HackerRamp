import React, { useState } from "react";
import PermanentDrawerLeft from "../components/sidebar";
import "./myntra.css"
import Profile from "../components/Profile/profile";
import Dashboard from "../components/Dashboard/dashboard";
import Notifications from "../components/Dashboard/notifications";


const Myntra = () => {
    const [activeButton, setActiveButton] = React.useState('');
    const getActiveButton = (activeButton) => {
        setActiveButton(activeButton);
        console.log(activeButton);
    }
    return (
        <div>
        <div>
        <PermanentDrawerLeft className="sidebar" getActiveButton={getActiveButton} />
        </div>
        <div className="content">
         {activeButton === '' ? <div><Dashboard/></div> : null}   
        {activeButton === 'Profile' ? <div><Profile/></div> : null}
        {activeButton === 'Dashboard' ? <div><Dashboard/></div> : null}
        {activeButton === 'Notifications' ? <div><Notifications/></div> : null}
        </div>
        </div>
    )
}
export default Myntra;
