import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Check, Calendar, Users, MessageSquare, ArrowRight, Clock } from 'lucide-react';
import { treks } from '../data/treks';
import ScrollReveal from '../components/ScrollReveal';

export default function BookACall() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    trek: '',
    date: '',
    groupSize: 1,
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const benefits = [
    {
      icon: Users,
      title: t('bookACall.benefits.b1Title'),
      desc: t('bookACall.benefits.b1Desc'),
    },
    {
      icon: Calendar,
      title: t('bookACall.benefits.b2Title'),
      desc: t('bookACall.benefits.b2Desc'),
    },
    {
      icon: MessageSquare,
      title: t('bookACall.benefits.b3Title'),
      desc: t('bookACall.benefits.b3Desc'),
    },
    {
      icon: Check,
      title: t('bookACall.benefits.b4Title'),
      desc: t('bookACall.benefits.b4Desc'),
    },
  ];

  const steps = [
    { num: '01', title: t('bookACall.process.step1'), desc: t('bookACall.process.step1Desc') },
    { num: '02', title: t('bookACall.process.step2'), desc: t('bookACall.process.step2Desc') },
    { num: '03', title: t('bookACall.process.step3'), desc: t('bookACall.process.step3Desc') },
  ];

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/gallery-camping.jpg" alt="Book a call hero" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030303] to-transparent" />
        </div>
        <div className="relative z-10 text-center section-padding">
          <ScrollReveal>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight uppercase mb-4">
              {t('bookACall.hero.title')}
            </h1>
            <p className="text-lg text-[#9a9a9a]">{t('bookACall.hero.subtitle')}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Form & Benefits */}
      <section className="py-24 bg-[#030303]">
        <div className="section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <ScrollReveal>
                <div className="bg-[#121212] border border-white/10 border-l-4 border-l-[#d79a63]">
                  {submitted ? (
                    <div className="p-12 text-center">
                      <div className="w-20 h-20 bg-[#d79a63]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Check className="w-8 h-8 text-[#d79a63]" />
                      </div>
                      <h3 className="text-2xl uppercase tracking-wider mb-4">
                        {t('bookACall.form.thankYou')}
                      </h3>
                      <p className="text-[#9a9a9a] mb-8">
                        {t('bookACall.form.received')}
                      </p>
                      <Link to="/treks" className="btn-outline text-xs">
                        {t('bookACall.form.browse')}
                      </Link>
                    </div>
                  ) : (
                    <div className="p-8">
                      <div className="text-micro mb-4">{t('bookACall.form.superTitle')}</div>
                      <h2 className="text-2xl uppercase tracking-tight mb-8">
                        {t('bookACall.form.title')}
                      </h2>
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                          <label className="text-micro mb-2 block">{t('bookACall.form.name')}</label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full bg-[#030303] border border-white/20 px-4 py-3 text-sm text-white placeholder:text-[#9a9a9a] focus:outline-none focus:border-[#d79a63]"
                            placeholder={t('bookACall.form.namePlaceholder')}
                          />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label className="text-micro mb-2 block">{t('bookACall.form.phone')}</label>
                            <input
                              type="tel"
                              required
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              className="w-full bg-[#030303] border border-white/20 px-4 py-3 text-sm text-white placeholder:text-[#9a9a9a] focus:outline-none focus:border-[#d79a63]"
                              placeholder={t('bookACall.form.phonePlaceholder')}
                            />
                          </div>
                          <div>
                            <label className="text-micro mb-2 block">{t('bookACall.form.email')}</label>
                            <input
                              type="email"
                              required
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              className="w-full bg-[#030303] border border-white/20 px-4 py-3 text-sm text-white placeholder:text-[#9a9a9a] focus:outline-none focus:border-[#d79a63]"
                              placeholder={t('bookACall.form.emailPlaceholder')}
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label className="text-micro mb-2 block">{t('bookACall.form.trek')}</label>
                            <select
                              value={formData.trek}
                              onChange={(e) => setFormData({ ...formData, trek: e.target.value })}
                              className="w-full bg-[#030303] border border-white/20 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#d79a63]"
                            >
                              <option value="">{t('bookACall.form.selectTrek')}</option>
                              {treks.map((t) => (
                                <option key={t.id} value={t.slug}>{t.shortName}</option>
                              ))}
                              <option value="custom">{t('bookACall.form.customTrek')}</option>
                            </select>
                          </div>
                          <div>
                            <label className="text-micro mb-2 block">{t('bookACall.form.date')}</label>
                            <input
                              type="date"
                              required
                              value={formData.date}
                              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                              className="w-full bg-[#030303] border border-white/20 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#d79a63]"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="text-micro mb-2 block">{t('bookACall.form.groupSize')}</label>
                          <input
                            type="number"
                            min={1}
                            max={30}
                            value={formData.groupSize}
                            onChange={(e) => setFormData({ ...formData, groupSize: parseInt(e.target.value) || 1 })}
                            className="w-full bg-[#030303] border border-white/20 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#d79a63]"
                          />
                        </div>
                        <div>
                          <label className="text-micro mb-2 block">{t('bookACall.form.message')}</label>
                          <textarea
                            rows={4}
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            className="w-full bg-[#030303] border border-white/20 px-4 py-3 text-sm text-white placeholder:text-[#9a9a9a] focus:outline-none focus:border-[#d79a63] resize-none"
                            placeholder={t('bookACall.form.messagePlaceholder')}
                          />
                        </div>
                        <button type="submit" className="btn-amber w-full">
                          {t('bookACall.form.submit')}
                        </button>
                      </form>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            </div>

            {/* Benefits */}
            <div>
              <ScrollReveal delay={0.1}>
                <div className="text-micro mb-4">{t('bookACall.benefits.superTitle')}</div>
                <h2 className="text-3xl md:text-4xl font-normal tracking-tight mb-8">
                  {t('bookACall.benefits.title')}
                </h2>
              </ScrollReveal>

              <div className="space-y-6 mb-10">
                {benefits.map((b, i) => (
                  <ScrollReveal key={b.title} delay={0.1 + i * 0.1}>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-[#121212] border border-white/10 flex items-center justify-center shrink-0">
                        <b.icon className="w-5 h-5 text-[#d79a63]" />
                      </div>
                      <div>
                        <h3 className="text-sm uppercase tracking-wider mb-2">{b.title}</h3>
                        <p className="text-sm text-[#9a9a9a] leading-relaxed">{b.desc}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              <ScrollReveal delay={0.5}>
                <div className="p-6 bg-[#121212] border border-white/10">
                  <div className="flex items-center gap-2 text-micro mb-2">
                    <Clock className="w-4 h-4 text-[#d79a63]" />
                    <span>{t('bookACall.obligation.title')}</span>
                  </div>
                  <p className="text-sm text-[#9a9a9a]">
                    {t('bookACall.obligation.desc')}
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-[#030303] border-t border-white/10">
        <div className="section-padding">
          <ScrollReveal>
            <div className="text-micro mb-4">{t('bookACall.process.superTitle')}</div>
            <h2 className="text-3xl md:text-4xl font-normal tracking-tight mb-16">
              {t('bookACall.process.title')}
            </h2>
          </ScrollReveal>

          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-10 left-[16.67%] right-[16.67%] h-[1px] bg-[#d79a63]/30" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step, i) => (
                <ScrollReveal key={step.num} delay={i * 0.15}>
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full bg-[#121212] border border-[#d79a63]/30 flex items-center justify-center mx-auto mb-6 relative z-10">
                      <span className="font-mono text-xl text-[#d79a63]">{step.num}</span>
                    </div>
                    <h3 className="text-lg uppercase tracking-wider mb-2">{step.title}</h3>
                    <p className="text-sm text-[#9a9a9a]">{step.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-[#121212] border-t border-white/10">
        <div className="section-padding text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-normal tracking-tight mb-6">
              {t('bookACall.cta.title')}
            </h2>
            <p className="text-[#9a9a9a] max-w-xl mx-auto mb-10">
              {t('bookACall.cta.subtitle')}
            </p>
            <Link to="/treks" className="btn-amber inline-flex items-center gap-2">
              {t('bookACall.cta.button')} <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
