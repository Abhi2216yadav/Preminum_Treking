import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Youtube, MessageCircle, Send } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactInfo = [
    { icon: Phone, label: t('contact.info.call'), value: '+91 79069 19033' },
    { icon: Phone, label: t('contact.info.call'), value: '+91 87551 30029' },
    { icon: Mail, label: t('contact.info.email'), value: 'mohansinghmohan619@gmail.com' },
    { icon: MapPin, label: t('contact.info.visit'), value: 'Dehradun, Uttarakhand, India' },
    { icon: Clock, label: t('contact.info.hours'), value: t('contact.info.hoursValue') },
  ];

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[30vh] min-h-[250px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/gallery-lake.jpg" alt="Contact hero" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030303] to-transparent" />
        </div>
        <div className="relative z-10 text-center section-padding">
          <ScrollReveal>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight uppercase mb-4">
              {t('contact.hero.title')}
            </h1>
            <p className="text-lg text-[#9a9a9a]">{t('contact.hero.subtitle')}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-24 bg-[#030303]">
        <div className="section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <div className="text-micro mb-4">{t('contact.info.superTitle')}</div>
                <h2 className="text-3xl md:text-4xl font-normal tracking-tight mb-8">
                  {t('contact.info.title')}
                </h2>

                <div className="space-y-6 mb-10">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-[#121212] border border-white/10 flex items-center justify-center shrink-0">
                        <item.icon className="w-4 h-4 text-[#d79a63]" />
                      </div>
                      <div>
                        <div className="text-micro mb-1">{item.label}</div>
                        <div className="text-sm text-white">{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div>
                  <div className="text-micro mb-4">{t('contact.social.superTitle')}</div>
                  <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 bg-[#121212] border border-white/10 flex items-center justify-center text-[#d79a63] hover:bg-[#d79a63] hover:text-[#030303] transition-colors">
                      <Instagram className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-[#121212] border border-white/10 flex items-center justify-center text-[#d79a63] hover:bg-[#d79a63] hover:text-[#030303] transition-colors">
                      <Facebook className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-[#121212] border border-white/10 flex items-center justify-center text-[#d79a63] hover:bg-[#d79a63] hover:text-[#030303] transition-colors">
                      <Youtube className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-[#121212] border border-white/10 flex items-center justify-center text-[#d79a63] hover:bg-[#d79a63] hover:text-[#030303] transition-colors">
                      <MessageCircle className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <div className="mt-10 p-6 bg-[#121212] border border-white/10">
                  <div className="text-micro mb-2">{t('contact.whatsapp.superTitle')}</div>
                  <p className="text-sm text-[#9a9a9a] mb-4">
                    {t('contact.whatsapp.text')}
                  </p>
                  <a
                    href="https://wa.me/917906919033"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline text-xs w-full text-center flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" /> {t('contact.whatsapp.button')}
                  </a>
                </div>
              </ScrollReveal>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <ScrollReveal delay={0.2}>
                <div className="bg-[#121212] border border-white/10 p-8">
                  {submitted ? (
                    <div className="text-center py-16">
                      <div className="w-16 h-16 bg-[#d79a63]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Send className="w-6 h-6 text-[#d79a63]" />
                      </div>
                      <h3 className="text-xl uppercase tracking-wider mb-2">{t('contact.form.sent.title')}</h3>
                      <p className="text-[#9a9a9a]">{t('contact.form.sent.subtitle')}</p>
                    </div>
                  ) : (
                    <>
                      <div className="text-micro mb-4">{t('contact.form.superTitle')}</div>
                      <h3 className="text-xl uppercase tracking-wider mb-8">
                        {t('contact.form.title')}
                      </h3>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div>
                            <label className="text-micro mb-2 block">{t('contact.form.name')}</label>
                            <input
                              type="text"
                              required
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              className="w-full bg-[#030303] border border-white/20 px-4 py-3 text-sm text-white placeholder:text-[#9a9a9a] focus:outline-none focus:border-[#d79a63]"
                              placeholder={t('contact.form.namePlaceholder')}
                            />
                          </div>
                          <div>
                            <label className="text-micro mb-2 block">{t('contact.form.email')}</label>
                            <input
                              type="email"
                              required
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              className="w-full bg-[#030303] border border-white/20 px-4 py-3 text-sm text-white placeholder:text-[#9a9a9a] focus:outline-none focus:border-[#d79a63]"
                              placeholder={t('contact.form.emailPlaceholder')}
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div>
                            <label className="text-micro mb-2 block">{t('contact.form.phone')}</label>
                            <input
                              type="tel"
                              required
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              className="w-full bg-[#030303] border border-white/20 px-4 py-3 text-sm text-white placeholder:text-[#9a9a9a] focus:outline-none focus:border-[#d79a63]"
                              placeholder={t('contact.form.phonePlaceholder')}
                            />
                          </div>
                          <div>
                            <label className="text-micro mb-2 block">{t('contact.form.subject')}</label>
                            <select
                              value={formData.subject}
                              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                              className="w-full bg-[#030303] border border-white/20 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#d79a63]"
                            >
                              <option>{t('contact.form.subjects.general')}</option>
                              <option>{t('contact.form.subjects.booking')}</option>
                              <option>{t('contact.form.subjects.custom')}</option>
                              <option>{t('contact.form.subjects.partnership')}</option>
                            </select>
                          </div>
                        </div>
                        <div>
                          <label className="text-micro mb-2 block">{t('contact.form.message')}</label>
                          <textarea
                            required
                            rows={5}
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            className="w-full bg-[#030303] border border-white/20 px-4 py-3 text-sm text-white placeholder:text-[#9a9a9a] focus:outline-none focus:border-[#d79a63] resize-none"
                            placeholder={t('contact.form.messagePlaceholder')}
                          />
                        </div>
                        <button type="submit" className="btn-amber w-full">
                          {t('contact.form.submit')}
                        </button>
                      </form>
                    </>
                  )}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-16 bg-[#030303] border-t border-white/10">
        <div className="section-padding">
          <ScrollReveal>
            <div className="relative h-[400px] bg-[#121212] border border-white/10 overflow-hidden">
              <img
                src="/topographic-pattern.jpg"
                alt="Topographic pattern"
                className="w-full h-full object-cover opacity-30"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-[#d79a63] mx-auto mb-4" />
                  <h3 className="text-lg uppercase tracking-wider mb-2">{t('contact.map.title')}</h3>
                  <p className="text-sm text-[#9a9a9a]">{t('contact.map.address')}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
