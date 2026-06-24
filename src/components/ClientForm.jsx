export default function ClientForm({ invoice, setInvoice }) {
    const handleChange = (e) => {
        setInvoice((prev) => ({
            ...prev,
            client: {
            ...prev.client,
            [e.target.name]: e.target.value,
            },
        }));
    };
    
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-semibold text-slate-900">
          Bill To
        </h2>
      </div>

      <div className="border-t border-gray-200 mt-4 pt-6">
        {/* First Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Client Name */}
          <div>
            <label className="block text-sm font-medium text-slate-600 mb-2">
              Client Name
            </label>

            <input
                name="name"
                value={invoice.client.name}
                onChange={handleChange}
              type="text"
              placeholder="Who is this invoice for?"
              className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-gray-50 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-600 mb-2">
                Email Address
            </label>

            <input
                name="email"
                value={invoice.client.email}
                onChange={handleChange}
                type="email"
                placeholder="client@example.com"
                className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-gray-50"
            />
            </div>

          {/* Invoice Number */}
          <div>
            <label className="block text-sm font-medium text-slate-600 mb-2">
              Invoice Number
            </label>

            <input
              type="text"
              value={invoice.invoiceNumber}
              readOnly
              className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-gray-50 text-slate-900 focus:outline-none"
            />
          </div>
        </div>

        {/* Address */}
        <div className="mt-5">
          <label className="block text-sm font-medium text-slate-600 mb-2">
            Billing Address
          </label>

          <textarea
            name="address"
            value={invoice.client.address}
            onChange={handleChange}
            rows={4}
            placeholder="Enter full address..."
            className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
          />
        </div>
      </div>
    </div>
  );
}