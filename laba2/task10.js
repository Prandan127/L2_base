function bingo(ticket, win){
  let count = 0;
  for (let i = 0; i < ticket.length; i++) {
    const [str, num] = ticket[i];
    if (str.includes(String.fromCharCode(num))) {
      count++;
    }
  }
  return count >= win ? 'Winner!' : 'Loser!';
}