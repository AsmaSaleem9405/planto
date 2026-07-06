"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  XCircle,
  ArrowLeft,
} from "lucide-react";

export default function ContactPage() {
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) newErrors.name = "Full name is required.";

    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!form.phone.trim()) newErrors.phone = "Phone number is required.";
    if (!form.subject.trim()) newErrors.subject = "Subject is required.";
    if (!form.message.trim()) newErrors.message = "Please enter your message.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setErrorMessage("");
    setSuccess(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setSuccess(true);
        setForm({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setTimeout(() => setSuccess(false), 5000);
      } else {
        const data = await response.json();
        setErrorMessage(data.message || "Failed to send email. Please try again.");
      }
    } catch (error) {
      setErrorMessage("A network error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Shared spring transitions for premium feel
  const smoothSpring = { type: "spring", stiffness: 300, damping: 30 };

  return (
    <main
      id="contact"
      className="min-h-screen flex flex-col justify-center bg-cover bg-center bg-no-repeat text-white relative overflow-hidden"
      style={{
        backgroundImage: "url('/images/bg-1.webp')",
      }}
    >
      {/* Darkened Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-950 via-[#0a1a0f] to-black opacity-95 -z-10" />

      <AnimatePresence mode="wait">
        {!showForm ? (
          /* --- HERO / OVERVIEW SECTION --- */
          <motion.section
            key="overview"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden w-full py-28 text-center"
          >
            <div className="relative max-w-7xl mx-auto px-6">
              <motion.span 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-green-600/20 border border-green-500 text-green-300 px-5 py-2 rounded-full text-sm uppercase tracking-widest inline-block"
              >
                Contact Planto UK
              </motion.span>

              <h1 className="text-5xl md:text-6xl font-black mt-8 leading-tight tracking-tight">
                We'd Love To
                <span className="text-green-400 block md:inline"> Hear From You</span>
              </h1>
<p
  className="
    mx-auto
    mt-6 md:mt-8
    max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl
    px-4 sm:px-6
    text-center
    text-base sm:text-lg lg:text-xl
    leading-7 sm:leading-8
    text-gray-300
  "
>
  Whether you have questions about your plants, your order, delivery across the United Kingdom, or simply need expert plant care advice, our dedicated support team in London is always ready to help you.
</p>

              <motion.button
                onClick={() => setShowForm(true)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={smoothSpring}
                className="inline-flex items-center gap-3 mt-12 bg-transparent border-2 border-green-500 text-green-400 hover:bg-green-600 hover:text-white hover:border-green-600 transition-colors duration-300 px-8 py-4 rounded-full font-semibold text-lg shadow-lg cursor-pointer"
              >
                <Send size={20} />
                Contact Our Team
              </motion.button>
            </div>
          </motion.section>
        ) : (
          /* --- CONTACT FORM & INFO SECTION --- */
          <motion.section
            key="form-screen"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-7xl mx-auto px-6 w-full py-16"
          >
            <button
              onClick={() => setShowForm(false)}
              className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition mb-8 group"
            >
              <ArrowLeft size={18} className="transform group-hover:-translate-x-1 transition-transform" />
              Back to overview
            </button>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              
              {/* INTERACTIVE FORM CARD */}
              <motion.div 
                whileHover={{ y: -4, borderColor: "rgba(255, 255, 255, 0.15)" }}
                transition={smoothSpring}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl"
              >
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                  Send Us A Message
                </h2>
                <p className="text-gray-400 mt-3 mb-10">
                  Fill out the form below and our support team will respond within 24 hours.
                </p>

                {/* Alerts with Layout Transitions */}
                <AnimatePresence>
                  {success && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mb-8 flex items-center gap-3 bg-green-600/20 border border-green-500 text-green-300 p-4 rounded-xl"
                    >
                      <CheckCircle className="flex-shrink-0" />
                      Your message has been sent successfully.
                    </motion.div>
                  )}

                  {errorMessage && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mb-8 flex items-center gap-3 bg-red-600/20 border border-red-500 text-red-300 p-4 rounded-xl"
                    >
                      <XCircle className="flex-shrink-0" />
                      {errorMessage}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Staggered Form Elements */}
                <motion.form 
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    visible: { transition: { staggerChildren: 0.08 } }
                  }}
                >
                  {[
                    { label: "Full Name", name: "name", type: "input", placeholder: "Jane Smith" },
                    { label: "Email Address", name: "email", type: "input", placeholder: "jane@example.co.uk", inputType: "email" },
                    { label: "Phone Number", name: "phone", type: "input", placeholder: "+44 20 7946 0192" },
                    { label: "Subject", name: "subject", type: "input", placeholder: "How can we help you?" },
                    { label: "Message", name: "message", type: "textarea", placeholder: "Tell us how we can help...", rows: 5 }
                  ].map((field) => (
                    <motion.div 
                      key={field.name}
                      variants={{
                        hidden: { opacity: 0, x: -10 },
                        visible: { opacity: 1, x: 0 }
                      }}
                    >
                      <label className="block mb-2 text-sm text-gray-300 font-medium">{field.label}</label>
                      {field.type === "input" ? (
                        <input
                          name={field.name}
                          type={field.inputType || "text"}
                          value={form[field.name]}
                          onChange={handleChange}
                          placeholder={field.placeholder}
                          className={`w-full rounded-xl px-5 py-4 bg-[#0a110c]/80 border text-white outline-none transition-all duration-200 focus:ring-1
                          ${errors[field.name] ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-gray-700 focus:border-green-500 focus:ring-green-500"}`}
                        />
                      ) : (
                        <textarea
                          name={field.name}
                          rows={field.rows}
                          value={form[field.name]}
                          onChange={handleChange}
                          placeholder={field.placeholder}
                          className={`w-full rounded-xl px-5 py-4 bg-[#0a110c]/80 border text-white resize-none outline-none transition-all duration-200 focus:ring-1
                          ${errors[field.name] ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-gray-700 focus:border-green-500 focus:ring-green-500"}`}
                        />
                      )}
                      {errors[field.name] && (
                        <p className="text-red-400 mt-2 text-sm">{errors[field.name]}</p>
                      )}
                    </motion.div>
                  ))}

                  {/* SUBMIT BUTTON */}
                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: loading ? 1 : 1.02 }}
                    whileTap={{ scale: loading ? 1 : 0.98 }}
                    className="w-full bg-green-600 hover:bg-green-500 disabled:bg-green-800/80 disabled:text-gray-400 disabled:cursor-not-allowed transition-colors duration-300 rounded-xl py-4 font-semibold text-lg flex items-center justify-center gap-3 shadow-lg"
                  >
                    {loading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </motion.form>
              </motion.div>

              {/* CONTACT INFO SIDEBAR */}
              <div className="space-y-8 lg:sticky lg:top-8">
                <motion.div 
                  whileHover={{ y: -4, borderColor: "rgba(255, 255, 255, 0.1)" }}
                  transition={smoothSpring}
                  className="bg-gradient-to-br from-green-800 to-green-950 rounded-3xl p-8 md:p-10 shadow-2xl border border-white/5"
                >
                  <h2 className="text-3xl font-bold mb-3 tracking-tight">Contact Information</h2>
                  <p className="text-green-200/80 mb-10 leading-7">
                    We'd love to hear from you. Reach out using any of the methods below and we'll get back to you as soon as possible.
                  </p>

                  <div className="space-y-6">
                    {[
                      { icon: Mail, title: "Email", value: "support@planto.co.uk" },
                      { icon: Phone, title: "Phone", value: "+44 (0) 20 7946 0192" },
                      { icon: MapPin, title: "Office", value: "30 Great Guildford Street", lines: ["London, SE1 0HS", "United Kingdom"] },
                      { icon: Clock, title: "Working Hours", value: "Monday - Saturday", lines: ["9:00 AM - 6:00 PM (GMT/BST)"] }
                    ].map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <div key={index} className="flex items-start gap-5 group">
                          <div className="bg-white/10 p-4 rounded-2xl group-hover:bg-green-500/30 group-hover:scale-110 transition-all duration-300">
                            <Icon className="text-green-400" size={24} />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg text-gray-200">{item.title}</h3>
                            <p className="text-green-100/90">{item.value}</p>
                            {item.lines?.map((line, i) => (
                              <p key={i} className="text-green-100/90 leading-relaxed">{line}</p>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>

                {/* GOOGLE MAP CONTAINER */}
                <motion.div 
                  whileHover={{ y: -4 }}
                  transition={smoothSpring}
                  className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl group"
                >
                  <iframe
                    title="Google Map London"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.4754593798547!2d-0.09890692338161545!3d51.50447387181313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487603517c24097b%3A0xc3f54ffecfdf5d16!2s30%20Great%20Guildford%20St%2C%20London%20SE1%200HS%2C%20UK!5e0!3m2!1sen!2suk!4v1710000000000!5m2!1sen!2suk"
                    width="100%"
                    height="360"
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full border-none filter grayscale-[30%] contrast-125 group-hover:grayscale-0 transition-all duration-700"
                  />
                </motion.div>
              </div>

            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </main>
  );
}