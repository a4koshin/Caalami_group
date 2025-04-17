import React, { useState } from "react";
import Heading from "../components/Heading";
import Button from "../components/Button";
import { FaPhoneAlt, FaEnvelope, FaBuilding } from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
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

  const sendToWhatsApp = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const url =
      `https://wa.me/${phoneNumber}?text=` +
      `Name: ${name}%0A` +
      `Email: ${email}%0A` +
      `Message: ${message}%0A%0A`;

    window.open(url, "_blank").focus();

    setName("");
    setEmail("");
    setMessage("");
    setErrors({});
  };

  return (
    <>
      <div className="animate-fadeInUp delay-100">
        <Heading text="Contact us" />
      </div>
      <div className="animate-fadeInUp delay-100 min-h-screen flex items-center justify-center p-6">
        <div className="bg-[#1c427a] rounded-xl w-full max-w-6xl shadow-2xl p-8 flex flex-col md:flex-row gap-8 animate-fade-in-down">
          <form
            onSubmit={sendToWhatsApp}
            className="flex-1 animate-fade-in-down delay-200"
          >
            <h2 className="uppercase text-white text-center text-2xl px-4 py-2 rounded-md font-bold mb-10">
              get in touch
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-white mb-1 block">Full Name</label>
                <input
                  type="text"
                  className={`w-full p-3 rounded-md bg-gray-100 focus:outline-2 outline-[#e73535] ${
                    errors.name ? "border border-red-500" : ""
                  }`}
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>
              <div>
                <label className="text-white mb-1 block">Email Address</label>
                <input
                  type="email"
                  className={`w-full p-3 rounded-md bg-gray-100 focus:outline-2 outline-[#e73535] ${
                    errors.email ? "border border-red-500" : ""
                  }`}
                  placeholder="example@mail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            <div className="mt-4">
              <label className="text-white mb-1 block">Message</label>
              <textarea
                rows="5"
                className={`w-full p-3 rounded-md bg-gray-100 focus:outline-2 outline-[#e73535] ${
                  errors.message ? "border border-red-500" : ""
                }`}
                placeholder="Write your message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            <div className="flex justify-center mt-6">
              <Button
                text="Get in touch"
                bgColor="#e73535"
                hoverBgColor="#e94949"
                className="mt-4 w-80"
              />
            </div>
          </form>

          <div className="bg-white text-[#1c427a] font-semibold rounded-md p-6 w-full h-80 mt-10 max-w-sm animate-fade-in-down delay-300">
            <h2 className="text-2xl font-bold mb-6">Info</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-[#e73535] p-1 rounded-2xl">
                  <FaEnvelope className="w-8 h-8" />
                </span>
                <p>Caalami@gmail.com</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#e73535] p-1 rounded-2xl">
                  <FaPhoneAlt className="w-8 h-8" />
                </span>
                <p>{phoneNumber}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#e73535] p-1 rounded-2xl">
                  <FaBuilding className="w-8 h-8" />
                </span>
                <p>Bakara Road</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#e73535] p-1 rounded-2xl">
                  <MdAccessTimeFilled className="w-8 h-8" />
                </span>
                <p>8:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
