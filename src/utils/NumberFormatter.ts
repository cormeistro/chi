export function formatNumberAsShortString(number: number) {
  const formattedNumber = new Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumSignificantDigits: 3,
  })
    .format(number)
    .toString();

  return formattedNumber;
}
