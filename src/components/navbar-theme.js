import React, { useState } from 'react';
import DarkLightBTN from '../assets/images/dark-theme-svgrepo-com.svg'

export default function Navbar() {
const [isActive, setIsActive] = useState(false);

const toggleActive = () => {
    setIsActive(!isActive);
};

return (
    <>
    <div className="navbar bg-base-100">
        <div className="flex-none"></div>
        <div className="flex-1">
        <a href='/' className="btn btn-ghost text-xl">LiveScores</a>
        </div>
        <div className="flex-none">
        <button
            className={`btn btn-square btn-ghost ${isActive ? 'active' : ''}`}
            id='btn-fixture-theme'
            onClick={toggleActive}
        >
        <img src={DarkLightBTN}></img>
        </button>
        </div>
    </div>
    </>
);
}


