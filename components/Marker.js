import React from 'react'
import PropTypes from 'prop-types'

const Marker = ({ stationAvailability, onClick, chosenOne }) => {
  return (
    <div className={`availability-no ${stationAvailability.availability.bikes === 0 ? 'empty' : ''} ${chosenOne ? 'chosen' : ''}`} onClick={onClick}>
      {stationAvailability.availability.bikes}
      <style jsx>{`
        .availability-no {
          font-size: 16px;
          background-color: #1F3A93;
          color: white;
          height: 30px;
          width: 30px;
          border: 1px solid white;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }
        .empty {
          background-color: #E73C4E;
        }
        .chosen {
          background-color: #1D781D;
        }
      `}</style>
    </div>
  )
}

Marker.propTypes = {
  stationAvailability: PropTypes.object,
  onClick: PropTypes.func,
  chosenOne: PropTypes.bool
}

export default Marker
