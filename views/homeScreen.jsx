import React from 'react';
import { read } from './helpers';
import Stats from './stats';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { addNanoBuck } from '../actions/lightningActions';
import MapScreenButton from './buttons/mapScreenButton';
import PlanetInfoHome from './planetInfoHome';
import SaveGameButton from './buttons/saveGameButton'
import LinkButton from './buttons/LinkButton';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.data = read();
  }

  render() {
    let { nanobucks } = this.props;
    return (
      <div>
        <MapScreenButton />
        <div />
        -
        <div />
        <SaveGameButton />
        <div />
        <LinkButton
        title={'Load Screen'}
        routeTo={'/loadscreen'}
        onClick={this.startNewGame}
        >
        New
        </LinkButton>
        <PlanetInfoHome
          currentPlanetId={this.props.currentPlanetId}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    nanobucks: state.nanobucks,
    currentPlanetId: state.currentPlanetId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNanoBuck: () =>
    dispatch(addNanoBuck()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
