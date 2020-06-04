import React from 'react';
import classes from './OrganizerTab.module.css';

const OrganizerTab = () => {
  return (
    <div className={classes.organizerTab}>
      <h2>Järjestä pelit</h2>
      <ul>
        <li>Voittoprosentti %</li>
        <li>Suurin potti</li>
        <li>Tasaisimmat voitot</li>
        <li>Halvin panos</li>
      </ul>
    </div>
  );
};

export default OrganizerTab;
