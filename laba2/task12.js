function longest(arr, n) {
  return arr
    .map((str, idx) => ({ str, idx }))
    .sort((a, b) => b.str.length - a.str.length || a.idx - b.idx)[n - 1].str;
}
