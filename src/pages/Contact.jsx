import { useState } from "react";
import Navbar from "../commponent/Navbar";
export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 2000); // simulate API
  };

  return (
    <section className="bg-[#f9f9f9] py-20 px-4 md:px-12 lg:px-[80px]">
   <Navbar/>
      {/* HEADING */}
      <div className="text-center mb-12 max-w-3xl mx-auto mt-20">
        <h2 className="text-3xl md:text-5xl font-oswald font-bold text-black">
          Ready to make your dog’s day? And your life a lot easier?
        </h2>

        <p className="text-gray-600 mt-4 text-base md:text-lg">
          Fill in the form below and we'll be in touch to answer any questions and get your first delivery sorted. It really is that simple.
        </p>
      </div>

      {/* SPLIT LAYOUT */}
      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* FORM */}
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm">

  {!submitted ? (
    <form onSubmit={handleSubmit} className="space-y-4">

      {/* Name */}
      <div>
        <label className="block text-sm font-semibold mb-1">
          Your name
        </label>
        <input
          placeholder="What do we call you?"
          className="w-full border p-3 rounded-lg"
          required
        />
      </div>

      {/* Dog Name */}
      <div>
        <label className="block text-sm font-semibold mb-1">
          Your dog(s)'s name/s
        </label>
        <input
          placeholder="The real star of the show"
          className="w-full border p-3 rounded-lg"
        />
      </div>

      {/* Age */}
      <div>
        <label className="block text-sm font-semibold mb-1">
          Your dog(s)’s age/s
        </label>
        <input
          placeholder="How old?"
          className="w-full border p-3 rounded-lg"
        />
      </div>

      {/* About Dog */}
      <div>
        <label className="block text-sm font-semibold mb-1">
          Tell us about your dog/s!
        </label>
        <textarea
          placeholder="Any dietary needs? Activity levels?"
          className="w-full border p-3 rounded-lg"
        />
      </div>

      {/* Phone */}
      <div>
        <label className="block text-sm font-semibold mb-1">
          Phone number
        </label>
        <input
          placeholder="No bots! Real humans respond"
          className="w-full border p-3 rounded-lg"
          required
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-semibold mb-1">
          Email (Optional)
        </label>
        <input
          placeholder="Email (Optional)"
          className="w-full border p-3 rounded-lg"
        />
      </div>

      {/* Address */}
      <div>
        <label className="block text-sm font-semibold mb-1">
          Your address in Bhopal
        </label>
        <input
          placeholder="Just to check availability"
          className="w-full border p-3 rounded-lg"
        />
      </div>

      {/* Extra */}
      <div>
        <label className="block text-sm font-semibold mb-1">
          Anything else?
        </label>
        <textarea
          placeholder="Any questions or just looking to find out more?"
          className="w-full border p-3 rounded-lg"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-[#d97063] text-black font-semibold py-3 rounded-full flex justify-center items-center gap-2"
      >
        {loading ? (
          <span className="animate-bounce text-lg">🐾</span>
        ) : (
          "Submit"
        )}
      </button>

    </form>
  ) : (
    <div className="text-center text-green-600 font-semibold">
      You're in! We'll get in touch soon. Your dog is about to have a very good day.
    </div>
  )}

</div>
        {/* IMAGE */}
        <div className="hidden md:block">
          <img
            src="/happy-dog.jpg"
            alt="Happy Dog"
            className="rounded-2xl object-cover w-full h-full"
          />
        </div>

      </div>

      {/* WHATSAPP CTA */}
      <div className="text-center mt-16">
        <h3 className="text-xl md:text-2xl font-oswald font-bold text-black mb-4">
          Rather just chat? We get it.
        </h3>

        <a
          href="https://wa.me/91XXXXXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
        >
          Tap here to message us on WhatsApp!
        </a>
      </div>

    </section>
  );
}