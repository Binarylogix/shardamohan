import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";

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
        <div className="mb-4">
            <p className="font-semibold mb-2">{label}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {options.map((opt) => (
                    <label key={opt} className="inline-flex items-center space-x-2">
                        <input
                            type="checkbox"
                            value={opt}
                            checked={state[name]?.includes(opt) || false}
                            onChange={() => toggleOption(opt)}
                            className="form-checkbox h-4 w-4 text-blue-600"
                        />
                        <span>{opt}</span>
                    </label>
                ))}
            </div>
        </div>
    );
};

const SelectField = ({ label, name, options, state, setState }) => (
    <div className="mb-4">
        <label className="block font-semibold mb-1">{label}</label>
        <select
            name={name}
            value={state[name] || ""}
            onChange={(e) => setState({ ...state, [name]: e.target.value })}
            className="w-full border border-gray-300 rounded px-3 py-2"
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
        <label className="block font-semibold mb-1">{label}</label>
        <input
            type={type}
            name={name}
            value={state[name] || ""}
            onChange={(e) => setState({ ...state, [name]: e.target.value })}
            className="w-full border border-gray-300 rounded px-3 py-2"
        />
    </div>
);

const TextArea = ({ label, name, state, setState }) => (
    <div className="mb-4">
        <label className="block font-semibold mb-1">{label}</label>
        <textarea
            rows="3"
            name={name}
            value={state[name] || ""}
            onChange={(e) => setState({ ...state, [name]: e.target.value })}
            className="w-full border border-gray-300 rounded px-3 py-2"
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
                className="form-checkbox h-4 w-4 text-blue-600"
            />
            <span>{label}</span>
        </label>
    </div>
);

const WaterIntakeOptions = ["<1L", "1–2L", ">2L"];
const SleepOptions = ["<5 hrs", "5–6 hrs", "7–8 hrs", ">8 hrs"];
const FrequencyOptions = ["Rarely", "Occasionally", "Frequently", "Almost Daily"];
const StressLevels = ["Low", "Moderate", "High"];

