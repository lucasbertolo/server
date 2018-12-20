const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const email = require('./controllers/email');
const emailPort = require('./controllers/emailPort');
const image = require('./controllers/image')
const nodemailer = require('nodemailer');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.post('/contact', (req, res) => {email.handleEmail(req, res, nodemailer)});
app.post('/image' , (req, res) => {image.handleApiCall(req, res)});
app.post('/emailPort'), (req, res) => {emailPort.handleEmailPort(req, res, nodemailer)});

const PORT = process.env.PORT;
app.listen(PORT, ()=>{
	console.log(`server is listening on port ${PORT}`);
});

