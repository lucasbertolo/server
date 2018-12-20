const handleEmail = (req, res, nodemailer) => {

	const transporter = nodemailer.createTransport({
   service: process.env.NODEMAILER_SERVICE,
     auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASS
    }
  });

  const {email, name, message} = req.body;

  if(!email || !name || !message){
    return res.status(400).json('Empty field')
  }
  let mailOptions = {
      from: 'aneospes@gmail.com',
      to: 'lucasbertolo2@gmail.com',
      subject: "Contact from website-Cage",
      html: `<h3>From ${name} - ${email} </h3>
             <p>${message}</p>` 
  };

  transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
        return res.status(400).json("something went wrong")
      } else {
        console.log('Email sent: ' + info.response);
      }

    return res.status(200).json("nice job");
  });
}

module.exports = {
	handleEmail: handleEmail
};