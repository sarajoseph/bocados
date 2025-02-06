import { APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps' // Adjust the import path as necessary

export const GMap = () => {
  const center = {
    lat: 41.3198491,
    lng: 2.0131132,
  }
  const location = { key: 'restaurant', location: center }
  const zoom = 17

  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <Map
        className='gm-container'
        defaultCenter={center}
        defaultZoom={zoom}
        mapId={import.meta.env.VITE_GOOGLE_MAPS_MAP_ID}
      >
        <AdvancedMarker
          key={location.key}
          position={location.location}>
          <Pin background={'#ea4335'} glyphColor={'#7a1f1f'} borderColor={'#7a1f1f'} />
        </AdvancedMarker>
      </Map>
    </APIProvider>
  )
}