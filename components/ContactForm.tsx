"use client";

import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mqalpqwo");
  if (state.succeeded) {
    return (
      <div className="p-4 text-center text-green-800 bg-green-100 rounded">
        <p>
          Thank you! Your message has been sent successfully. I will get back to
          you soon.
        </p>
      </div>
    );
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-lg px-8 pt-6 pb-8 mx-auto mb-4 bg-gray-900 rounded shadow-md"
    >
      <h2 className="mb-4 text-2xl font-bold text-center text-orange-500">
        Form Submission
      </h2>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block mb-2 text-white text-whitefont-semibold"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Your email address"
          required
          className="w-full px-3 py-2 border rounded shadow appearance-none text-whitefocus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block mb-2 text-whitefont-semibold">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Your message... Hey there! I would love to collaborate with you on a project."
          required
          rows={5}
          className="w-full px-3 py-2 border rounded shadow appearance-none text-whiteresize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>
      <button
        type="submit"
        disabled={state.submitting}
        className="w-full px-4 py-2 font-bold text-white transition bg-blue-500 rounded cursor-pointer hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Send
      </button>
    </form>
  );
}
