import React from "react"
import { Container, Line, Button, P } from "./styles"

export function Header() {
  return (
    <Container>
      <P>Boas Vindas!</P>
      <Line></Line>
      <Button>eventos</Button>
      <Button>cultos</Button>
      <Button>dizimos e ofertas</Button>
      <Button>Onde estamos?</Button>

    </Container>
  )
}
