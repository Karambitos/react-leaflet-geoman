import { MapContainer, TileLayer } from "react-leaflet";
import Geoman from "./Geoman";

const Map = () => {
  const position = [50.940474211933974, 6.960182189941407];
  const zoomLv = 15;

  return (
    <MapContainer center={position} zoom={zoomLv} scrollWheelZoom={true}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png"
        attribution='&copy; OpenStreetMap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        maxZoom={20}
      />
      <Geoman />
    </MapContainer>
  );
};

export default Map;
