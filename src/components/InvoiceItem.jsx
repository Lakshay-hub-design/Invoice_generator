import { PlusCircle, Trash2 } from "lucide-react";
import { currencySymbols } from "../utils/currency";

export default function InvoiceItem({ invoice, setInvoice }) {
  const symbol = currencySymbols[invoice.currency] || "₹";
  const addItem = () => {
    setInvoice((prev) => ({
      ...prev,
      items: [
        ...prev.items,
        {
          id: crypto.randomUUID(),
          description: "",
          quantity: 1,
          price: 0,
        },
      ],
    }));
  };

  const removeItem = (id) => {
    if (invoice.items.length === 1) return;
    setInvoice((prev) => ({
      ...prev,
      items: prev.items.filter((item) => item.id !== id),
    }));
  };

  const updateItem = (id, field, value) => {
    setInvoice((prev) => ({
      ...prev,
      items: prev.items.map((item) =>
        item.id === id
          ? {
              ...item,
              [field]:
                field === "quantity"
                  ? Math.max(1, Number(value))
                  : field === "price"
                    ? Math.max(0, Number(value))
                    : value,
            }
          : item,
      ),
    }));
  };

  const items = invoice.items;

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
      <h2 className="text-3xl font-semibold text-slate-900">Invoice Items</h2>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="pb-4 text-left text-sm font-semibold text-slate-600">
                Description
              </th>

              <th className="pb-4 text-center text-sm font-semibold text-slate-600 w-32">
                Qty
              </th>

              <th className="pb-4 text-right text-sm font-semibold text-slate-600 w-40">
                Price
              </th>

              <th className="pb-4 text-right text-sm font-semibold text-slate-600 w-40">
                Amount
              </th>

              <th className="w-16"></th>
            </tr>
          </thead>

          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td className="py-5 text-slate-900 font-medium">
                  <input
                    type="text"
                    value={item.description}
                    onChange={(e) =>
                      updateItem(item.id, "description", e.target.value)
                    }
                    placeholder="Website Development"
                    className="w-full h-11 px-3 rounded-lg border border-gray-200 bg-gray-50"
                  />
                </td>

                <td className="py-5">
                  <div className="flex justify-center">
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) =>
                        updateItem(item.id, "quantity", e.target.value)
                      }
                      className="w-20 h-11 text-center rounded-lg border border-gray-200 bg-gray-50 focus:outline-none"
                    />
                  </div>
                </td>

                <td className="py-5 text-right text-slate-900">
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">
                      {symbol}
                    </span>

                    <input
                      type="number"
                      value={item.price}
                      onChange={(e) =>
                        updateItem(item.id, "price", e.target.value)
                      }
                      className="w-32 h-11 pl-8 pr-3 text-right rounded-lg border border-gray-200 bg-gray-50"
                    />
                  </div>
                </td>

                <td className="py-5 text-right font-bold text-slate-900">
                  {symbol}
                  {(item.quantity * item.price).toLocaleString("en-IN", {
                    minimumFractionDigits: 2,
                  })}
                </td>
                <td className="text-right">
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Add Item Button */}
        <button
          type="button"
          onClick={addItem}
          className="mt-3 flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
        >
          <PlusCircle size={18} />
          Add New Item
        </button>
      </div>
    </div>
  );
}