function isCircleSorted(arr) {
  let countDrops = 0;
  for (let i = 0; i < arr.length; i++) {
    let next = (i + 1) % arr.length;
    if (arr[i] > arr[next]) {
      countDrops++;
      if (countDrops > 1) return false;
    }
  }
  return true;
}
