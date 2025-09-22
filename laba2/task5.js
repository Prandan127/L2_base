function primeFactors(n) {
  let result = "";
  for (let i = 2; i * i <= n; i++) {
    let count = 0;
    while (n % i === 0) {
      count++;
      n /= i;
    }
    if (count > 0) result += "(" + i + (count > 1 ? "**" + count : "") + ")";
  }
  if (n > 1) result += "(" + n + ")";
  return result;
}
