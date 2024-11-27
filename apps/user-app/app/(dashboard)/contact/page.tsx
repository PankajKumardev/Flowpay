"use client";

import React, { useState } from "react";
import { HelpCircle, Send, Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactUsPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", { name, email, subject, message });
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <div className="min-h-screen pt-10 md:w-[70%] mx-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-800">
            <span className="text-blue-600">FlowPay </span>Contact Us
          </h1>
          <p className="mt-2 text-lg sm:text-xl text-slate-800">
            We're here to help with any questions or concerns
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Phone className="mr-2 h-5 w-5 text-blue-600" />
                Phone Support
              </h3>
              <p className="text-gray-600 mb-2">24/7 Customer Service</p>
              <a
                href="tel:+1234567890"
                className="text-blue-600 font-medium hover:text-blue-800"
              >
                +1 (234) 567-890
              </a>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Mail className="mr-2 h-5 w-5 text-blue-600" />
                Email Support
              </h3>
              <p className="text-gray-600 mb-2">
                Get a response within 24 hours
              </p>
              <a
                href="mailto:support@pankajams1234@gmail.com"
                className="text-blue-600 font-medium hover:text-blue-800"
              >
                support@flowpay.com
              </a>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <MapPin className="mr-2 h-5 w-5 text-blue-600" />
                Visit Us
              </h3>
              <p className="text-gray-600 mb-2">123 FlowPay Street</p>
              <p className="text-gray-600">Fintech City, FP 12345</p>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8">
          <div className="p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              <HelpCircle className="mr-2 h-6 w-6 text-blue-600" />
              Get in Touch
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="bg-indigo-50 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <Clock className="mr-2 h-5 w-5 text-blue-600" />
            Our Support Hours
          </h3>
          <p className="text-gray-600 mb-4">
            Our customer support team is available during the following hours:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>Monday - Friday: 9:00 AM - 8:00 PM</li>
            <li>Saturday: 10:00 AM - 6:00 PM</li>
            <li>Sunday: Closed (Email support only)</li>
          </ul>
          <p className="text-gray-600">
            For urgent matters outside of these hours, please use our 24/7 phone
            support.
          </p>
        </div>
      </div>
    </div>
  );
}
