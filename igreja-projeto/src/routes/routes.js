import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Home } from "../Home"
import { Cultos } from "../Cultos"
import { DizimosOfertas } from "../Dizimos-Ofertas"
import { OndeEstamos } from "../Onde-Estamos"
import Login from "../Login"
import PrivateRoutesWrapper from "./private-Routes"

//import { Eventos } from "../Eventos"
//<Route path="/eventos" element={<Eventos/>} />

function routes(){
    return(
        <Router>
            <Routes>
                <Route path="/login" element={<Login/>} />

                {/*<Route path="/cadastro" element={<Register/>} /> */}
                <Route path="/" element={<PrivateRoutesWrapper><Home/></PrivateRoutesWrapper>} />

                <Route path="/home" element={<PrivateRoutesWrapper><Home/></PrivateRoutesWrapper>} />

                <Route path="/cultos" element={<PrivateRoutesWrapper><Cultos/></PrivateRoutesWrapper>} />

                <Route path="/dizimos-ofertas" element={<PrivateRoutesWrapper><DizimosOfertas/></PrivateRoutesWrapper>} />

                <Route path="/onde-estamos" element={<PrivateRoutesWrapper><OndeEstamos/></PrivateRoutesWrapper>} />


            </Routes>

        </Router>
    )
}

export default routes