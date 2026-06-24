export function InvoiceNotes({ invoice, setInvoice }) {
  const handleChange = (e) => {
    const { name, value } = e.target;

    setInvoice((prev) => ({
      ...prev,
      [name]: name === "gstRate" ? Number(value) : value,
    }));
  };
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm h-full">
      <h2 className="text-3xl font-semibold text-slate-900 mb-6">Notes</h2>

      <div className="space-y-5">
        <textarea
          name="notes"
          value={invoice.notes}
          onChange={handleChange}
          rows={4}
          placeholder="Enter terms or payment instructions..."
          className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <div className="grid grid-cols-2 gap-4">
          {/* Currency */}
          <div>
            <label className="block text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wide">
              Currency
            </label>

            <select
              name="currency"
              value={invoice.currency}
              onChange={handleChange}
              className="w-full h-11 rounded-xl border border-gray-200 bg-gray-50 px-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="INR">INR (₹)</option>
              <option value="USD">USD ($)</option>
              <option value="EUR">EUR (€)</option>
            </select>
          </div>

          {/* GST */}
          <div>
            <label className="block text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wide">
              GST (%)
            </label>

            <select
              name="gstRate"
              value={invoice.gstRate}
              onChange={handleChange}
              className="w-full h-11 rounded-xl border border-gray-200 bg-gray-50 px-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value={0}>0%</option>
              <option value={5}>5%</option>
              <option value={18}>18%</option>
              <option value={28}>40%</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-500 mb-2 uppercase">
              Discount Type
            </label>

            <select
              value={invoice.discount?.type}
              onChange={(e) =>
                setInvoice((prev) => ({
                  ...prev,
                  discount: {
                    ...prev.discount,
                    type: e.target.value,
                  },
                }))
              }
              className="w-full h-11 rounded-xl border border-gray-200 bg-gray-50 px-3"
            >
              <option value="percentage">Percentage (%)</option>

              <option value="fixed">Fixed Amount</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-500 mb-2 uppercase">
              Discount Value
            </label>

            <input
              type="number"
              min="0"
              value={invoice.discount?.value}
              onChange={(e) =>
                setInvoice((prev) => ({
                  ...prev,
                  discount: {
                    ...prev.discount,
                    value: Number(e.target.value),
                  },
                }))
              }
              className="w-full h-11 rounded-xl border border-gray-200 bg-gray-50 px-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
}