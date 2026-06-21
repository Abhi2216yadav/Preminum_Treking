import { useState } from 'react';
import { Plus, Minus, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['ALL', 'GENERAL', 'FITNESS', 'SAFETY', 'WEATHER', 'PERMITS', 'PACKING'];

  const faqs = [
    {
      category: 'GENERAL',
      question: 'What is the best time for trekking in Uttarakhand?',
      answer: 'The best trekking season in Uttarakhand depends on the specific trek. Summer (May-June) and post-monsoon (September-October) are ideal for most treks. Winter treks (December-March) like Brahmatal offer stunning snow experiences. The Valley of Flowers is best visited during July-September when the flowers are in full bloom.',
    },
    {
      category: 'GENERAL',
      question: 'Do I need prior trekking experience?',
      answer: 'Not necessarily. We offer treks for all difficulty levels. Beginner-friendly treks like Kuari Pass and Brahmatal require no prior experience. Moderate treks like Valley of Flowers and GoMukh Tapovan are suitable for those with basic fitness. Only difficult treks like Roopkund require prior high-altitude trekking experience.',
    },
    {
      category: 'GENERAL',
      question: 'How do I book a trek?',
      answer: 'You can book a trek through our website by visiting the specific trek page and clicking "Book Now." Alternatively, you can book a free consultation call where our experts will guide you through the process, help you choose the right trek, and answer any questions you may have.',
    },
    {
      category: 'FITNESS',
      question: 'How should I prepare physically for a high-altitude trek?',
      answer: 'We recommend starting your preparation at least 4-6 weeks before the trek. Focus on cardiovascular exercises like running, cycling, or swimming. Include strength training for legs and core. Practice walking uphill with a backpack. For treks above 14,000 ft, we provide a detailed fitness guide after booking.',
    },
    {
      category: 'FITNESS',
      question: 'What is the minimum age requirement?',
      answer: 'The minimum age varies by trek. Easy treks like Kuari Pass and Brahmatal accept children aged 8+. Moderate treks require a minimum age of 12+, while difficult treks like Roopkund require participants to be at least 15 years old. There is no upper age limit as long as you are physically fit.',
    },
    {
      category: 'SAFETY',
      question: 'What safety measures do you follow?',
      answer: 'Safety is our top priority. We maintain a 1:8 guide-to-trekker ratio, carry comprehensive medical kits and portable oxygen cylinders, use satellite communicators in remote areas, and have emergency evacuation plans in place. All our guides are certified in wilderness first aid and high-altitude rescue techniques.',
    },
    {
      category: 'SAFETY',
      question: 'Do you carry medical kits?',
      answer: 'Yes, we carry extensive medical kits on every trek including basic first aid supplies, medications for altitude sickness (Diamox), pain relievers, anti-nausea medication, bandages, and more. For high-altitude treks, we also carry portable oxygen cylinders and pulse oximeters to monitor oxygen levels.',
    },
    {
      category: 'WEATHER',
      question: 'What kind of weather can I expect?',
      answer: 'Mountain weather is unpredictable. Daytime temperatures at lower camps can range from 15-25°C in summer and 5-15°C in winter. At higher camps, temperatures can drop to -5°C to -15°C. We recommend layering your clothing and always carrying rain gear regardless of the season.',
    },
    {
      category: 'WEATHER',
      question: 'What happens if it rains or snows heavily?',
      answer: 'We monitor weather conditions closely. In case of heavy rain or snow, we may modify the itinerary, wait for conditions to improve, or return to the previous camp for safety. Your trek leader will make the final decision based on ground conditions and weather forecasts.',
    },
    {
      category: 'PERMITS',
      question: 'Are trekking permits included?',
      answer: 'Yes, all necessary trekking permits and forest entry fees are included in the trek cost. We handle all permit applications on your behalf. You only need to carry a valid government ID (Aadhaar card, passport, or driver\'s license) for verification at checkposts.',
    },
    {
      category: 'PACKING',
      question: 'What should I pack for a Himalayan trek?',
      answer: 'Essential items include: sturdy trekking shoes, layered clothing (base, insulation, shell), warm jacket, rain gear, backpack (40-60L), water bottles, sunglasses, sunscreen, headlamp, trekking poles, and personal toiletries. We provide a detailed packing list specific to your trek after booking.',
    },
    {
      category: 'PACKING',
      question: 'Can I rent trekking gear?',
      answer: 'Yes, we offer gear rental services for items like trekking poles, backpacks, jackets, and sleeping bags (if not included in the trek). Please inform us at least a week in advance if you need to rent gear. Quality and hygiene of rented equipment is thoroughly maintained.',
    },
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'ALL' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[30vh] min-h-[250px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/trek-fjord.jpg" alt="FAQ hero" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030303] to-transparent" />
        </div>
        <div className="relative z-10 text-center section-padding">
          <ScrollReveal>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight uppercase mb-4">
              FAQ
            </h1>
            <p className="text-lg text-[#9a9a9a]">Everything you need to know</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Search & Categories */}
      <section className="py-8 bg-[#030303] border-b border-white/10 sticky top-16 lg:top-20 z-40">
        <div className="section-padding">
          <ScrollReveal>
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#121212] border border-white/20 px-4 py-3 text-sm text-white placeholder:text-[#9a9a9a] focus:outline-none focus:border-[#d79a63] mb-4"
            />
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 text-xs uppercase tracking-widest border transition-all ${
                    activeCategory === cat
                      ? 'bg-[#d79a63] text-[#030303] border-[#d79a63]'
                      : 'bg-transparent text-[#9a9a9a] border-white/20 hover:border-white/40 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Accordion */}
      <section className="py-16 bg-[#030303]">
        <div className="section-padding max-w-4xl mx-auto">
          <div className="divide-y divide-white/10">
            {filteredFaqs.map((faq, i) => (
              <ScrollReveal key={`${faq.question}-${i}`} delay={i * 0.05}>
                <div className="py-6">
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full flex items-start justify-between gap-4 text-left group"
                  >
                    <span className={`text-sm md:text-base uppercase tracking-wider group-hover:text-[#d79a63] transition-colors ${
                      openIndex === i ? 'text-[#d79a63]' : 'text-white'
                    }`}>
                      {faq.question}
                    </span>
                    <span className="shrink-0 mt-1">
                      {openIndex === i ? (
                        <Minus className="w-4 h-4 text-[#d79a63]" />
                      ) : (
                        <Plus className="w-4 h-4 text-[#9a9a9a]" />
                      )}
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === i ? 'max-h-96 mt-4' : 'max-h-0'
                    }`}
                  >
                    <p className="text-sm text-[#9a9a9a] leading-relaxed pl-0">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {filteredFaqs.length === 0 && (
            <div className="text-center py-16">
              <p className="text-[#9a9a9a]">No FAQs found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-24 bg-[#121212] border-t border-white/10">
        <div className="section-padding text-center">
          <ScrollReveal>
            <MessageCircle className="w-8 h-8 text-[#d79a63] mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl uppercase tracking-tight mb-4">
              STILL HAVE QUESTIONS?
            </h3>
            <p className="text-[#9a9a9a] mb-8 max-w-md mx-auto">
              Our team is here to help. Reach out to us and we'll get back to you within 24 hours.
            </p>
            <Link to="/contact" className="btn-amber">
              CONTACT US
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
