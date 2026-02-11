import React from "react"
import { Header } from "../Components/header"
import { Conteiner } from "./styles"
import { MapaIgreja } from "../Components/map"

export function OndeEstamos() {
  return (
    <Conteiner>
      <Header />
      <h1>Onde estamos?</h1>
      
      <MapaIgreja />

    </Conteiner>
  )
}
