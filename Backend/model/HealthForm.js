const mongoose = require('mongoose')
const healthFormSchema = new mongoose.Schema({
  fullName: String,
  age: Number,
  gender: String,
  city: String,
  phone: String,
  email: String,
  occupation: String,
  surgery: String,

  hairFallDuration: String,
  hairFallFamilyHistory: Boolean,
  scalpType: String,
  hairWashFrequency: String,
  hairTreatmentUsed: Boolean,
  hairOil: String,
  hairSupplements: Boolean,
  hairHealth: String,
  stressLevel: String,

  conditions: [String],
  symptoms: [String],

  headaches: String,
  immuneSneezing: Boolean,
  knownAllergies: String,
  allergies: String,
  sickFrequency: String,
  antibiotics: String,

  lifestyle: [String],
  waterIntake: String,
  lifestyleStressLevel: String,
  menstrualHistory: [String],

  sleepDuration: String,
  refreshed: String,
  sleepDifficulty: Boolean,
  screenAtNight: Boolean,
  snoringTired: Boolean,

  stressRelief: [String],

  reportDate: String,
  fbs: String,
  hba1c: String,
  insulin: String,
  thyroid: String,
  triglycerides: String,
  uricAcid: String,
  vitD: String,
  vitB12: String,
  hemoglobin: String,
  bp: String,

  otherConcerns: String,

  submittedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("HealthForm", healthFormSchema);
