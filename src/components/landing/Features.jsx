import {
  Eye,
  FileText,
  Calculator,
  BadgeDollarSign,
  CloudUpload,
  Monitor,
} from "lucide-react";

const features = [
  {
    icon: Eye,
    title: "Live Preview",
    description:
      "See your changes in real-time. What you see is exactly what your client gets in their inbox.",
  },
  {
    icon: FileText,
    title: "PDF Export",
    description:
      "Clean, professional PDFs generated instantly using industry-standard React PDF components.",
  },
  {
    icon: Calculator,
    title: "Tax & Discount",
    description:
      "Automated arithmetic for taxes, discounts, and line items. Error-free calculations every time.",
  },
  {
    icon: BadgeDollarSign,
    title: "Multi Currency",
    description:
      "Invoicing global clients? Support for 150+ currencies with native formatting.",
  },
  {
    icon: CloudUpload,
    title: "Logo Upload",
    description:
      "Reinforce your brand identity by adding custom logos to every document you generate.",
  },
  {
    icon: Monitor,
    title: "Responsive UI",
    description:
      "Craft professional invoices from your phone or desktop with our fluid workspace.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="bg-[#f8f9fc] py-16 sm:py-20 lg:py-28"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Heading */}

        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-slate-900">
            Precision Engineering
            <span className="block text-indigo-600">
              For Every Pixel
            </span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-gray-500 leading-7 sm:leading-8">
            Focus on your business, not the formatting. Our features are
            designed for effortless financial document creation.
          </p>
        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="group rounded-3xl border border-gray-200 bg-white p-6 sm:p-7 lg:p-8 shadow-sm transition-all duration-300 hover:-translate-y-3 hover:border-indigo-100 hover:shadow-2xl"
              >
                {/* Icon */}

                <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-indigo-50 transition-all duration-300 group-hover:bg-indigo-600">
                  <Icon
                    size={28}
                    className="text-indigo-600 transition-all duration-300 group-hover:text-white"
                  />
                </div>

                {/* Title */}

                <h3 className="mt-6 text-xl sm:text-2xl font-semibold text-slate-900">
                  {feature.title}
                </h3>

                {/* Description */}

                <p className="mt-4 text-sm sm:text-base leading-7 text-gray-500">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}