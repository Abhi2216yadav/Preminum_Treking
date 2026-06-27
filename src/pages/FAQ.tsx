import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Plus, Minus, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

export default function FAQ() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { key: 'ALL', label: t('faq.categories.all') },
    { key: 'GENERAL', label: t('faq.categories.general') },
    { key: 'FITNESS', label: t('faq.categories.fitness') },
    { key: 'SAFETY', label: t('faq.categories.safety') },
    { key: 'WEATHER', label: t('faq.categories.weather') },
    { key: 'PERMITS', label: t('faq.categories.permits') },
    { key: 'PACKING', label: t('faq.categories.packing') },
  ];

  const faqs = [
    { category: 'GENERAL', question: t('faq.questions.q1'), answer: t('faq.questions.a1') },
    { category: 'GENERAL', question: t('faq.questions.q2'), answer: t('faq.questions.a2') },
    { category: 'GENERAL', question: t('faq.questions.q3'), answer: t('faq.questions.a3') },
    { category: 'FITNESS', question: t('faq.questions.q4'), answer: t('faq.questions.a4') },
    { category: 'FITNESS', question: t('faq.questions.q5'), answer: t('faq.questions.a5') },
    { category: 'SAFETY', question: t('faq.questions.q6'), answer: t('faq.questions.a6') },
    { category: 'SAFETY', question: t('faq.questions.q7'), answer: t('faq.questions.a7') },
    { category: 'WEATHER', question: t('faq.questions.q8'), answer: t('faq.questions.a8') },
    { category: 'WEATHER', question: t('faq.questions.q9'), answer: t('faq.questions.a9') },
    { category: 'PERMITS', question: t('faq.questions.q10'), answer: t('faq.questions.a10') },
    { category: 'PACKING', question: t('faq.questions.q11'), answer: t('faq.questions.a11') },
    { category: 'PACKING', question: t('faq.questions.q12'), answer: t('faq.questions.a12') },
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
              {t('faq.hero.title')}
            </h1>
            <p className="text-lg text-[#9a9a9a]">{t('faq.hero.subtitle')}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Search & Categories */}
      <section className="py-8 bg-[#030303] border-b border-white/10 sticky top-16 lg:top-20 z-40">
        <div className="section-padding">
          <ScrollReveal>
            <input
              type="text"
              placeholder={t('faq.search.placeholder')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#121212] border border-white/20 px-4 py-3 text-sm text-white placeholder:text-[#9a9a9a] focus:outline-none focus:border-[#d79a63] mb-4"
            />
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`px-4 py-2 text-xs uppercase tracking-widest border transition-all ${
                    activeCategory === cat.key
                      ? 'bg-[#d79a63] text-[#030303] border-[#d79a63]'
                      : 'bg-transparent text-[#9a9a9a] border-white/20 hover:border-white/40 hover:text-white'
                  }`}
                >
                  {cat.label}
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
              <p className="text-[#9a9a9a]">{t('faq.noFaqs')}</p>
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
              {t('faq.cta.title')}
            </h3>
            <p className="text-[#9a9a9a] mb-8 max-w-md mx-auto">
              {t('faq.cta.subtitle')}
            </p>
            <Link to="/contact" className="btn-amber">
              {t('faq.cta.button')}
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
