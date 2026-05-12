import { useState } from "react";

const testimonials = [
  {
    name: "Simba Joshi ",
    role: "4.5 years",
    image: "/image.png",
    text: "Let me tell you about this pawsome food I’ve been eating. Usually, hot summer days mean I’m not finishing my meals... until I tried Chomp! Now, my bowl is SPOTLESS every single time. I’m obsessed with the Paneer and Egg meals. Even though I usually avoid veggies, I gobble them right up when they’re mixed in here. It’s easily the highlight of my day!Tasty, healthy, and tail-wag approved.  10/10 from me <3",
  },
  {
    name: "Oreo Gupta",
    role: "11 years",
    image: "/image6.png",
    text: "In my seasoned opinion, most 'healthy' food tastes like cardboard. I usually just sniff my bowl and walk away if it’s not up to my standards.Then came Chomp Chicken+! The smell alone got me off my favourite rug in record time. It’s real chicken, it’s juicy, and it’s really easy for an old-timer like me to chew. I haven't left a single scrap behind since my first bite.The best part? I don't feel like a sleepy senior anymore. My humans say I’ve got my 'puppy spark' back, but I just think I finally found a meal worth getting excited about. Five stars. "
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


  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };
  
  const nextSlide = () => {
    setIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };
  const [index, setIndex] = useState(1);

  const prev = (index - 1 + testimonials.length) % testimonials.length;
  const next = (index + 1) % testimonials.length;

  return (
    <div className="w-full flex flex-col items-center justify-center bg-white py-15 overflow-hidden">

      {/* TITLE */}
      <h1 className="text-4xl md:text-5xl font-oswald font-bold text-[#d97063] leading-tight font-oswald text-center">
        Don’t just take our word for it!
      </h1>

      {/* CARDS */}
      <div className="w-full max-w-5xl flex items-center justify-center  relative">

      <div className="relative w-full max-w-5xl mx-auto flex items-center justify-center py-10">

{/* LEFT ARROW */}
<button
  onClick={prevSlide}
  className="absolute left-0 z-20 bg-white shadow-lg rounded-full w-12 h-12 flex items-center justify-center hover:scale-110 transition"
>
  ❮
</button>

{/* CARD */}
<div className="bg-white rounded-3xl shadow-2xl flex flex-col md:flex-row items-center gap-20 p-8 w-[650px] max-w-4xl transition-all duration-500">

  {/* LEFT SIDE */}
  <div className="flex flex-col items-center md:items-start md:w-1/3">
  <div className="w-60 h-60  overflow-hidden border-4 border-white shadow-[0_10px_40px_rgba(0,0,0,0.25)] ">
  <img
    src={testimonials[index].image}
    alt="testimonial"
    className="w-full h-full object-cover"
  />
</div>

    <h2 className="mt-5 text-xl font-bold ml-17 ">
      {testimonials[index].name}
    </h2>

    <p className="text-black text-xl font-bold   ml-21 ">
      {testimonials[index].role}
    </p>
  </div>

  {/* RIGHT SIDE */}
  <div className="md:w-2/3 text-center md:text-left   ">
    <p className="">
      “{testimonials[index].text}”
    </p>
  </div>

</div>

{/* RIGHT ARROW */}
<button
  onClick={nextSlide}
  className="absolute right-0 z-20 bg-white shadow-lg rounded-full w-12 h-12 flex items-center justify-center hover:scale-110 transition"
>
  ❯
</button>

</div>
      </div>

  

    </div>
  );
}