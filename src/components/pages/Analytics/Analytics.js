import React, { useState } from 'react';

const Analytics = ({ visits, analytics }) => {

  const mapLocations = () => {
    let arr = Object.keys(analytics).map((key) => [key, analytics[key]]);
    console.log('arr:', arr);
    return <div style={{height: '5px', width: '5px', borderRadius: '50%', background: '#00a6ff'}}></div>
  }

  mapLocations()

  return (
    <div className='analytics'>
      <div className='analytics_visits'>
        <div className='analytics_visits_bargraph_y-axis'>
          <ul className='analytics_visits_bargraph_y-axis_values'>
            <li className='analytics_visits_bargraph_y-axis_values_point'> <div className='point'></div> 50</li>
            <li className='analytics_visits_bargraph_y-axis_values_point'> <div className='point'></div>40</li>
            <li className='analytics_visits_bargraph_y-axis_values_point'> <div className='point'></div>30</li>
            <li className='analytics_visits_bargraph_y-axis_values_point'> <div className='point'></div>20</li>
            <li className='analytics_visits_bargraph_y-axis_values_point'> <div className='point'></div>10</li>
          </ul>
        </div>
        <div className='analytics_visits_bargraph_bar' style={{height: `${visits * 2}px`}}>{visits}</div>
        <div className='analytics_visits_bargraph_x-axis'></div>
      </div>
      <div className='analytics_location'>
        <img style={{height: 'inherit', width: 'inherit'}} src="https://res.cloudinary.com/darp0mj9i/image/upload/v1708827730/world_1_uxeoh2.svg"/>
        {mapLocations()}
      </div>
    </div>
  );
}

export default Analytics;