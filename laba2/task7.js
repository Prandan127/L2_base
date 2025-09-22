function wave(str) {
  const result = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') continue;
    let arr = str.split('');
    arr[i] = arr[i].toUpperCase();
    result.push(arr.join(''));
  }
  return result;
}
