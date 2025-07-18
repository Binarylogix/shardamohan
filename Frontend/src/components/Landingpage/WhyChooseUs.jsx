import React from "react";
import { CheckCircle } from "lucide-react"; // optional icon library
import headImage from '../../assets/head.png'; // Adjust the path as needed


const WhyChooseUs = () => {
    return (
        <section className="bg-white py-12 px-6 md:px-16 lg:px-24" id="why-choose-us">
            <div className="max-w-8xl mx-auto">
               <div
                           className="bg-cover bg-center p-8 w-80  "
                           style={{ backgroundImage: `url(${headImage})` }}
                         >
                           <h1 className="text-4xl font-semibold text-center lg:text-start  ">
                             Why Choose Us
                           </h1>
                         </div>
<p className="text-lg text-center text-gray-700 mb-10">
  No  medicine — Allopathy, Homoeopathy, or Ayurveda — can truly heal without addressing your diet, lifestyle, and stress.
  That’s why at <strong>Sharda Mohan Homoeopathic Clinic</strong> we focus on a Root‑Cause‑Based Lifestyle & Wellness Assessment — because real healing starts from within.
</p>



                <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-3 text-gray-800">
                    <div className="bg-green-50 p-6 rounded-2xl shadow-sm">
                        <CheckCircle className="text-green-500 mb-2" />
                        <h3 className="font-semibold text-lg">24/7 Open Homoeopathic Pharmacy</h3>
                    </div>

                    <div className="bg-green-50 p-6 rounded-2xl shadow-sm">
                        <CheckCircle className="text-green-500 mb-2" />
                        <h3 className="font-semibold text-lg">Doorstep Medicine Delivery</h3>
                    </div>

                    <div className="bg-green-50 p-6 rounded-2xl shadow-sm">
                        <CheckCircle className="text-green-500 mb-2" />
                        <h3 className="font-semibold text-lg">Certified Metabolic Health Coaching</h3>
                    </div>

                    <div className="bg-green-50 p-6 rounded-2xl shadow-sm">
                        <CheckCircle className="text-green-500 mb-2" />
                        <h3 className="font-semibold text-lg">Root-Cause Healing Approach</h3>
                    </div>

                    <div className="bg-green-50 p-6 rounded-2xl shadow-sm md:col-span-2">
                        <CheckCircle className="text-green-500 mb-2" />
                        <h3 className="font-semibold text-lg">
                            Personalised Care from Dr. Parul Agrawal – Certified Health Coach
                        </h3>
                    </div>
                </div>

                <div className="mt-10 text-center text-gray-600">
                    <p className="text-red-500 text-xl"><span className="text-black font-bold">
                        Note from Dr Parul Agrawal : </span>
                        If you're struggling with issues like weight gain, PCOS, thyroid imbalance, sleep disturbances, hair fall, diabetes, or constant fatigue — it's time to stop masking symptoms and address the root cause.
                    </p>
                    <button class="mt-4 py-3 px-4 bg-gradient-to-r from-brightColor to-backgroundColor text-white rounded text-md ">Fill the Form</button>
                    
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