const HealthForm = () => {
    const [formData, setFormData] = useState({});

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post("/api/healthform/submitHealthForm", formData);

    if (res.status === 201) {
      Swal.fire({
        icon: 'success',
        title: 'Form Submitted!',
        text: '✅ Your form has been submitted successfully.',
        confirmButtonColor: '#3085d6'
      });
      setFormData({});
    }
  } catch (error) {
    if (error.response) {
      const { status, data } = error.response;

      if (status === 400) {
        Swal.fire({
          icon: 'warning',
          title: 'Validation Error',
          text: data.error || "Missing required fields.",
          confirmButtonColor: '#f59e0b',
        });
      } else if (status === 500) {
        Swal.fire({
          icon: 'error',
          title: 'Server Error',
          text: 'Please try again later.',
          confirmButtonColor: '#d33',
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: `Error ${status}`,
          text: data.error || "Unexpected error occurred.",
        });
      }
    } else if (error.request) {
      Swal.fire({
        icon: 'error',
        title: 'No Server Response',
        text: '🚫 Please check your internet connection.',
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Unexpected Error',
        text: error.message,
      });
    }

    console.error("Form submission error:", error);
  }
};


    return (
        <div className="max-w-5xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-center mb-6">
                Comprehensive Metabolic Health Evaluation Form
            </h1>
            <form onSubmit={handleSubmit} className="grid gap-6 mt-20">
                {/* Personal Details */}
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <TextInput label="Full Name" name="fullName" state={formData} setState={setFormData} />
                    <TextInput label="Age" name="age" type="number" state={formData} setState={setFormData} />
                    <SelectField label="Gender" name="gender" options={["Male", "Female", "Other"]} state={formData} setState={setFormData} />
                    <TextInput label="City" name="city" state={formData} setState={setFormData} />
                    <TextInput label="Phone Number (WhatsApp)" name="phone" state={formData} setState={setFormData} />
                    <TextInput label="Email ID" name="email" state={formData} setState={setFormData} />
                    <TextInput label="Occupation" name="occupation" state={formData} setState={setFormData} />
                    <TextInput label="Any major surgery or operation (if yes, specify)" name="surgery" state={formData} setState={setFormData} />
                </div>

                <hr className="my-6" />

                {/* Hair Fall Section */}
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <SelectField label="Duration of Hair Fall" name="hairFallDuration" options={["< 3 months", "3–6 months", "> 6 months"]} state={formData} setState={setFormData} />
                    <BooleanField label="Family history of hair fall?" name="hairFallFamilyHistory" state={formData} setState={setFormData} />
                    <SelectField label="Scalp Type" name="scalpType" options={["Dry", "Oily", "Dandruff", "Normal"]} state={formData} setState={setFormData} />
                    <SelectField label="Hair Wash Frequency" name="hairWashFrequency" options={["Daily", "Alternate days", "2x/week"]} state={formData} setState={setFormData} />
                    <BooleanField label="Use of dye / straightening / heating / chemicals?" name="hairTreatmentUsed" state={formData} setState={setFormData} />
                    <TextInput label="Current Hair Oil Used" name="hairOil" state={formData} setState={setFormData} />
                    <BooleanField label="Any supplements for hair fall?" name="hairSupplements" state={formData} setState={setFormData} />
                    <TextInput label="Related Health Concerns" name="hairHealth" state={formData} setState={setFormData} />
                    <SelectField label="Stress Levels" name="stressLevel" options={StressLevels} state={formData} setState={setFormData} />
                </div>

                <hr className="my-6" />

                {/* Conditions, Symptoms, Lifestyle */}
                <CheckBoxGroup label="Diagnosed Conditions" name="conditions" options={[/*...*/]} state={formData} setState={setFormData} />
                <CheckBoxGroup label="Current Symptoms" name="symptoms" options={[/*...*/]} state={formData} setState={setFormData} />

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <SelectField label="Headache Frequency" name="headaches" options={FrequencyOptions} state={formData} setState={setFormData} />
                    <BooleanField label="Sneezing, runny nose, itchy eyes?" name="immuneSneezing" state={formData} setState={setFormData} />
                    <BooleanField label="Any known food/environmental allergies?" name="knownAllergies" state={formData} setState={setFormData} />
                    <TextArea label="If yes, specify allergies" name="allergies" state={formData} setState={setFormData} />
                    <SelectField label="How often do you fall sick?" name="sickFrequency" options={FrequencyOptions} state={formData} setState={setFormData} />
                    <SelectField label="Frequent antibiotic use in last 2 years?" name="antibiotics" options={["Yes", "No"]} state={formData} setState={setFormData} />
                </div>

                <CheckBoxGroup label="Lifestyle Overview" name="lifestyle" options={[/*...*/]} state={formData} setState={setFormData} />

                <SelectField label="Water Intake" name="waterIntake" options={WaterIntakeOptions} state={formData} setState={setFormData} />
                <SelectField label="Stress Levels" name="lifestyleStressLevel" options={StressLevels} state={formData} setState={setFormData} />
                <CheckBoxGroup label="Menstrual History (Females)" name="menstrualHistory" options={[/*...*/]} state={formData} setState={setFormData} />

                <hr className="my-6" />

                {/* Sleep Section */}
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <SelectField label="Average Sleep Duration" name="sleepDuration" options={SleepOptions} state={formData} setState={setFormData} />
                    <SelectField label="Do you feel refreshed after waking?" name="refreshed" options={["Yes", "No"]} state={formData} setState={setFormData} />
                    <BooleanField label="Difficulty sleeping?" name="sleepDifficulty" state={formData} setState={setFormData} />
                    <BooleanField label="Screen use at night?" name="screenAtNight" state={formData} setState={setFormData} />
                    <BooleanField label="Snoring / Daytime tiredness?" name="snoringTired" state={formData} setState={setFormData} />
                </div>

                <CheckBoxGroup label="Stress-Relief Practices" name="stressRelief" options={["Meditation", "Breathing exercises", "Journaling", "None"]} state={formData} setState={setFormData} />

                <hr className="my-6" />

                {/* Reports Section */}
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

                <TextArea label="Any Other Concerns / Symptoms You’d Like to Share" name="otherConcerns" state={formData} setState={setFormData} />

                <div className="text-center mt-6">
                    <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
                        Submit Form
                    </button>
                </div>
            </form>


            <div className="text-center text-sm text-gray-600 mt-10">
                <p>
                    🏥 Sharda Mohan Homoeopathic Clinic, Indore <br />
                    👩‍⚕ Dr Parul Agrawal | Certified Metabolic Health Coach <br />
                    📞 WhatsApp: <a href="tel:9826056610" className="text-blue-500">9826056610</a>
                </p>
            </div>
        </div>
    );
};

export default HealthForm;
