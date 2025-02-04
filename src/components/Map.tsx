import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const API_KEY = 'AIzaSyCKcSY6l2NSFwK9sjCvDbZFDu5tMeN_D6Y'

const center = {
  lat: 41.3198491,
  lng: 2.0131132,
}
export const Map = () => {
  return (
    <LoadScript googleMapsApiKey={API_KEY}>
      <GoogleMap mapContainerClassName='gm-container' center={center} zoom={17}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  )
}