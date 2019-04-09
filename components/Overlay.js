import React from 'react'
import PropTypes from 'prop-types'

const Overlay = ({ station, stationAvailability }) => {
  return (
    <div className='overlay-wrapper'>
      <div className='station-info'>
        <h1>Bysykler i Oslo</h1>
        {station && <div>
          <h2>{station.title}</h2>
          <h3>{station.subtitle}</h3>
          <div className='availability-info'>
            <div>
              Ledige sykler: <strong>{stationAvailability.availability.bikes}</strong>
            </div>
            <div>
              Tilgjengelige låser: <strong>{stationAvailability.availability.locks}</strong>
            </div>
          </div>
        </div>}
        {!station && <div>
          <p>Velg en sykkelstasjon på kartet for å se status.</p>
        </div>}
      </div>
      <style jsx>{`
          .station-info {
            padding: 0 5px 10px 5px;
            border-radius: 4px;
            border: 1px solid #ddd;
          }
          .station-info > div {
            padding-top: 10px;
            border-top: 1px solid #ddd;
          }
          .availability-info {
            
            margin-top: 3px;
            padding-top: 3px;
          }
          .overlay-wrapper {
            position: absolute;
            left: 50%;
            top: 20px;
            transform: translate(-50%);
            background-color: #fff;
            width: 80%;
            max-width: 400px;
            padding: 2px;
            border-radius: 4px;
            box-shadow: 0 0 4px rgba(0,0,0,.3);
            text-align: center;
          }
          h1 {
            margin: 10px 0;
          }
          h3 {
            font-weight: normal;
            font-style: italic;
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
