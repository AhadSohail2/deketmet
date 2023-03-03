import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey("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");

async function sendEmail(req, res) {
  try {
    // console.log("REQ.BODY", req.body);
    await sendgrid.send({
      to: "ahadsohailsana@gmail.com", // Your email where you'll receive emails
      from: "ahadsohail4@gmail.com", // your website email address here
      subject: `${req.body.subject}`,
      html: `
      <div>${req.body.message}</div>
      <div>${req.body.whatsapp}</div>
      <div>${req.body.email}</div>
      `,
    });
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "", message: "Email Sent" });
}

export default sendEmail;