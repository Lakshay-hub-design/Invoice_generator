import { Rocket, FileText, Eye, Calculator } from "lucide-react";
import { gsap } from "gsap";
import { useLayoutEffect } from "react";
import appImage from  "../../../screenshots/hero.png"
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate()
  useLayoutEffect(() => {
    const tl = gsap.timeline();

    tl.from("#invoice-card", {
      opacity: 0,
      y: 80,
      rotate: -25,
      duration: 1.4,
      ease: "power4.out",
    });

    tl.from(
      ".floating-card",
      {
        opacity: 0,
        scale: 0.8,
        y: 30,
        stagger: 0.2,
        duration: 0.8,
        ease: "back.out(1.7)",
      },
      "-=.8",
    );
  }, []);

  useLayoutEffect(() => {
    gsap.to("#invoice-card", {
      y: -18,

      duration: 3,

      repeat: -1,

      yoyo: true,

      ease: "sine.inOut",
    });

    gsap.to(".floating-card", {
      y: -12,

      duration: 2,

      repeat: -1,

      yoyo: true,

      stagger: 0.4,

      ease: "sine.inOut",
    });
  }, []);

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[#f7f8fd] min-h-screen flex items-center pt-28 lg:pt-24"
    >
      {/* Background Blur */}

      <div className="absolute -left-40 top-40 w-96 h-96 bg-indigo-200 rounded-full blur-[140px] opacity-40" />

      <div className="absolute right-0 top-20 w-[450px] h-[450px] bg-blue-100 rounded-full blur-[180px] opacity-50" />

      <div className="max-w-7xl mx-auto w-full px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        {/* LEFT */}

        <div className="text-center lg:text-left">
          {/* Badge */}

          <div className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm bg-indigo-600 text-white rounded-full font-medium shadow-lg shadow-indigo-500/30">
            ✨ Browser-Based • Secure • No Installation
          </div>

          <h1 className="mt-8 lg:mt-10 text-4xl sm:text-5xl lg:text-6xl leading-tight font-black tracking-tight text-slate-900">
            Create Professional
            <span className="block text-indigo-600">Invoices</span>
            in Minutes
          </h1>

          <p className="mt-6 lg:mt-8 text-base sm:text-lg lg:text-xl leading-7 lg:leading-9 text-slate-500 max-w-xl mx-auto lg:mx-0">
            A surgical tool for modern professionals. Generate elegant PDF
            invoices with live preview, automatic tax calculations,
            multi-currency support and lightning fast exports.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <button
            onClick={() => navigate('/app')}
            className="group bg-indigo-600 hover:bg-indigo-700 transition px-7 py-4 rounded-full text-white font-semibold flex items-center justify-center gap-3 shadow-xl shadow-indigo-500/30">
              Launch App
              <Rocket
                size={18}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition"
              />
            </button>

            <button 
            onClick={() => window.open('https://github.com/Lakshay-hub-design/Invoice_generator.git', '_blank')}
            className="bg-white border border-gray-200 hover:border-indigo-500 transition px-7 py-4 rounded-full font-semibold flex items-center justify-center shadow-sm">
              View Github
            </button>
          </div>
        </div>

        {/* RIGHT */}

        <div className="relative flex justify-center mt-10 lg:mt-0">
          {/* Floating Badge */}

          <div className="floating-card hidden md:flex absolute -top-8 right-0 bg-white rounded-2xl shadow-2xl px-6 py-4 flex items-center gap-3 z-20">
            <div className="bg-indigo-100 p-2 rounded-lg">
              <FileText className="text-indigo-600" size={18} />
            </div>

            <div>
              <p className="font-semibold text-gray-800">PDF Ready</p>

              <span className="text-sm text-gray-500">Export instantly</span>
            </div>
          </div>

          {/* Floating */}

          <div className="floating-card hidden md:flex absolute top-44 -left-10 bg-white rounded-2xl shadow-2xl px-6 py-4 flex items-center gap-3 z-20">
            <div className="bg-green-100 p-2 rounded-lg">
              <Eye className="text-green-600" size={18} />
            </div>

            <div>
              <p className="font-semibold">Live Preview</p>

              <span className="text-sm text-gray-500">Real-time rendering</span>
            </div>
          </div>

          {/* Floating */}

          <div className="floating-card hidden md:flex absolute -bottom-8 left-10 bg-white rounded-2xl shadow-2xl px-6 py-4 flex items-center gap-3 z-20">
            <div className="bg-orange-100 p-2 rounded-lg">
              <Calculator className="text-orange-600" size={18} />
            </div>

            <div>
              <p className="font-semibold">Tax Calculation</p>

              <span className="text-sm text-gray-500">Automatic GST</span>
            </div>
          </div>

          {/* Dashboard */}

          <div className="w-full max-w-[620px] aspect-[620/520] rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,.18)] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative">
                        
            <img className="w-full h-full object-cover object-[center_7%]" src={appImage} alt="" />
           
          </div>
        </div>
      </div>
    </section>
  );
}
