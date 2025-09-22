function expandedForm(num) {
  return num
    .toString()
    .split('')
    .map((digit, idx, arr) => digit !== '0' ? digit + '0'.repeat(arr.length - idx - 1) : '')
    .filter(Boolean)
    .join(' + ');
}
