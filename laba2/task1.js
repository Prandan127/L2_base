function hasTwoCubeSums(n) {
    const pairs = [];
    const limit = Math.floor(Math.cbrt(n));

    for (let a = 1; a <= limit; a++) {
        const a3 = a ** 3;
        for (let b = a + 1; b <= limit; b++) {
            const b3 = b ** 3;
            if (a3 + b3 === n) {
                pairs.push([a, b]);
            }
        }
    }

    for (let i = 0; i < pairs.length; i++) {
        for (let j = i + 1; j < pairs.length; j++) {
            const set = new Set([...pairs[i], ...pairs[j]]);
            if (set.size === 4) {
                return true;
            }
        }
    }

    return false;
}