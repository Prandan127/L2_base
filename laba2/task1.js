function hasTwCubeSums(n) {
    const pairs = new Set();
    
    // Iterate through possible cube roots
    for (let a = 1; a * a * a <= n; a++) {
        const a3 = a * a * a;
        const remaining = n - a3;
        
        // Check if remaining is a perfect cube
        const b = Math.round(Math.pow(remaining, 1/3));
        if (b >= a && b * b * b === remaining) {
            const pair = `${Math.min(a, b)},${Math.max(a, b)}`;
            pairs.add(pair);
            
            // If we found two distinct pairs, return true
            if (pairs.size >= 2) {
                return true;
            }
        }
    }
    
    return false;
}