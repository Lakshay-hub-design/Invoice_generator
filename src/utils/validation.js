export const validateInvoice = (
  invoice
) => {
  // Business

  if (
    !invoice.business.companyName.trim()
  ) {
    return "Company name is required";
  }

  if (
    !invoice.business.email.trim()
  ) {
    return "Business email is required";
  }

  // Client

  if (
    !invoice.client.name.trim()
  ) {
    return "Client name is required";
  }

  // Items

  if (
    invoice.items.length === 0
  ) {
    return "Add at least one invoice item";
  }

  for (const item of invoice.items) {
    if (
      !item.description.trim()
    ) {
      return "Every item must have a description";
    }

    if (
      item.quantity <= 0
    ) {
      return "Quantity must be greater than 0";
    }

    if (
      item.price < 0
    ) {
      return "Price cannot be negative";
    }
  }

  return null;
};