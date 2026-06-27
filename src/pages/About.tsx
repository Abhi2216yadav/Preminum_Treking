import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Mountain, Shield, Camera, Users, Utensils, Tent,
  Truck, Heart, Award, Clock, TrendingUp
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

export default function About() {
  const { t } = useTranslation();

  const stats = [
    { value: '5000+', label: t('about.story.stat1'), icon: Users },
    { value: '10+', label: t('about.story.stat2'), icon: Clock },
    { value: '12+', label: t('about.story.stat3'), icon: Mountain },
    { value: '98%', label: t('about.story.stat4'), icon: TrendingUp },
  ];

  const features = [
    { icon: Mountain, title: t('about.whyChoose.feature1Title'), desc: t('about.whyChoose.feature1Desc') },
    { icon: Shield, title: t('about.whyChoose.feature2Title'), desc: t('about.whyChoose.feature2Desc') },
    { icon: Camera, title: t('about.whyChoose.feature3Title'), desc: t('about.whyChoose.feature3Desc') },
    { icon: Users, title: t('about.whyChoose.feature4Title'), desc: t('about.whyChoose.feature4Desc') },
    { icon: Utensils, title: t('about.whyChoose.feature5Title'), desc: t('about.whyChoose.feature5Desc') },
    { icon: Tent, title: t('about.whyChoose.feature6Title'), desc: t('about.whyChoose.feature6Desc') },
    { icon: Truck, title: t('about.whyChoose.feature7Title'), desc: t('about.whyChoose.feature7Desc') },
    { icon: Heart, title: t('about.whyChoose.feature8Title'), desc: t('about.whyChoose.feature8Desc') },
  ];

  const team = [
    { name: 'Rajesh Bhandari', role: t('about.team.member1Role'), image: '/team-guide.jpg', bio: t('about.team.member1Bio') },
    { name: 'Priya Thapa', role: t('about.team.member2Role'), image: '/team-coordinator.jpg', bio: t('about.team.member2Bio') },
    { name: 'Aman Singh', role: t('about.team.member3Role'), image: '/team-safety.jpg', bio: t('about.team.member3Bio') },
  ];

  const achievements = [
    { icon: Award, title: t('about.achievements.achievement1Title'), desc: t('about.achievements.achievement1Desc') },
    { icon: Shield, title: t('about.achievements.achievement2Title'), desc: t('about.achievements.achievement2Desc') },
    { icon: Users, title: t('about.achievements.achievement3Title'), desc: t('about.achievements.achievement3Desc') },
    { icon: TrendingUp, title: t('about.achievements.achievement4Title'), desc: t('about.achievements.achievement4Desc') },
  ];

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/about-hero.jpg" alt="Himalayan landscape" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030303] to-transparent" />
        </div>
        <div className="relative z-10 text-center section-padding">
          <ScrollReveal>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight uppercase mb-4">
              {t('about.hero.title')}
            </h1>
            <p className="text-lg text-[#9a9a9a] max-w-xl mx-auto">
              {t('about.hero.subtitle')}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-[#030303]">
        <div className="section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ScrollReveal>
              <div>
                <div className="text-micro mb-4">{t('about.story.superTitle')}</div>
                <h2 className="text-3xl md:text-4xl font-normal tracking-tight mb-8">
                  {t('about.story.title')}
                </h2>
                <div className="space-y-4 text-[#9a9a9a] leading-relaxed">
                  <p>{t('about.story.p1')}</p>
                  <p>{t('about.story.p2')}</p>
                  <p>{t('about.story.p3')}</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="grid grid-cols-2 gap-[1px] bg-white/10">
                {stats.map((stat) => (
                  <div key={stat.label} className="bg-[#121212] p-6 md:p-8">
                    <stat.icon className="w-6 h-6 text-[#d79a63] mb-4" />
                    <div className="text-3xl md:text-4xl font-light text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-micro">{stat.label}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-[#030303] border-t border-white/10">
        <div className="section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-white/10">
            <ScrollReveal>
              <div className="bg-[#121212] p-8 md:p-12 h-full">
                <div className="text-micro mb-4 text-[#d79a63]">{t('about.mission.superTitle')}</div>
                <h3 className="text-2xl uppercase tracking-tight mb-4">
                  {t('about.mission.title')}
                </h3>
                <p className="text-[#9a9a9a] leading-relaxed">
                  {t('about.mission.p1')}
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="bg-[#121212] p-8 md:p-12 h-full">
.
                <div className="text-micro mb-4 text-[#d79a63]">{t('about.vision.superTitle')}</div>
                <h3 className="text-2xl uppercase tracking-tight mb-4">
                  {t('about.vision.title')}
                </h3>
                <p className="text-[#9a9a9a] leading-relaxed">
                  {t('about.vision.p1')}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-[#030303] border-t border-white/10">
        <div className="section-padding">
          <ScrollReveal>
            <div className="text-micro mb-4">{t('about.whyChoose.superTitle')}</div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight mb-16">
              {t('about.whyChoose.title')}
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/10">
            {features.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 0.05}>
                <div className="bg-[#121212] p-8 h-full group hover:bg-[#0a0a0a] transition-colors">
                  <f.icon className="w-8 h-8 text-[#d79a63] mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-sm uppercase tracking-wider mb-3">{f.title}</h3>
                  <p className="text-sm text-[#9a9a9a] leading-relaxed">{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-[#030303] border-t border-white/10">
        <div className="section-padding">
          <ScrollReveal>
            <div className="text-micro mb-4">{t('about.team.superTitle')}</div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight mb-16">
              {t('about.team.title')}
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 0.15}>
                <div className="group">
                  <div className="overflow-hidden mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <h3 className="text-lg uppercase tracking-wider mb-1">{member.name}</h3>
                  <div className="text-micro mb-3">{member.role}</div>
                  <p className="text-sm text-[#9a9a9a]">{member.bio}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-24 bg-[#030303] border-t border-white/10">
        <div className="section-padding">
          <ScrollReveal>
            <div className="text-micro mb-4">{t('about.achievements.superTitle')}</div>
            <h2 className="text-4xl md:text-5xl font-normal tracking-tight mb-16">
              {t('about.achievements.title')}
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/10">
            {achievements.map((a, i) => (
              <ScrollReveal key={a.title} delay={i * 0.1}>
                <div className="bg-[#121212] p-8 text-center">
                  <a.icon className="w-10 h-10 text-[#d79a63] mx-auto mb-4" />
                  <h3 className="text-sm uppercase tracking-wider mb-2">{a.title}</h3>
                  <p className="text-sm text-[#9a9a9a]">{a.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-[#121212] border-t border-white/10">
        <div className="section-padding text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-normal tracking-tight mb-6">
              {t('about.cta.title')}
            </h2>
            <p className="text-[#9a9a9a] max-w-xl mx-auto mb-10">
              {t('about.cta.subtitle')}
            </p>
            <Link to="/book-a-call" className="btn-amber">
              {t('about.cta.bookACall')}
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
