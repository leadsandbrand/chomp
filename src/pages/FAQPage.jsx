import { useState } from "react";

const faqs = [
  {
    q: "Is Chomp suitable for all dog breeds?",
    a: "Yes! All four of our current recipes are formulated for adult dogs across breeds. If you have a puppy or a senior dog with specific needs, message us on WhatsApp and we'll advise you personally."
  },
  {
    q: "What's in a 300g pack?",
    a: "One freshly made meal — enough for a medium-sized dog's one meal, or two meals for a smaller breed.\n\nAs per your dog’s weight:\nUp to 10kg: 1/2 pack/day\n10-20 kg: 1 pack/day\n20-30kg: 2 packs/day\n30kg+: 3 packs/day"
  },
  {
    q: "Where do you deliver?",
    a: "We currently deliver within a 20km radius of Trilanga, Bhopal. That covers most of the city — including Arera Colony, Kolar Road, MP Nagar, Hoshangabad Road, and more. Not sure if we reach you? Just ask!"
  },
  {
    q: "How do I store the packs?",
    a: "Keep them refrigerated — our meals are made fresh with natural ingredients and no artificial preservatives. If unopened, they'll stay fresh for up to 3 days in the fridge."
  },
  {
    q: "How do I serve the meals?",
    a: "No prep needed — just open and serve! Best enjoyed cold or at room temperature. Do not microwave. In warmer months, add some water to keep your dog hydrated."
  },
  {
    q: "How do I transition my dog to Chomp?",
    a: "We recommend a 7-day transition:\nDay 1: 75% old diet, 25% Chomp\nDay 2-4: 50% old diet, 50% Chomp\nDay 5-6: 25% old diet, 75% Chomp\nDay 7 onwards: Chomp all the way!\n\nEvery dog adapts differently—go at their pace."
  },
  {
    q: "Can I cancel my subscription?",
    a: "Of course. No drama, no hoops. Just message us on WhatsApp and we'll sort it. Note: we don’t offer refunds."
  },
  {
    q: "Can I switch plans?",
    a: "Yes! Just let us know in advance via WhatsApp and we'll update your deliveries."
  }
];

export default function FAQPage(){
  const [active, setActive] = useState(null);

  return (
    <section className="bg-[#f9f9f9] py-20 px-4 md:px-12 lg:px-[80px]">

      {/* Heading */}
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-oswald font-bold text-black">
          Questions? We've got answers.
        </h2>

        <p className="text-gray-600 mt-4">
          And if not,{" "}
          <a
            href="https://wa.me/919109117355"
            target="_blank"
            className="text-[#d97063] font-semibold underline"
          >
            WhatsApp us
          </a>
        </p>
      </div>

      {/* Accordion */}
      <div className="max-w-3xl mx-auto space-y-4">

        {faqs.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-4 shadow-sm cursor-pointer"
            onClick={() => setActive(active === index ? null : index)}
          >

            {/* Question */}
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-black">
                {item.q}
              </h3>

              {/* Paw Icon */}
              <span className={`text-xl transition ${active === index ? "rotate-45" : ""}`}>
                🐾
              </span>
            </div>

            {/* Answer */}
            {active === index && (
              <p className="mt-4 text-gray-600 text-sm whitespace-pre-line">
                {item.a}
              </p>
            )}

          </div>
        ))}

      </div>

    </section>
  );
}