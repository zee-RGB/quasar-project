export function useCurrencify(amount) {
  let posNegSymbol = "";
  if (amount < 0) {
    posNegSymbol = "-";
  } else {
    posNegSymbol = "+";
  }
  const amountFormatted = Math.abs(amount).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    style: "currency",
    currency: "USD",
  });
  return `${posNegSymbol} ${amountFormatted}`;
}
