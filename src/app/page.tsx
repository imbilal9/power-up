"use client";
import React, { useState } from "react";
import Image from "next/image";
import emailjs from "emailjs-com"; // Install using `npm install emailjs-com`
import UserTestimonial from "./testimonial";
import toast from "react-hot-toast";

const SaleForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState("");

  // ✅ Validate phone number (Must be 10-digit and start with 6-9)
  const isValidPhoneNumber = (phone: string) => /^[6-9]\d{9}$/.test(phone);

  // ✅ Handle Form Submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isValidPhoneNumber(phone)) {
      setStatus("❌ कृपया एक मान्य 10-अंकीय मोबाइल नंबर दर्ज करें!");
      return;
    }

    // ✅ EmailJS parameters (Replace with your credentials)
    const emailParams = {
      from_name: name,
      phone_number: phone,
      to_email: "thenexxus.pods@gmail.com", // Replace with your email
    };

    try {
      await emailjs.send(
        "service_uyl5x29", // Replace with your EmailJS Service ID service_oy7zuza
        "template_eaaeaai", // Replace with your EmailJS Template ID
        emailParams,
        "WizMAdh_NkosPQaX3" // Replace with your EmailJS User ID
      );
      setStatus("✅ सफलतापूर्वक भेज दिया गया!");
      setName("");
      setPhone("");
      console.info("✅ सफलतापूर्वक भेज दिया गया!")
      toast.success("✅ सफलतापूर्वक भेज दिया गया!")
    } catch (error) {
      setStatus("❌ कुछ समस्या हुई, कृपया पुनः प्रयास करें!");
      console.error("EmailJS Error:", error);
      toast.error("❌ कुछ समस्या हुई, कृपया पुनः प्रयास करें!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-700 p-6">
      <div className="marquee-container mb-4 w-full">
        <div className="marquee">
          🚀 दवा ऑर्डर करने के लिए यह फॉर्म भरें और फिर सबमिट करें! 🚀
        </div>
      </div>

      <div className="bg-green-300 p-6 rounded-lg shadow-lg w-full max-w-md text-center">
        <div className="px-4 py-2 rounded-t-lg text-xl font-bold flex items-center justify-center">
          <Image src="/assets/super-sale.png" alt="Sale" width={200} height={100} />
        </div>

        <h1 className="text-2xl font-bold mt-6">पदोन्नति! 1+1=3</h1>
        <p className="text-sm text-white mt-2">यहाँ अपनी जानकारी दें और हम आपसे संपर्क करेंगे!</p>
        <p className="text-xl font-bold text-orange-500 mt-4">₹2490 (50% छूट)</p>
        <p className="text-lg font-bold text-black line-through mt-2">₹4980</p>

        {status && <p className="text-white font-medium mt-3">{status}</p>}

        <form onSubmit={handleSubmit} className="mt-4">
          <input
            type="text"
            placeholder="नाम"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded-lg mb-3 text-black"
            required
          />
          <input
            type="tel"
            placeholder="फ़ोन नं"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-2 border rounded-lg mb-3 text-black"
            required
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
          >
            Submit
          </button>
        </form>
      </div>

      <div className="bg-green-200 m-5 p-6 rounded-lg shadow-lg w-full text-center">
        <UserTestimonial />
      </div>
    </div>
  );
};

export default SaleForm;
