import React from "react";
import {  CheckCircle } from "lucide-react"; // optional icon library
import headImage from '../../assets/head.png'; // Adjust the path as needed
import { useNavigate } from "react-router-dom";
import RightArrow from '../../assets/right-arrow.png'


const WhyChooseUs = () => {

    const navigate = useNavigate();
    const openForm = () => {
        navigate('/HealthForm'); // Redirects to the "contact-us" page
    };
    return (
        <section className="bg-white py-6 md:py-12 px-4 md:px-16 lg:px-24" id="why-choose-us">
            <div className="max-w-8xl mx-auto">
                <div
                    className="bg-cover bg-center p-2 md:p-8 md:w-80  "
                    style={{ backgroundImage: `url(${headImage})` }}
                >
                    <h1 className="text-2xl md:text-4xl font-semibold text-center lg:text-start  ">
                        Why Choose Us
                    </h1>
                </div>
                <p className=" md:text-lg text-justify md:text-center text-gray-700 mb-10 mt-5">
                    No  medicine — Allopathy, Homoeopathy, or Ayurveda — can <strong>Completly heal</strong> without addressing your diet, lifestyle, and stress.
                    That’s why at <strong>Sharda Mohan Homoeopathic Clinic</strong> we focus on a Root‑Cause‑Based Lifestyle & Wellness Assessment — because real healing starts from within.
                </p>



                <div className="grid gap-2 md:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-3 text-gray-800">
                    <div className="bg-green-50 p-3 md:p-6 rounded-2xl shadow-sm">
                        <CheckCircle className="text-green-500 mb-2" />
                        <h3 className="font-semibold  md:text-lg">24/7 Open Homoeopathic Pharmacy</h3>
                    </div>

                    <div className="bg-green-50 p-3 md:p-6 rounded-2xl shadow-sm">
                        <CheckCircle className="text-green-500 mb-2" />
                        <h3 className="font-semibold md:text-lg">Doorstep Medicine Delivery</h3>
                    </div>

                    <div className="bg-green-50 p-6 rounded-2xl shadow-sm">
                        <CheckCircle className="text-green-500 mb-2" />
                        <h3 className="font-semibold md:text-lg">Certified Metabolic Health Coach</h3>
                    </div>

                    <div className="bg-green-50 p-6 rounded-2xl shadow-sm">
                        <CheckCircle className="text-green-500 mb-2" />
                        <h3 className="font-semibold md:text-lg">Root-Cause Healing Approach</h3>
                    </div>

                    <div className="bg-green-50 p-6 rounded-2xl shadow-sm md:col-span-2">
                        <CheckCircle className="text-green-500 mb-2" />
                        <h3 className="font-semibold md:text-lg">
                            Personalised Care from Dr. Parul Agrawal – Certified Health Coach
                        </h3>
                    </div>
                </div>

                <div className="mt-10 text-center text-gray-600">
                    <h1 className="text-black text-lg font-bold">
                        Note from Dr Parul Agrawal</h1>
                    <p className="text-red-500 text-lg md:text-xl pt-1">
                        If you're struggling with issues like Obesity, Diabetes, Hypertension, PCOS, thyroid imbalance, sleep disturbances, hair fall, diabetes, or constant fatigue — it's time to stop masking symptoms and address the root cause.
                    </p>
                    <p className="mt-6 text-xl font-semibold text-gray-800 flex justify-center items-start">
                        Click below

                        {/* Arrow Icon with style */}
                        <img src={RightArrow}
                            className="mt-4 text-green-600 w-10 h-10 animate-bounce transition-all duration-500 hover:scale-125 drop-shadow-[0_0_4px_rgba(34,197,94,0.8)]"
                        />
                        
                    </p>


                    <button
                        onClick={openForm}
                        class="mt-6 py-3 px-6 bg-gradient-to-r from-black via-green-500 to-green-800 text-white font-extrabold text-md rounded-2xl shadow-xl border-2 border-white animate-bounce hover:scale-110 hover:shadow-2xl transition-all duration-500 hover:ring-4 hover:ring-pink-300">
                        ✨ Evaluate Your Health ✨
                    </button>



                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
