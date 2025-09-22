function howManyTimes(time1, time2) {
  const start = new Date(time1);
  const end = new Date(time2);

  // Round start up to nearest strike time (:00 or :30)
  let curr = new Date(start);
  if (curr.getSeconds() > 0) {
    curr.setSeconds(0);
    curr.setMinutes(curr.getMinutes() + 1);
  }
  let minRem = curr.getMinutes() % 30;
  if (minRem !== 0) {
    curr.setMinutes(curr.getMinutes() + (30 - minRem));
    curr.setSeconds(0);
  }

  if (curr >= end) return 0;

  let count = 0;

  while (curr < end) {
    let strikesAtThisTime;
    if (curr.getMinutes() === 0) {
      strikesAtThisTime = curr.getHours() % 12 || 12;
    } else {
      strikesAtThisTime = 1;
    }

    const secondsRemaining = Math.floor((end - curr) / 1000);

    count += Math.min(strikesAtThisTime, secondsRemaining);

    curr = new Date(curr.getTime() + 30 * 60 * 1000);
  }

  return count;
}
