import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
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
          <div className="text-micro mb-4">UTTARAKHAND HIMALAYAS</div>
          <h1
            ref={titleRef}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[100px] xl:text-[120px] font-normal leading-[0.9] uppercase tracking-tight mb-6"
          >
            EXPLORE<br />THE UNKNOWN
          </h1>
          <p
            ref={subtitleRef}
            className="text-lg md:text-xl text-[#9a9a9a] max-w-xl mb-8 opacity-0"
          >
            Premium guided treks across the Indian Himalayas. 
            Safe, sustainable, and unforgettable adventures await.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/treks" className="btn-amber">
              EXPLORE TREKS
            </Link>
            <Link to="/book-a-call" className="btn-outline">
              BOOK A CALL
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Data Bar */}
      <div className="absolute bottom-0 left-0 w-full h-12 bg-[#030303] border-t border-white/10 z-30 flex items-center justify-between section-padding">
        <div className="flex items-center gap-8 text-micro">
          <span>ELEV: <span className="text-white font-mono">5000M+</span></span>
          <span className="hidden sm:inline">REGION: <span className="text-white font-mono">GARHWAL</span></span>
          <span className="hidden md:inline">TRENDING: <span className="text-[#d79a63] font-mono">ACTIVE</span></span>
        </div>
        <div className="text-micro hidden lg:block">
          <TrendingUp className="w-4 h-4 inline mr-2 text-[#d79a63]" />
          <span className="font-mono">5000+ HAPPY TREKKERS</span>
        </div>
      </div>
    </section>
  );
}

