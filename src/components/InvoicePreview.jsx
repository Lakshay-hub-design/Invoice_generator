import { currencySymbols } from "../utils/currency";
import { calculateInvoice } from "../utils/calculations";
import { forwardRef, useEffect, useState } from "react";
import { Eye } from "lucide-react";

const InvoicePreview = forwardRef(({ invoice }, ref) => {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    localStorage.setItem("invoice", JSON.stringify(invoice));

    setSaved(true);

    const timeout = setTimeout(() => {
      setSaved(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [invoice]);
  const symbol = currencySymbols[invoice.currency];
  const { subtotal, gstAmount, total, discountAmount } = calculateInvoice(
    invoice.items,
    invoice.gstRate,
    invoice.discount,
  );

  if (!invoice.business.companyName) {
    return (
      <div className="bg-white rounded-3xl p-10 text-center shadow-md">
        <h2 className="text-xl font-semibold">Invoice Preview</h2>

        <p className="mt-3 text-slate-500">
          Start filling the invoice details to see a live preview.
        </p>
      </div>
    );
  }

  return (
    <div className="sticky top-21">
      <div className="flex justify-between p-2 ">
        <div className="flex gap-1">
          <Eye className="text-blue-800" size={21} />
          <h4 className="font-semibold">Preview</h4>
        </div>
        {saved ? (
          <span className="text-green-600 text-sm">Draft Saved</span>
        ) : (
          <span className="text-sm font-semibold text-gray-500 ">
            DRAFT MODE
          </span>
        )}
      </div>

      <div
        ref={ref}
        className=" bg-white rounded-3xl border border-gray-200 shadow-sm p-6"
      >
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div>
            {invoice.business.logo ? (
              <img
                src={invoice.business.logo}
                alt="logo"
                className="w-14 h-14 rounded-xl object-cover border"
              />
            ) : (
              <div className="w-12 h-12 rounded-xl bg-indigo-600 flex items-center justify-center text-white text-xl font-bold">
                {invoice.business.companyName?.charAt(0) || "I"}
              </div>
            )}
          </div>

          <div className="text-right">
            <h1 className="text-4xl font-bold text-[#F3F4F6]">INVOICE</h1>

            <p className="font-bold text-slate-900 mt-2">
              #{invoice.invoiceNumber}
            </p>

            <p className="text-sm text-slate-500">
              Date: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>

        {/* Company */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-slate-900">
            {invoice.business.companyName || "Your Company"}
          </h2>

          <div className="mt-2 space-y-1 text-sm text-slate-500">
            <p>{invoice.business.address || "Your Comapny Address"}</p>
            <p>{invoice.business.email}</p>
            {invoice.business.gstNumber && (
              <p>GST: {invoice.business.gstNumber}</p>
            )}
          </div>
        </div>

        {/* Client */}
        <div className="mb-10">
          <p className="text-xs font-bold tracking-wider text-slate-400 uppercase mb-3">
            Bill To
          </p>

          <h3 className="text-2xl font-bold text-slate-900">
            {invoice.client.name || "Client"}
          </h3>

          <div className="mt-1 text-sm text-slate-500">
            <p>{invoice.client.address}</p>
            <p>{invoice.client.email}</p>
          </div>
        </div>

        {/* Items */}
        <div>
          <div className="grid grid-cols-[1fr_60px_90px] pb-3 border-b border-slate-300">
            <span className="text-xs font-bold uppercase text-slate-900">
              Description
            </span>

            <span className="text-xs font-bold uppercase text-center text-slate-900">
              Qty
            </span>

            <span className="text-xs font-bold uppercase text-right text-slate-900">
              Total
            </span>
          </div>

          {invoice.items.length === 0 ? (
            <p className="py-6 text-center text-slate-400">
              No invoice items added yet
            </p>
          ) : (
            invoice.items.map((item, index) => (
              <div key={index} className="grid grid-cols-[1fr_60px_90px] py-4">
                <span className="text-sm text-slate-900">
                  {item.description}
                </span>

                <span className="text-center text-sm text-slate-500">
                  {item.quantity}
                </span>

                <span className="text-right font-semibold text-slate-900">
                  {symbol}
                  {(item.quantity * item.price).toLocaleString("en-IN", {
                    minimumFractionDigits: 2,
                  })}
                </span>
              </div>
            ))
          )}
        </div>

        {/* Summary */}
        <div className="border-t border-gray-200 mt-4 pt-6 space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-slate-500">Subtotal</span>

            <span className="font-semibold">
              {symbol}
              {subtotal.toLocaleString()}
            </span>
          </div>

          <div className="flex justify-between text-sm">
            <span className="text-slate-500">Discount</span>

            <span className="font-semibold text-red-500">
              -{symbol}
              {discountAmount.toLocaleString()}
            </span>
          </div>

          <div className="flex justify-between text-sm">
            <span className="text-slate-500">GST ({invoice.gstRate}%)</span>

            <span className="font-semibold">
              {symbol}
              {gstAmount.toLocaleString()}
            </span>
          </div>
        </div>

        {/* Total */}
        <div className="border-t-2 border-slate-900 mt-6 pt-5">
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold text-slate-900 uppercase">
              Amount Due
            </span>

            <span className="text-4xl font-bold text-slate-900">
              {symbol}
              {total.toLocaleString()}
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12">
          <p className="text-xs italic text-slate-400">
            {invoice.notes || "Thank you for your business."}
          </p>
        </div>
      </div>
    </div>
  );
});

export default InvoicePreview;
