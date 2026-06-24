export const generateInvoiceNumber = () => {
  const year = new Date().getFullYear();

  const count =
    Number(
      localStorage.getItem("invoice-count")
    ) || 1;

  localStorage.setItem(
    "invoice-count",
    count + 1
  );

  return `INV-${year}-${String(count).padStart(
    4,
    "0"
  )}`;
};