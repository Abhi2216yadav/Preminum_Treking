import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Mountain, Users, Shield, Camera, Utensils, Tent,
  Truck, Heart, Star, ArrowRight, MapPin, TrendingUp,
  ChevronRight
} from 'lucide-react';
import { treks } from '../data/treks';
import ScrollReveal from '../components/ScrollReveal';

gsap.registerPlugin(ScrollTrigger);

/* ─── Hero Section ─── */
function HeroSection() {
  const { t } = useTranslation();
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 });
    if (titleRef.current) {
      tl.fromTo(
        titleRef.current,
        { y: 100, clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' },
        { y: 0, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', duration: 1.2, ease: 'power4.out' }
      );
    }
    if (subtitleRef.current) {
      tl.fromTo(
        subtitleRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
        '-=0.5'
      );
    }
    return () => { tl.kill(); };
  }, []);

  return (
    <section ref={heroRef} className="relative w-full min-h-screen overflow-hidden bg-[#030303]">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-mountain.jpg"
          alt="Himalayan Mountains"
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      {/* Architectural Grid Overlay */}
      <div className="absolute inset-0 z-10 grid grid-cols-1 lg:grid-cols-2 pointer-events-none">
        {/* Left Panel - Dark Void */}
        <div className="bg-[#030303] hidden lg:flex flex-col justify-end p-6 md:p-12 lg:p-24 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#030303] via-[#030303] to-transparent" />
        </div>
        {/* Right Panel - Transparent */}
        <div className="border-l border-white/10 hidden lg:block" />
      </div>

      {/* Content */}
      <div className="relative z-20 min-h-screen flex flex-col justify-end section-padding pb-32">
        <div className="max-w-4xl">
          <div className="text-micro mb-4">{t('home.hero.superTitle')}</div>
          <h1
            ref={titleRef}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[100px] xl:text-[120px] font-normal leading-[0.9] uppercase tracking-tight mb-6"
            dangerouslySetInnerHTML={{ __html: t('home.hero.title') }}
          />
          <p
            ref={subtitleRef}
            className="text-lg md:text-xl text-[#9a9a9a] max-w-xl mb-8 opacity-0"
          >
            {t('home.hero.subtitle')}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/treks" className="btn-amber">
              {t('home.hero.exploreTreks')}
            </Link>
            <Link to="/book-a-call" className="btn-outline">
              {t('home.hero.bookACall')}
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Data Bar */}
      <div className="absolute bottom-0 left-0 w-full h-12 bg-[#030303] border-t border-white/10 z-30 flex items-center justify-between section-padding">
        <div className="flex items-center gap-8 text-micro">
          <span>{t('home.hero.elev')} <span className="text-white font-mono">5000M+</span></span>
          <span className="hidden sm:inline">{t('home.hero.region')} <span className="text-white font-mono">GARHWAL</span></span>
          <span className="hidden md:inline">{t('home.hero.trending')} <span className="text-[#d79a63] font-mono">ACTIVE</span></span>
        </div>
        <div className="text-micro hidden lg:block">
          <TrendingUp className="w-4 h-4 inline mr-2 text-[#d79a63]" />
          <span className="font-mono">{t('home.hero.happyTrekkers')}</span>
        </div>
      </div>
    </section>
  );
}

