import React from "react"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import { Container } from "./styles"

export function MapaIgreja() {
  const position = [-19.953931, -44.158484]

    return(
        <Container>
            <MapContainer
                center={position}
                zoom={16}
                scrollWheelZoom={false}
                className="map-container"
            >

           <TileLayer
               attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
           />

           <Marker position={position}>
               <Popup>
                   R. Mantena, 219 - Dom Bosco, Betim - MG, 32670-624
               </Popup>
           </Marker>
            </MapContainer>
        </Container>
     )
}
