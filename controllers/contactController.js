import { sendMail } from "../services/mailerService.js";

// Handles contact form submissions
export const contactFormHandler = async (req, res) => {
  try {
    await sendMail(req.body);
    res.status(200).json({ success: "Message sent successfully!" });
  } catch (error) {
    console.error("Mailer error:", error);
    res.status(500).json({ error: error.message || "Failed to send message." });
  }
};
