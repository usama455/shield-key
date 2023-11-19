# ShieldKey - Password Strength Checker


ShieldKey is a powerful and easy-to-use npm package for assessing the strength of passwords. It provides a comprehensive solution to enhance the security of user passwords by evaluating their complexity and adherence to recommended security practices.

## Features

- Simple integration: Easily incorporate ShieldKey into your Node.js projects to assess password strength.
- Customizable policies: Tailor password strength requirements to suit your application's security needs.
- Lightweight and efficient: ShieldKey is designed for minimal impact on performance while delivering robust password evaluations.

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
The checkPasswordStrength function evaluates the strength of a password based on predefined criteria, including the presence of uppercase and lowercase letters, numbers, special characters, and a minimum length of 8 characters.



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


## Custom Policies
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

# Contributing
We welcome contributions from the community! If you find a bug, have a feature request, or want to contribute code, please check out our contribution guidelines.

# License
ShieldKey is licensed under the MIT License - see the LICENSE file for details.

# Support
For any questions or issues, please open an issue on GitHub.

# Acknowledgments
Special thanks to contributors and the open-source community for making ShieldKey better with each release.