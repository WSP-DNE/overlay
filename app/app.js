const config = require("./config/config")

const express = require("express")
const overlayApi = require("./api-loaders/overlay-api")
const app = express()

async function startServer() {
	await overlayApi(app)
	app.listen(config.port)
}

startServer()
