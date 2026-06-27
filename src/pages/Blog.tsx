import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Search, ArrowRight, Calendar } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

export default function Blog() {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('ALL');

  const categories = [
    { key: 'ALL', label: t('blog.filters.all') },
    { key: 'PACKING GUIDES', label: t('home.blog.categoryPacking') },
    { key: 'FITNESS', label: t('home.blog.categoryFitness') },
    { key: 'SAFETY', label: t('home.blog.categorySafety') },
    { key: 'DESTINATIONS', label: t('home.blog.categoryDestinations') },
    { key: 'PHOTOGRAPHY', label: t('home.blog.categoryPhotography') },
  ];

  const posts = [
    {
      title: t('home.blog.post1Title'),
      category: 'FITNESS',
      image: '/blog-fitness.jpg',
      date: 'June 10, 2026',
      excerpt: t('home.blog.post1Excerpt'),
      featured: true,
    },
    {
      title: t('home.blog.post2Title'),
      category: 'PACKING GUIDES',
      image: '/blog-packing.jpg',
      date: 'June 5, 2026',
      excerpt: t('home.blog.post2Excerpt'),
      featured: false,
    },
    {
      title: t('home.blog.post4Title'),
      category: 'SAFETY',
      image: '/hero-mountain.jpg',
      date: 'June 1, 2026',
      excerpt: t('home.blog.post4Excerpt'),
      featured: false,
    },
    {
      title: t('home.blog.post3Title'),
      category: 'DESTINATIONS',
      image: '/trek-valley-flowers new.jpeg',
      date: 'May 28, 2026',
      excerpt: t('home.blog.post3Excerpt'),
      featured: false,
    },
    {
      title: t('home.blog.post5Title'),
      category: 'PHOTOGRAPHY',
      image: '/gallery-sunrise.jpg',
      date: 'May 20, 2026',
      excerpt: t('home.blog.post5Excerpt'),
      featured: false,
    },
    {
      title: t('home.blog.post6Title'),
      category: 'FITNESS',
      image: '/blog-fitness.jpg',
      date: 'May 15, 2026',
      excerpt: t('home.blog.post6Excerpt'),
      featured: false,
    },
    {
      title: t('home.blog.post7Title'),
      category: 'DESTINATIONS',
      image: '/trek-roopkund.jpg',
      date: 'May 8, 2026',
      excerpt: t('home.blog.post7Excerpt'),
      featured: false,
    },
  ];

  const filteredPosts = posts.filter(post => {
    const matchesCategory = activeCategory === 'ALL' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = posts.find(p => p.featured);

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[30vh] min-h-[250px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/trek-autumn.jpg" alt="Blog hero" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030303] to-transparent" />
        </div>
        <div className="relative z-10 text-center section-padding">
          <ScrollReveal>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight uppercase mb-4">
              {t('blog.hero.title')}
            </h1>
            <p className="text-lg text-[#9a9a9a]">{t('blog.hero.subtitle')}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Search & Categories */}
      <section className="py-8 bg-[#030303] border-b border-white/10">
        <div className="section-padding">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9a9a9a]" />
                <input
                  type="text"
                  placeholder={t('blog.search.placeholder')}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#121212] border border-white/20 pl-12 pr-4 py-3 text-sm text-white placeholder:text-[#9a9a9a] focus:outline-none focus:border-[#d79a63]"
                />
              </div>
            </div>
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

      {/* Featured Article */}
      {featuredPost && activeCategory === 'ALL' && !searchQuery && (
        <section className="py-16 bg-[#030303] border-b border-white/10">
          <div className="section-padding">
            <ScrollReveal>
              <div className="text-micro mb-4">{t('blog.featured.superTitle')}</div>
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                <div className="lg:col-span-3 overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover min-h-[300px]"
                  />
                </div>
                <div className="lg:col-span-2 flex flex-col justify-center">
                  <div className="text-micro mb-2">{t(`home.blog.category${featuredPost.category.split(' ')[0]}` as const)}</div>
                  <h2 className="text-2xl md:text-3xl font-normal tracking-tight mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-[#9a9a9a] mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 mb-6">
                    <Calendar className="w-4 h-4 text-[#9a9a9a]" />
                    <span className="text-micro">{featuredPost.date}</span>
                  </div>
                  <button className="btn-outline text-xs w-fit flex items-center gap-2">
                    {t('blog.featured.readMore')} <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Article Grid */}
      <section className="py-24 bg-[#030303]">
        <div className="section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-white/10">
            {filteredPosts.filter(p => !p.featured || activeCategory !== 'ALL' || searchQuery).map((post, i) => (
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
                    <div className="text-micro mb-2">{t(`home.blog.category${post.category.split(' ')[0]}` as const)}</div>
                    <h3 className="text-sm uppercase tracking-wider mb-3 group-hover:text-[#d79a63] transition-colors leading-relaxed">
                      {post.title}
                    </h3>
                    <p className="text-xs text-[#9a9a9a] mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="text-micro">{post.date}</div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-[#9a9a9a]">{t('blog.noArticles')}</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-[#121212] border-t border-white/10">
        <div className="section-padding text-center">
          <ScrollReveal>
            <h3 className="text-2xl md:text-3xl uppercase tracking-tight mb-4">
              {t('home.newsletter.title')}
            </h3>
            <p className="text-[#9a9a9a] mb-8 max-w-md mx-auto">
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
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
