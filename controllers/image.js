const Clarifai = require('clarifai');

const app = new Clarifai.App({
 apiKey: 'c7d28a10d20a4ed98bfa0dc3c0d4348c'
});

const handleApiCall = (req, res) => {
	app.models
		.predict(Clarifai.FACE_DETECT_MODEL, req.body.input)
		.then(data => res.json(data))
		.catch(err => res.status(400).json(err))	
}


module.exports = { handleApiCall }