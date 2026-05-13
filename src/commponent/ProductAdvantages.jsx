import React from "react";


export default function ProductAdvantages() {
  const features = [
    {
      title: "Real ingredients",
      desc: "Chicken, egg, soya, paneer- not mystery powders.",
      icon: "/realingredience.icon.png" ,
      color: "bg-[#d8f1c8]",
    },
    {
      title: "Slow cooked",
      desc: "Gently cooked in small batches to preserve nutrients.",
      icon: "/slowcooked.icon.png",
      color: "bg-[#f9e08d]",
    },
    {
      title: "Delivered fresh",
      desc: "Cooked in Bhopal, at your door the same day.",
      icon:"/deliveredfresh.icon.png" ,
      color: "bg-[#c8f3ea]",
    },
    {
      title: "Zero hassle",
      desc: "Subscribe once, feed forever. Pause anytime.",
      icon: "/zerohassel.icon.png",
      color: "bg-[#ffd7cf]",
    },
  ];  

  return (
    <section className="relative bg-[#fff]  overflow-hidden pt-16 md:pt-15">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #999 1px, transparent 1px)",
          backgroundSize: "45px 45px",
        }}
      />

      {/* Yellow Decoration Left */}
   

      {/* Yellow Decoration Right */}
    

      {/* Heading */}
      <div className="text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-oswald font-bold  text-[#6687d8]">
        Why Chomp?
        </h2>

        {/* <div className=" flex  justify-center items-center mt-2"> 
        <img src="/chompicons.png" className="  h-10 w-10" />
        </div>
         */}
   

        <p className="text-black mt-4 max-w-xl mx-auto text-lg">
        Because your dog can’t read ingredient labels. But we can!
        </p>
        <p className="text-black mt-1  mx-auto text-lg">
Our Chomp meals are carefully crafted to support better digestion, shinier coats and higher energy levels. 

</p>
      </div>

      {/* Main Content */}
      <div className="grid md:grid-cols-3 items-center gap-10 max-w-7xl mx-auto mt-8 px-18 relative z-10 ">
        {/* Left Features */}
        <div className="space-y-14">
  {features.slice(0, 2).map((item, index) => (
    <div key={index} className="flex gap-5 items-start pl-2">
      <div  >
        <img
          src={item.icon}
          alt={item.title}
          className="w-25 h-25 object-contain "
        />
      </div>

      <div>
        <h3 className="text-2xl font-bold text-black pt-3">{item.title}</h3>
        <p className="text-black mt-2">{item.desc}</p>
      </div>
    </div>
  ))}
</div>

        {/* Center Bowl Image */}
        <div className="flex justify-center ">
          <img
            src="/center.png"
            alt="food bowl"
            className="w-[420px] object-contain"
          />
        </div>

        {/* Right Features */}
        <div className="space-y-14">
          {features.slice(2, 4).map((item, index) => (
            <div key={index} className="flex gap-5 items-start">
              <div >
               <img
    src={item.icon}
     alt={item.title}
  className="w-25 h-25 object-contain"
/>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black pt-2">{item.title}</h3>
                <p className="text-black mt-2 pr-5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Buttons */}
      {/* <div className="flex justify-center gap-5 mt-10 relative z-10 ml-10">
        <button className="bg-[#d97063] px-8 py-4 rounded-full  text-white  font-bold text-sm hover:scale-105 transition cursor-pointer">
          Order Now 
        </button>

     
      </div> */}
      <div className="flex justify-center pb-6 py-18">
  <div className="w-[90%] md:w-[83%] h-[1px] bg-[#d97063]"></div>
</div>
    </section>
  );
}