import { ArrowRight, FileText } from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Input Your Details",
    description:
      "Enter your business information and your client's details. Your data stays securely in your browser.",
  },
  {
    number: "2",
    title: "Add Your Items",
    description:
      "List products or services with quantities, prices, taxes, and discounts. We calculate everything automatically.",
  },
  {
    number: "3",
    title: "Generate & Export",
    description:
      "Preview your invoice instantly and export a clean, professional PDF with a single click.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-16 sm:py-20 lg:py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* LEFT */}

          <div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-slate-900">
              From Details to PDF

              <span className="block text-indigo-600">
                in 3 Easy Steps
              </span>

            </h2>

            <p className="mt-5 text-base sm:text-lg text-gray-500 leading-7 sm:leading-8 max-w-xl">
              Create beautiful invoices in less than a minute without
              complicated software.
            </p>

            <div className="relative mt-12 sm:mt-16">

              {/* Timeline */}

              <div className="absolute left-5 sm:left-6 top-0 bottom-0 w-[2px] bg-indigo-100" />

              {steps.map((step) => (
                <div
                  key={step.number}
                  className="group relative flex gap-5 sm:gap-8 pb-10 sm:pb-14"
                >
                  {/* Number */}

                  <div className="relative z-10 flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold shadow-lg shadow-indigo-500/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">

                    {step.number}

                  </div>

                  {/* Content */}

                  <div>

                    <h3 className="flex items-center gap-2 text-lg sm:text-xl font-semibold text-slate-900">

                      {step.title}

                      <ArrowRight
                        size={18}
                        className="text-indigo-500 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                      />

                    </h3>

                    <p className="mt-3 text-sm sm:text-base leading-7 text-gray-500 max-w-md">
                      {step.description}
                    </p>

                  </div>

                </div>
              ))}

            </div>

          </div>

          {/* RIGHT */}

          <div className="relative flex justify-center">

            {/* Background */}

            <div className="absolute inset-0 rounded-[28px] lg:rounded-[40px] bg-indigo-50" />

            {/* Browser */}

            <div className="relative hidden lg:flex w-full max-w-[560px] rounded-[24px] lg:rounded-[30px] overflow-hidden border border-gray-100 bg-white shadow-[0_20px_60px_rgba(0,0,0,.12)] transition-all duration-500 hover:-translate-y-3">

              {/* Browser Top */}

              <div className="h-12 sm:h-14 border-b border-gray-100 flex items-center px-4 sm:px-5 gap-2">

                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />

              </div>

              {/* Invoice */}

              <div className="p-5 sm:p-6 lg:p-8">

                <div className="flex justify-between items-start">

                  <div>

                    <div className="h-5 w-28 sm:w-40 rounded bg-gray-200 mb-4" />

                    <div className="h-3 w-20 sm:w-28 rounded bg-gray-100" />

                  </div>

                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-indigo-100 flex items-center justify-center">

                    <FileText
                      className="text-indigo-600"
                      size={24}
                    />

                  </div>

                </div>

                <div className="mt-8 sm:mt-10 space-y-5">

                  <div className="h-3 rounded bg-gray-200" />

                  <div className="h-3 rounded bg-gray-100 w-4/5" />

                  <div className="h-px bg-gray-200" />

                  <div className="grid grid-cols-2 gap-4 sm:gap-8">

                    <div className="space-y-4">

                      <div className="h-3 rounded bg-gray-200" />

                      <div className="h-3 rounded bg-gray-100" />

                    </div>

                    <div className="space-y-4">

                      <div className="h-3 rounded bg-gray-200" />

                      <div className="h-3 rounded bg-gray-100" />

                    </div>

                  </div>

                  <div className="mt-8 sm:mt-10 flex justify-end">

                    <div className="w-28 sm:w-40 h-10 sm:h-12 rounded-lg bg-indigo-600" />

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}