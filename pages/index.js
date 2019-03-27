import React from 'react'
import fetch from 'isomorphic-unfetch'
import PropTypes from 'prop-types'
import Card from '../components/Card'
import config from '../config'

class Index extends React.Component {
  render () {
    const { stations, availability } = this.props
    return (
      <div>
        <header>
          <h1>Bysykkeltilgjengelighet</h1>
        </header>
        <main>
          <div className='card-list'>
            {stations && stations.map((station, key) => {
              const stationAvailability = availability.find(element => element.id === station.id)
              return (
                <Card key={key} station={station} stationAvailability={stationAvailability.availability} />
              )
            })}
            {!stations && <div className='error'>Det skjedde en feil ved henting av data. Hva med å prøve å laste inn siden på nytt?</div>}
          </div>
        </main>
        <style jsx>{`
          header {
            margin-bottom: 1rem;
          }
          h1 {
            text-align: center;
            font-size: 3rem;
          }
          main {
            width: 100%;
            max-width: 1000px;
            margin: 0 auto;
          }
          .card-list {
            display: flex;
            flex-wrap: wrap;
          }
          .error {
            color: red;
            text-align: center;
            width: 100%;
          }
        `}</style>
        <style jsx global>{`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
            margin: 0;
            padding: 0;
            font-size: 16px;
          }
        `}</style>
      </div>
    )
  }
}

Index.getInitialProps = async function () {
  const stationsRes = await fetch(`${config.apiRoot}/stations`, {
    headers: { 'Client-Identifier': config.apiKey }
  })
  const stationsData = await stationsRes.json()

  const availabilityRes = await fetch(`${config.apiRoot}/stations/availability`, {
    headers: { 'Client-Identifier': config.apiKey }
  })
  const availabilityData = await availabilityRes.json()

  return {
    stations: stationsData.stations,
    availability: availabilityData.stations
  }
}

Index.propTypes = {
  stations: PropTypes.array,
  availability: PropTypes.array
}

export default Index
