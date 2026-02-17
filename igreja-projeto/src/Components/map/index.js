import React from "react"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import { Container } from "./styles"
import "leaflet/dist/leaflet.css"
import { Icon } from "leaflet"

// Configurar o ícone padrão do Leaflet
const defaultIcon = new Icon({
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
})

export function MapaIgreja() {
  const position = [-19.953931, -44.158484]

  return (
    <Container>
      <MapContainer
        center={position}
        zoom={20}
        scrollWheelZoom={false}
        className="map-container"
        key={position}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker
          position={position}
          icon={defaultIcon}
          eventHandlers={{
            add: (e) => {
              e.target.openPopup()
            },
          }}
        >
          <Popup>
            <p>Estamos aqui, venha nos visitar!</p>
            <p>R. Mantena, 219 - Dom Bosco, Betim - MG </p>
          </Popup>
        </Marker>
      </MapContainer>
    </Container>
  )
}
