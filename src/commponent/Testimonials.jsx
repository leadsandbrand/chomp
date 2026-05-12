import { useState } from "react";

const testimonials = [
  {
    name: "Simba Joshi (4.5 years) ",
    role: "Dog Owner - Ontario",
    image: "/image.png",
    text: "Let me tell you about this pawsome food I’ve been eating. Usually, hot summer days mean I’m not finishing my meals... until I tried Chomp! Now, my bowl is SPOTLESS every single time. I’m obsessed with the Paneer and Egg meals. Even though I usually avoid veggies, I gobble them right up when they’re mixed in here. It’s easily the highlight of my day!Tasty, healthy, and tail-wag approved.  10/10 from me <3",
  },
  {
    name: "Oreo Gupta(11 years)",
    role: "Dog Owner - Florida",
    image: "/image6.png",
    text: "In my seasoned opinion, most 'healthy' food tastes like cardboard. I usually just sniff my bowl and walk away if it’s not up to my standards.Then came Chomp Chicken+! The smell alone got me off my favourite rug in record time. It’s real chicken, it’s juicy, and it’s really easy for an old-timer like me to chew. I haven't left a single scrap behind since my first bite.The best part? I don't feel like a sleepy senior anymore. My humans say I’ve got my 'puppy spark' back, but I just think I finally found a meal worth getting excited about. Five stars. 🐾"
,
  },
  {
    name: "Dana Eston",
    role: "Cat Owner - Colorado",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "Best thing I ever did for my 2 cats. Hairballs gone! Diarrhea and loose stools gone!",
  },

];

export default function Testimonial() {
  const [index, setIndex] = useState(1);

  const prev = (index - 1 + testimonials.length) % testimonials.length;
  const next = (index + 1) % testimonials.length;

  return (
    <div className="w-full flex flex-col items-center justify-center bg-white py-21 overflow-hidden">

      {/* TITLE */}
      <h1 className="text-4xl md:text-5xl font-oswald font-bold text-[#d97063] leading-tight font-oswald text-center">
        Don’t just take our word for it
      </h1>

      {/* CARDS */}
      <div className="w-full max-w-5xl flex items-center justify-center  relative">

        {/* LEFT */}
        <div className="w-1/3 opacity-30 scale-90 text-center px-4 hidden md:block">
          <img
            src={testimonials[prev].image}
            className="w-16 h-16 rounded-full mx-auto mb-3 object-cover object-center"
          />

          <p className="text-gray-400 italic h-[120px] overflow-hidden">
            {testimonials[prev].text}
          </p>
{/* 
          <p className="mt-2 font-semibold">
            {testimonials[prev].name}
          </p> */}
        </div>

        {/* CENTER */}
        <div className="font-bold px-10 py-12 text-center max-w-md z-10 transition-all duration-500">

          {/* IMAGE */}
          <div className="w-44 h-44 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-xl bg-white flex items-center justify-center">
            <img
              src={testimonials[index].image}
              alt="testimonial"
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* QUOTE */}
          <p className="text-gray-800 font-medium leading-relaxed h-[180px] overflow-hidden">
            {testimonials[index].text}
          </p>

          {/* NAME */}
          <p className="mt-6 font-bold text-xl">
            {testimonials[index].name}
          </p>

          {/* ROLE */}
          {/* <p className="text-sm text-gray-500 mt-2">
            {testimonials[index].role}
          </p> */}

        </div>

        {/* RIGHT */}
        <div className="w-1/3 opacity-30 scale-90 text-center px-4 hidden md:block">
          <img
            src={testimonials[next].image}
            className="w-16 h-16 rounded-full mx-auto mb-3 object-cover"
          />

          <p className="text-gray-400 italic h-[120px] overflow-hidden">
            {testimonials[next].text}
          </p>

          <p className="mt-2 font-semibold">
            {testimonials[next].name}
          </p>
        </div>

      </div>

      {/* DOTS */}
      <div className="flex gap-3 mt-8">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`transition-all duration-300 rounded-full ${
              i === index
                ? "w-8 h-3 bg-black"
                : "w-3 h-3 bg-gray-400"
            }`}
          />
        ))}
      </div>

    </div>
  );
}