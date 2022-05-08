const bodyParser = require("body-parser")
const jsonParser = bodyParser.json()
const overlayValidator = require("../validators/overlay-validator")
const overlayService = new (require("../services/overlay-service"))()

module.exports = async (app) => {
    app.post("/overlay", jsonParser, async (req, res) => {

        if (!overlayValidator.isValid(req, res)) return

        const response = await overlayService.createOverlay(req.body)
        res.send(response)
    })
}