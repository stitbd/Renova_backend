export const generatePackageOrderCode = (): string => {
  const now = new Date();

  const date = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Dhaka",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })
    .format(now)
    .split("-")
    .join("");

  const time = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Dhaka",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  })
    .format(now)
    .replace(":", "");

  const random = Math.floor(10000 + Math.random() * 90000);

  return `PKG_${date}${time}_${random}`;
};

export const generatePackageTransactionId = (): string => {
  const random = Math.floor(100000 + Math.random() * 900000);
  return `PKG_TXN_${Date.now()}_${random}`;
};