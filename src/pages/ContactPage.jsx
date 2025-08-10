import React, { useState } from "react";
import Heading from "../components/Heading";
import Button from "../components/Button";
import { supabase } from "../services/supabaseClient"; // import supabase client

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");
  const phoneNumber = "+252614113300";

  const validateForm = () => {
    let newErrors = {};

    if (!name.trim()) {
      newErrors.name = "Full Name is required.";
    } else if (name.length < 3) {
      newErrors.name = "Full Name must be at least 3 characters.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!message.trim()) {
      newErrors.message = "Message is required.";
    } else if (message.length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendToWhatsApp = async (e) => {
    e.preventDefault();
    setStatus("");

    if (!validateForm()) return;

    try {
      // Insert into Supabase
      const { error } = await supabase.from("contacts").insert([
        {
          name,
          email,
          message,
        },
      ]);

      if (error) throw error;

      // Open WhatsApp with pre-filled message
      const url =
        `https://wa.me/${phoneNumber.replace(/\D/g, "")}?text=` +
        `Name: ${encodeURIComponent(name)}%0A` +
        `Email: ${encodeURIComponent(email)}%0A` +
        `Message: ${encodeURIComponent(message)}%0A%0A`;

      window.open(url, "_blank").focus();

      setStatus("Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
      setErrors({});
    } catch (error) {
      setStatus("Failed to send message. Please try again.");
      console.error(error);
    }
  };

  return (
    <>
      <div className="animate-fadeInUp delay-100">
        <Heading text="Contact us" />
      </div>

      <div className="flex justify-center items-center min-h-screen p-4 md:mt-[-50px] bg-gray-100">
        <form
          onSubmit={sendToWhatsApp}
          className="w-[800px] bg-white px-4 md:px-10 rounded-2xl py-8 animate-fadeInUp delay-100"
        >
          <h2 className="text-center text-xl font-semibold text-gray-800 mb-6 uppercase">
            Get in Touch
          </h2>

          <div className="grid grid-cols-1 gap-4 mb-6 md:grid-cols-2">
            <div className="mb-4">
              <label className="block text-sm text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                className={`p-2 w-full border rounded-md text-gray-800 ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                className={`p-2 w-full border rounded-md text-gray-800 ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="example@mail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm text-gray-700 mb-1">Message</label>
            <textarea
              rows="4"
              className={`p-2 w-full border rounded-md text-gray-800 resize-none ${
                errors.message ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Write your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">{errors.message}</p>
            )}
          </div>

          <div className="flex flex-col items-center gap-4">
            <Button
              text="Get in touch"
              bgColor="#e73535"
              hoverBgColor="#e94949"
              className="w-full"
            />
            {status && (
              <p
                className={`text-sm ${
                  status.includes("successfully")
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {status}
              </p>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactPage;
