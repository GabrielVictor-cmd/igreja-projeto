import React from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { Container, Line, Button, P, PageLink } from "./styles"

export function Header() {
  const navigate = useNavigate()
  const location = useLocation()
  const isHome = location.pathname === "/"
  //const isEventos = location.pathname === "/eventos"
  const isCultos = location.pathname === "/cultos"
  const isDizOfer = location.pathname === "/dizimos-ofertas"
  const isOndeEsta = location.pathname === "/onde-estamos"


  return (
    <Container>
      <P>Boas Vindas!</P>
      <Line></Line>

      <Button onClick={() => navigate("/")}><PageLink isActive={isHome}>Home</PageLink> </Button>

      {/*<Button onClick={() => navigate("/eventos")}><PageLink isActive={isEventos}>Eventos</PageLink> </Button>*/}

      <Button onClick={() => navigate("/cultos")}><PageLink isActive={isCultos}>Cultos</PageLink> </Button>

      <Button onClick={() => navigate("/dizimos-ofertas")}><PageLink isActive={isDizOfer}>Dizimos e ofertas</PageLink> </Button>

      <Button onClick={() => navigate("/onde-estamos")}><PageLink isActive={isOndeEsta}>Onde estamos?</PageLink> </Button>

    </Container>
  )
}
