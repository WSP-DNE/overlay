
const validator = new (require("jsonschema").Validator)()

module.exports.isValid = function (req, res) {
    const requestOverlaySchema = require("../schemas/overlay-schema")
    // Validate video meta data
    let respValidator = validator.validate(req.body, requestOverlaySchema.overlaySchema)
    if (!respValidator.valid) {
        res.statusMessage = respValidator.errors.map(e => `${e.property} : ${e.message}`)
        res.status(400).end()
        return false
    }

    // Validate textDraw layer 1
    respValidator = validator.validate(req.body, requestOverlaySchema.generateTextDrawSchema(req.body.x, req.body.y, req.body.duration))
    if (!respValidator.valid) {
        res.statusMessage = respValidator.errors.map(e => `${e.property} : ${e.message}`)
        res.status(400).end()
        return false
    }

    // Validate textDraw layer 2
    respValidator = validator.validate(req.body,
        requestOverlaySchema.generateTextDrawTimeSchema(req.body.texts.map(t => ({ startTimeMax: t.endTime, endTimeMin: t.startTime })))
    )
    if (!respValidator.valid) {
        res.statusMessage = respValidator.errors.map(e => `${e.property} : ${e.message}`)
        res.status(400).end()
        return false
    }

    return true
}