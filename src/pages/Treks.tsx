import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { treks } from '../data/treks';
import ScrollReveal from '../components/ScrollReveal';

export default function Treks() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<string>('ALL');

  const filters = [
    { key: 'ALL', label: t('treks.filters.all') },
    { key: 'EASY', label: t('treks.filters.easy') },
    { key: 'MODERATE', label: t('treks.filters.moderate') },
    { key: 'DIFFICULT', label: t('treks.filters.difficult') },
  ];

  const filteredTreks = filter === 'ALL'
    ? treks
    : treks.filter(trek => {
        if (filter === 'EASY') return trek.difficultyLevel === 'easy';
        if (filter === 'MODERATE') return trek.difficultyLevel === 'moderate';
        if (filter === 'DIFFICULT') return trek.difficultyLevel === 'difficult';
        return true;
      });

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/trek-kuari-pass.jpg" alt="Mountain panorama" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030303] to-transparent" />
        </div>
        <div className="relative z-10 text-center section-padding">
          <ScrollReveal>
            <div className="text-micro mb-4">{t('treks.hero.superTitle')}</div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight uppercase mb-4">
              {t('treks.hero.title')}
            </h1>
            <p className="text-lg text-[#9a9a9a] max-w-xl mx-auto">
              {t('treks.hero.subtitle')}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-[#030303] border-b border-white/10 sticky top-16 lg:top-20 z-40">
        <div className="section-padding">
          <div className="flex flex-wrap gap-3">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`px-4 py-2 text-xs uppercase tracking-widest border transition-all ${
                  filter === f.key
                    ? 'bg-[#d79a63] text-[#030303] border-[#d79a63]'
                    : 'bg-transparent text-[#9a9a9a] border-white/20 hover:border-white/40 hover:text-white'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Trek Grid */}
      <section className="py-16 bg-[#030303]">
        <div className="section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-white/10">
            {filteredTreks.map((trek, i) => (
              <ScrollReveal key={trek.id} delay={i * 0.1}>
                <div className="bg-[#121212] group">
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={trek.image}
                      alt={trek.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-[#030303]/80 px-3 py-1 text-micro">
                      {trek.difficulty.toUpperCase()}
                    </div>
                    <div className="absolute bottom-4 right-4 bg-[#d79a63] text-[#030303] px-3 py-1 text-xs font-medium uppercase">
                      ₹{trek.price.toLocaleString('en-IN')}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg uppercase tracking-wider mb-2 group-hover:text-[#d79a63] transition-colors">
                      {trek.shortName}
                    </h3>
                    <p className="text-sm text-[#9a9a9a] mb-4 line-clamp-2">
                      {trek.tagline}
                    </p>
                    <div className="flex items-center gap-4 text-micro mb-6">
                      <span>{trek.altitude}</span>
                      <span>|</span>
                      <span>{trek.duration}</span>
                      <span>|</span>
                      <span>{trek.bestSeason}</span>
                    </div>
                    <div className="flex gap-3">
                      <Link
                        to={`/treks/${trek.slug}`}
                        className="btn-outline text-xs flex-1 text-center"
                      >
                        {t('treks.grid.exploreTrek')}
                      </Link>
                      <Link
                        to="/book-a-call"
                        className="btn-amber text-xs flex-1 text-center"
                      >
                        {t('treks.grid.bookNow')}
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/gallery-sunrise.jpg" alt="Mountain sunrise" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/60 to-[#030303]/30" />
        </div>
        <div className="relative z-10 section-padding text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-normal tracking-tight mb-6">
              {t('treks.cta.title')}
            </h2>
            <p className="text-[#9a9a9a] max-w-xl mx-auto mb-10">
              {t('treks.cta.subtitle')}
            </p>
            <Link to="/book-a-call" className="btn-amber">
              {t('treks.cta.bookACall')}
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
