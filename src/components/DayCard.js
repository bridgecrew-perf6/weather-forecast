import React from 'react';
import './DayCardStyle.css';

var moment = require('moment');

const DayCard = ({reading}) => {
    let date = new Date();
    const weekDay = reading.dt * 1000
    date.setTime(weekDay)

    const weatheImageURL = `owf owf-${reading.weather[0].id} owf-5x`;

    return(  
            <div className='tc dib br3 pa3 ma2 grow bw2'>
            <div className='card ba tc dib br3 pa3 ma2 grow bw1 shadow-5 dayCard'>
                <h3 className='cardTitle'>{moment(date).format('dddd')}</h3>
                <p>{moment(date).format('MMMM Do, h:mm a')}</p>
                <i className={weatheImageURL}></i>
                <h2>{Math.round(reading.main.temp)} &deg;C</h2>
                <div className='card-body'>
                    <p className='card-text'>{reading.weather[0].description}</p>
                </div>
            </div>
        </div>
                  
    )
}

export default DayCard;