import { MdOutlineEmail } from "react-icons/md";
import { ImWhatsapp } from "react-icons/im";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = () => {
    const subject = "Portfolio Contact";
    const body = `From: ${email}\n\nMessage:\n${message}`;

    window.location.href = `mailto:vivekmeena572004@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="flex flex-col items-center px-6 mb-35">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: false }}
        className="flex flex-col items-center gap-4 text-center"
      >
        <p className="text-gray-300">GET IN TOUCH</p>
        <h1 className="text-3xl sm:text-5xl text-[#28a5db] font-semibold">
          Contact Me
        </h1>
      </motion.div>

      {/* Contact Card */}
      <motion.div
        initial={{ opacity: 0, y:40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: false }}
        className="border border-gray-400 rounded-xl mt-10 p-8 w-full max-w-md hover:border-blue-300 transition shadow-2xl"
      >
        {/* Quick Contact */}
        <div className="flex flex-col items-center gap-4">
          <button
            onClick={() => {
              window.location.href = "mailto:vivekmeena572004@gmail.com";
            }}
            className="border border-gray-400 w-full h-10 rounded-lg flex items-center justify-center gap-2 hover:border-blue-300 hover:scale-101 active:scale-95 transition"
          >
            <MdOutlineEmail className="text-xl sm:text-lg" />
            vivekmeena572004@gmail.com
          </button>

          <button
            onClick={() => {
              const msg =
                "Hello Vivek, I saw your portfolio and want to connect.";
              const url = `https://wa.me/919516409426?text=${encodeURIComponent(msg)}`;
              window.location.href = url;
            }}
            className="border border-gray-400 w-full h-10 rounded-lg flex items-center justify-center gap-2 hover:border-blue-300 hover:scale-101 active:scale-95 transition"
          >
            <ImWhatsapp className="text-xl sm:text-lg" />
            WhatsApp
          </button>
        </div>

        {/* Divider */}
        <p className="text-center text-gray-300 mt-8">Or send a message</p>

        {/* Contact Form */}
        <div className="flex flex-col gap-4 mt-6">
          <input
            type="email"
            value={email}
            placeholder="Your Email"
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-400 rounded-lg p-3 hover:border-blue-300 focus:border-blue-300 outline-none transition"
          />

          <textarea
            value={message}
            placeholder="Your Message..."
            onChange={(e) => setMessage(e.target.value)}
            className="border border-gray-400 rounded-lg p-3 h-32 resize-none hover:border-blue-300 focus:border-blue-300 outline-none scrollbar-hide transition"
          />

          <button
            onClick={handleSend}
            disabled={!email || !message}
            className={`h-10 rounded-lg border border-blue-300 text-gray-200 transition
              ${
                !email || !message
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:scale-105 active:scale-95"
              }`}
          >
            Send Message
          </button>
        </div>
      </motion.div>
    </div>
  );
}
