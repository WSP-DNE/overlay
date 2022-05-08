
module.exports.overlaySchema = {
  "type": "object",
  "properties": {
    "inputVideoPath": { "type": "string", "pattern": ".*[.]mp4$"  },
    "duration": { "type": "number", "minimum": 0 },
    "x": { "type": "integer", "minimum": 0 },
    "y": { "type": "integer", "minimum": 0 },
    "outputVideoPath": { "type": "string", "pattern": ".*[.]mp4$" },
    "texts": {
      "type": "array",
      "items": {}
    }
  },
  "additionalProperties": false,
  "required": ["inputVideoPath", "duration", "x", "y", "outputVideoPath", "texts"]
}

module.exports.generateTextDrawSchema = function (xMax, yMax, durationMax) {
  return {
    "type": "object",
    "properties": {
      "texts": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "textString": { "type": "string" },
            "x": { "type": "integer", "minimum": 0, "maximum": xMax },
            "y": { "type": "integer", "minimum": 0, "maximum": yMax },
            "fontSize": { "type": "integer", "minimum": 0 },
            "fontColor": { "type": "string", "pattern": "^0[xX][0-9a-fA-F]{6}$" },
            "startTime": { "type": "number", "minimum": 0, "maximum": durationMax },
            "endTime": { "type": "number", "minimum": 0, "maximum": durationMax }
          },
          "additionalProperties": false,
          "required": ["textString", "x", "y", "fontSize", "fontColor", "startTime", "endTime"]
        }
      }
    }
  }
}

module.exports.generateTextDrawTimeSchema = function (times) {
  return {
    "type": "object",
    "properties": {
      "texts": {
        "type": "array",
        "items": times.map(t => ({
          "type": "object",
          "properties": {
            "startTime": { "type": "number", "maximum": t.startTimeMax },
            "endTime": { "type": "number", "minimum": t.endTimeMin }
          }
        }))
      }
    }
  }
}

