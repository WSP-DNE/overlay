module.exports = class OverlayProcessorFfmpeg {
	constructor() {
	}
	async process(data) {
		return this.formatCommand(data)
	}

	formatCommand(data) {
		const formatedSubParam = this.formatSubParam(data)
		return `ffmpeg -i ${data.inputVideoPath} -vf ${formatedSubParam} ${data.outputVideoPath}`
	}

	formatSubParam(data) {
		const subParamGroup = []
		this.injectDrawText(data, subParamGroup)
		return subParamGroup.join(" ")
	}

	injectDrawText(data, subParamGroup) {
		data.texts?.forEach(e => {
			const dataDrawParams = []
			dataDrawParams.push(`enable='between(t,${e.startTime},${e.endTime})'`)
			dataDrawParams.push(`text='${e.textString}'`)
			dataDrawParams.push(`fontColor=${e.fontColor}`)
			dataDrawParams.push(`fontSize=${e.fontSize}`)
			dataDrawParams.push(`x=${e.x}`)
			dataDrawParams.push(`y=${e.y}`)
			subParamGroup.push(`drawtext="${dataDrawParams.join(":")}"`)
		})
	}
}