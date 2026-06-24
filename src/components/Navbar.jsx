import { defaultInvoice } from "../data/defaultInvoice";

export default function Navbar({ setInvoice, onGeneratePdf, isGenerating }) {

  const resetInvoice = () => {
    localStorage.removeItem("invoice");

    setInvoice(defaultInvoice);
  };
  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className=" h-16 flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl ">
            <img className="w-full h-full object-contain" src="/src/assets/logo.png" alt="" />
          </div>

          <div>
            <h1 className="font-bold text-xl">Smart Invoice Generator</h1>
          </div>
        </div>

        <div className="flex gap-3">
            <button onClick={resetInvoice} className="px-4 py-2 border rounded-xl cursor-pointer active:scale-95 transition-all">
                New Invoice
            </button>

            <button
            onClick={onGeneratePdf}
            disabled={isGenerating}
             className="px-5 py-2 rounded-xl bg-indigo-600 text-white cursor-pointer active:scale-95 transition-all font-medium hover:bg-indigo-700 transition">
                {isGenerating
                ? "Generating..."
                : "Generate PDF"}
            </button>
        </div>
      </div>
    </header>
  );
}