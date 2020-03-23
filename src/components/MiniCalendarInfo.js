import React from 'react';

class MiniCalendarInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props;
    return (
      <div className='CalendarInfo'>
        <div className='CalendarInfo__section'>
          <img className='Icon' src={ require('../assets/images/signed.png')} />
          <p>{data.pais}</p>
        </div>
        <div className='CalendarInfo__section'>
          <img className='Icon' src={ require('../assets/images/calendar.png')} />
          <p>{data.duracion}</p>
        </div>
        <div className='CalendarInfo__section'>
          <img className='Icon' src={ require('../assets/images/people.png')} />
          <p>{data.max_pasajeros}</p>
        </div>
      </div>
    );
  }
}

export default MiniCalendarInfo
