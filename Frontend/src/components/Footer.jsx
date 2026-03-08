import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' }
  ];

  const supportLinks = [
    { name: 'Help Center', href: '#help' },
    { name: 'Emergency Guide', href: '#guide' },
    { name: 'First Aid Tips', href: '#tips' },
    { name: 'FAQs', href: '#faqs' }
  ];

  return (
    <footer className="bg-primary-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo and Tagline */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <FaHeart className="text-2xl text-coral-500" />
              <span className="text-2xl font-bold">QuickAid</span>
            </div>
            <p className="text-blue-100 leading-relaxed">
              Saving Lives, Improving Healthcare Access
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-blue-100 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-blue-100 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-blue-500 mt-8 pt-8 text-center">
          <p className="text-blue-100">
            © 2025 QuickAid. All rights reserved. Emergency healthcare at your fingertips.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;