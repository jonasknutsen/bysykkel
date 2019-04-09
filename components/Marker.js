import React from 'react'
import PropTypes from 'prop-types'

const Marker = ({ station, stationAvailability, onClick }) => {
  // console.log(station)
  // console.log(stationAvailability)
  return (
    <div className='availability-no' onClick={onClick}>
      {stationAvailability.availability.bikes}
      <style jsx>{`
        .availability-no {
          font-size: 16px;
          background-color: #1F3A93;
          color: white;
          height: 32px;
          width: 32px;
          border: 1px solid white;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  )
}

Marker.propTypes = {
  station: PropTypes.object,
  stationAvailability: PropTypes.object,
  onClick: PropTypes.func
}

export default Marker
