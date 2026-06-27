import { useTranslation } from 'react-i18next';
import { Star, Award, Users, TrendingUp, ThumbsUp } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

export default function Testimonials() {
  const { t } = useTranslation();

  const stats = [
    { value: '4.9/5', label: t('testimonials.stats.averageRating'), icon: Star },
    { value: '500+', label: t('testimonials.stats.reviews'), icon: Users },
    { value: '98%', label: t('testimonials.stats.recommend'), icon: ThumbsUp },
    { value: '4.8/5', label: t('testimonials.stats.googleRating'), icon: TrendingUp },
  ];

  const reviews = [
    {
      text: t('testimonials.reviews.review1'),
      name: 'Arjun Mehta',
      trek: 'Valley of Flowers',
      image: '/testimonial-2.jpg',
      rating: 5,
    },
    {
      text: t('testimonials.reviews.review2'),
      name: 'Sneha Kapoor',
      trek: 'Roopkund Trek',
      image: '/testimonial-1.jpg',
      rating: 5,
    },
    {
      text: t('testimonials.reviews.review3'),
      name: 'Rahul Sharma',
      trek: 'Kuari Pass',
      image: '/testimonial-4.jpg',
      rating: 5,
    },
    {
      text: t('testimonials.reviews.review4'),
      name: 'Meera Joshi',
      trek: 'Brahmatal Trek',
      image: '/testimonial-3.jpg',
      rating: 5,
    },
    {
      text: t('testimonials.reviews.review5'),
      name: 'Vikram Singh',
      trek: 'GoMukh Tapovan',
      image: '/testimonial-4.jpg',
      rating: 4,
    },
    {
      text: t('testimonials.reviews.review6'),
      name: 'Ananya Roy',
      trek: 'Har Ki Dun',
      image: '/testimonial-1.jpg',
      rating: 5,
    },
  ];

  const trustBadges = [
    t('testimonials.trusted.google'),
    t('testimonials.trusted.tripadvisor'),
    t('testimonials.trusted.uttarakhand'),
    t('testimonials.trusted.adventure'),
  ];

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[30vh] min-h-[250px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/gallery-summit.jpg" alt="Testimonials hero" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030303] to-transparent" />
        </div>
        <div className="relative z-10 text-center section-padding">
          <ScrollReveal>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight uppercase mb-4">
              {t('testimonials.hero.title')}
            </h1>
            <p className="text-lg text-[#9a9a9a]">{t('testimonials.hero.subtitle')}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-[#030303] border-b border-white/10">
        <div className="section-padding">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-white/10">
            {stats.map((stat) => (
              <ScrollReveal key={stat.label}>
                <div className="text-center lg:px-8">
                  <stat.icon className="w-6 h-6 text-[#d79a63] mx-auto mb-2" />
                  <div className="text-3xl font-light text-white mb-1">{stat.value}</div>
                  <div className="text-micro">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Video Review */}
      <section className="py-16 bg-[#030303] border-b border-white/10">
        <div className="section-padding">
          <ScrollReveal>
            <div className="text-micro mb-4">{t('testimonials.featured.superTitle')}</div>
            <h2 className="text-3xl md:text-4xl font-normal tracking-tight mb-8">
              {t('testimonials.featured.title')}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="relative aspect-video bg-[#121212] overflow-hidden max-w-4xl">
              <img
                src="/gallery-summit.jpg"
                alt="Featured video review"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full border-2 border-[#d79a63] flex items-center justify-center cursor-pointer hover:bg-[#d79a63]/20 transition-colors">
                  <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-[#d79a63] border-b-8 border-b-transparent ml-1" />
                </div>
              </div>
            </div>
            <div className="mt-6 max-w-4xl flex items-center gap-4">
              <img src="/testimonial-4.jpg" alt="Featured trekker" className="w-12 h-12 rounded-full object-cover" />
              <div>
                <div className="text-sm font-medium">Rahul Sharma</div>
                <div className="text-micro">Kuari Pass Trek | 5 Star Rating</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Review Grid */}
      <section className="py-24 bg-[#030303]">
        <div className="section-padding">
          <ScrollReveal>
            <div className="text-micro mb-4">{t('testimonials.reviews.superTitle')}</div>
            <h2 className="text-3xl md:text-4xl font-normal tracking-tight mb-16">
              {t('testimonials.reviews.title')}
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-white/10">
            {reviews.map((review, i) => (
              <ScrollReveal key={`${review.name}-${i}`} delay={i * 0.1}>
                <div className="bg-[#121212] p-8 h-full group hover:bg-[#0a0a0a] transition-colors">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star
                        key={j}
                        className={`w-4 h-4 ${
                          j < review.rating
                            ? 'fill-[#d79a63] text-[#d79a63]'
                            : 'text-white/20'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-[#9a9a9a] text-sm leading-relaxed mb-6 italic">
                    "{review.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="text-sm font-medium">{review.name}</div>
                      <div className="text-micro">{review.trek}</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-[#121212] border-t border-white/10">
        <div className="section-padding text-center">
          <ScrollReveal>
            <div className="text-micro mb-8">{t('testimonials.trusted.superTitle')}</div>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              {trustBadges.map((badge) => (
                <div key={badge} className="flex items-center gap-2 text-[#9a9a9a]">
                  <Award className="w-5 h-5 text-[#d79a63]" />
                  <span className="text-sm uppercase tracking-wider">{badge}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
