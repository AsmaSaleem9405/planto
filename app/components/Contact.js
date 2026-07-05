"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  ArrowLeft,
} from "lucide-react";

export default function ContactPage() {
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
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

    if (!form.name.trim())
      newErrors.name = "Full name is required.";

    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)
    ) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!form.phone.trim())
      newErrors.phone = "Phone number is required.";

    if (!form.subject.trim())
      newErrors.subject = "Subject is required.";

    if (!form.message.trim())
      newErrors.message = "Please enter your message.";

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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);

      setForm({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      setTimeout(() => {
        setSuccess(false);
      }, 4000);
    }, 2000);
  };

  return (
    <main className="bg-[#08130B] text-white min-h-screen flex flex-col justify-center">
      
      {!showForm ? (
        <section className="relative overflow-hidden w-full py-28 text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-[#0c2415] to-black opacity-95 -z-10" />

          <div className="relative max-w-7xl mx-auto px-6">
            <span className="bg-green-600/20 border border-green-500 text-green-300 px-5 py-2 rounded-full text-sm uppercase tracking-widest">
              Contact Planto
            </span>

            <h1 className="text-6xl font-black mt-8 leading-tight">
              We'd Love To
              <span className="text-green-400"> Hear From You</span>
            </h1>

            <p className="max-w-3xl mx-auto mt-8 text-lg text-gray-300 leading-8">
              Whether you have questions about your plants, your order, delivery, or simply need expert
              plant care advice, our dedicated support team is always ready to help you.
            </p>

            <button
              onClick={() => setShowForm(true)}
              className="inline-flex items-center gap-3 mt-12 bg-green-600 hover:bg-green-500 transition px-8 py-4 rounded-full font-semibold text-lg shadow-lg cursor-pointer"
            >
              <Send size={20} />
              Contact Our Team
            </button>
          </div>
        </section>
      ) : (
        <section className="max-w-7xl mx-auto px-6 w-full py-16">
          
          <button 
            onClick={() => setShowForm(false)} 
            className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition mb-8 group"
          >
            <ArrowLeft size={18} className="transform group-hover:-translate-x-1 transition" />
            Back to overview
          </button>

          <div className="grid lg:grid-cols-2 gap-16">

            {/* FORM CARD */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-2xl">
              <h2 className="text-4xl font-bold">
                Send Us A Message
              </h2>

              <p className="text-gray-400 mt-3 mb-10">
                Fill out the form below and our support team will respond within 24 hours.
              </p>

              {success && (
                <div className="mb-8 flex items-center gap-3 bg-green-600/20 border border-green-500 text-green-300 p-4 rounded-xl">
                  <CheckCircle />
                  Your message has been sent successfully.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* NAME */}
                <div>
                  <label className="block mb-2 text-gray-300">Full Name</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={`w-full rounded-xl px-5 py-4 bg-[#101c14] border text-white outline-none transition
                    ${
                      errors.name
                        ? "border-red-500"
                        : "border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-600"
                    }`}
                  />
                  {errors.name && (
                    <p className="text-red-400 mt-2 text-sm">{errors.name}</p>
                  )}
                </div>

                {/* EMAIL */}
                <div>
                  <label className="block mb-2 text-gray-300">Email Address</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={`w-full rounded-xl px-5 py-4 bg-[#101c14] border text-white outline-none transition
                    ${
                      errors.email
                        ? "border-red-500"
                        : "border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-600"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-400 mt-2 text-sm">{errors.email}</p>
                  )}
                </div>

                {/* PHONE */}
                <div>
                  <label className="block mb-2 text-gray-300">Phone Number</label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+1 234 567 890"
                    className={`w-full rounded-xl px-5 py-4 bg-[#101c14] border text-white outline-none transition
                    ${
                      errors.phone
                        ? "border-red-500"
                        : "border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-600"
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-red-400 mt-2 text-sm">{errors.phone}</p>
                  )}
                </div>

                {/* SUBJECT */}
                <div>
                  <label className="block mb-2 text-gray-300">Subject</label>
                  <input
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    className={`w-full rounded-xl px-5 py-4 bg-[#101c14] border text-white outline-none transition
                    ${
                      errors.subject
                        ? "border-red-500"
                        : "border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-600"
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-red-400 mt-2 text-sm">{errors.subject}</p>
                  )}
                </div>

                {/* MESSAGE */}
                <div>
                  <label className="block mb-2 text-gray-300">Message</label>
                  <textarea
                    name="message"
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help..."
                    className={`w-full rounded-xl px-5 py-4 bg-[#101c14] border text-white resize-none outline-none transition
                    ${
                      errors.message
                        ? "border-red-500"
                        : "border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-600"
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
                  className="w-full bg-green-600 hover:bg-green-500 disabled:bg-green-800 disabled:cursor-not-allowed transition rounded-xl py-4 font-semibold text-lg flex items-center justify-center gap-3"
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
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-green-700 to-green-900 rounded-3xl p-10 shadow-2xl">
                <h2 className="text-4xl font-bold mb-3">
                  Contact Information
                </h2>
                <p className="text-green-100 mb-10 leading-7">
                  We'd love to hear from you. Reach out using any of the methods below and we'll get back to you as soon as possible.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start gap-5">
                    <div className="bg-white/20 p-4 rounded-2xl">
                      <Mail className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl">Email</h3>
                      <p className="text-green-100">support@planto.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="bg-white/20 p-4 rounded-2xl">
                      <Phone className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl">Phone</h3>
                      <p className="text-green-100">+1 (234) 567-890</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="bg-white/20 p-4 rounded-2xl">
                      <MapPin className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl">Office</h3>
                      <p className="text-green-100">
                        123 Green Street <br /> Plant City, NY 10001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="bg-white/20 p-4 rounded-2xl">
                      <Clock className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl">Working Hours</h3>
                      <p className="text-green-100">
                        Monday - Friday <br /> 9:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* GOOGLE MAP */}
              <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
                <iframe
                  title="Google Map"
                  src="https://maps.google.com/maps?q=123%20Green%20Street,%20Plant%20City,%20NY&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="360"
                  loading="lazy"
                  className="w-full border-none"
                />
              </div>
            </div>

          </div>
        </section>
      )}
      
    </main>
  );
}