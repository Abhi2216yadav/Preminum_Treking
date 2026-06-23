import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { treks } from '../data/treks';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTreksDropdownOpen, setIsTreksDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsTreksDropdownOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'TREKS', path: '/treks', hasDropdown: true },
    { name: 'GALLERY', path: '/gallery' },
    { name: 'TESTIMONIALS', path: '/testimonials' },
    { name: 'BLOG', path: '/blog' },
    { name: 'FAQ', path: '/faq' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#030303]/95 backdrop-blur-md border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="section-padding">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img
              src="/trekwon-logo-new.png"
              alt="TREKWON"
              className="h-34 lg:h-36 w-auto object-contain group-hover:opacity-80 transition-opacity"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.hasDropdown && setIsTreksDropdownOpen(true)}
                onMouseLeave={() => link.hasDropdown && setIsTreksDropdownOpen(false)}
              >
                <Link
                  to={link.path}
                  className={`text-xs tracking-widest transition-colors flex items-center gap-1 ${
                    location.pathname === link.path
                      ? 'text-[#d79a63]'
                      : 'text-[#9a9a9a] hover:text-white'
                  }`}
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown className="w-3 h-3" />}
                </Link>

                {/* Treks Mega Menu */}
                {link.hasDropdown && isTreksDropdownOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[640px]">
                    <div className="bg-[#121212] border border-white/10 p-6 grid grid-cols-2 gap-4">
                      {treks.map((trek) => (
                        <Link
                          key={trek.id}
                          to={`/treks/${trek.slug}`}
                          className="flex gap-3 group/item hover:bg-white/5 p-2 transition-colors"
                        >
                          <img
                            src={trek.image}
                            alt={trek.name}
                            className="w-20 h-14 object-cover grayscale group-hover/item:grayscale-0 transition-all"
                          />
                          <div>
                            <div className="text-sm text-white group-hover/item:text-[#d79a63] transition-colors">
                              {trek.shortName}
                            </div>
                            <div className="text-micro mt-1">
                              {trek.altitude} | {trek.duration}
                            </div>
                            <div className="text-micro">{trek.difficulty}</div>
                          </div>
                        </Link>
                      ))}
                      <Link
                        to="/treks"
                        className="col-span-2 text-center text-xs uppercase tracking-widest text-[#d79a63] hover:text-white transition-colors py-2 border-t border-white/10"
                      >
                        View All Treks
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/book-a-call"
              className="btn-amber text-xs"
            >
              BOOK A CALL
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#030303]/98 backdrop-blur-md border-t border-white/10">
          <nav className="section-padding py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                  to={link.path}
                  className={`text-sm tracking-widest block py-2 ${
                    location.pathname === link.path
                      ? 'text-[#d79a63]'
                      : 'text-[#9a9a9a]'
                  }`}
                  onClick={() => !link.hasDropdown && setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
                {link.hasDropdown && (
                  <div className="pl-4 mt-2 flex flex-col gap-2">
                    {treks.map((trek) => (
                      <Link
                        key={trek.id}
                        to={`/treks/${trek.slug}`}
                        className="text-xs text-[#9a9a9a] hover:text-[#d79a63] transition-colors py-1"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {trek.shortName}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              to="/book-a-call"
              className="btn-amber text-xs text-center mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              BOOK A CALL
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
