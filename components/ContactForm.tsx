"use client";

import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mqalpqwo");
  if (state.succeeded) {
    return (
      <div className="max-w-lg p-8 mx-auto text-center border border-green-500 glass-effect rounded-2xl">
        <div className="mb-4 text-6xl">✅</div>
        <h3 className="mb-2 text-2xl font-bold text-green-400">
          Message Sent!
        </h3>
        <p className="text-gray-300">
          Thank you! Your message has been sent successfully. I will get back to
          you soon.
        </p>
      </div>
    );
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-lg px-8 pt-8 pb-10 mx-auto mb-4 border border-gray-800 glass-effect rounded-2xl"
    >
      <h2 className="mb-8 text-3xl font-bold text-center gradient-text">
        Send a Message
      </h2>

      <div className="mb-6">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-semibold text-gray-300"
        >
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="your.name@example.com"
          required
          className="w-full px-4 py-3 text-white transition-all duration-300 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="mt-1 text-sm text-red-400"
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-semibold text-gray-300"
        >
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Hey there! I would love to collaborate with you on a project..."
          required
          rows={6}
          className="w-full px-4 py-3 text-white transition-all duration-300 bg-gray-800 border border-gray-700 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="mt-1 text-sm text-red-400"
        />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="relative w-full px-6 py-4 overflow-hidden font-bold text-white transition-all duration-300 transform rounded-lg bg-gradient-to-r from-orange-600 to-yellow-500 hover:shadow-lg hover:shadow-orange-500/50 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed group"
      >
        <span className="relative z-10">
          {state.submitting ? "Sending..." : "Send Message 🚀"}
        </span>
        <div className="absolute inset-0 transition-transform duration-300 transform -translate-x-full bg-gradient-to-r from-yellow-500 to-orange-600 group-hover:translate-x-0"></div>
      </button>
    </form>
  );
}
