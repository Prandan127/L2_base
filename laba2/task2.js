function ipv4Parser(ip, mask) {
    // Split IP and mask into octets
    const ipOctets = ip.split('.').map(Number);
    const maskOctets = mask.split('.').map(Number);
    
    // Calculate network address using bitwise AND
    const networkOctets = ipOctets.map((octet, i) => octet & maskOctets[i]);
    
    // Calculate host identifier using bitwise AND with inverted mask
    const hostOctets = ipOctets.map((octet, i) => octet & ~maskOctets[i]);
    
    // Convert back to string format
    return [
        networkOctets.join('.'),
        hostOctets.join('.')
    ];
}

// Export the function for testing
module.exports = { ipv4Parser };