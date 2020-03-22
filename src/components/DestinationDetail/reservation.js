import React, { Component } from 'react';
import { connect } from 'react-redux';
import { retrieveDestinyInfo } from '../redux/actions/destination';

const mapStateToProps = state => ({
  destinyInfo : state.Destination.destinyInfo,
});

class Reservation extends Component {
  render() {
    const { destinyInfo } = this.props;
    return (
      <div className='reservation'>
        <h4>Reservación</h4>
      </div>
    );
  }
}

Reservation = connect(mapStateToProps)(Reservation);

export default Reservation;
