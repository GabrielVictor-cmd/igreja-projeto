import React from "react"
import { Conteiner, Img, Resume, A } from "./styles"
import { Header } from "../Components/header"

export function Home() {
  return (
    <Conteiner>
      <Header />
      <h1>Igreja Remanescentes do Grande Eu Sou</h1>
      <Resume>
        A Igreja Remanescentes do Grande Eu Sou é uma igreja pequena e simples,
        mas cheia de amor e da presença de Deus. Aqui, cada pessoa é recebida
        com abraço sincero, escuta atenta e coração aberto. Somos uma família na
        fé, que caminha junta nos momentos bons e também nos difíceis, sempre
        buscando viver o evangelho de maneira verdadeira e prática. Cremos que o
        Senhor transforma vidas, restaura corações e renova esperanças, e é por
        isso que nos esforçamos para refletir o caráter de Jesus Cristo em cada
        atitude. Nosso desejo é que todos que entrarem encontrem paz, propósito
        e um lugar para pertencer. Como está escrito na Bíblia Sagrada:{" "}
        <i>
          “Vinde a mim, todos os que estais cansados e sobrecarregados, e eu vos
          aliviarei.”
        </i>{" "}
        (
        <A
          target="_blank"
          href="https://www.bible.com/pt/bible/129/MAT.11.28-30.NVI"
        >
          Mateus 11:28
        </A>
        ). Aqui, você não é apenas mais um — você é parte da família.
      </Resume>

      <Img>
        <img src={require("../Assets/igreja-editado.jpg")} />
      </Img>
    </Conteiner>
  )
}
