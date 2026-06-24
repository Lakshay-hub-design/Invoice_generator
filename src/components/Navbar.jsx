import { useState } from "react";
import { Menu, X } from "lucide-react";
import { defaultInvoice } from "../data/defaultInvoice";
import logo from "../assets/logo.png";

export default function Navbar({
  setInvoice,
  onGeneratePdf,
  isGenerating,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const resetInvoice = () => {
    localStorage.removeItem("invoice");
    setInvoice(defaultInvoice);
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="mx-auto px-5">
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 min-w-0">
            <div className="h-10 w-10 shrink-0">
              <img
                className="w-full h-full object-contain"
                src={logo}
                alt="Logo"
              />
            </div>

            <h1 className="font-bold text-lg md:text-xl truncate">
              Smart Invoice Generator
            </h1>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={resetInvoice}
              className="px-4 py-2 border border-gray-300 rounded-xl cursor-pointer active:scale-95 transition-all"
            >
              New Invoice
            </button>

            <button
              onClick={onGeneratePdf}
              disabled={isGenerating}
              className="px-5 py-2 rounded-xl bg-indigo-600 text-white cursor-pointer active:scale-95 font-medium hover:bg-indigo-700 transition disabled:opacity-70"
            >
              {isGenerating
                ? "Generating..."
                : "Generate PDF"}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() =>
              setIsMenuOpen(!isMenuOpen)
            }
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen
              ? "max-h-40 pb-4"
              : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-3">
            <button
              onClick={resetInvoice}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl text-left"
            >
              New Invoice
            </button>

            <button
              onClick={() => {
                onGeneratePdf();
                setIsMenuOpen(false);
              }}
              disabled={isGenerating}
              className="w-full px-4 py-3 rounded-xl bg-indigo-600 text-white font-medium disabled:opacity-70"
            >
              {isGenerating
                ? "Generating..."
                : "Generate PDF"}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}