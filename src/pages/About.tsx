import { Link } from 'react-router-dom';
import {
  Mountain, Shield, Camera, Users, Utensils, Tent,
  Truck, Heart, Award, Clock, TrendingUp
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

export default function About() {
  const stats = [
    { value: '5000+', label: 'HAPPY TREKKERS', icon: Users },
    { value: '10+', label: 'YEARS EXPERIENCE', icon: Clock },
    { value: '12+', label: 'PREMIUM TREKS', icon: Mountain },
    { value: '98%', label: 'CUSTOMER SATISFACTION', icon: TrendingUp },
  ];

  const features = [
    { icon: Mountain, title: 'Expert Local Guides', desc: 'Our guides are certified mountaineers with deep knowledge of Himalayan terrain, weather patterns, and local culture.' },
    { icon: Shield, title: 'Safety First Approach', desc: 'Comprehensive safety protocols including medical kits, oxygen cylinders, satellite communication, and evacuation plans.' },
    { icon: Camera, title: 'Photography Support', desc: 'Our guides know the best vantage points and golden hour timings to help you capture stunning Himalayan shots.' },
    { icon: Users, title: 'Small Group Experience', desc: 'We cap our groups at 15 trekkers to ensure personalized attention and a more intimate wilderness experience.' },
    { icon: Utensils, title: 'Premium Meals', desc: 'Nutritious, hot, and hygienic vegetarian meals prepared fresh at every campsite by our trained kitchen staff.' },
    { icon: Tent, title: 'Quality Camping', desc: 'High-grade tents, sleeping bags rated for sub-zero temperatures, and comfortable sleeping mats provided.' },
    { icon: Truck, title: 'Reliable Transport', desc: 'Safe and comfortable pickup and drop-off services from Dehradun, Kathgodam, or other base cities.' },
    { icon: Heart, title: 'Medical Support', desc: 'Trained medical professionals accompany every trek. We carry comprehensive first aid and emergency oxygen.' },
  ];

  const team = [
    { name: 'Rajesh Bhandari', role: 'Lead Guide & Founder', image: '/team-guide.jpg', bio: '20+ years of Himalayan trekking experience. Certified mountaineer from NIM.' },
    { name: 'Priya Thapa', role: 'Trek Coordinator', image: '/team-coordinator.jpg', bio: 'Expert in logistics and trek planning. Ensures smooth operations on every expedition.' },
    { name: 'Aman Singh', role: 'Safety Expert', image: '/team-safety.jpg', bio: 'Wilderness First Responder certified. Specializes in high-altitude safety protocols.' },
  ];

  const achievements = [
    { icon: Award, title: 'Top Rated Trekking Company', desc: 'Rated 4.9/5 on Google with 500+ reviews' },
    { icon: Shield, title: 'Ministry of Tourism Approved', desc: 'Recognized by Uttarakhand Tourism Department' },
    { icon: Users, title: '5000+ Successful Treks', desc: 'Safe and memorable experiences delivered' },
    { icon: TrendingUp, title: '98% Customer Satisfaction', desc: 'Consistently exceeding trekker expectations' },
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
              Our Story
            </h1>
            <p className="text-lg text-[#9a9a9a] max-w-xl mx-auto">
              A decade of Himalayan expeditions, unforgettable memories, and lifelong connections
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
                <div className="text-micro mb-4">WHO WE ARE</div>
                <h2 className="text-3xl md:text-4xl font-normal tracking-tight mb-8">
                  DISCOVERING THE HIMALAYAS, ONE TREK AT A TIME
                </h2>
                <div className="space-y-4 text-[#9a9a9a] leading-relaxed">
                  <p>
                    Founded in 2014 in the foothills of Dehradun, TREKWON began with a simple mission: 
                    to make the majestic Indian Himalayas accessible to every adventure enthusiast while 
                    maintaining the highest standards of safety and sustainability.
                  </p>
                  <p>
                    What started as a small team of passionate local guides has grown into one of 
                    Uttarakhand's most trusted trekking companies. Over the past decade, we've led 
                    more than 5,000 trekkers through some of the most breathtaking landscapes on Earth.
                  </p>
                  <p>
                    We believe that trekking is not just about reaching the summit — it's about the 
                    journey, the connections you make, and the transformative power of the mountains. 
                    Every trek we organize is designed to create lasting memories while respecting the 
                    fragile Himalayan ecosystem.
                  </p>
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
                <div className="text-micro mb-4 text-[#d79a63]">OUR MISSION</div>
                <h3 className="text-2xl uppercase tracking-tight mb-4">
                  MAKING HIMALAYAN TREKS SAFE & ACCESSIBLE
                </h3>
                <p className="text-[#9a9a9a] leading-relaxed">
                  To provide world-class trekking experiences in the Indian Himalayas that are safe, 
                  sustainable, and accessible to everyone — from first-time trekkers to seasoned 
                  adventurers. We are committed to preserving the pristine beauty of the mountains 
                  while empowering local communities through responsible tourism.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="bg-[#121212] p-8 md:p-12 h-full">
                <div className="text-micro mb-4 text-[#d79a63]">OUR VISION</div>
                <h3 className="text-2xl uppercase tracking-tight mb-4">
                  INDIA'S MOST TRUSTED TREKKING BRAND
                </h3>
                <p className="text-[#9a9a9a] leading-relaxed">
                  To become India's most trusted and respected trekking brand, known for our 
                  uncompromising safety standards, exceptional customer experiences, and commitment 
                  to environmental conservation. We envision a world where every person can 
                  experience the transformative power of the Himalayas.
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
            <div className="text-micro mb-4">WHY TREKWON</div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight mb-16">
              WHAT SETS US APART
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
            <div className="text-micro mb-4">OUR TEAM</div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight mb-16">
              MEET THE EXPERTS
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
            <div className="text-micro mb-4">RECOGNITION</div>
            <h2 className="text-4xl md:text-5xl font-normal tracking-tight mb-16">
              OUR ACHIEVEMENTS
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
              JOIN OUR NEXT EXPEDITION
            </h2>
            <p className="text-[#9a9a9a] max-w-xl mx-auto mb-10">
              Be part of our growing community of Himalayan trekkers. Your adventure begins with a single step.
            </p>
            <Link to="/book-a-call" className="btn-amber">
              BOOK A CALL
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
