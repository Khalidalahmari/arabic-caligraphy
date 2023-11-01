import React, { useState } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

type center = {
  lat: number;
  lng: number;
};
type Props = {
  cords: center;
};

function Map({ cords }: Props) {
  const [Center, setCenter] = useState({
    lat: cords.lat ? cords.lat : 23.4241,
    lng: cords.lng ? cords.lng : 53.8478,
  });
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_API_KEY!,
  });
  const [map, setMap] = React.useState<google.maps.Map | null>(null);

  const onLoad = React.useCallback(function callback(map: google.maps.Map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(Center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map: google.maps.Map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={{ aspectRatio: 1, width: "100%" }}
      center={{
        lat: cords.lat as unknown as number,
        lng: cords.lng as unknown as number,
      }}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
}
export default React.memo(Map);
