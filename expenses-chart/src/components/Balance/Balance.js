import React from 'react';
import logo from '../../../src/logo.svg';
import './Balance.css';

const Balance = () => {
    return(
        <div className='balance-container'>
            <div>
                <p>My Balance</p>
                <h2>$921.48</h2>
            </div>
            <img src={logo} alt="logo" class="logo"></img>
        </div>
    )
}

export default Balance;