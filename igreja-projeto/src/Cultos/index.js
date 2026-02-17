import React from "react"
import { Header } from "../Components/header"
import { Conteiner, Div } from "./styles"
import { CultosCarrosel } from "../Components/cultosCarrosel"

export function Cultos() {

  return (
    <Conteiner>
      <Header />
      <h1>Programação semanal de Cultos</h1>
      <Div>

        <CultosCarrosel />

      </Div>
    </Conteiner>
  )
}
