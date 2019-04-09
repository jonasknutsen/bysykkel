import React from 'react'
import PropTypes from 'prop-types'

const Overlay = ({ station, stationAvailability }) => {
  return (
    <div className='overlay-wrapper'>
      {station && <div className='station-info'>
        <h2>{station.title}</h2>
        <h3>{station.subtitle}</h3>
        <div className='availability-info'>
          <div>
            Ledige sykler: {stationAvailability.availability.bikes}
          </div>
          <div>
            Tilgjengelige låser: {stationAvailability.availability.locks}
          </div>
        </div>
      </div>}
      {!station && <div className='station-info'>
        <h2>Sykkelstasjonstatus</h2>
        <p>Velg en sykkelstasjon på kartet for å se status.</p>
      </div>}
      <style jsx>{`
          .station-info {
            padding: 10px;
            border-radius: 2px;
            border: 1px solid #ddd;
            text-align: center;
          }
          .availability-info {
            border-top: 1px solid #ddd;
            margin-top: 3px;
            padding-top: 3px;
          }
          .overlay-wrapper {
            position: absolute;
            left: 50%;
            top: 10px;
            transform: translate(-50%);
            background-color: #fff;
            width: 80%;
            max-width: 400px;
            padding: 2px;
            border-radius: 2px;
            box-shadow: 0 0 4px rgba(0,0,0,.3);
          }
        `}</style>
    </div>
  )
}

Overlay.propTypes = {
  station: PropTypes.object,
  stationAvailability: PropTypes.object
}

export default Overlay
