
const PasswordStrengthChecker = require('../lib/index');

// Example usage
const password = ' s ';
const strength = PasswordStrengthChecker.checkPasswordStrength(password);

console.log(`Password strength: ${strength}`);

// Custom usage
const options = {
length: 1,
uppercase: true,
lowercase: true,
number: true,
special: true,
trimmed: true
}
const isPasswordValid = PasswordStrengthChecker.customPasswordVerification(password, options)
console.log(`Password Valid: ${isPasswordValid}`);