/* ─── Statistics Section ─── */
function StatsSection() {
  const stats = [
    { value: '5000+', label: 'HAPPY TREKKERS' },
    { value: '12+', label: 'PREMIUM TREKS' },
    { value: '98%', label: 'CUSTOMER SATISFACTION' },
    { value: '10+', label: 'YEARS EXPERIENCE' },
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
  const features = [
    { icon: Mountain, title: 'EXPERT LOCAL GUIDES', desc: 'Certified Himalayan guides with 10+ years of experience' },
    { icon: Shield, title: 'SAFE ADVENTURES', desc: 'Comprehensive safety protocols and emergency support' },
    { icon: Heart, title: 'MEDICAL SUPPORT', desc: 'Trained medical staff and equipment on every trek' },
    { icon: Tent, title: 'PREMIUM CAMPING', desc: 'High-quality camping gear and comfortable stays' },
    { icon: Utensils, title: 'MEALS INCLUDED', desc: 'Nutritious, hygienic meals prepared by our team' },
    { icon: Camera, title: 'PHOTOGRAPHY', desc: 'Stunning locations perfect for capturing memories' },
    { icon: Users, title: 'SMALL GROUPS', desc: 'Intimate groups of 8-15 for personalized attention' },
    { icon: Truck, title: 'TRANSPORT', desc: 'Reliable pickup and drop-off from base cities' },
  ];

  return (
    <section className="py-24 bg-[#030303]">
      <div className="section-padding">
        <ScrollReveal>
          <div className="text-micro mb-4">WHY TREKWON</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight mb-16">
            WHY CHOOSE US
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
  return (
    <section className="py-24 bg-[#030303] border-t border-white/10">
      <div className="section-padding">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-4">
            <div>
              <div className="text-micro mb-4">OUR DESTINATIONS</div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight">
                TREKS WE COVER
              </h2>
            </div>
            <Link to="/treks" className="btn-outline text-xs flex items-center gap-2">
              VIEW ALL <ArrowRight className="w-4 h-4" />
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
                        EXPLORE <ChevronRight className="w-3 h-3" />
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
              <div className="text-micro mb-4">MOMENTS FROM THE TRAIL</div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight">
                PHOTO GALLERY
              </h2>
            </div>
            <Link to="/gallery" className="btn-outline text-xs flex items-center gap-2">
              VIEW ALL <ArrowRight className="w-4 h-4" />
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
  const testimonials = [
    {
      text: "An absolutely life-changing experience. The guides were professional and the views were breathtaking. I cannot recommend TREKWON enough!",
      name: 'Arjun Mehta',
      trek: 'Valley of Flowers',
      image: '/testimonial-2.jpg',
    },
    {
      text: "I've trekked with many companies, but TREKWON stands out for their safety standards and attention to detail. Truly world-class.",
      name: 'Sneha Kapoor',
      trek: 'Roopkund Trek',
      image: '/testimonial-1.jpg',
    },
    {
      text: "The best birthday gift I could have given myself. The summit sunrise was magical and the team made everything so comfortable.",
      name: 'Rahul Sharma',
      trek: 'Kuari Pass',
      image: '/testimonial-4.jpg',
    },
  ];

  return (
    <section className="py-24 bg-[#030303] border-t border-white/10">
      <div className="section-padding">
        <ScrollReveal>
          <div className="text-micro mb-4">TREKKER STORIES</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight mb-16">
            TESTIMONIALS
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
          <div className="text-micro mb-4">READY FOR ADVENTURE?</div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-normal tracking-tight mb-6">
            BEGIN YOUR JOURNEY
          </h2>
          <p className="text-[#9a9a9a] max-w-xl mx-auto mb-10">
            Let our experts help you choose the perfect trek based on your fitness level, 
            experience, and preferences. Book a free consultation today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/book-a-call" className="btn-amber">
              BOOK FREE CONSULTATION
            </Link>
            <Link to="/treks" className="btn-outline">
              BROWSE TREKS
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ─── Blog Preview Section ─── */
function BlogPreview() {
  const posts = [
    {
      title: 'The Ultimate Guide to High Altitude Trekking Preparation',
      category: 'FITNESS',
      image: '/blog-fitness.jpg',
      date: 'June 10, 2026',
    },
    {
      title: '10 Essential Items for Your Trekking Backpack',
      category: 'PACKING GUIDES',
      image: '/blog-packing.jpg',
      date: 'June 5, 2026',
    },
    {
      title: 'Best Time to Visit Valley of Flowers',
      category: 'DESTINATIONS',
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
              <div className="text-micro mb-4">FROM THE BLOG</div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight">
                LATEST ARTICLES
              </h2>
            </div>
            <Link to="/blog" className="btn-outline text-xs flex items-center gap-2">
              VIEW ALL <ArrowRight className="w-4 h-4" />
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
  const steps = [
    { num: '01', title: 'PLAN', desc: 'Choose your trek and dates' },
    { num: '02', title: 'PREPARE', desc: 'Get fit and pack your gear' },
    { num: '03', title: 'TRAVEL', desc: 'Reach the base camp city' },
    { num: '04', title: 'TREK', desc: 'Experience the Himalayas' },
    { num: '05', title: 'SUMMIT', desc: 'Reach your destination' },
    { num: '06', title: 'RETURN', desc: 'Carry memories for life' },
  ];

  return (
    <section className="py-24 bg-[#030303] border-t border-white/10">
      <div className="section-padding">
        <ScrollReveal>
          <div className="text-micro mb-4">HOW IT WORKS</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight mb-16">
            YOUR ADVENTURE JOURNEY
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
  return (
    <section className="py-24 bg-[#121212] border-t border-white/10">
      <div className="section-padding">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center">
            <MapPin className="w-8 h-8 text-[#d79a63] mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl uppercase tracking-tight mb-4">
              GET TREKKING TIPS IN YOUR INBOX
            </h3>
            <p className="text-[#9a9a9a] mb-8">
              Subscribe to our newsletter for exclusive trekking guides, preparation tips, 
              and early access to new trek announcements.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-[#030303] border border-white/20 px-4 py-3 text-sm text-white placeholder:text-[#9a9a9a] focus:outline-none focus:border-[#d79a63]"
              />
              <button type="submit" className="btn-amber">
                SUBSCRIBE
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
