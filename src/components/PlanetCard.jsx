import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    const alternative = `Planeta ${planetName}`;
    return (
      <div className="planet-card">
        
        <p className="planet-name">
          { planetName }
        </p>
        <img src={ planetImage } alt={ alternative } />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
