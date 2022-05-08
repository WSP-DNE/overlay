test("Validation OK", () => {
  const overlayValidator = require("../validators/overlay-validator")
  const data = { "inputVideoPath": "test_input2.mp4", "duration": 60.0, "x": 1920, "y": 1080, "outputVideoPath": "test_output21.mp4", "texts": [{ "textString": "Brutal, Savage, Rekt", "x": 100, "y": 200, "fontSize": 32, "fontColor": "0xFFFFFF", "startTime": 50.0, "endTime": 60.0 }, { "textString": "super saiyan", "x": 0, "y": 200, "fontSize": 32, "fontColor": "0xFFFFFF", "startTime": 24.0, "endTime": 26.0 }] }
  const res = { status: () => ({ end: () => { } }) }
  expect(overlayValidator.isValid({ body: data }, res)).toBe(true);
});

test("Bad Request on meta datas with duration negative", () => {
  const overlayValidator = require("../validators/overlay-validator")
  const data = { "inputVideoPath": "test_input2mp4", "duration": -60.0, "x": 1920, "y": 1080, "outputVideoPath": "test_output21.mp4", "texts": [{ "textString": "Brutal, Savage, Rekt", "x": 100, "y": 200, "fontSize": 32, "fontColor": "0xFFFFFF", "startTime": 50.0, "endTime": 60.0 }, { "textString": "super saiyan", "x": 0, "y": 200, "fontSize": 32, "fontColor": "0xFFFFFF", "startTime": 24.0, "endTime": 26.0 }] }
  const res = { status: () => ({ end: () => { } }) }
  expect(overlayValidator.isValid({ body: data }, res)).toBe(false);
});

test("Bad Request on drawText Layer 1", () => {
  const overlayValidator = require("../validators/overlay-validator")
  const data = { "inputVideoPath": "test_input2.mp4", "duration": 60.0, "x": 1920, "y": 1080, "outputVideoPath": "test_output21.mp4", "texts": [{ "textString": "Brutal, Savage, Rekt", "x": 2000, "y": 200, "fontSize": 32, "fontColor": "0xFFFFFF", "startTime": 50.0, "endTime": 60.0 }, { "textString": "super saiyan", "x": 0, "y": 200, "fontSize": 32, "fontColor": "0xFFFFFF", "startTime": 24.0, "endTime": 26.0 }] }
  const res = { status: () => ({ end: () => { } }) }
  expect(overlayValidator.isValid({ body: data }, res)).toBe(false);
});


test("Bad Request on drawText Layer 2", () => {
  const overlayValidator = require("../validators/overlay-validator")
  const data = { "inputVideoPath": "test_input2.mp4", "duration": 60.0, "x": 1920, "y": 1080, "outputVideoPath": "test_output21.mp4", "texts": [{ "textString": "Brutal, Savage, Rekt", "x": 100, "y": 200, "fontSize": 32, "fontColor": "0xFFFFFF", "startTime": 50.0, "endTime": 10.0 }, { "textString": "super saiyan", "x": 0, "y": 200, "fontSize": 32, "fontColor": "0xFFFFFF", "startTime": 24.0, "endTime": 26.0 }] }
  const res = { status: () => ({ end: () => { } }) }
  expect(overlayValidator.isValid({ body: data }, res)).toBe(false);
});