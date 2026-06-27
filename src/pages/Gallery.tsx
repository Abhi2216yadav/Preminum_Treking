import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

export default function Gallery() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState('ALL');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filters = [
    { key: 'ALL', label: t('gallery.filters.all') },
    { key: 'MOUNTAINS', label: t('gallery.filters.mountains') },
    { key: 'CAMPING', label: t('gallery.filters.camping') },
    { key: 'SNOW', label: t('gallery.filters.snow') },
    { key: 'FOREST', label: t('gallery.filters.forest') },
    { key: 'LAKES', label: t('gallery.filters.lakes') },
    { key: 'SUNRISE', label: t('gallery.filters.sunrise') },
    { key: 'TREKKERS', label: t('gallery.filters.trekkers') },
  ];

  const images = [
    { src: '/hero-mountain.jpg', alt: 'Himalayan peaks', category: 'MOUNTAINS', span: 'col-span-2 row-span-2' },
    { src: '/trek-gomukh.jpg', alt: 'GoMukh Glacier', category: 'MOUNTAINS', span: 'col-span-1 row-span-1' },
    { src: '/gallery-forest.jpg', alt: 'Rhododendron forest', category: 'FOREST', span: 'col-span-1 row-span-2' },
    { src: '/gallery-sunrise.jpg', alt: 'Mountain sunrise', category: 'SUNRISE', span: 'col-span-2 row-span-1' },
    { src: '/gallery-camping.jpg', alt: 'Night camping', category: 'CAMPING', span: 'col-span-2 row-span-2' },
    { src: '/gallery-lake.jpg', alt: 'Alpine lake', category: 'LAKES', span: 'col-span-1 row-span-1' },
    { src: '/trek-valley-flowers new.jpeg', alt: 'Valley of Flowers', category: 'MOUNTAINS', span: 'col-span-1 row-span-1' },
    { src: '/trek-valley-flowers new1.jpeg', alt: 'Valley of Flowers sunrise', category: 'MOUNTAINS', span: 'col-span-1 row-span-1' },
    { src: '/trek-valley-flowers new2.jpeg', alt: 'Valley of Flowers trail', category: 'MOUNTAINS', span: 'col-span-1 row-span-1' },
    { src: '/trek-valley-flowers new3.jpeg', alt: 'Valley of Flowers wildflowers', category: 'MOUNTAINS', span: 'col-span-1 row-span-1' },
    { src: '/trek-valley-flowers new4.jpeg', alt: 'Valley of Flowers meadow', category: 'MOUNTAINS', span: 'col-span-1 row-span-1' },
    { src: '/trek-valley-flowers new8.jpeg', alt: 'Valley of Flowers hill view', category: 'MOUNTAINS', span: 'col-span-1 row-span-1' },
    { src: '/trek-valley-flowers new9.jpeg', alt: 'Valley of Flowers forest edge', category: 'MOUNTAINS', span: 'col-span-1 row-span-1' },
    { src: '/trek-valley-flowers new10.jpeg', alt: 'Valley of Flowers lake view', category: 'MOUNTAINS', span: 'col-span-1 row-span-1' },
    { src: '/trek-valley-flowers new11.jpeg', alt: 'Valley of Flowers panorama', category: 'MOUNTAINS', span: 'col-span-1 row-span-1' },
    { src: '/gallery-summit.jpg', alt: 'Summit celebration', category: 'TREKKERS', span: 'col-span-2 row-span-1' },
    { src: '/trek-roopkund-new1.jpeg', alt: 'Roopkund Lake', category: 'LAKES', span: 'col-span-1 row-span-1' },
    { src: '/trek-pangachula2.jpg', alt: 'Pangarchulla summit ridge', category: 'SNOW', span: 'col-span-2 row-span-1' },
    { src: '/trek-pangachula.jpg', alt: 'Pangarchulla campsite', category: 'CAMPING', span: 'col-span-1 row-span-1' },
    { src: '/trek-pangachula1.jpg', alt: 'Pangarchulla mountain views', category: 'MOUNTAINS', span: 'col-span-1 row-span-1' },
    { src: '/trek-pangachula3.jpg.jpg', alt: 'Kuari Pass snow trail', category: 'TREKKERS', span: 'col-span-1 row-span-1' },
    { src: '/trek-dayara-bugyal6.jpg', alt: 'Dayara Bugyal campsite', category: 'CAMPING', span: 'col-span-2 row-span-1' },
    { src: '/trek-dayara-bugyal.jpg', alt: 'Dayara Bugyal meadows', category: 'MOUNTAINS', span: 'col-span-1 row-span-1' },
    { src: '/trek-dayara-bugyal2.jpg', alt: 'Dayara Bugyal green slopes', category: 'MOUNTAINS', span: 'col-span-1 row-span-1' },
    { src: '/trek-dayara-bugyal5.jpg', alt: 'Dayara Bugyal alpine lake', category: 'LAKES', span: 'col-span-1 row-span-1' },
    { src: '/trek-dayara-bugyal1.jpg', alt: 'Dayara Bugyal snow trail', category: 'SNOW', span: 'col-span-1 row-span-1' },
    { src: '/trek-dayara-bugyal3.jpg', alt: 'Dayara Bugyal winter panorama', category: 'SNOW', span: 'col-span-2 row-span-1' },
    { src: '/trek-dayara-bugyal4.jpg', alt: 'Dayara Bugyal trekkers in snow', category: 'TREKKERS', span: 'col-span-1 row-span-1' },
    { src: '/trek-alli-badni1.jpg', alt: 'Ali Bedni Bugyal meadows', category: 'MOUNTAINS', span: 'col-span-2 row-span-1' },
    { src: '/trek-alli-badni.jpg', alt: 'Ali Bedni Bugyal Trishul view', category: 'MOUNTAINS', span: 'col-span-1 row-span-1' },
    { src: '/trek-alli-badni4.jpg', alt: 'Bedni Bugyal grazing landscape', category: 'MOUNTAINS', span: 'col-span-1 row-span-1' },
    { src: '/trek-alli-badni3.jpg', alt: 'Ali Bedni Bugyal campsite', category: 'CAMPING', span: 'col-span-1 row-span-1' },
    { src: '/trek-alli-badni2.jpg', alt: 'Ali Bugyal trekkers', category: 'TREKKERS', span: 'col-span-1 row-span-1' },
    { src: '/trek-alli-badni5.jpg', alt: 'Ali Bedni rolling meadow', category: 'MOUNTAINS', span: 'col-span-1 row-span-1' },
    { src: '/trek-alli-badni6.jpg', alt: 'Ali Bedni trail flowers', category: 'FOREST', span: 'col-span-1 row-span-1' },
    { src: '/trek-Kedarnath.jpg', alt: 'Kedarnath Temple', category: 'MOUNTAINS', span: 'col-span-2 row-span-1' },
    { src: '/trek-Kedarnath1.jpg', alt: 'Kedarnath trail', category: 'TREKKERS', span: 'col-span-1 row-span-1' },
    { src: '/trek-Kedarnath2.jpg', alt: 'Kedarnath mountain approach', category: 'TREKKERS', span: 'col-span-1 row-span-1' },
    { src: '/trek-Kedarnath3.jpg', alt: 'Kedarnath valley', category: 'MOUNTAINS', span: 'col-span-1 row-span-1' },
    { src: '/trek-Kedarnath4.jpg', alt: 'Kedarnath route map', category: 'MOUNTAINS', span: 'col-span-1 row-span-1' },
    { src: '/trek-Kedarnath5.jpg', alt: 'Garhwali mountain village', category: 'FOREST', span: 'col-span-1 row-span-1' },
    { src: '/trek-chandrashila.jpg', alt: 'Chandrashila summit panorama', category: 'MOUNTAINS', span: 'col-span-2 row-span-1' },
    { src: '/trek-chandrashila3.jpg', alt: 'Tungnath stone trail', category: 'TREKKERS', span: 'col-span-1 row-span-1' },
    { src: '/trek-chandrashila4.jpg', alt: 'Chandrashila snow viewpoint', category: 'SNOW', span: 'col-span-1 row-span-1' },
    { src: '/trek-chandrashila7.jpg', alt: 'Chandrashila summit group', category: 'TREKKERS', span: 'col-span-1 row-span-1' },
    { src: '/trek-chandrashila5.jpg', alt: 'Chopta Chandrashila route map', category: 'MOUNTAINS', span: 'col-span-1 row-span-1' },
    { src: '/trek-chandrashila6.jpg', alt: 'Chandrashila snow trail', category: 'SNOW', span: 'col-span-1 row-span-1' },
    { src: '/trek-brahmtal-new.jpeg', alt: 'Brahmatal winter', category: 'SNOW', span: 'col-span-1 row-span-1' },
    { src: '/trek-kuari-pass.jpg', alt: 'Kuari Pass', category: 'MOUNTAINS', span: 'col-span-1 row-span-1' },
    { src: '/trek-har-ki-dun-new.jpeg', alt: 'Har Ki Dun valley', category: 'MOUNTAINS', span: 'col-span-1 row-span-1' },
    { src: '/hero-gear.jpg', alt: 'Trekking gear', category: 'CAMPING', span: 'col-span-1 row-span-1' },
    { src: '/trek-tapovan.jpg', alt: 'Tapovan meadows', category: 'MOUNTAINS', span: 'col-span-2 row-span-1' },
    { src: '/about-hero.jpg', alt: 'Aerial mountain view', category: 'MOUNTAINS', span: 'col-span-1 row-span-1' },
    { src: '/gear-flatlay.jpg', alt: 'Essential gear', category: 'CAMPING', span: 'col-span-1 row-span-1' },
    { src: '/gallery-camping.jpg', alt: 'Starry night camp', category: 'CAMPING', span: 'col-span-1 row-span-1' },
  ];

  const filteredImages = filter === 'ALL'
    ? images
    : images.filter(img => img.category === filter);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => setLightboxIndex(prev => prev !== null ? (prev === 0 ? filteredImages.length - 1 : prev - 1) : null);
  const nextImage = () => setLightboxIndex(prev => prev !== null ? (prev === filteredImages.length - 1 ? 0 : prev + 1) : null);

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[30vh] min-h-[250px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/gallery-sunrise.jpg" alt="Gallery hero" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030303] to-transparent" />
        </div>
        <div className="relative z-10 text-center section-padding">
          <ScrollReveal>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight uppercase mb-4">
              {t('gallery.hero.title')}
            </h1>
            <p className="text-lg text-[#9a9a9a]">{t('gallery.hero.subtitle')}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-[#030303] border-b border-white/10 sticky top-16 lg:top-20 z-40">
        <div className="section-padding">
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => { setFilter(f.key); setLightboxIndex(null); }}
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

      {/* Masonry Grid */}
      <section className="py-16 bg-[#030303]">
        <div className="section-padding">
          <div className="columns-2 md:columns-3 gap-2 space-y-2">
            {filteredImages.map((img, i) => (
              <div
                key={`${img.src}-${filter}`}
                className="break-inside-avoid group cursor-pointer relative overflow-hidden"
                onClick={() => openLightbox(i)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-xs uppercase tracking-widest text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    {t(`gallery.filters.${img.category.toLowerCase()}` as const)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-[#d79a63] transition-colors z-10"
          >
            <X className="w-8 h-8" />
          </button>
          <button
            onClick={prevImage}
            className="absolute left-4 text-white hover:text-[#d79a63] transition-colors z-10"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 text-white hover:text-[#d79a63] transition-colors z-10"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
          <div className="text-center">
            <img
              src={filteredImages[lightboxIndex].src}
              alt={filteredImages[lightboxIndex].alt}
              className="max-h-[80vh] max-w-[90vw] object-contain"
            />
            <div className="text-micro mt-4">
              {String(lightboxIndex + 1).padStart(2, '0')} / {String(filteredImages.length).padStart(2, '0')} — {filteredImages[lightboxIndex].alt}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
