import { Link } from "react-router-dom";
import jsonData from "/data/footer.json";
const footer = jsonData.footer;
const Footer = () => {
  return (
    <footer className="bg-primary-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo and Tagline */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img className="text-white " src={footer.logo} alt={footer.logoText} loading="lazy" />
              <span className="text-2xl font-bold"> {footer.logoText} </span>
            </div>
            <p className="text-blue-100 leading-relaxed">{footer.p}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footer.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-blue-100 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {footer.supportLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-blue-100 hover:text-white transition-colors duration-200"
                  >
                    {link.name} 
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-blue-500 mt-8 pt-8 text-center">
          <p className="text-blue-100">
            © {new Date().getFullYear()} QuickAid. All rights reserved.
            Emergency healthcare at your fingertips.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
