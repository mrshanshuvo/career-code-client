import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-12">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start space-y-10 md:space-y-0">
          {/* Brand */}
          <aside className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 md:w-1/4">
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
              className="fill-current text-blue-600"
            >
              <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z" />
            </svg>
            <p className="text-sm font-medium leading-relaxed">
              ACME Industries Ltd.<br />
              Reliable tech solutions since 1992
            </p>
          </aside>

          {/* Navigation */}
          <nav className="flex justify-between flex-grow gap-16 md:gap-24">
            <div>
              <h6 className="font-semibold text-gray-900 mb-5">Services</h6>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-blue-600 transition">Branding</a></li>
                <li><a href="#" className="hover:text-blue-600 transition">Design</a></li>
                <li><a href="#" className="hover:text-blue-600 transition">Marketing</a></li>
                <li><a href="#" className="hover:text-blue-600 transition">Advertisement</a></li>
              </ul>
            </div>

            <div>
              <h6 className="font-semibold text-gray-900 mb-5">Company</h6>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-blue-600 transition">About Us</a></li>
                <li><a href="#" className="hover:text-blue-600 transition">Contact</a></li>
                <li><a href="#" className="hover:text-blue-600 transition">Jobs</a></li>
                <li><a href="#" className="hover:text-blue-600 transition">Press Kit</a></li>
              </ul>
            </div>

            <div>
              <h6 className="font-semibold text-gray-900 mb-5">Legal</h6>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-blue-600 transition">Terms of Use</a></li>
                <li><a href="#" className="hover:text-blue-600 transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-600 transition">Cookie Policy</a></li>
              </ul>
            </div>
          </nav>
        </div>

        {/* Social Media */}
        <div className="mt-12 border-t border-gray-300 pt-6 flex justify-center space-x-8">
          <a href="#" aria-label="Facebook" className="text-gray-600 hover:text-blue-600 transition">
            <FaFacebookF size={20} />
          </a>
          <a href="#" aria-label="Twitter" className="text-gray-600 hover:text-sky-400 transition">
            <FaTwitter size={20} />
          </a>
          <a href="#" aria-label="LinkedIn" className="text-gray-600 hover:text-blue-700 transition">
            <FaLinkedinIn size={20} />
          </a>
          <a href="#" aria-label="Instagram" className="text-gray-600 hover:text-pink-500 transition">
            <FaInstagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
