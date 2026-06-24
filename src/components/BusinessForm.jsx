import { UploadCloud } from "lucide-react";

export default function BusinessForm({ invoice, setInvoice }) {
  const handleChange = (e) => {
    setInvoice((prev) => ({
      ...prev,
      business: {
        ...prev.business,
        [e.target.name]: e.target.value,
      },
    }));
  };

const handleLogoUpload = (e) => {
  const file = e.target.files[0];

  const reader = new FileReader();

  reader.onloadend = () => {
    setInvoice((prev) => ({
      ...prev,
      business: {
        ...prev.business,
        logo: reader.result,
      },
    }));
  };

  reader.readAsDataURL(file);
};
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-slate-900">
        Business Information
      </h2>

      <div className="border-t border-gray-200 mt-4 pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Form Fields */}
          <div className="space-y-5">
            {/* Company Name */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Company Name
              </label>

              <input
                name="companyName"
                value={invoice.business.companyName}
                onChange={handleChange}
                type="text"
                placeholder="Digital Heroes Agency"
                className="w-full h-12 px-4 border border-gray-200 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Email Address
              </label>

              <input
                name="email"
                value={invoice.business.email}
                onChange={handleChange}
                type="email"
                placeholder="billing@digitalheroes.com"
                className="w-full h-12 px-4 border border-gray-200 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Business Address
              </label>

              <textarea
                name="address"
                value={invoice.business.address}
                onChange={handleChange}
                rows={3}
                placeholder="Enter business address"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 resize-none"
              />
            </div>
          </div>

          <div>
            {/* GST Number */}
            <div className="mb-5">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                GST Number
              </label>

              <input
                name="gstNumber"
                value={invoice.business.gstNumber}
                onChange={handleChange}
                type="text"
                placeholder="22AAAAA0000A1Z5"
                className="w-full h-12 px-4 border border-gray-200 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Company Logo
              </label>

              <label className="h-40 border border-gray-200 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer flex flex-col items-center justify-center overflow-hidden">
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleLogoUpload}
                />

                {invoice.business.logo ? (
                  <img
                    src={invoice.business.logo}
                    alt="Company Logo"
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <>
                    <UploadCloud className="w-8 h-8 text-slate-500" />
                    <p className="mt-3 text-sm font-medium text-slate-700">
                      Upload Company Logo
                    </p>
                  </>
                )}
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}