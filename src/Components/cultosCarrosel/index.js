import React from "react"
import Carousel from "react-elastic-carousel"
import { Conteiner, OffersItems } from "./styles"
import { Cards } from "../Cards"

export function CultosCarrosel() {
  const BreakPoint = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ]

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
      <Carousel
        itemsToShow={4}
        style={{ width: "100%" }}
        breakPoints={BreakPoint}
      >
        {cultos &&
          cultos.map((culto) => (
            <Cards key={culto.id}>
              <p>{culto.cultoNome}</p>
              <p>{culto.horario}</p>
            </Cards>
          ))}
      </Carousel>
    </Conteiner>
  )
}
