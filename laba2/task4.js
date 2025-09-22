function findMissing(arr) {
  const n = arr.length;
  let diff;
  if (arr[1] - arr[0] === arr[n - 1] - arr[n - 2]) {
    diff = arr[1] - arr[0];
  } else if ((arr[n - 1] - arr[0]) / n === arr[1] - arr[0]) {
    diff = arr[1] - arr[0];
  } else {
    diff = arr[n - 1] - arr[n - 2];
  }

  let lo = 0, hi = n - 1;

  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (Math.floor((arr[mid] - arr[0]) / diff) === mid) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }

  return arr[hi] + diff;
}
