import { useState } from "react";
import Navbar from "../commponent/Navbar";
import Footer from "../commponent/Footer";
import Footer1 from "../commponent/Footer1";
import { FaWhatsapp } from "react-icons/fa";
export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [name, setName] = useState("");
  const [dogname, setDogname] = useState("");
const [email, setEmail] = useState("");

const [phone, setPhone] = useState("");
const [address,setAddress]= useState("");
const [message, setMessage] = useState("");
const [age, setAge] = useState("");
const[about, setAbout] = useState("");


const handleSubmit = async (e) => {
  e.preventDefault();

  setLoading(true);

  const formData = {
    name,
    dogname,
    age,

    about,
    phone,
    email,
    address,
    message,
   
    
    

  };

  console.log("Submitting form data:", formData);

  try {

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbxMFfLWEMC_F5kMvCXlMoiKA_nzi_45EMaH6yhFY0W6kTNb0vxq0IpT4eg1ByY_OhY/exec",
      {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(formData),
      }
    );
    
    console.log("Data sent successfully");
    console.log("Fetch response:", response);

    setSubmitted(true);

   

  } catch (error) {

    console.log("Error:", error);

  }

  setLoading(false);
};


  return (
    <>
    <section className="bg-[#f9f9f9] mt-30 px-4  md:px-12 lg:px-[80px]">
   <Navbar/>
      {/* HEADING */}
      <div className="text-center mb-12 max-w-3xl mx-auto mt-10">
        <h2 className="text-3xl md:text-5xl font-oswald font-bold text-black">
          Ready to make your dog’s day? And your life a lot easier?
        </h2>

        <p className="text-gray-600 mt-4 text-base md:text-lg">
        Fill in the form below. We’ll contact you to answer any questions and get your first delivery sorted. It really is that simple.

        </p>
      </div>

      {/* SPLIT LAYOUT */}
      <div className="bg-white rounded-3xl shadow-sm overflow-hidden">

<div className="grid lg:grid-cols-2">

  {/* LEFT FORM */}
  <div className="p-6 md:p-10 lg:p-7">

    {!submitted ? (

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* NAME */}
        <div className="grid md:grid-cols-[180px_1fr] items-center gap-4">

          <label className="text-sm font-semibold text-black">
            Your name
          </label>

          <input
  type="text"
  placeholder="What do we call you?"
  required
  value={name}
  onChange={(e) => setName(e.target.value)}
  className="
    w-full
    border border-gray-200
    p-1 rounded-xl
    outline-none
    placeholder:text-sm
    focus:border-[#d97063]
  "

/>

        </div>

        {/* DOG NAME */}
        <div className="grid md:grid-cols-[180px_1fr] items-center gap-4">

          <label className="text-sm font-semibold text-black">
            Your dog(s)'s name/s
          </label>

          <input
            type="text"
            placeholder="The real star of the show"
            required
            value={dogname}
            onChange={(e) => setDogname(e.target.value)}
            className="
              w-full
              border border-gray-200
              p-1 rounded-xl 
              outline-none
              placeholder:text-sm
              focus:border-[#d97063]
            "
          />

        </div>

        {/* AGE */}
        <div className="grid md:grid-cols-[180px_1fr] items-center gap-4">

          <label className="text-sm font-semibold text-black">
            Your dog(s)’s age/s
          </label>

          <input
            type="text"
            placeholder="How old?"
            value={age}
            required
            onChange={(e) => setAge(e.target.value)}
            className="
              w-full
              border border-gray-200
              p-1 rounded-xl
              outline-none
              placeholder:text-sm
              focus:border-[#d97063]
            "
          />

        </div>

        {/* ABOUT DOG */}
        <div className="grid md:grid-cols-[180px_1fr] gap-4 items-start">

          <label className="text-sm font-semibold text-black pt-3">
            Tell us about your dog/s!
          </label>

          <input
            type="text"
            placeholder="Any dietary needs? Activity levels?"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            className="
              w-full
              border border-gray-200
              p-1 rounded-xl
              outline-none
              placeholder:text-sm
              focus:border-[#d97063]
            "
            required
          />

        </div>

        {/* PHONE */}
        <div className="grid md:grid-cols-[180px_1fr] items-center gap-4">

          <label className="text-sm font-semibold text-black">
            Phone number
          </label>
          <input
  type="tel"
  placeholder="No bots! Real humans respond"
  value={phone}
  required
  onChange={(e) => setPhone(e.target.value)}
  className="
    w-full
    border border-gray-200
    p-1 rounded-xl
    outline-none
    placeholder:text-sm
    focus:border-[#d97063]
  "

/>
        </div>

        {/* EMAIL */}
        <div className="grid md:grid-cols-[180px_1fr] items-center gap-4">

          <label className="text-sm font-semibold text-black">
            Email 
          </label>

          <input
  type="email"
  placeholder="(Optional)"

  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="
    w-full
    border border-gray-200
    p-1 rounded-xl
    outline-none
    placeholder:text-sm
    focus:border-[#d97063]
  "
/>

        </div>

        {/* ADDRESS */}
        <div className="grid md:grid-cols-[180px_1fr] items-center gap-4">

          <label className="text-sm font-semibold text-black">
            Your address in Bhopal
          </label>

          <input
            type="text"
            placeholder="Just to check availability"


            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            className="
              w-full
              border border-gray-200
              p-1 rounded-xl
              outline-none
              placeholder:text-sm
              focus:border-[#d97063]
            "
          />

        </div>

        {/* EXTRA */}
        <div className="grid md:grid-cols-[180px_1fr] gap-4 items-start">

          <label className="text-sm font-semibold text-black pt-3">
            Anything else?
          </label>

          <input
  type="text"
  placeholder="Any questions or just looking to find out more?"
  value={message}
  
  onChange={(e) => setMessage(e.target.value)}
  className="
    w-full
    border border-gray-200
    p-1 rounded-xl
    outline-none
    placeholder:text-sm
    focus:border-[#d97063]
  "
  required
/>
        </div>

        {/* BUTTON */}
        <div className="md:pl-[180px]">

          <button
            type="submit"
            className="
              bg-[#d97063]
              text-white
              font-semibold
              px-10 py-3
              rounded-full
              hover:scale-105
              transition
                 resize-none
              duration-300
              cursor-pointer
            "
          >
            {loading ? (
              <span className="animate-bounce text-lg">🐾</span>
            ) : (
              "Submit"
            )}
          </button>

        </div>

      </form>

    ) : (

      <div className="text-center py-16  mt-20">

        <h3 className="text-2xl font-bold text-[#d9766a] mb-4">
          You're in!
        </h3>

        <p className="">
          We'll get in touch soon.
          Your dog is about to have a very good day.
        </p>

      </div>

    )}

  </div>

  {/* RIGHT IMAGE */}
  <div className="   flex  items-center lg:flex items-end  justify-center  pb-8 md:pb-12">

<img
  src="/final.2.png"
  alt="Dog"
  className="w-[300px] h-[300px] lg:w-[600px]  lg:h-[600px]  object-contain"
/>

</div>  

</div>

</div>

      {/* WHATSAPP CTA */}
      {/* <div className="text-center mt-16">
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
      </div> */}
<div className=" md:mt-8   flex flex-col items-center text-center">

<h3 className="text-2xl md:text-3xl font-oswald font-bold text-black">
  Rather just chat? We get it.
</h3>

<a
  href="https://wa.me/919109117355"
  target="_blank"
  rel="noopener noreferrer"
  className="
    inline-flex
    items-center
    gap-3
    mt-4
    bg-[#d97063]
    text-white
    font-semibold
    px-6
    py-3
    rounded-full
    hover:scale-105
    transition
  "
>
  <FaWhatsapp size={22} />

  Tap here to message us on WhatsApp!
</a>

</div>



<a    
  href="https://wa.me/919109117355"
  target="_blank"
  rel="noopener noreferrer"
  className="
    fixed
    bottom-6
    right-6
    w-16
    h-16
    rounded-full
    bg-[#25D366]
    flex
    items-center
    justify-center
    shadow-2xl
    hover:scale-110
    transition
    z-50
  "
>
  <FaWhatsapp className="text-white text-4xl" />
</a>
    </section>
  
   <Footer1/>
    </>
  );
}