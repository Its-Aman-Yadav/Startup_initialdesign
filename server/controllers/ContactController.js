const Contact = require("../models/Contact");

exports.createContact = async (req, res) => {
  const { name, email, subject, message } = req.body;
  try {
    const contact = new Contact({
      name,
      email,
      subject,
      message,
    });
    await contact.save();
    res.status(201).json({ message: "Contact saved successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
