import { Router } from "express"
import multer from "multer"
import multerConfig from "./config/multer.js"


import UserControler from "./app/controllers/UserControler.js"
import SessionControler from "./app/controllers/SessionControler.js"
import CultsControler from "./app/controllers/CultsControler.js"

import authMiddleware from "./app/middlewares/auth.js"


import User from "./app/models/User.js"

const upload = multer(multerConfig)
const routes = new Router()

routes.post("/users", UserControler.store)

routes.post("/sessions", SessionControler.store)
routes.get("/sessions", authMiddleware, SessionControler.index)


routes.use(authMiddleware) // Cuidado, Tudo abaixo será pedido o token nas rotas

routes.post("/cults", upload.single("file"), CultsControler.store)
routes.get("/cults", authMiddleware, CultsControler.index)
routes.put("/cults/:id", CultsControler.update)


export default routes
