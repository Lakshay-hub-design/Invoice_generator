import { calculateInvoice } from "../utils/calculations";

import { currencySymbols } from "../utils/currency";

export function InvoiceSummary({ invoice, onGeneratePdf, isGenerating}) {
  const { subtotal, gstAmount, total, discountAmount } = calculateInvoice(
    invoice.items,
    invoice.gstRate,
    invoice.discount,
  );

  const symbol = currencySymbols[invoice.currency] || "₹";

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm h-full">
      <div className="space-y-4">
        <h1 className="text-3xl font-semibold text-slate-900 mb-6">Summary</h1>

        {/* Subtotal */}

        <div className="flex items-center justify-between">
          <span className="text-slate-600">Subtotal</span>

          <span className="font-semibold text-slate-900">
            {symbol}
            {subtotal.toLocaleString()}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-600">Discount</span>

          <span className="font-semibold text-red-500">
            -{symbol}
            {discountAmount.toLocaleString()}
          </span>
        </div>

        {/* GST */}

        <div className="flex items-center justify-between">
          <span className="text-slate-600">GST ({invoice.gstRate}%)</span>

          <span className="font-semibold text-slate-900">
            {symbol}
            {gstAmount.toLocaleString()}
          </span>
        </div>

        {/* Total */}

        <div className="border-t border-gray-200 pt-5">
          <div className="flex items-center justify-between">
            <span className="text-4xl font-bold text-slate-900">Total</span>

            <span className="text-4xl font-bold text-indigo-600">
              {symbol}
              {total.toLocaleString()}
            </span>
          </div>
        </div>

        <button
        onClick={onGeneratePdf}
        disabled={isGenerating}
          type="button"
          className="w-full mt-6 h-14 rounded-2xl cursor-pointer active:scale-95 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-lg shadow-lg shadow-indigo-200 transition-all"
        >
          {isGenerating
                ? "Generating..."
                : "Generate PDF"}
        </button>
      </div>
    </div>
  );
}