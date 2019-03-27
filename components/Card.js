import React from 'react'
import PropTypes from 'prop-types'

const Card = ({ station, stationAvailability }) => {
  return (
    <div className='card'>
      <h2>{station.title}</h2>
      <h3>{station.subtitle}</h3>
      <div>
        <div>
          Totalt antall låser: {station.number_of_locks}
        </div>
        <div>
          Tilgjengelige låser: {stationAvailability.locks}
        </div>
        <div>
          Ledige sykler: {stationAvailability.bikes}
        </div>
      </div>
      <style jsx>{`
        .card {
          padding: .5rem;
          margin: .5rem;
          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
              0 3px 1px -2px rgba(0, 0, 0, 0.2),
              0 1px 5px 0 rgba(0, 0, 0, 0.12);
          max-width: 480px;
          width: 50%;
        }
        h3 {
          font-weight: 300;
        }
      `}</style>
    </div>
  )
}

Card.propTypes = {
  station: PropTypes.object,
  stationAvailability: PropTypes.object
}

export default Card
