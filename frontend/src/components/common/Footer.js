import React from 'react';
import Link from 'next/link';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn,
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCreditCard,
  FaShieldAlt,
  FaTruck
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">

      {/* Bottom Bar */}
      <div className="bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-center md:text-left">
              © {currentYear} MisterOffice. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/#" className="hover:text-blue-400 transition-colors duration-300">
                Términos y Condiciones
              </Link>
              <Link href="/" className="hover:text-blue-400 transition-colors duration-300">
                Aviso de Privacidad
              </Link>
              <Link href="/" className="hover:text-blue-400 transition-colors duration-300">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;