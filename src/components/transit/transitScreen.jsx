import React from 'react';
import RouteButton from '../buttons/routeButton';
import { setCurrentPlanet, cycleDay } from '../../actions/appActions';
import { connect } from 'react-redux';

class TransitScreen extends React.Component {

  onClick = () => {
    this.props.setCurrentPlanet(this.props.destinationPlanet)
    this.handleCycleDay();
  }

  handleCycleDay = () => {
    this.props.cycleDay();
  }

  render() {
    return (
      <div>
        YOU'RE IN SPACE IN TRANSIT
        <RouteButton
          title={'Land'}
          routeTo={'/homescreen'}
          onClick={this.onClick}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    destinationPlanet: state.destinationPlanet,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentPlanet: (planetId) =>
    dispatch(setCurrentPlanet(planetId)),
    cycleDay: () => dispatch(cycleDay()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TransitScreen);
