import React from "react"
import { Header } from "../Components/header"
import { Conteiner, A, Resume, Img } from "./styles"

export function DizimosOfertas() {
  return (
    <Conteiner>
      <Header />
      <h1>Dizimos e ofertas</h1>
      <Resume>
        Na Igreja Remanescentes do Grande Eu Sou, entendemos que os dízimos e
        ofertas são um ato de amor, gratidão e confiança em Deus. Não vemos como
        obrigação pesada nem como cobrança, mas como uma expressão voluntária de
        quem reconhece tudo o que o Senhor já fez e continua fazendo. Cada
        contribuição é uma semente plantada com fé, que ajuda a manter a obra,
        cuidar das pessoas e levar a Palavra mais longe. Como nos ensina a
        Bíblia Sagrada:{" "}
        <i>
          “Cada um contribua segundo propôs no coração; não com tristeza ou por
          necessidade, porque Deus ama quem dá com alegria.”{" "}
        </i>
          (
        <A
          target="_blank"
          href="https://www.bible.com/pt/bible/129/2CO.9.7"
        >
          2 Coríntios 9:7
        </A>
        ). Aqui, ofertar é um gesto de gratidão e participação
        naquilo que Deus está construindo entre nós.
      <Img>
        <img src={require("../Assets/QRcode.png")} alt="Imagem QR Code para doação de dizimos para a igreja" />
      </Img>
        <p>Nota: QR code ainda será realmente adicionado</p>
      </Resume>

    </Conteiner>
  )
}
