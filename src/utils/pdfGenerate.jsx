import { pdf } from "@react-pdf/renderer";
import { saveAs } from "file-saver";
import InvoicePDF from "../pdf/InvoicePdf";

export const generatePdf = async (
  invoice
) => {
  const blob = await pdf(
    <InvoicePDF invoice={invoice} />
  ).toBlob();

  saveAs(
    blob,
    `invoice-${invoice.invoiceNumber}.pdf`
  );
};