import {
  BadgeCheck,
  FileText,
  Calculator,
  Globe,
  Receipt,
} from "lucide-react";

import appImage from "../../../screenshots/hero.png";

export default function PreviewSection() {
  return (
    <section
      id="preview"
      className="py-16 sm:py-20 lg:py-28 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* Heading */}

        <div className="max-w-3xl mx-auto text-center">

          <span className="inline-flex px-4 py-2 rounded-full bg-indigo-100 text-indigo-600 font-semibold text-sm">
            Live Invoice Preview
          </span>

          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-slate-900">
            See Every Change
            <span className="block text-indigo-600">
              Instantly
            </span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-gray-500 leading-7 sm:leading-8">
            Edit your invoice on the left while watching the professional
            PDF update live on the right.
          </p>

        </div>

        {/* Preview */}

        <div className="relative mt-14 sm:mt-20 lg:mt-24 flex justify-center">

          {/* Dashboard */}

          <div className="relative w-full max-w-6xl rounded-2xl lg:rounded-[36px] overflow-hidden border border-slate-700 shadow-[0_20px_60px_rgba(0,0,0,.15)]">

            <div className="aspect-[16/10] lg:aspect-auto lg:h-screen max-h-[900px]">

              <img
                src={appImage}
                alt="Invoice Preview"
                className="w-full h-full object-cover object-top"
              />

            </div>

          </div>

          {/* Floating Cards */}

          <Floating
            icon={<Calculator size={18} />}
            title="Auto Calculation"
            className="hidden md:flex -left-4 lg:-left-8 top-20 lg:top-28"
          />

          <Floating
            icon={<FileText size={18} />}
            title="PDF Export"
            className="hidden md:flex -right-4 lg:-right-8 top-16 lg:top-24"
          />

          <Floating
            icon={<Globe size={18} />}
            title="Multi Currency"
            className="hidden lg:flex -left-8 bottom-32"
          />

          <Floating
            icon={<Receipt size={18} />}
            title="Tax & Discount"
            className="hidden lg:flex -right-8 bottom-36"
          />

          <Floating
            icon={<BadgeCheck size={18} />}
            title="Responsive UI"
            className="hidden md:flex left-1/2 -translate-x-1/2 -bottom-6"
          />

        </div>

      </div>
    </section>
  );
}

function Floating({ icon, title, className }) {
  return (
    <div
      className={`absolute ${className}
      bg-white
      rounded-2xl
      border
      border-gray-100
      shadow-xl
      px-4
      py-3
      lg:px-5
      lg:py-4
      items-center
      gap-3
      transition-all
      duration-300
      hover:-translate-y-2
      hover:shadow-2xl`}
    >
      <div className="w-10 h-10 lg:w-11 lg:h-11 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center">
        {icon}
      </div>

      <span className="font-semibold text-sm lg:text-base text-slate-700 whitespace-nowrap">
        {title}
      </span>
    </div>
  );
}