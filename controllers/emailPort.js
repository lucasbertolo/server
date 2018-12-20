const handleEmailPort = (req, res, nodemailer) => {

	const transporter = nodemailer.createTransport({
   service: process.env.NODEMAILER_SERVICE,
     auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASS
    }
  });

  const {email, name, message} = req.body;

  if(!email || !name || !message){
    return res.status(400).json('Campo vazio')
  }
  let mailOptions = {
      from: 'aneospes@gmail.com',
      to: 'lucasbertolo2@gmail.com',
      subject: "Contato sob seu portfolio",
      html: `<h3>De ${name} - ${email} </h3>
             <p>${message}</p>` 
  };

  transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
        return res.status(400).json("Algo deu errado")
      } else {
        console.log('Email enviado: ' + info.response);
      }

    return res.status(200).json("nice job");
  });
}

module.exports = {
	handleEmail: handleEmailPort
};