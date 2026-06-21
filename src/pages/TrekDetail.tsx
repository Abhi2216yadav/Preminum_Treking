import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {
  ArrowLeft, Check, X, Star, Calendar,
  Users, Mountain, Clock, MapPin, TrendingUp
} from 'lucide-react';
import { getTrekBySlug, getRelatedTreks } from '../data/treks';
import ScrollReveal from '../components/ScrollReveal';

export default function TrekDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const trek = getTrekBySlug(slug || '');
  const [selectedImage, setSelectedImage] = useState(0);

  if (!trek) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#030303]">
        <div className="text-center">
          <h1 className="text-2xl uppercase tracking-wider mb-4">Trek Not Found</h1>
          <Link to="/treks" className="btn-amber text-xs">BACK TO TREKS</Link>
        </div>
      </div>
    );
  }

  const relatedTreks = getRelatedTreks(trek.slug, 3);
  const overviewParagraphs = Array.isArray(trek.overview) ? trek.overview : [trek.overview];
  const hasFloraFauna = trek.floraFauna || trek.closingSummary;
  const hasRouteDetails = trek.altitudeProfile || trek.localCulture || trek.majorPeaks;

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={trek.image} alt={trek.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/50 to-transparent" />
        </div>
        <div className="relative z-10 section-padding pb-12 w-full">
          <ScrollReveal>
            <button
              onClick={() => navigate('/treks')}
              className="flex items-center gap-2 text-micro mb-6 hover:text-[#d79a63] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> BACK TO TREKS
            </button>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-normal tracking-tight uppercase mb-6">
              {trek.shortName}
            </h1>
            <div className="flex flex-wrap items-center gap-4 md:gap-8">
              <div className="flex items-center gap-2 text-micro">
                <Clock className="w-4 h-4 text-[#d79a63]" />
                {trek.duration}
              </div>
              <div className="flex items-center gap-2 text-micro">
                <Mountain className="w-4 h-4 text-[#d79a63]" />
                {trek.altitude}
              </div>
              <div className="flex items-center gap-2 text-micro">
                <TrendingUp className="w-4 h-4 text-[#d79a63]" />
                {trek.difficulty}
              </div>
              <div className="flex items-center gap-2 text-micro">
                <Calendar className="w-4 h-4 text-[#d79a63]" />
                {trek.bestSeason}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Overview & Quick Facts */}
      <section className="py-20 bg-[#030303]">
        <div className="section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Overview */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <div className="text-micro mb-4">ABOUT THIS TREK</div>
                <h2 className="text-3xl md:text-4xl font-normal tracking-tight mb-8">
                  OVERVIEW
                </h2>
                <div className="mb-8 space-y-5">
                  {overviewParagraphs.map((paragraph, i) => (
                    <p key={i} className="text-[#9a9a9a] leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Highlights */}
                <div className="mb-8">
                  <h3 className="text-sm uppercase tracking-wider mb-4">HIGHLIGHTS</h3>
                  <ul className="space-y-3">
                    {trek.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-[#9a9a9a]">
                        <Star className="w-4 h-4 text-[#d79a63] mt-0.5 shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              {/* Gallery Strip */}
              <ScrollReveal>
                <h3 className="text-sm uppercase tracking-wider mb-4">GALLERY</h3>
                <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide">
                  {trek.gallery.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedImage(i)}
                      className={`shrink-0 w-[200px] h-[130px] overflow-hidden border-2 transition-colors ${
                        selectedImage === i ? 'border-[#d79a63]' : 'border-transparent'
                      }`}
                    >
                      <img src={img} alt={`${trek.name} ${i + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
                <div className="mt-2 overflow-hidden aspect-video">
                  <img
                    src={trek.gallery[selectedImage]}
                    alt={trek.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </ScrollReveal>
            </div>

            {/* Quick Facts Sidebar */}
            <div className="lg:col-span-2">
              <ScrollReveal delay={0.2}>
                <div className="bg-[#121212] border border-white/10 sticky top-24">
                  <div className="p-6 border-b border-white/10">
                    <div className="text-micro mb-2">STARTING FROM</div>
                    <div className="text-3xl text-[#d79a63] font-mono">
                      ₹{trek.price.toLocaleString('en-IN')}
                    </div>
                    <div className="text-micro">per person</div>
                  </div>
                  <div className="p-6 space-y-4">
                    {[
                      { label: 'START POINT', value: trek.startPoint, icon: MapPin },
                      { label: 'END POINT', value: trek.endPoint, icon: MapPin },
                      { label: 'TOTAL DISTANCE', value: trek.totalDistance, icon: TrendingUp },
                      { label: 'MAX ALTITUDE', value: trek.altitude, icon: Mountain },
                      { label: 'DURATION', value: trek.duration, icon: Clock },
                      { label: 'DIFFICULTY', value: trek.difficulty, icon: TrendingUp },
                      { label: 'AGE LIMIT', value: trek.ageLimit, icon: Users },
                      { label: 'GROUP SIZE', value: trek.groupSize, icon: Users },
                      { label: 'BEST SEASON', value: trek.bestSeason, icon: Calendar },
                      { label: 'LOCATION', value: trek.location, icon: MapPin },
                    ].map((item) => (
                      <div key={item.label} className="flex items-start gap-3">
                        <item.icon className="w-4 h-4 text-[#d79a63] mt-0.5 shrink-0" />
                        <div>
                          <div className="text-micro">{item.label}</div>
                          <div className="text-sm text-white">{item.value}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="p-6 border-t border-white/10">
                    <Link to="/book-a-call" className="btn-amber w-full text-center block">
                      BOOK THIS TREK
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Itinerary Timeline */}
      <section className="py-24 bg-[#030303] border-t border-white/10">
        <div className="section-padding">
          <ScrollReveal>
            <div className="text-micro mb-4">DAY BY DAY</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight mb-16">
              ITINERARY
            </h2>
          </ScrollReveal>

          <div className="relative max-w-4xl">
            {/* Central Line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-[1px] bg-[#d79a63]/30" />

            <div className="space-y-8">
              {trek.itinerary.map((day, i) => (
                <ScrollReveal key={day.day} delay={i * 0.1}>
                  <div className="relative flex gap-6 md:gap-10">
                    {/* Node */}
                    <div className={`w-8 h-8 md:w-16 md:h-16 shrink-0 rounded-full border-2 flex items-center justify-center relative z-10 ${
                      day.highlight
                        ? 'bg-[#d79a63] border-[#d79a63]'
                        : 'bg-[#030303] border-white/20'
                    }`}>
                      <span className={`font-mono text-xs md:text-sm ${day.highlight ? 'text-[#030303]' : 'text-white'}`}>
                        {String(day.day).padStart(2, '0')}
                      </span>
                    </div>

                    {/* Content */}
                    <div className={`flex-1 pb-8 ${i < trek.itinerary.length - 1 ? 'border-b border-white/10' : ''}`}>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg uppercase tracking-wider">{day.title}</h3>
                        {day.highlight && (
                          <span className="bg-[#d79a63]/20 text-[#d79a63] px-2 py-0.5 text-xs uppercase">
                            KEY DAY
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-[#9a9a9a] leading-relaxed">
                        {day.description}
                      </p>
                      {(day.distance || day.duration) && (
                        <div className="mt-4 flex flex-wrap gap-3">
                          {day.distance && (
                            <div className="border border-white/10 px-3 py-2">
                              <div className="text-micro">DISTANCE</div>
                              <div className="text-sm text-white">{day.distance}</div>
                            </div>
                          )}
                          {day.duration && (
                            <div className="border border-white/10 px-3 py-2">
                              <div className="text-micro">DURATION</div>
                              <div className="text-sm text-white">{day.duration}</div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Route Details */}
      {hasRouteDetails && (
        <section className="py-24 bg-[#030303] border-t border-white/10">
          <div className="section-padding">
            <ScrollReveal>
              <div className="text-micro mb-4">REGION DETAILS</div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight mb-16">
                ROUTE, CULTURE & PEAKS
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {trek.altitudeProfile && (
                <ScrollReveal>
                  <div className="bg-[#121212] border border-white/10 p-8 h-full">
                    <h3 className="text-sm uppercase tracking-wider mb-6">
                      Campsites and Altitude
                    </h3>
                    <div className="divide-y divide-white/10">
                      {trek.altitudeProfile.map((point) => (
                        <div key={point.name} className="flex items-center justify-between gap-4 py-3">
                          <span className="text-sm text-[#9a9a9a]">{point.name}</span>
                          <span className="text-sm text-[#d79a63] font-mono text-right">
                            {point.altitude}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              )}

              {trek.localCulture && (
                <ScrollReveal delay={0.1}>
                  <div className="bg-[#121212] border border-white/10 p-8 h-full">
                    <h3 className="text-sm uppercase tracking-wider mb-6">
                      Local Culture
                    </h3>
                    <ul className="space-y-3">
                      {trek.localCulture.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-[#9a9a9a]">
                          <Star className="w-4 h-4 text-[#d79a63] mt-0.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              )}

              {trek.majorPeaks && (
                <ScrollReveal delay={0.2}>
                  <div className="bg-[#121212] border border-white/10 p-8 h-full">
                    <h3 className="text-sm uppercase tracking-wider mb-6">
                      Major Peaks on the Trail
                    </h3>
                    <ul className="space-y-3">
                      {trek.majorPeaks.map((peak) => (
                        <li key={peak} className="flex items-start gap-3 text-sm text-[#9a9a9a]">
                          <Mountain className="w-4 h-4 text-[#d79a63] mt-0.5 shrink-0" />
                          {peak}
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Cost & Inclusions */}
      <section className="py-24 bg-[#030303] border-t border-white/10">
        <div className="section-padding">
          <ScrollReveal>
            <div className="text-micro mb-4">WHAT'S INCLUDED</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight mb-16">
              COST & INCLUSIONS
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Price Card */}
            <ScrollReveal>
              <div className="bg-[#121212] border border-white/10 p-8">
                <div className="text-micro mb-4">TREK COST</div>
                <div className="text-5xl text-[#d79a63] font-mono mb-2">
                  ₹{trek.price.toLocaleString('en-IN')}
                </div>
                <div className="text-micro mb-8">per person</div>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-2 text-sm text-[#9a9a9a]">
                    <Check className="w-4 h-4 text-green-500" /> All inclusive trek package
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#9a9a9a]">
                    <Check className="w-4 h-4 text-green-500" /> No hidden charges
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#9a9a9a]">
                    <Check className="w-4 h-4 text-green-500" /> Group discounts available
                  </div>
                </div>
                <Link to="/book-a-call" className="btn-amber w-full text-center block">
                  BOOK NOW
                </Link>
              </div>
            </ScrollReveal>

            {/* Inclusions */}
            <ScrollReveal delay={0.1}>
              <div className="bg-[#121212] border border-white/10 p-8">
                <h3 className="text-sm uppercase tracking-wider mb-6 flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" /> INCLUDED
                </h3>
                <ul className="space-y-3">
                  {trek.included.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[#9a9a9a]">
                      <Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* Exclusions */}
            <ScrollReveal delay={0.2}>
              <div className="bg-[#121212] border border-white/10 p-8">
                <h3 className="text-sm uppercase tracking-wider mb-6 flex items-center gap-2">
                  <X className="w-4 h-4 text-red-500" /> NOT INCLUDED
                </h3>
                <ul className="space-y-3">
                  {trek.excluded.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[#9a9a9a]">
                      <X className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Flora & Fauna */}
      {hasFloraFauna && (
        <section className="py-24 bg-[#030303] border-t border-white/10">
          <div className="section-padding">
            <ScrollReveal>
              <div className="text-micro mb-4">MOUNTAIN ECOSYSTEM</div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight mb-16">
                FLORA & FAUNA
              </h2>
            </ScrollReveal>

            {trek.floraFauna && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <ScrollReveal>
                  <div className="bg-[#121212] border border-white/10 p-8 h-full">
                    <h3 className="text-sm uppercase tracking-wider mb-6">
                      Trees Found on the Trek
                    </h3>
                    <ul className="space-y-3">
                      {trek.floraFauna.trees.map((tree, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-[#9a9a9a]">
                          <Star className="w-4 h-4 text-[#d79a63] mt-0.5 shrink-0" />
                          {tree}
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.1}>
                  <div className="bg-[#121212] border border-white/10 p-8 h-full">
                    <h3 className="text-sm uppercase tracking-wider mb-6">
                      Wildlife Sightings
                    </h3>
                    <ul className="space-y-3">
                      {trek.floraFauna.wildlife.map((wildlife, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-[#9a9a9a]">
                          <Star className="w-4 h-4 text-[#d79a63] mt-0.5 shrink-0" />
                          {wildlife}
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              </div>
            )}

            {trek.closingSummary && (
              <ScrollReveal>
                <div className="bg-[#121212] border border-white/10 p-8">
                  <div className="text-micro mb-4">CLOSING SUMMARY</div>
                  <p className="text-[#9a9a9a] leading-relaxed max-w-4xl">
                    {trek.closingSummary}
                  </p>
                </div>
              </ScrollReveal>
            )}
          </div>
        </section>
      )}

      {/* Related Treks */}
      <section className="py-24 bg-[#030303] border-t border-white/10">
        <div className="section-padding">
          <ScrollReveal>
            <div className="text-micro mb-4">MORE ADVENTURES</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight mb-16">
              RELATED TREKS
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-white/10">
            {relatedTreks.map((rt, i) => (
              <ScrollReveal key={rt.id} delay={i * 0.1}>
                <Link to={`/treks/${rt.slug}`} className="block bg-[#121212] group">
                  <div className="overflow-hidden aspect-video">
                    <img
                      src={rt.image}
                      alt={rt.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-sm uppercase tracking-wider mb-2 group-hover:text-[#d79a63] transition-colors">
                      {rt.shortName}
                    </h3>
                    <div className="flex items-center gap-3 text-micro">
                      <span>{rt.altitude}</span>
                      <span>|</span>
                      <span>{rt.duration}</span>
                      <span>|</span>
                      <span className="text-[#d79a63]">₹{rt.price.toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-32 bg-[#121212] border-t border-white/10">
        <div className="section-padding text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-normal tracking-tight mb-6">
              READY TO TREK {trek.shortName.toUpperCase()}?
            </h2>
            <p className="text-[#9a9a9a] max-w-xl mx-auto mb-10">
              Secure your spot on this incredible trek. Our team will guide you through every step of the booking process.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/book-a-call" className="btn-amber">
                BOOK THIS TREK
              </Link>
              <Link to="/treks" className="btn-outline">
                EXPLORE OTHER TREKS
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
