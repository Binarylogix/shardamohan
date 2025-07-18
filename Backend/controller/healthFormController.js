const HealthForm = require("../model/HealthForm.js");

module.exports.submitHealthForm = async (req, res) => {
  try {
    const form = new HealthForm(req.body);

    // Optional validation example
    if (!req.body.fullName || !req.body.phone) {
      return res.status(400).json({ error: "Full name and phone number are required." });
    }

    await form.save();
    res.status(201).json({ message: "Form submitted successfully!" });
  } catch (error) {
    console.error("Error saving form:", error);

    if (error.name === "ValidationError") {
      return res.status(400).json({ error: "Validation failed.", details: error.errors });
    }

    res.status(500).json({ error: "Server error. Please try again later." });
  }
};

module.exports.getAllForms = async (req, res) => {
  try {
    const forms = await HealthForm.find().sort({ submittedAt: -1 });
    res.status(200).json(forms);
  } catch (error) {
    console.error("Error retrieving forms:", error);
    res.status(500).json({ error: "Server error fetching forms." });
  }
};
