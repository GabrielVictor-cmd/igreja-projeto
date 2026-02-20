import * as Yup from "yup"
import Culto from "../models/Culto.js"
import User from "../models/User.js"

class CultsControler {
  async store(request, response) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required(),
        cult_id: Yup.number().required(),
      })

      try {
        await schema.validateSync(request.body, { abortEarly: false })
      } catch (err) {
        return response.status(400).json({ error: err.errors })
      }

      const { admin: isAdmin } = await User.findByPk(request.userId)

      if (!isAdmin) {
        return response.status(401).json({ error: "Lamento, acesso negado" })
      }

      const { filename: path } = request.file
      const { name, cult_id } = request.body

      const Cult = await Cults.create({
        name,
        cult_id,
        path,
      })

      return response.json(Cult)
    } catch (err) {
      console.log(err)
    }
  }

  async index(request, response) {
    const cult = await Cults.findAll({
      include: [
        {
          model: Culto,
          as: "culto",
          attributes: ["id", "name"],
        },
      ],
    })

    return response.json(cult)
  }

  async update(req, res) {
    return res.json({ message: "Update funcionando!" });
  }

}

export default new CultsControler()
