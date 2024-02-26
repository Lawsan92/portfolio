import React, { useState } from 'react';

const Analytics = ({ visits }) => {
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
      </div>
    </div>
  );
}

export default Analytics;