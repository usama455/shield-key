# ShieldKey - Password Strength Checker


ShieldKey is a powerful and easy-to-use npm package for assessing the strength of passwords. It provides a comprehensive solution to enhance the security of user passwords by evaluating their complexity and adherence to recommended security practices.

## ✨ Features

- ✅ Password strength evaluation (`weak`, `medium`, `strong`)
- 🛡️ Customizable password rule verification
- 🔐 Password generator with flexible options
- ⚡ Lightweight and efficient
- 🧪 Simple test setup

## Installation

To install ShieldKey, use npm:

```bash
npm install shield-key
```
## Usage

### Basic Password Strength Check

By default , length is 8 and 
```javascript

const ShieldKey = require('shield-key');

const password = 'SecureP@ss123';
const strength = ShieldKey.checkPasswordStrength(password, options);

console.log(strength)
// weak , medium , strong

```
#### This function checks for:

- Uppercase letters
- Lowercase letters
- Numbers
- Special characters
- Minimum length of 8 characters



### Custom Password Verification
``` javascript
const PasswordStrengthChecker = require('password-strength-checker');

// Example usage with custom criteria
const password = 'SecureP@ss123';
//default values are false for all except trimmed (which is true by default) . default length is 8
const verificationOptions = {
  uppercase: true,
  lowercase: true,
  number: true,
  special: true,
  length: 8,
  trimmed: true,
};

const isValidPassword = PasswordStrengthChecker.customPasswordVerification(password, verificationOptions);
//returns true or false based on provided values
console.log(`Is password valid? ${isValidPassword ? 'Yes' : 'No'}`);

```

#### Default Options:

- uppercase, lowercase, number, special: false
- length: 8
- trimmed: true

## Generate a Secure Password
```javascript
const ShieldKey = require('shield-key');

const generatedPassword = ShieldKey.generatePassword({
  length: 16,
  includeUppercase: true,
  includeLowercase: true,
  includeNumbers: true,
  includeSymbols: true,
});

console.log(`Generated Password: ${generatedPassword}`);
```

#### Password Generator Options:


| Option             | Type    | Default | Description                     |
| ------------------ | ------- | ------- | ------------------------------- |
| `length`           | Number  | `12`    | Length of the password          |
| `includeUppercase` | Boolean | `true`  | Include uppercase letters (A–Z) |
| `includeLowercase` | Boolean | `true`  | Include lowercase letters (a–z) |
| `includeNumbers`   | Boolean | `true`  | Include numbers (0–9)           |
| `includeSymbols`   | Boolean | `true`  | Include special characters      |


## Advanced: Custom Pattern Rules
You can customize password strength policies to align with your application's security requirements. Here's an example:
```javascript
const customPolicies = {
  uppercase: /[A-Z]/,
  lowercase: /[a-z]/,
  number: /[0-9]/,
  special: /[!@#$%^&*()_+=-\[\]{};:,./<>?]/,
  length: /\S{12,}/  // Custom length requirement of at least 12 characters
};

const customStrength = ShieldKey.checkPasswordStrength('CustomP@ssw0rd', customPolicies);

console.log(`Custom password strength: ${customStrength}`);

```
The customPasswordVerification function allows you to perform custom password verification based on specified criteria. You can customize criteria such as requiring uppercase letters, lowercase letters, numbers, special characters, a minimum length, and whether to trim the input password.



## Running Tests

Run the example tests provided in the repo:

```bash 
node test/test.js
```
This runs:

- Basic strength check
- Custom policy validation
- Password generation + validation


# Contributing
We welcome contributions from the community! If you find a bug, have a feature request, or want to contribute code, please check out our contribution guidelines.

# License
ShieldKey is licensed under the MIT License - see the LICENSE file for details.

# Support
For any questions or issues, please open an issue on GitHub.

# Acknowledgments
Special thanks to contributors and the open-source community for making ShieldKey better with each release.