import nodemailer from "nodemailer";

export const contact = (req, res) => {
  const { name, telefon, service } = req.body;

  // Validation to check if fields are empty
  if (!name || !telefon || !service) {
    let errors = {};

    if (!name) errors.name = "Name ist erforderlich";
    if (!telefon) errors.telefon = "Telefon ist erforderlich";
    if (!service) errors.service = "Service ist erforderlich";

    return res.status(400).json({ errors });
  }

  console.log("Here is the data:", req.body);

  let smtpTransporter = nodemailer.createTransport({
    service: "Gmail",
    port: 465,
    auth: {
      user: "mathdenizi@gmail.com",
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  let mailOptions = {
    from: "mathdenizi@gmail.com",
    to: "mathdenizi@gmail.com",
    subject: `Message from ${name}`,
    html: `
      <h3>Informationen</h3>
      <ul>
        <li>Name: ${name}</li>
        <li>Telefon: ${telefon}</li>
      </ul>
      <h3>Service</h3>
      <p>${service}</p>
    `,
  };

  smtpTransporter.sendMail(mailOptions, (error) => {
    if (error) {
      return res.status(500).json({
        msg: "Es ist ein Serverfehler aufgetreten. Bitte versuchen Sie es später erneut.",
      });
    }
    return res.status(200).json({
      msg: "Vielen Dank für Ihre Kontaktaufnahme, Kaldirim wird sich bald bei Ihnen melden.",
    });
  });
};
