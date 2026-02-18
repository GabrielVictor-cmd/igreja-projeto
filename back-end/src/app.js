import express from "express"
import routes from "./routes.js"
import "./database/index.js"
import { resolve, dirname } from "path"
import { fileURLToPath } from "url"
import cors from "cors"

class App {
  constructor() {
    this.app = express()
    this.app.use(cors())
    
    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.app.use(express.json())
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = dirname(__filename)

    this.app.use(
      "/culto-file",
      express.static(resolve(__dirname, "..", "uploads"))
    )
    //this.app.use(
    //  "/eventos-file",
    //  express.static(resolve(__dirname, "..", "uploads"))
    //)
  }

  routes() {
    this.app.use(routes)
  }
}

export default new App().app
