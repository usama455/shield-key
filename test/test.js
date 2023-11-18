
const PasswordStrengthChecker = require('../lib/index');

// Example usage
const password = 'StrongP@ssw0rd';
const strength = PasswordStrengthChecker.checkPasswordStrength(password);

console.log(`Password strength: ${strength}`);
