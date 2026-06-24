export const generatePrescriptionCode = () => {
  const now = new Date();

const datePart = new Intl.DateTimeFormat("en-CA", {
  timeZone: "Asia/Dhaka",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
})
  .format(now)
  .replace(/-/g, "");

  const random = Math.floor(10000 + Math.random() * 90000);

  return `RX_${datePart}_${random}`;
};