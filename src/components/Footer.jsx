export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-10">
      <div className="mx-auto px-5 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          {/* Left Side */}
          <div className="text-center lg:text-left">
            <h3 className="text-2xl font-bold text-indigo-600">
              Smart Invoice
            </h3>

            <p className="mt-2 text-sm text-slate-600">
              © 2026 Smart Invoice Generator. Precision-crafted for finance.
            </p>

            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-3 sm:gap-6 mt-5">
              <button className="text-sm text-slate-700 hover:text-indigo-600 transition-colors">
                Contact Support
              </button>

              <button className="text-sm text-slate-700 hover:text-indigo-600 transition-colors">
                Privacy Policy
              </button>

              <button className="text-sm text-slate-700 hover:text-indigo-600 transition-colors">
                Terms of Service
              </button>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col items-center lg:items-end">
            <p className="text-sm text-slate-600">
              Built by Lakshay Sharma
            </p>

            <a
              href="mailto:lakshay0328@gmail.com"
              className="text-indigo-600 text-sm hover:underline mt-1 break-all text-center lg:text-right"
            >
              lakshay0328@gmail.com
            </a>

            <button
              onClick={() =>
                window.open(
                  "https://digitalheroesco.com",
                  "_blank"
                )
              }
              className="
                mt-5
                w-full
                sm:w-auto
                px-6
                py-3
                rounded-xl
                bg-indigo-600
                hover:bg-indigo-700
                text-white
                text-sm
                font-semibold
                shadow-lg
                shadow-indigo-200
                transition-all
                active:scale-95
              "
            >
              Built for Digital Heroes
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}