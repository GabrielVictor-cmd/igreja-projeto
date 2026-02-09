import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Home } from "../Home"
import { Eventos } from "../Eventos"
import { Cultos } from "../Cultos"
import { DizimosOfertas } from "../Dizimos-Ofertas"
import { OndeEstamos } from "../Onde-Estamos"

function routes(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/home" element={<Home/>} />
                <Route path="/eventos" element={<Eventos/>} />
                <Route path="/cultos" element={<Cultos/>} />
                <Route path="/dizimos-ofertas" element={<DizimosOfertas/>} />
                <Route path="/onde-estamos" element={<OndeEstamos/>} />



            </Routes>

        </Router>
    )
}

export default routes