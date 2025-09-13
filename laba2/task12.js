function longest(arr, n) {
  const sorted = [...arr].sort((a, b) => b.length - a.length || arr.indexOf(a) - arr.indexOf(b));
  return sorted[n - 1];
}
