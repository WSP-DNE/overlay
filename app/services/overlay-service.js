
const processor = new (require("../processor/processor"))()

module.exports = class overlayProcessor {
  constructor() { }
  async createOverlay(data) {
    const respProcessor = await processor.process(data)
    // Use a logger ?
    console.log(respProcessor)
    return respProcessor
  }
}