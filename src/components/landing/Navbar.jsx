import { ArrowRight, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
      <div className="max-w-7xl mx-auto h-20 px-5 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}

        <h1 className="text-lg sm:text-xl lg:text-2xl font-bold tracking-tight text-slate-900">
          Smart Invoice Generator
        </h1>

        {/* Desktop Navigation */}

        <nav className="hidden lg:flex items-center gap-10 text-[15px]">
          <a
            href="#features"
            className="font-medium text-slate-600 hover:text-indigo-600 transition"
          >
            Features
          </a>

          <a
            href="#preview"
            className="font-medium text-slate-600 hover:text-indigo-600 transition"
          >
            Preview
          </a>

          <a
            href="#how-it-works"
            className="font-medium text-slate-600 hover:text-indigo-600 transition"
          >
            How It Works
          </a>

          <a
            href="#contact"
            className="font-medium text-slate-600 hover:text-indigo-600 transition"
          >
            Contact
          </a>
        </nav>

        {/* Desktop Buttons */}

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="https://github.com/Lakshay-hub-design/Invoice_generator.git"
            target="_blank"
            rel="noreferrer"
            className="px-5 h-11 rounded-full border border-slate-200 flex items-center justify-center font-medium hover:bg-slate-100 transition"
          >
            GitHub
          </a>

          <Link
            to="/app"
            className="h-11 px-6 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold flex items-center gap-2 shadow-lg shadow-indigo-200 transition"
          >
            Launch App
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Mobile Menu Button */}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden w-11 h-11 rounded-lg flex items-center justify-center border border-gray-200"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="border-t border-gray-100 bg-white px-6 py-6">

          <nav className="flex flex-col gap-5">

            <a
              href="#features"
              onClick={closeMenu}
              className="font-medium text-slate-700 hover:text-indigo-600"
            >
              Features
            </a>

            <a
              href="#preview"
              onClick={closeMenu}
              className="font-medium text-slate-700 hover:text-indigo-600"
            >
              Preview
            </a>

            <a
              href="#how-it-works"
              onClick={closeMenu}
              className="font-medium text-slate-700 hover:text-indigo-600"
            >
              How It Works
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="font-medium text-slate-700 hover:text-indigo-600"
            >
              Contact
            </a>

            <a
              href="https://github.com/Lakshay-hub-design/Invoice_generator.git"
              target="_blank"
              rel="noreferrer"
              className="mt-3 h-11 rounded-full border border-slate-200 flex items-center justify-center font-medium"
            >
              GitHub
            </a>

            <Link
              to="/app"
              onClick={closeMenu}
              className="h-11 rounded-full bg-indigo-600 text-white flex items-center justify-center gap-2 font-semibold"
            >
              Launch App
              <ArrowRight size={18} />
            </Link>

          </nav>
        </div>
      </div>
    </header>
  );
}