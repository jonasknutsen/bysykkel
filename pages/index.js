import React from 'react'
import fetch from 'isomorphic-unfetch'
import PropTypes from 'prop-types'
import GoogleMapReact from 'google-map-react'
import Marker from '../components/Marker'
import Overlay from '../components/Overlay'
import Error from '../components/Error'
import config from '../config'

class Index extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      center: {
        lat: 59.913521,
        lng: 10.755710
      },
      zoom: 15
    }
  }

  showStation = (station, stationAvailability) => {
    this.setState({
      station,
      stationAvailability
    })
  }

  render () {
    const { stations, availability, error } = this.props
    return (
      <div>
        <main>
          <div className='map'>
            <GoogleMapReact
              bootstrapURLKeys={{ key: config.mapApiKey }}
              defaultCenter={this.state.center}
              defaultZoom={this.state.zoom}
            >
              {!error && stations && stations.map((station, key) => {
                const stationAvailability = availability.find(element => element.id === station.id)
                return (
                  <Marker
                    key={key}
                    lat={station.center.latitude}
                    lng={station.center.longitude}
                    stationAvailability={stationAvailability}
                    onClick={() => this.showStation(station, stationAvailability)}
                    chosenOne={this.state.station && this.state.station.id === station.id}
                  />
                )
              })}
            </GoogleMapReact>
            {!error && <Overlay station={this.state.station} stationAvailability={this.state.stationAvailability} />}
            {error && <Error />}
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
            height: 100%;
          }
          .map {
            height: 100vh;
            width: 100vw;
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
  if (stationsRes.status !== 200) {
    console.log('Henting av stasjoner feilet med', stationsRes.status)
    return {
      error: 'Stasjoner kunne ikke hentes'
    }
  }
  const stationsData = await stationsRes.json()

  const availabilityRes = await fetch(`${config.apiRoot}/stations/availability`, {
    headers: { 'Client-Identifier': config.apiKey }
  })
  if (availabilityRes.status !== 200) {
    console.log('Henting av tilgjengelighet feilet med', availabilityRes.status)
    return {
      error: 'Tilgjengelighet kunne ikke hentes'
    }
  }
  const availabilityData = await availabilityRes.json()

  return {
    stations: stationsData.stations,
    availability: availabilityData.stations
  }
}

Index.propTypes = {
  stations: PropTypes.array,
  availability: PropTypes.array,
  error: PropTypes.string
}

export default Index
