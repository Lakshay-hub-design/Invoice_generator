export const defaultInvoice = {
   business: {
      companyName: "",
      email: "",
      phone: "",
      address: "",
      gstNumber: "",
      logo: null
    },
  
    client: {
      name: "",
      email: "",
      address: "",
    },
  
    items: [
      {
        id: crypto.randomUUID(),
        description: "",
        quantity: 1,
        price: 0,
      },
    ],
  
    notes: "",
  
    currency: "INR",
  
    gstRate: 18,
  
    invoiceNumber: ""
};