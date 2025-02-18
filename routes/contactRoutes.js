import express from "express";
import { contactFormHandler } from "../controllers/contactController.js";

const router = express.Router();

// Define the contact form submission route
router.post("/contact", contactFormHandler);

export default router;
