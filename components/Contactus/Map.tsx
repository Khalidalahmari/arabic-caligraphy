import React, { useEffect, useState } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

type center = {
  lat: number;
  lng: number;
  zoom: number;
};
type Props = {
  cords: center;
};

function Map({ cords }: Props) {
  const [Center, setCenter] = useState({
    lat: cords.lat,
    lng: cords.lng,
  });
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_API_KEY!,
  });
  const [map, setMap] = React.useState<google.maps.Map | null>(null);
  useEffect(() => {
    if (cords.lat) {
      map?.setZoom(cords.zoom);
      setCenter({
        lat: cords.lat,
        lng: cords.lng,
      });
    }
  }, [cords, map]);

  const onLoad = React.useCallback(function callback(map: google.maps.Map) {
    map.setZoom(cords.zoom);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map: google.maps.Map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={{ aspectRatio: 1, width: "100%" }}
      center={{
        lat: Center.lat,
        lng: Center.lng,
      }}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <>
        <Marker
          position={{
            lat: Center.lat,
            lng: Center.lng,
          }}
        />
      </>
    </GoogleMap>
  ) : (
    <></>
  );
}
export default React.memo(Map);