/* ─── Statistics Section ─── */
function StatsSection() {
  const { t } = useTranslation();
  const stats = [
    { value: '5000+', label: t('home.stats.happyTrekkers') },
    { value: '12+', label: t('home.stats.premiumTreks') },
    { value: '98%', label: t('home.stats.customerSatisfaction') },
    { value: '10+', label: t('home.stats.yearsExperience') },
  ];

  const sectionRef = useRef<HTMLDivElement>(null);
  const countRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      countRefs.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(el,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 0.8, delay: i * 0.15,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 85%' }
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-[#030303] border-t border-white/10">
      <div className="section-padding">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-white/10">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              ref={el => { countRefs.current[i] = el; }}
              className="text-center lg:px-8"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-light text-[#d79a63] mb-2">
                {stat.value}
              </div>
              <div className="text-micro">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Why Choose Us Section ─── */
function WhyChooseSection() {
  const { t } = useTranslation();
  const features = [
    { icon: Mountain, title: t('home.whyChoose.expertGuides'), desc: t('home.whyChoose.expertGuidesDesc') },
    { icon: Shield, title: t('home.whyChoose.safeAdventures'), desc: t('home.whyChoose.safeAdventuresDesc') },
    { icon: Heart, title: t('home.whyChoose.medicalSupport'), desc: t('home.whyChoose.medicalSupportDesc') },
    { icon: Tent, title: t('home.whyChoose.premiumCamping'), desc: t('home.whyChoose.premiumCampingDesc') },
    { icon: Utensils, title: t('home.whyChoose.mealsIncluded'), desc: t('home.whyChoose.mealsIncludedDesc') },
    { icon: Camera, title: t('home.whyChoose.photography'), desc: t('home.whyChoose.photographyDesc') },
    { icon: Users, title: t('home.whyChoose.smallGroups'), desc: t('home.whyChoose.smallGroupsDesc') },
    { icon: Truck, title: t('home.whyChoose.transport'), desc: t('home.whyChoose.transportDesc') },
  ];

  return (
    <section className="py-24 bg-[#030303]">
      <div className="section-padding">
        <ScrollReveal>
          <div className="text-micro mb-4">{t('home.whyChoose.superTitle')}</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight mb-16">
            {t('home.whyChoose.title')}
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/10">
          {features.map((feature, i) => (
            <ScrollReveal key={feature.title} delay={i * 0.05}>
              <div className="bg-[#030303] p-8 h-full group hover:bg-[#121212] transition-colors duration-300">
                <feature.icon className="w-8 h-8 text-[#d79a63] mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-sm uppercase tracking-wider mb-2">{feature.title}</h3>
                <p className="text-sm text-[#9a9a9a] leading-relaxed">{feature.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Featured Trekks Section ─── */
function TreksSection() {
  const { t } = useTranslation();
  return (
    <section className="py-24 bg-[#030303] border-t border-white/10">
      <div className="section-padding">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-4">
            <div>
              <div className="text-micro mb-4">{t('home.treks.superTitle')}</div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight">
                {t('home.treks.title')}
              </h2>
            </div>
            <Link to="/treks" className="btn-outline text-xs flex items-center gap-2">
              {t('home.treks.viewAll')} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-white/10">
          {treks.map((trek, i) => (
            <ScrollReveal key={trek.id} delay={i * 0.1}>
              <Link to={`/treks/${trek.slug}`} className="block group">
                <div className="bg-[#121212] h-full">
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={trek.image}
                      alt={trek.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-[#030303]/80 px-3 py-1 text-micro">
                      {trek.difficulty.toUpperCase()}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg uppercase tracking-wider mb-3 group-hover:text-[#d79a63] transition-colors">
                      {trek.shortName}
                    </h3>
                    <div className="flex items-center gap-4 text-micro mb-4">
                      <span>{trek.altitude}</span>
                      <span>|</span>
                      <span>{trek.duration}</span>
                      <span>|</span>
                      <span>{trek.bestSeason}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#d79a63] font-mono">
                        ₹{trek.price.toLocaleString('en-IN')}
                      </span>
                      <span className="text-xs text-[#9a9a9a] group-hover:text-white transition-colors flex items-center gap-1">
                        {t('home.treks.explore')} <ChevronRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Gallery Preview Section ─── */
function GalleryPreview() {
  const { t } = useTranslation();
  const images = [
    { src: '/gallery-camping.jpg', alt: 'Camping under stars', span: 'col-span-2 row-span-2' },
    { src: '/gallery-forest.jpg', alt: 'Forest trail', span: 'col-span-1 row-span-1' },
    { src: '/gallery-sunrise.jpg', alt: 'Mountain sunrise', span: 'col-span-1 row-span-1' },
    { src: '/gallery-lake.jpg', alt: 'Alpine lake', span: 'col-span-1 row-span-1' },
    { src: '/gallery-snow.jpg', alt: 'Snow trek', span: 'col-span-1 row-span-1' },
  ];

  return (
    <section className="py-24 bg-[#030303] border-t border-white/10">
      <div className="section-padding">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-4">
            <div>
              <div className="text-micro mb-4">{t('home.gallery.superTitle')}</div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight">
                {t('home.gallery.title')}
              </h2>
            </div>
            <Link to="/gallery" className="btn-outline text-xs flex items-center gap-2">
              {t('home.gallery.viewAll')} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {images.map((img, i) => (
            <ScrollReveal
              key={img.src}
              delay={i * 0.1}
              className={`${img.span} group overflow-hidden`}
            >
              <div className="relative h-full min-h-[200px] overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonials Section ─── */
function TestimonialsSection() {
  const { t } = useTranslation();
  const testimonials = [
    {
      text: t('home.testimonials.testimonial1'),
      name: 'Arjun Mehta',
      trek: 'Valley of Flowers',
      image: '/testimonial-2.jpg',
    },
    {
      text: t('home.testimonials.testimonial2'),
      name: 'Sneha Kapoor',
      trek: 'Roopkund Trek',
      image: '/testimonial-1.jpg',
    },
    {
      text: t('home.testimonials.testimonial3'),
      name: 'Rahul Sharma',
      trek: 'Kuari Pass',
      image: '/testimonial-4.jpg',
    },
  ];

  return (
    <section className="py-24 bg-[#030303] border-t border-white/10">
      <div className="section-padding">
        <ScrollReveal>
          <div className="text-micro mb-4">{t('home.testimonials.superTitle')}</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight mb-16">
            {t('home.testimonials.title')}
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-white/10">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.15}>
              <div className="bg-[#121212] p-8 h-full">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-[#d79a63] text-[#d79a63]" />
                  ))}
                </div>
                <p className="text-[#9a9a9a] text-sm leading-relaxed mb-6 italic">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-sm font-medium">{t.name}</div>
                    <div className="text-micro">{t.trek}</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA Section ─── */
function CTASection() {
  const { t } = useTranslation();
  return (
    <section className="py-32 bg-[#030303] border-t border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/gallery-sunrise.jpg"
          alt="Mountain sunrise"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/50 to-transparent" />
      </div>

      <div className="relative z-10 section-padding text-center">
        <ScrollReveal>
          <div className="text-micro mb-4">{t('home.cta.superTitle')}</div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-normal tracking-tight mb-6">
            {t('home.cta.title')}
          </h2>
          <p className="text-[#9a9a9a] max-w-xl mx-auto mb-10">
            {t('home.cta.subtitle')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/book-a-call" className="btn-amber">
              {t('home.cta.bookConsultation')}
            </Link>
            <Link to="/treks" className="btn-outline">
              {t('home.cta.browseTreks')}
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ─── Blog Preview Section ─── */
function BlogPreview() {
  const { t } = useTranslation();
  const posts = [
    {
      title: t('home.blog.post1Title'),
      category: t('home.blog.categoryFitness'),
      image: '/blog-fitness.jpg',
      date: 'June 10, 2026',
    },
    {
      title: t('home.blog.post2Title'),
      category: t('home.blog.categoryPacking'),
      image: '/blog-packing.jpg',
      date: 'June 5, 2026',
    },
    {
      title: t('home.blog.post3Title'),
      category: t('home.blog.categoryDestinations'),
      image: '/trek-valley-flowers new.jpeg',
      date: 'May 28, 2026',
    },
  ];

  return (
    <section className="py-24 bg-[#030303] border-t border-white/10">
      <div className="section-padding">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-4">
            <div>
              <div className="text-micro mb-4">{t('home.blog.superTitle')}</div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight">
                {t('home.blog.title')}
              </h2>
            </div>
            <Link to="/blog" className="btn-outline text-xs flex items-center gap-2">
              {t('home.blog.viewAll')} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-white/10">
          {posts.map((post, i) => (
            <ScrollReveal key={post.title} delay={i * 0.1}>
              <div className="bg-[#121212] group cursor-pointer h-full">
                <div className="overflow-hidden aspect-video">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <div className="text-micro mb-2">{post.category}</div>
                  <h3 className="text-sm uppercase tracking-wider mb-3 group-hover:text-[#d79a63] transition-colors leading-relaxed">
                    {post.title}
                  </h3>
                  <div className="text-micro">{post.date}</div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Adventure Journey Timeline ─── */
function JourneySection() {
  const { t } = useTranslation();
  const steps = [
    { num: '01', title: t('home.journey.step1Title'), desc: t('home.journey.step1Desc') },
    { num: '02', title: t('home.journey.step2Title'), desc: t('home.journey.step2Desc') },
    { num: '03', title: t('home.journey.step3Title'), desc: t('home.journey.step3Desc') },
    { num: '04', title: t('home.journey.step4Title'), desc: t('home.journey.step4Desc') },
    { num: '05', title: t('home.journey.step5Title'), desc: t('home.journey.step5Desc') },
    { num: '06', title: t('home.journey.step6Title'), desc: t('home.journey.step6Desc') },
  ];

  return (
    <section className="py-24 bg-[#030303] border-t border-white/10">
      <div className="section-padding">
        <ScrollReveal>
          <div className="text-micro mb-4">{t('home.journey.superTitle')}</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight mb-16">
            {t('home.journey.title')}
          </h2>
        </ScrollReveal>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-[1px] bg-white/10" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {steps.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 0.1}>
                <div className="relative text-center">
                  <div className="w-16 h-16 rounded-full bg-[#121212] border border-white/20 flex items-center justify-center mx-auto mb-4 relative z-10">
                    <span className="font-mono text-[#d79a63]">{step.num}</span>
                  </div>
                  <h3 className="text-sm uppercase tracking-wider mb-2">{step.title}</h3>
                  <p className="text-xs text-[#9a9a9a]">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Newsletter Section ─── */
function NewsletterSection() {
  const { t } = useTranslation();
  return (
    <section className="py-24 bg-[#121212] border-t border-white/10">
      <div className="section-padding">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center">
            <MapPin className="w-8 h-8 text-[#d79a63] mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl uppercase tracking-tight mb-4">
              {t('home.newsletter.title')}
            </h3>
            <p className="text-[#9a9a9a] mb-8">
              {t('home.newsletter.subtitle')}
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder={t('home.newsletter.placeholder')}
                className="flex-1 bg-[#030303] border border-white/20 px-4 py-3 text-sm text-white placeholder:text-[#9a9a9a] focus:outline-none focus:border-[#d79a63]"
              />
              <button type="submit" className="btn-amber">
                {t('home.newsletter.subscribe')}
              </button>
            </form>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ─── Main Home Page ─── */
export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <WhyChooseSection />
      <TreksSection />
      <JourneySection />
      <GalleryPreview />
      <TestimonialsSection />
      <BlogPreview />
      <CTASection />
      <NewsletterSection />
    </>
  );
}
