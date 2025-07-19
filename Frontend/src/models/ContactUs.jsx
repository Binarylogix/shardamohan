import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";
import Navbar from "../components/Main/Navbar";
import Footer from "../components/Main/Footer";

const CheckBoxGroup = ({ label, options, name, state, setState }) => {
  const toggleOption = (option) => {
    setState((prev) => ({
      ...prev,
      [name]: prev[name]?.includes(option)
        ? prev[name].filter((o) => o !== option)
        : [...(prev[name] || []), option],
    }));
  };

  return (
    <div className="mb-6 ">
      <p className="font-semibold mb-2 text-gray-700">{label}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {options.map((opt) => (
          <label
            key={opt}
            className="inline-flex items-center bg-gray-100 px-3 py-2 rounded-lg cursor-pointer hover:bg-green-100 transition"
          >
            <input
              type="checkbox"
              value={opt}
              checked={state[name]?.includes(opt) || false}
              onChange={() => toggleOption(opt)}
              className="form-checkbox h-4 w-4 text-green-600"
            />
            <span className="ml-2 text-gray-700">{opt}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

const SelectField = ({ label, name, options, state, setState }) => (
  <div className="mb-4">
    <label className="block font-semibold mb-1 text-gray-700">{label}</label>
    <select
      name={name}
      value={state[name] || ""}
      onChange={(e) => setState({ ...state, [name]: e.target.value })}
      className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
    >
      <option value="">Select</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  </div>
);

const TextInput = ({ label, name, type = "text", state, setState }) => (
  <div className="mb-4">
    <label className="block font-semibold mb-1 text-gray-700">{label}</label>
    <input
      type={type}
      name={name}
      value={state[name] || ""}
      onChange={(e) => setState({ ...state, [name]: e.target.value })}
      className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
    />
  </div>
);

const TextArea = ({ label, name, state, setState }) => (
  <div className="mb-4">
    <label className="block font-semibold mb-1 text-gray-700">{label}</label>
    <textarea
      rows="3"
      name={name}
      value={state[name] || ""}
      onChange={(e) => setState({ ...state, [name]: e.target.value })}
      className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
    />
  </div>
);

const BooleanField = ({ label, name, state, setState }) => (
  <div className="mb-4">
    <label className="inline-flex items-center space-x-2">
      <input
        type="checkbox"
        checked={state[name] || false}
        onChange={() => setState({ ...state, [name]: !state[name] })}
        className="form-checkbox h-4 w-4 text-green-600"
      />
      <span className="text-gray-700">{label}</span>
    </label>
  </div>
);

const WaterIntakeOptions = ["<1L", "1–2L", ">2L"];
const SleepOptions = ["<5 hrs", "5–6 hrs", "7–8 hrs", ">8 hrs"];
const FrequencyOptions = ["Rarely", "Occasionally", "Frequently", "Almost Daily"];
const StressLevels = ["Low", "Moderate", "High"];
const DiagnosedConditions = [
  "Diabetes",
  "Obesity",
  "Thyroid disorder",
  "Hypertension (High BP)",
  "High Cholesterol",
  "PCOS / Hormonal Imbalance",
  "Fatty Liver",
  "Gout / High uric acid",
  "Arthritis",
  "Insulin Resistance",
  "Migraine",
  "Kidney Stones",
  "Recurrent Allergies (skin, food, seasonal, etc.)",
  "Low Immunity / Frequent Infections",
];

const CurrentSymptoms = [
  "Cravings (sugar/salt)",
  "Tiredness after meals",
  "Hair thinning / Facial hair",
  "Mood swings",
  "Bloating / Gas / Constipation",
  "Brain fog",
  "Sleep issues",
  "Acne / Pigmentation",
  "Joint pains",
  "How frequently do you get headaches?",

];

const LifestyleHabits = [
  "Junk food intake often",
  "Sugary tea/coffee",
  "Doing Intermittent Fasting",
  "Regular physical activity (Yoga / Walk / Gym)",
  "On long-term medication / antacids",
  "Bloating issues"
];

const MenstrualHistory = ["Irregular periods", "Heavy bleeding", "Painful periods", "Missed periods", "Menopause"];

const HealthForm = () => {
  const [formData, setFormData] = useState({});

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post("/api/healthform/submitHealthForm", formData);

    if (res.status === 201) {
      // Swal.fire({
      //   icon: "success",
      //   title: "Form Submitted!",
      //   text: "✅ Your form has been submitted successfully.",
      //   confirmButtonText: "Done",
      //   confirmButtonColor: "#22c55e", // Tailwind green-500
      // });
Swal.fire({
  icon: "success",
  title: "Form Submitted!",
  text: "✅ Your form has been submitted successfully.",
  confirmButtonText: "Done",
  customClass: {
    confirmButton: 'bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600',
  },
});

      setFormData({});
    }
  } catch (error) {
    const { response } = error;

    if (response) {
      const { status, data } = response;

      Swal.fire({
        icon: status === 400 ? "warning" : "error",
        title: status === 400 ? "Validation Error" : "Server Error",
        text: data.error || "Unexpected error occurred.",
        confirmButtonColor: status === 400 ? "#f59e0b" : "#d33", // amber for warning, red for error
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Unexpected Error",
        text: error.message,
        confirmButtonColor: "#d33",
      });
    }
  }
};


  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-white px-4 py-10  pt-28">
        <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-2xl p-6 md:p-10 border border-gray-100">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-center  mb-10 leading-tight">
            🩺 Metabolic  <span className="text-green-500">Health Evaluation </span>
          </h1>
          <form onSubmit={handleSubmit} className="grid gap-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2 mt-6">Basic Information</h2>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <TextInput label="Full Name" name="fullName" state={formData} setState={setFormData} />
              <TextInput label="Age" name="age" type="number" state={formData} setState={setFormData} />
              <SelectField label="Gender" name="gender" options={["Male", "Female", "Other"]} state={formData} setState={setFormData} />
              <TextInput label="City" name="city" state={formData} setState={setFormData} />
              <TextInput label="Phone Number" name="phone" state={formData} setState={setFormData} />
              <TextInput label="Email ID" name="email" state={formData} setState={setFormData} />
              <TextInput label="Occupation" name="occupation" state={formData} setState={setFormData} />
              <TextInput label="Any major surgery in the past? If yes," name="surgery" state={formData} setState={setFormData} />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2 mt-6"> Hair Fall Details</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <SelectField
                label="Duration of Hair Fall"
                name="hairFallDuration"
                options={["< 3 months", "3–6 months", "> 6 months"]}
                state={formData}
                setState={setFormData}
              />

              <SelectField
                label="Scalp Type"
                name="scalpType"
                options={["Dry", "Oily", "Dandruff", "Normal"]}
                state={formData}
                setState={setFormData}
              />
              <SelectField
                label="Hair Wash Frequency"
                name="hairWashFrequency"
                options={["Daily", "Alternate days", "2x/week"]}
                state={formData}
                setState={setFormData}
              />

              <TextInput
                label="Current Hair Oil Used"
                name="hairOil"
                state={formData}
                setState={setFormData}
              />
              <TextInput
                label="Related Health Concerns"
                name="hairHealth"
                state={formData}
                setState={setFormData}
              />
              <SelectField
                label="Stress Levels"
                name="stressLevel"
                options={StressLevels}
                state={formData}
                setState={setFormData}
              />
              <BooleanField
                label="Any supplements for hair fall?"
                name="hairSupplements"
                state={formData}
                setState={setFormData}
              />
              <BooleanField
                label="Use of dye / straightening / heating / chemicals?"
                name="hairTreatmentUsed"
                state={formData}
                setState={setFormData}
              />
              <BooleanField
                label="Family history of hair fall?"
                name="hairFallFamilyHistory"
                state={formData}
                setState={setFormData}
              />
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-2 mt-6"> Metabolic, Hormonal & Immune Health
            </h2>
            <SelectField
              label="How frequently do you get headaches?"
              name="headaches"
              options={FrequencyOptions}
              state={formData}
              setState={setFormData}
            />
            <CheckBoxGroup label="Diagnosed Conditions" name="conditions" options={DiagnosedConditions} state={formData} setState={setFormData} />

            <CheckBoxGroup label="Current Symptoms" name="symptoms" options={CurrentSymptoms} state={formData} setState={setFormData} />

            <h2 className="text-2xl font-bold text-gray-800 mb-2 mt-6"> Immune-Related</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">


              <TextInput label="If any allergies (Specify)" name="knownAllergies" state={formData} setState={setFormData} />

              {/* <BooleanField label="Any known food or environmental allergies?" name="knownAllergies" state={formData} setState={setFormData} /> */}
              {/* 
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <SelectField label="Headache Frequency" name="headaches" options={FrequencyOptions} state={formData} setState={setFormData} /> */}

              <SelectField label="How often do you fall sick?" name="sickFrequency" options={FrequencyOptions} state={formData} setState={setFormData} />
              <SelectField label="Antibiotics in last 2 years?" name="antibiotics" options={["Yes", "No"]} state={formData} setState={setFormData} />
              <BooleanField label="Sneezing, runny nose, itchy eyes?" name="immuneSneezing" state={formData} setState={setFormData} />
            </div>
            {/* <TextArea label="If yes, specify allergies" name="allergies" state={formData} setState={setFormData} /> */}


            <h2 className="text-2xl font-bold text-gray-800 mb-2 mt-6">Lifestyle Overview</h2>

            <CheckBoxGroup label="Lifestyle Overview" name="lifestyle" options={LifestyleHabits} state={formData} setState={setFormData} />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
              <SelectField label="Water Intake" name="waterIntake" options={WaterIntakeOptions} state={formData} setState={setFormData} />
              <SelectField label="Stress Levels" name="lifestyleStressLevel" options={StressLevels} state={formData} setState={setFormData} />
            </div>
            <CheckBoxGroup label="Menstrual History (Females)" name="menstrualHistory" options={MenstrualHistory} state={formData} setState={setFormData} />
            <h2 className="text-2xl font-bold text-gray-800 mb-2 mt-6"> Sleep & Stress</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
              <SelectField label="Average Sleep Duration" name="sleepDuration" options={SleepOptions} state={formData} setState={setFormData} />
              <SelectField label="Feeling refreshed after waking?" name="refreshed" options={["Yes", "No"]} state={formData} setState={setFormData} />
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

              <BooleanField label="Difficulty sleeping?" name="sleepDifficulty" state={formData} setState={setFormData} />
              <BooleanField label="Use of screen use at night?" name="screenAtNight" state={formData} setState={setFormData} />
              <BooleanField label="Snoring / Daytime tiredness?" name="snoringTired" state={formData} setState={setFormData} />
            </div>

            <CheckBoxGroup label="Stress-Relief Practices" name="stressRelief" options={["Meditation", "Breathing exercises", "Journaling", "None"]} state={formData} setState={setFormData} />
            <h2 className="text-2xl font-bold text-gray-800 mb-2 mt-6"> Lab Reports (If Available)</h2>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <TextInput label="Date of Last Report" name="reportDate" type="date" state={formData} setState={setFormData} />
              <TextInput label="Fasting Blood Sugar" name="fbs" state={formData} setState={setFormData} />
              <TextInput label="HbA1c" name="hba1c" state={formData} setState={setFormData} />
              <TextInput label="Fasting Insulin" name="insulin" state={formData} setState={setFormData} />
              <TextInput label="TSH / T3 / T4" name="thyroid" state={formData} setState={setFormData} />
              <TextInput label="Triglycerides" name="triglycerides" state={formData} setState={setFormData} />
              <TextInput label="Uric Acid" name="uricAcid" state={formData} setState={setFormData} />
              <TextInput label="Vitamin D" name="vitD" state={formData} setState={setFormData} />
              <TextInput label="Vitamin B12" name="vitB12" state={formData} setState={setFormData} />
              <TextInput label="Hemoglobin (Hb)" name="hemoglobin" state={formData} setState={setFormData} />
              <TextInput label="Blood Pressure (BP)" name="bp" state={formData} setState={setFormData} />
            </div>

            <TextArea label="Any Other Concerns / Symptoms" name="otherConcerns" state={formData} setState={setFormData} />

            <div className="text-left">
              <button
                type="submit"
                className="bg-gradient-to-r from-green-600 to-green-800 text-white font-semibold text-lg px-8 py-3 rounded-full shadow-lg hover:scale-105 transform transition duration-300 ease-in-out"
              >
                🚀 Submit Form
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HealthForm;