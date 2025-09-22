function whatCentury(year) {
  const n = Math.floor((+year - 1) / 100) + 1;
  const s = n.toString();
  if (/(11|12|13)$/.test(s)) return s + "th";
  if (s.endsWith("1")) return s + "st";
  if (s.endsWith("2")) return s + "nd";
  if (s.endsWith("3")) return s + "rd";
  return s + "th";
}
