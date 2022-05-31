import React from 'react';
import './Spending.css';

const Spending = () => {
    return(
        <div className='spending-container'>
            <div><h2>Spending - Last 7 Days</h2></div>
            <div className="graph-container">
                <div className="bar" style={{height: '25%'}} price="$17.45"></div>
                <div className="bar" style={{height: '25%'}} price="$34.91"></div>
                <div className="bar-blue" style={{height: '25%'}} price="$52.36"></div>
                <div className="bar" style={{height: '25%'}} price="$31.07"></div>
                <div className="bar" style={{height: '25%'}} price="$23.39"></div>
                <div className="bar" style={{height: '25%'}} price="$43.28"></div>
                <div className="bar" style={{height: '25%'}} price="$25.48"></div>
            </div>
            <div></div>
        </div>
    )
}

export default Spending;
