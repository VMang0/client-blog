'use client';

import Map, { Marker } from 'react-map-gl';

import MarkerIcon from '@assets/icons/map-marker.svg';
import { env } from '@constants/env';
import { mapPoints } from '@constants/mapPoints';
import 'mapbox-gl/dist/mapbox-gl.css';

import style from './style.module.scss';

const MapComponent = () => (
  <div className={style.map}>
    <Map
      initialViewState={{
        latitude: 20,
        longitude: 0,
        zoom: 1.5,
      }}
      mapStyle="mapbox://styles/mapbox/light-v10"
      mapboxAccessToken={env.MAPBOX_KEY}
    >
      {mapPoints.map((point, index) => (
        <Marker key={index} latitude={point.latitude} longitude={point.longitude} anchor="bottom">
          <MarkerIcon />
        </Marker>
      ))}
    </Map>
  </div>
);

export default MapComponent;
