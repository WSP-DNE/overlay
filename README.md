# Overlay

This project is an exercise to create a backend in order to generate a command string for ffmpeg apps. 
### Used tools and versions 
|                |ASCII                          |Version                         |
|----------------|-------------------------------|-----------------------------|
|NodeJs          |Used to create the backend     |16.15.0|
|npm             |Module manager                 |8.9.0|
|express         |Used to create Rest API        |4.18.1|
|body-parser     |Used to handle body and parse to json object|1.20.0|
|jsonschema      |Used to validate requests      |1.4.0|

### Project build

+ Verify version of NodeJs and npm.
+ Install node modules with `npm install`
+ Launch the entry point `node app/app.js`
+ Create a `post` request on `http://localhost:3000/overlay` , with header `content-type:application/json`, and a content body like :
`{
	"inputVideoPath":"test_input2.mp4",
	"duration":60.0,
	"x":1920,
	"y":1080,
	"outputVideoPath":"test_output21.mp4",
	"texts":[{
		"textString":"Brutal, Savage, Rekt",
		"x":100,
		"y":200,
		"fontSize":32,
		"fontColor":"0xFFFFFF",
		"startTime":50.0,
		"endTime":60.0
	},
	{
		"textString":"super saiyan",
		"x":100,
		"y":200,
		"fontSize":32,
		"fontColor":"0xFFFFFF",
		"startTime":24.0,
		"endTime":26.0
	}]
}`

### Returns
+ Previous request will return the text :
`ffmpeg -i test_input2.mp4 -vf drawtext="enable='between(t,50,60)':text='Brutal, Savage, Rekt':fontColor=0xFFFFFF:fontSize=32:x=100:y=200" drawtext="enable='between(t,24,26)':text='super saiyan':fontColor=0xFFFFFF:fontSize=32:x=100:y=200" test_output21.mp4`
+ If there are some mistakes on request and not respect request schemas, the app will return a 400 bad request

