import React from 'react';
import Tilt from 'react-tilt'
import './Logo.css';
import logo from './brain2.png';

const Navigation = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max: 40 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner pa1">
                    <img style={{ paddingTop: '5px' }} src={logo} alt="logo" />
                </div>
            </Tilt>
        </div>
    );
}

export default Navigation;