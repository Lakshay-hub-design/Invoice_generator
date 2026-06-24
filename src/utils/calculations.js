export const calculateInvoice = (
  items,
  gstRate,
  discount
) => {
  const subtotal = items.reduce(
    (sum, item) =>
      sum +
      item.quantity * item.price,
    0
  );

  let discountAmount = 0;

  if (discount?.type === "percentage") {
    discountAmount =
      subtotal *
      (discount?.value / 100);
  } else {
    discountAmount =
      discount?.value;
  }

  discountAmount = Math.min(
    discountAmount,
    subtotal
  );

  const taxableAmount =
    subtotal - discountAmount;

  const gstAmount =
    taxableAmount *
    (gstRate / 100);

  const total =
    taxableAmount + gstAmount;

  return {
    subtotal,
    discountAmount,
    taxableAmount,
    gstAmount,
    total,
  };
};