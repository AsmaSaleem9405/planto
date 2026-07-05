"use client";

import { useState } from "react";
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

  return (
    <main id="contact"
      className="min-h-screen flex flex-col justify-center bg-cover bg-center bg-no-repeat text-white relative overflow-hidden"
      style={{
        backgroundImage: "url('/images/bg-1.webp')",
      }}
    >
      {/* Smooth Professional Animations */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        /* Smooth scale-up reveal on hover interaction for structural layout elements */
        .smooth-reveal {
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .smooth-reveal:hover {
          transform: translateY(-4px);
          border-color: rgba(255, 255, 255, 0.2);
        }
      `}</style>

      {/* Darkened Overlays for high-contrast presentation */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-950 via-[#0a1a0f] to-black opacity-95 -z-10" />

      {!showForm ? (
        <section className="relative overflow-hidden w-full py-28 text-center animate-fade-in-up">
          <div className="relative max-w-7xl mx-auto px-6">
            <span className="bg-green-600/20 border border-green-500 text-green-300 px-5 py-2 rounded-full text-sm uppercase tracking-widest inline-block">
              Contact Planto Pakistan
            </span>

            <h1 className="text-5xl md:text-6xl font-black mt-8 leading-tight tracking-tight">
              We'd Love To
              <span className="text-green-400 block md:inline"> Hear From You</span>
            </h1>

            <p className="max-w-3xl mx-auto mt-8 text-lg text-gray-300 leading-8">
              Whether you have questions about your plants, your order, delivery across Pakistan, or simply need expert
              plant care advice, our dedicated support team in Lahore is always ready to help you.
            </p>

            <button
              onClick={() => setShowForm(true)}
              className="inline-flex items-center gap-3 mt-12 bg-transparent border-2 border-green-500 text-green-400 hover:bg-green-600 hover:text-white hover:border-green-600 transition-all duration-300 px-8 py-4 rounded-full font-semibold text-lg shadow-lg cursor-pointer transform hover:-translate-y-1"
            >
              <Send size={20} />
              Contact Our Team
            </button>
          </div>
        </section>
      ) : (
        <section className="max-w-7xl mx-auto px-6 w-full py-16 animate-fade-in-up">
          
          <button 
            onClick={() => setShowForm(false)} 
            className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition mb-8 group"
          >
            <ArrowLeft size={18} className="transform group-hover:-translate-x-1 transition" />
            Back to overview
          </button>

          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* FORM CARD */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl smooth-reveal">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Send Us A Message
              </h2>

              <p className="text-gray-400 mt-3 mb-10">
                Fill out the form below and our support team will respond within 24 hours.
              </p>

              {success && (
                <div className="mb-8 flex items-center gap-3 bg-green-600/20 border border-green-500 text-green-300 p-4 rounded-xl transition-all">
                  <CheckCircle className="flex-shrink-0" />
                  Your message has been sent successfully.
                </div>
              )}

              {errorMessage && (
                <div className="mb-8 flex items-center gap-3 bg-red-600/20 border border-red-500 text-red-300 p-4 rounded-xl transition-all">
                  <XCircle className="flex-shrink-0" />
                  {errorMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* NAME */}
                <div>
                  <label className="block mb-2 text-sm text-gray-300 font-medium">Full Name</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={`w-full rounded-xl px-5 py-4 bg-[#0a110c] border text-white outline-none transition duration-200
                    ${
                      errors.name
                        ? "border-red-500 focus:border-red-500"
                        : "border-gray-700 focus:border-green-500 focus:ring-1 focus:ring-green-500"
                    }`}
                  />
                  {errors.name && (
                    <p className="text-red-400 mt-2 text-sm">{errors.name}</p>
                  )}
                </div>

                {/* EMAIL */}
                <div>
                  <label className="block mb-2 text-sm text-gray-300 font-medium">Email Address</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={`w-full rounded-xl px-5 py-4 bg-[#0a110c] border text-white outline-none transition duration-200
                    ${
                      errors.email
                        ? "border-red-500 focus:border-red-500"
                        : "border-gray-700 focus:border-green-500 focus:ring-1 focus:ring-green-500"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-400 mt-2 text-sm">{errors.email}</p>
                  )}
                </div>

                {/* PHONE */}
                <div>
                  <label className="block mb-2 text-sm text-gray-300 font-medium">Phone Number</label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+92 300 1234567"
                    className={`w-full rounded-xl px-5 py-4 bg-[#0a110c] border text-white outline-none transition duration-200
                    ${
                      errors.phone
                        ? "border-red-500 focus:border-red-500"
                        : "border-gray-700 focus:border-green-500 focus:ring-1 focus:ring-green-500"
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-red-400 mt-2 text-sm">{errors.phone}</p>
                  )}
                </div>

                {/* SUBJECT */}
                <div>
                  <label className="block mb-2 text-sm text-gray-300 font-medium">Subject</label>
                  <input
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    className={`w-full rounded-xl px-5 py-4 bg-[#0a110c] border text-white outline-none transition duration-200
                    ${
                      errors.subject
                        ? "border-red-500 focus:border-red-500"
                        : "border-gray-700 focus:border-green-500 focus:ring-1 focus:ring-green-500"
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-red-400 mt-2 text-sm">{errors.subject}</p>
                  )}
                </div>

                {/* MESSAGE */}
                <div>
                  <label className="block mb-2 text-sm text-gray-300 font-medium">Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help..."
                    className={`w-full rounded-xl px-5 py-4 bg-[#0a110c] border text-white resize-none outline-none transition duration-200
                    ${
                      errors.message
                        ? "border-red-500 focus:border-red-500"
                        : "border-gray-700 focus:border-green-500 focus:ring-1 focus:ring-green-500"
                    }`}
                  />
                  {errors.message && (
                    <p className="text-red-400 mt-2 text-sm">{errors.message}</p>
                  )}
                </div>

                {/* SUBMIT BUTTON */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-green-600 hover:bg-green-500 disabled:bg-green-800 disabled:cursor-not-allowed transition duration-300 rounded-xl py-4 font-semibold text-lg flex items-center justify-center gap-3 shadow-lg transform hover:-translate-y-0.5 active:translate-y-0"
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
                </button>
              </form>
            </div>

            {/* CONTACT INFO SIDEBAR */}
            <div className="space-y-8 lg:sticky lg:top-8">
              <div className="bg-gradient-to-br from-green-800 to-green-950 rounded-3xl p-8 md:p-10 shadow-2xl border border-white/5 smooth-reveal">
                <h2 className="text-3xl font-bold mb-3 tracking-tight">
                  Contact Information
                </h2>
                <p className="text-green-200/80 mb-10 leading-7">
                  We'd love to hear from you. Reach out using any of the methods below and we'll get back to you as soon as possible.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-5 group">
                    <div className="bg-white/10 p-4 rounded-2xl group-hover:bg-green-500/20 transition-colors duration-300">
                      <Mail className="text-green-400" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-200">Email</h3>
                      <p className="text-green-100/90">support@planto.pk</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-5 group">
                    <div className="bg-white/10 p-4 rounded-2xl group-hover:bg-green-500/20 transition-colors duration-300">
                      <Phone className="text-green-400" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-200">Phone</h3>
                      <p className="text-green-100/90">+92 (42) 111-752-686</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5 group">
                    <div className="bg-white/10 p-4 rounded-2xl group-hover:bg-green-500/20 transition-colors duration-300">
                      <MapPin className="text-green-400" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-200">Office</h3>
                      <p className="text-green-100/90 leading-relaxed">
                        Main Boulevard, Gulberg III <br /> Lahore, Punjab, Pakistan
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5 group">
                    <div className="bg-white/10 p-4 rounded-2xl group-hover:bg-green-500/20 transition-colors duration-300">
                      <Clock className="text-green-400" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-200">Working Hours</h3>
                      <p className="text-green-100/90 leading-relaxed">
                        Monday - Saturday <br /> 9:00 AM - 6:00 PM (PKT)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* LIVE GOOGLE MAP LOCATION (GULBERG III LAHORE) */}
              <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl smooth-reveal group">
                <iframe
                  title="Google Map Lahore"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.3121516244434!2d74.34149027627448!3d31.515568147720935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919045a16315ef9%3A0x63351336e9ff76d9!2sMain%20Blvd%20Gulberg%2C%20Gulberg%2C%20Lahore%2C%20Punjab!5e0!3m2!1sen!2spk!4v1710000000000!5m2!1sen!2spk"
                  width="100%"
                  height="360"
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full border-none filter grayscale-[30%] contrast-125 group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>

          </div>
        </section>
      )}
    </main>
  );
}