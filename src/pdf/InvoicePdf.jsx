import { Document, Page, Text, View, Image, StyleSheet, Font } from "@react-pdf/renderer";
import { currencySymbols } from "../utils/currency";
import { calculateInvoice } from "../utils/calculations";

Font.register({
  family: "NotoSans",
  fonts: [
    {
      src: "/src/assets/fonts/NotoSans_Condensed-Regular.ttf",
      fontWeight: 400,
    },
    {
      src: "/src/assets/fonts/NotoSans_Condensed-Bold.ttf",
      fontWeight: 700,
    },
    {
      src: "/src/assets/fonts/NotoSans_Condensed-Italic.ttf",
      fontStyle: "italic",
      fontWeight: 400,
    },
  ],
});

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 10,
    fontFamily: "NotoSans",
    color: "#0f172a", // slate-900
  },

  // Header
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 30,
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
  logoPlaceholder: {
    width: 48,
    height: 48,
    borderRadius: 8,
    backgroundColor: "#4f46e5", // indigo-600
    alignItems: "center",
    justifyContent: "center",
  },
  logoPlaceholderText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
  invoiceTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#e5e7eb", // light gray, mimics #F3F4F6
    textAlign: "right",
  },
  invoiceNumber: {
    fontWeight: "bold",
    color: "#0f172a",
    marginTop: 6,
    textAlign: "right",
  },
  invoiceDate: {
    fontSize: 9,
    color: "#64748b",
    textAlign: "right",
    marginTop: 2,
  },

  // Company
  companySection: { marginBottom: 28 },
  companyName: { fontSize: 20, fontWeight: "bold", color: "#0f172a" },
  grayLine: { fontSize: 9, color: "#64748b", marginTop: 2 },

  // Client
  clientSection: { marginBottom: 28 },
  sectionLabel: {
    fontSize: 8,
    fontWeight: "bold",
    letterSpacing: 1,
    color: "#94a3b8",
    textTransform: "uppercase",
    marginBottom: 6,
  },
  clientName: { fontSize: 16, fontWeight: "bold", color: "#0f172a" },

  // Items table
  tableHeader: {
    flexDirection: "row",
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#cbd5e1",
  },
  tableRow: {
    flexDirection: "row",
    paddingVertical: 10,
  },
  colDesc: { flex: 3 },
  colQty: { flex: 0.6, textAlign: "center" },
  colTotal: { flex: 1, textAlign: "right" },
  thText: {
    fontSize: 8,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "#0f172a",
  },
  itemDesc: { fontSize: 10, color: "#0f172a" },
  itemQty: { fontSize: 10, color: "#64748b", textAlign: "center" },
  itemTotal: { fontSize: 10, fontWeight: "bold", color: "#0f172a", textAlign: "right" },
  emptyText: {
    textAlign: "center",
    color: "#94a3b8",
    paddingVertical: 20,
  },

  // Summary
  summarySection: {
    borderTopWidth: 1,
    borderTopColor: "#e5e7eb",
    marginTop: 10,
    paddingTop: 14,
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  summaryLabel: { fontSize: 10, color: "#64748b" },
  summaryValue: { fontSize: 10, fontWeight: "bold", color: "#0f172a" },

  // Total
  totalSection: {
    borderTopWidth: 2,
    borderTopColor: "#0f172a",
    marginTop: 16,
    paddingTop: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  totalLabel: {
    fontSize: 14,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "#0f172a",
  },
  totalValue: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0f172a",
  },

  // Footer
  footer: { marginTop: 40 },
  footerText: {
    fontSize: 8,
    color: "#94a3b8",
    fontStyle: "italic"
  },
});

export default function InvoicePDF({ invoice }) {
  const symbol = currencySymbols[invoice.currency];
  const { subtotal, gstAmount, total, discountAmount } = calculateInvoice(
    invoice.items,
    invoice.gstRate,
    invoice.discount
  );

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.headerRow}>
          <View>
            {invoice.business.logo ? (
              <Image src={invoice.business.logo} style={styles.logo} />
            ) : (
              <View style={styles.logoPlaceholder}>
                <Text style={styles.logoPlaceholderText}>
                  {invoice.business.companyName?.charAt(0) || "I"}
                </Text>
              </View>
            )}
          </View>

          <View>
            <Text style={styles.invoiceTitle}>INVOICE</Text>
            <Text style={styles.invoiceNumber}>#{invoice.invoiceNumber}</Text>
            <Text style={styles.invoiceDate}>
              Date: {new Date().toLocaleDateString()}
            </Text>
          </View>
        </View>

        {/* Company */}
        <View style={styles.companySection}>
          <Text style={styles.companyName}>
            {invoice.business.companyName || "Your Company"}
          </Text>
          <Text style={styles.grayLine}>
            {invoice.business.address || "Your Company Address"}
          </Text>
          {invoice.business.email && (
            <Text style={styles.grayLine}>{invoice.business.email}</Text>
          )}
          {invoice.business.gstNumber && (
            <Text style={styles.grayLine}>GST: {invoice.business.gstNumber}</Text>
          )}
        </View>

        {/* Client */}
        <View style={styles.clientSection}>
          <Text style={styles.sectionLabel}>Bill To</Text>
          <Text style={styles.clientName}>{invoice.client.name || "Client"}</Text>
          {invoice.client.address && (
            <Text style={styles.grayLine}>{invoice.client.address}</Text>
          )}
          {invoice.client.email && (
            <Text style={styles.grayLine}>{invoice.client.email}</Text>
          )}
        </View>

        {/* Items table */}
        <View>
          <View style={styles.tableHeader}>
            <Text style={[styles.colDesc, styles.thText]}>Description</Text>
            <Text style={[styles.colQty, styles.thText]}>Qty</Text>
            <Text style={[styles.colTotal, styles.thText]}>Total</Text>
          </View>

          {invoice.items.length === 0 ? (
            <Text style={styles.emptyText}>No invoice items added yet</Text>
          ) : (
            invoice.items.map((item, index) => (
              <View style={styles.tableRow} key={index}>
                <Text style={[styles.colDesc, styles.itemDesc]}>
                  {item.description}
                </Text>
                <Text style={[styles.colQty, styles.itemQty]}>
                  {item.quantity}
                </Text>
                <Text style={[styles.colTotal, styles.itemTotal]}>
                  {symbol}
                  {(item.quantity * item.price).toLocaleString("en-IN", {
                    minimumFractionDigits: 2,
                  })}
                </Text>
              </View>
            ))
          )}
        </View>

        {/* Summary */}
        <View style={styles.summarySection}>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Subtotal</Text>
            <Text style={styles.summaryValue}>
              {symbol}
              {subtotal.toLocaleString()}
            </Text>
          </View>
          
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>
                Discount
                {invoice.discount?.type === "percentage"
                ? ` (${invoice.discount.value}%)`
                : ""}
            </Text>

            <Text
                style={[
                styles.summaryValue,
                { color: "#ef4444" },
                ]}
            >
                -{symbol}
                {discountAmount.toLocaleString()}
            </Text>
        </View>

          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>GST ({invoice.gstRate}%)</Text>
            <Text style={styles.summaryValue}>
              {symbol}
              {gstAmount.toLocaleString()}
            </Text>
          </View>
        </View>

        

        {/* Total */}
        <View style={styles.totalSection}>
          <Text style={styles.totalLabel}>Amount Due</Text>
          <Text style={styles.totalValue}>
            {symbol}
            {total.toLocaleString()}
          </Text>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            {invoice.notes || "Thank you for your business."}
          </Text>
        </View>
      </Page>
    </Document>
  );
}