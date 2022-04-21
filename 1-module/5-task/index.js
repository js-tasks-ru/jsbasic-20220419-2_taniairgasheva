function truncate(str, maxlength) {
  let truncatedString =
    str.length > maxlength
      ? str.slice(str.charAt(0), maxlength - 1) + "…"
      : str;
  return truncatedString;
}
