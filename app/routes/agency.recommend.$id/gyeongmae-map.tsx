import { useEffect } from "react";

const GYEONGMAE_MAP_LOCATION = {
  lat: 37.646454,
  lng: 127.040307,
};

export default function GyeongmaeMap() {
  useEffect(() => {
    if (!window.naver) return;

    const naverMap = new window.naver.maps.Map("map", {
      center: new naver.maps.LatLng(GYEONGMAE_MAP_LOCATION.lat, GYEONGMAE_MAP_LOCATION.lng),
      zoom: 16,
    });

    new window.naver.maps.Marker({
      position: new window.naver.maps.LatLng(
        GYEONGMAE_MAP_LOCATION.lat,
        GYEONGMAE_MAP_LOCATION.lng
      ),
      map: naverMap,
    });
  }, []);

  return <div id="map" style={{ width: "100%", aspectRatio: "343 / 180" }} />;
}
