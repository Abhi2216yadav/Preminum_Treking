import { Link } from 'react-router-dom';
import { Mountain, Instagram, Facebook, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { treks } from '../data/treks';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Blog', path: '/blog' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
    { name: 'Book A Call', path: '/book-a-call' },
  ];

  return (
    <footer className="bg-[#030303] border-t border-white/10">
      {/* Main Footer */}
      <div className="section-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <Mountain className="w-6 h-6 text-[#d79a63]" />
              <span className="text-xl font-medium tracking-tight">TREKWON</span>
            </Link>
            <p className="text-sm text-[#9a9a9a] leading-relaxed mb-6">
              Premium guided trekking experiences across the Indian Himalayas. 
              Safe, sustainable, and unforgettable adventures since 2014.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-[#9a9a9a] hover:text-[#d79a63] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-[#9a9a9a] hover:text-[#d79a63] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-[#9a9a9a] hover:text-[#d79a63] transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-[#9a9a9a] hover:text-[#d79a63] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Treks */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white mb-6">Our Treks</h4>
            <ul className="space-y-3">
              {treks.map((trek) => (
                <li key={trek.id}>
                  <Link
                    to={`/treks/${trek.slug}`}
                    className="text-sm text-[#9a9a9a] hover:text-[#d79a63] transition-colors"
                  >
                    {trek.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#d79a63] mt-0.5" />
                <span className="text-sm text-[#9a9a9a]">+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#d79a63] mt-0.5" />
                <span className="text-sm text-[#9a9a9a]">info@trekwon.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#d79a63] mt-0.5" />
                <span className="text-sm text-[#9a9a9a]">
                  123 Mountain View Road,<br />
                  Dehradun, Uttarakhand,<br />
                  India - 248001
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 section-padding py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#9a9a9a]">
            &copy; {new Date().getFullYear()} TREKWON. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-[#9a9a9a] hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-[#9a9a9a] hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-xs text-[#9a9a9a] hover:text-white transition-colors">
              Cancellation Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
