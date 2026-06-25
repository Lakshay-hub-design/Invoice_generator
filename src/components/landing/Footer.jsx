import { ArrowRight, ArrowUpRight, Globe, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="bg-[#f8f9fc] pt-16 sm:pt-20 lg:pt-24">
      {/* CTA */}

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl lg:rounded-[40px] bg-gradient-to-r from-indigo-700 via-indigo-600 to-indigo-700 py-14 sm:py-20 lg:py-24 px-6 sm:px-10">
          {/* Glow */}

          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-white/10 blur-3xl" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Ready to Create Your First Invoice?
            </h2>

            <p className="mt-6 text-indigo-100 text-base sm:text-lg leading-7 sm:leading-8">
              Join thousands of professionals who have simplified their billing
              process with Smart Invoice Generator.
            </p>

            <button
              onClick={() => navigate("/app")}
              className="group mt-12 inline-flex items-center gap-3 rounded-full bg-white px-6 sm:px-8 py-3 sm:py-4 font-semibold text-indigo-700 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              Get Started Now — It's Free
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}

      <div id="contact" className="border-t mt-10 border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-10">
          {/* Top */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10 lg:gap-14">
            {/* Brand */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Smart Invoice
              </h2>

              <p className="mt-6 text-gray-500 text-sm sm:text-base leading-7">
                A modern invoice generator for creating professional invoices,
                calculating tax & discounts, and exporting beautiful PDF
                invoices instantly.
              </p>

              <p className="mt-6 text-sm font-medium text-slate-700">
                Built by <span className="text-indigo-600">Lakshay Sharma</span>
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
                Quick Links
              </h4>

              <div className="mt-6 space-y-4">
                <a
                  href="#features"
                  className="block text-gray-500 hover:text-indigo-600 transition"
                >
                  Features
                </a>

                <a
                  href="#preview"
                  className="block text-gray-500 hover:text-indigo-600 transition"
                >
                  Live Preview
                </a>

                <a
                  href="#how-it-works"
                  className="block text-gray-500 hover:text-indigo-600 transition"
                >
                  How It Works
                </a>

                <Link
                  to="/app"
                  className="block text-gray-500 hover:text-indigo-600 transition"
                >
                  Launch App
                </Link>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
                Contact
              </h4>

              <div className="mt-6 space-y-4">
                <a
                  href="mailto:lakshay0328@gmail.com"
                  className="flex items-center gap-2 text-gray-500 hover:text-indigo-600 transition"
                >
                  <Mail size={16} />
                  lakshay0328@gmail.com
                </a>

                <a
                  href="https://github.com/Lakshay-hub-design"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-sm sm:text-base break-all text-gray-500 hover:text-indigo-600 transition"
                >
                  <FaGithub size={16} />
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/lakshaysharma28"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-sm sm:text-base break-all text-gray-500 hover:text-indigo-600 transition"
                >
                  <FaLinkedin size={16} />
                  LinkedIn
                </a>

                <a
                  href="https://YOUR-PORTFOLIO.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-sm sm:text-base break-all text-gray-500 hover:text-indigo-600 transition"
                >
                  <Globe size={16} />
                  Portfolio
                </a>
              </div>
            </div>

            {/* Digital Heroes */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
                Digital Heroes
              </h4>

              <p className="mt-6 text-gray-500 text-sm sm:text-base leading-7">
                This project was developed as part of the Digital Heroes
                Frontend Developer Trial Task.
              </p>

              <a
                href="https://digitalheroesco.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 mt-6 px-5 sm:px-6 h-11 w-full sm:w-fit justify-center rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition"
              >
                Visit Digital Heroes
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-10 border-t border-gray-200 pt-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-sm text-gray-500 text-center lg:text-left">
              © {new Date().getFullYear()} Smart Invoice Generator. Designed &
              Developed by <span className="font-semibold">Lakshay Sharma</span>
              .
            </p>

            <div className="flex items-center gap-4">
              <a
                href="https://github.com/Lakshay-hub-design"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all duration-300"
              >
                <FaGithub size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/lakshaysharma28"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all duration-300"
              >
                <FaLinkedin size={18} />
              </a>

              <a
                href="mailto:lakshay0328@gmail.com"
                className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all duration-300"
              >
                <Mail size={18} />
              </a>

              <a
                href="https://lakshay-hub-design.github.io/portfolio"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all duration-300"
              >
                <Globe size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
