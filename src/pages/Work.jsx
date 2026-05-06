import React from 'react'
import { Package, Calendar, Truck } from "lucide-react";
import Navbar from '../commponent/Navbar';
import FAQPage from './FAQPage';
const Work = () => {
  return (
<section className="bg-white py-20 px-4 md:px-12 lg:px-[80px]">
  <Navbar/>
{/* HEADING */}
<div className="text-center mb-16 mt-20">
  <h2 className="text-3xl md:text-5xl font-oswald font-bold text-black">
    Getting started is super easy!
  </h2>

  <div className="w-14 h-1 bg-[#d97063] mx-auto mt-4 rounded-full"></div>
</div>

{/* TOP SECTION */}
<div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">

  {/* Trial Packs */}
  <div className="bg-[#f9f9f9] rounded-2xl p-8">
    <h3 className="text-xl font-bold text-black mb-3">
      Trial Packs
    </h3>

    <p className="font-semibold text-gray-700 mb-2">
      Your dog's verdict matters.
    </p>

    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
      Explore our range of fresh, chef-crafted meals — because the only opinion that counts is theirs.
    </p>

    <p className="text-gray-500 text-sm mt-3">
      Whether you want a single meal or a longer taste test, we can make it happen!
    </p>
  </div>

  {/* Subscription */}
  <div className="bg-[#f9f9f9] rounded-2xl p-8">
    <h3 className="text-xl font-bold text-black mb-3">
      Subscription
    </h3>

    <p className="font-semibold text-gray-700 mb-2">
      Good food, on repeat.
    </p>

    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
      Choose a monthly or fortnightly plan and enjoy a rotating variety of wholesome meals delivered straight to your door.
    </p>

    <p className="text-gray-500 text-sm mt-3">
      Set it, forget it, and let your dog look forward to every delivery.
    </p>
  </div>

</div>

{/* SECOND SECTION */}
<div className="mt-20 text-center max-w-3xl mx-auto">

  <h3 className="text-2xl md:text-3xl font-oswald font-bold text-black mb-4">
    How do our subscriptions work?
  </h3>

  <p className="text-gray-600 mb-12">
    Three simple steps to bring fresh food at your door.
  </p>

</div>

{/* STEPS */}
<div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

  {/* Step 1 */}
  <div className="text-center">
    <div className="flex justify-center mb-4">
      <Package size={40} className="text-[#d97063]" />
    </div>

    <h4 className="font-semibold text-lg text-black mb-2">
      1. Pick your plan
    </h4>

    <p className="text-gray-600 text-sm leading-relaxed">
      Choose between a purely vegetarian menu or a mixed selection of all our meals — whatever suits your dog best.
    </p>
  </div>

  {/* Step 2 */}
  <div className="text-center">
    <div className="flex justify-center mb-4">
      <Calendar size={40} className="text-[#d97063]" />
    </div>

    <h4 className="font-semibold text-lg text-black mb-2">
      2. Choose your rhythm
    </h4>

    <p className="text-gray-600 text-sm leading-relaxed">
      Monthly or fortnightly — both include free delivery. Pause anytime and adjust portions based on your dog’s needs.
    </p>
  </div>

  {/* Step 3 */}
  <div className="text-center">
    <div className="flex justify-center mb-4">
      <Truck size={40} className="text-[#d97063]" />
    </div>

    <h4 className="font-semibold text-lg text-black mb-2">
      3. We handle the rest
    </h4>

    <p className="text-gray-600 text-sm leading-relaxed">
      Fresh meals cooked daily and delivered between 3pm–7pm. Just open and serve!
    </p>
  </div>

</div>


<FAQPage/>
</section>
  )
}

export default Work