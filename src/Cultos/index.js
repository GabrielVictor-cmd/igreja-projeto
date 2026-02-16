import React from "react"
import { Header } from "../Components/header"
import { Conteiner, Div } from "./styles"
import { CultosCarrosel } from "../Components/cultosCarrosel"

export function Cultos() {
  const cultos = [
    { id: 1, cultoNome: "Culto de Oração", horario: "Domingo 08:00 da manhã" },
    {
      id: 2,
      cultoNome: "Culto Vida no Espírito",
      horario: "Domingo 09:30 da manhã",
    },
    { id: 3, cultoNome: "Culto de Celebração", horario: "Domingo 18:30" },
    {
      id: 4,
      cultoNome: "Culto Quinta da Resposta",
      horario: "5ª Feira ás 19:30",
    },
  ]

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
