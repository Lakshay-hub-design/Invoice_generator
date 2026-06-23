import { Eye } from "lucide-react";
import BusinessForm from "../components/BusinessForm";
import ClientForm from "../components/ClientForm";
import Footer from "../components/Footer";
import InvoiceItem from "../components/InvoiceItem";
import { InvoiceNotes } from "../components/InvoiceNotes";
import InvoicePreview from "../components/InvoicePreview";
import { InvoiceSummary } from "../components/InvoiceSummary";
import Navbar from "../components/Navbar";
import { useEffect, useRef, useState } from "react";
import { defaultInvoice } from "../data/defaultInvoice";
import { generateInvoiceNumber } from "../utils/generateInvoiceNumber";
import { generatePdf } from "../utils/generatePdf";

export default function Dashboard() {
    const [invoice, setInvoice] = useState(() => {
    const savedInvoice =
        localStorage.getItem("invoice");

    if (savedInvoice) {
        return JSON.parse(savedInvoice);
    }

    return {
        ...defaultInvoice,
        invoiceNumber: generateInvoiceNumber(),
    };
    });

  const [saved, setSaved] = useState(false);
  const invoiceRef = useRef();

  useEffect(() => {
    localStorage.setItem("invoice", JSON.stringify(invoice));

    setSaved(true);

    const timeout = setTimeout(() => {
      setSaved(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [invoice]);

  const handleGeneratePdf =
  async () => {
    await generatePdf(
      invoiceRef.current,
      `${invoice.invoiceNumber}.pdf`
    );
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar setInvoice={setInvoice} onGeneratePdf={handleGeneratePdf} />

      <main className="px-20 py-6">
        <div className="grid lg:grid-cols-[1.5fr_0.9fr] gap-8">
          {/* Left Section */}
          <div className="space-y-6">
            <BusinessForm invoice={invoice} setInvoice={setInvoice} />
            <ClientForm invoice={invoice} setInvoice={setInvoice} />
            <InvoiceItem invoice={invoice} setInvoice={setInvoice} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <InvoiceNotes invoice={invoice} setInvoice={setInvoice} />
              <InvoiceSummary invoice={invoice} />
            </div>
          </div>

          {/* Right Section */}
          <div>
            <div className="flex justify-between p-2">
              <div className="flex gap-1">
                <Eye className="text-blue-800" size={21} />
                <h4 className="font-semibold">Preview</h4>
              </div>
              {saved ? (
                <span className="text-green-600 text-sm">Draft Saved</span>
              ) : (
                <span className="text-sm font-semibold text-gray-500">
                  DRAFT MODE
                </span>
              )}
            </div>
            <InvoicePreview invoice={invoice} ref={invoiceRef} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
