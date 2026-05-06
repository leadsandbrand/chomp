import { useState } from "react";

const testimonials = [
  {
    name: "Jack Morrison",
    role: "Dog Owner - Ontario",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Thank you so much! My cat has severe food allergies and pretty much can only eat rabbit, apples, and chicken.",
  },
  {
    name: "Jennifer Doe",
    role: "Dog Owner - Florida",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Thanks for the great product, our dog Chica loves it and I feel good feeding it to her.",
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
     

<div className="w-full h-screen flex flex-col items-center justify-center bg-white  mt-9">

{/* TITLE */}
<h1 className="text-5xl font-bold text-[#d97063] leading-tight  font-oswald ">Don’t just take our word for it. </h1>
<p  className="mt-8 md:mt-6 text-sm md:text-lg font-reyes leading-relaxed">
  Testimonials & Reviews – What our customers are saying.....
</p>

{/* CARDS */}
<div className="relative w-full max-w-5xl flex items-center justify-center">

  {/* LEFT */}
  <div className="absolute left-0 w-1/3 opacity-30 scale-90 text-center px-4">
    <img
      src={testimonials[prev].image}
      className="w-12 h-12 rounded-full mx-auto mb-3 object-cover"
    />
    <p className="text-gray-400 italic">{testimonials[prev].text}</p>
    <p className="mt-2 font-semibold">{testimonials[prev].name}</p>
  </div>

  {/* CENTER */}
  <div className=" font-bold px-10 py-12 text-center max-w-md z-10 transition-all duration-500">

    {/* IMAGE */}
    <img
      src={testimonials[index].image}
      className="w-16 h-16 rounded-full mx-auto mb-4 object-cover border-4 border-white shadow"
    />

    {/* QUOTE */}
   

    <p className="text-gray-800 font-medium leading-relaxed">
      {testimonials[index].text}
    </p>

    <p className="mt-6 font-bold">{testimonials[index].name}</p>
    <p className="text-sm text-gray-500">{testimonials[index].role}</p>

  </div>

  {/* RIGHT */}
  <div className="absolute right-0 w-1/3 opacity-30 scale-90 text-center px-4">
    <img
      src={testimonials[next].image}
      className="w-12 h-12 rounded-full mx-auto mb-3 object-cover"
    />
    <p className="text-gray-400 italic">{testimonials[next].text}</p>
    <p className="mt-2 font-semibold">{testimonials[next].name}</p>
  </div>

</div>

{/* DOTS */}
<div className="flex gap-3 mt-8">
  {testimonials.map((_, i) => (
    <button
      key={i}
      onClick={() => setIndex(i)}
      className={`w-3 h-3 rounded-full ${
        i === index ? "bg-black scale-125" : "bg-gray-400"
      } transition`}
    />
  ))}
</div>
</div>
 
  
  );
}