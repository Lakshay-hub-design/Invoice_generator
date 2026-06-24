export default function Footer() {
  return (
    <footer className="bg-white border border-gray-200 rounded-2xl px-8 py-6 shadow-sm">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        {/* Left Side */}
        <div>
          <h3 className="text-2xl font-bold text-indigo-600">
            Smart Invoice
          </h3>

          <p className="mt-2 text-sm text-slate-600">
            © 2026 Smart Invoice Generator. Precision-crafted for finance.
          </p>

          <div className="flex flex-wrap gap-6 mt-5">
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
        <div className="flex flex-col items-start md:items-end">
          <p className="text-sm text-slate-600">
            Built by Lakshay Sharma
          </p>

          <a
            href="mailto:lakshay0328@gmail.com"
            className="text-indigo-600 text-sm hover:underline mt-1"
          >
            lakshay0328@gmail.com
          </a>

          <button
            onClick={() => window.open('https://digitalheroesco.com', '_blank')}
            className="
              mt-5
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
            "
          >
            Built for Digital Heroes
          </button>
        </div>
      </div>
    </footer>
  );
}