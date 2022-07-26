import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';
import './Missions.css';

class Missions extends React.Component {
  render() {
    return (
      <>
        <Title headline="Missões" />
        <div className="missions">
          { missions.map((mission) => {
            const singleMission = (<MissionCard
              key={ mission.name }
              name={ mission.name }
              year={ mission.year }
              country={ mission.country }
              destination={ mission.destination }
            />);
            return singleMission;
          }) }
        </div>
      </>
    );
  }
}

export default Missions;
