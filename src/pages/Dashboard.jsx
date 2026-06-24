import BusinessForm from "../components/BusinessForm";
import ClientForm from "../components/ClientForm";
import Footer from "../components/Footer";
import InvoiceItem from "../components/InvoiceItem";
import { InvoiceNotes } from "../components/InvoiceNotes";
import InvoicePreview from "../components/InvoicePreview";
import { InvoiceSummary } from "../components/InvoiceSummary";
import Navbar from "../components/Navbar";
import { useRef, useState } from "react";
import { defaultInvoice } from "../data/defaultInvoice";
import { generateInvoiceNumber } from "../utils/generateInvoiceNumber";
import { generatePdf } from "../utils/pdfGenerate";
import { toast } from "sonner";
import { validateInvoice } from "../utils/validation";

export default function Dashboard() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [invoice, setInvoice] = useState(() => {
    const savedInvoice = localStorage.getItem("invoice");

    if (savedInvoice) {
      return JSON.parse(savedInvoice);
    }

    return {
      ...defaultInvoice,
      invoiceNumber: generateInvoiceNumber(),
    };
  });

  const invoiceRef = useRef();
  const handleGeneratePdf = async () => {
    const error = validateInvoice(invoice);
    
    if (error) {
      toast.error(error);
      return;
    }
    
    setIsGenerating(true)
    
    try {
      await generatePdf(invoice);

      toast.success("Invoice generated successfully");
    } catch (error) {
      setIsGenerating(false)
      toast.error("Failed to generate PDF");
    } finally {
      setIsGenerating(false)
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar setInvoice={setInvoice} onGeneratePdf={handleGeneratePdf} isGenerating={isGenerating}/>

      <main className="px-20 py-6">
        <div className="grid lg:grid-cols-[1.5fr_0.9fr] gap-8">
          {/* Left Section */}
          <div className="space-y-6">
            <BusinessForm invoice={invoice} setInvoice={setInvoice} />
            <ClientForm invoice={invoice} setInvoice={setInvoice} />
            <InvoiceItem invoice={invoice} setInvoice={setInvoice} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <InvoiceNotes invoice={invoice} setInvoice={setInvoice} />
              <InvoiceSummary
                invoice={invoice}
                onGeneratePdf={handleGeneratePdf}
                isGenerating={isGenerating}
              />
            </div>
          </div>

          {/* Right Section */}
          <div>
            <InvoicePreview invoice={invoice} ref={invoiceRef} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
