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

```javascript
const ShieldKey = require('shield-key');

const password = 'SecureP@ss123';
const strength = ShieldKey.checkPasswordStrength(password);

// Example usage with custom length requirement (default is 8)
const password = 'SecureP@ss123';
const strength = ShieldKey.checkPasswordStrength(password);

console.log(`Password strength: ${strength}`);

// Example with custom length requirement (e.g., 10 characters)
const password2 = 'StrongP@ss';
const strength2 = PasswordStrengthChecker.checkPasswordStrength(password2, 10);

console.log(`Password strength: ${strength2}`);


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

# Contributing
We welcome contributions from the community! If you find a bug, have a feature request, or want to contribute code, please check out our contribution guidelines.

# License
ShieldKey is licensed under the MIT License - see the LICENSE file for details.

# Support
For any questions or issues, please open an issue on GitHub.

# Acknowledgments
Special thanks to contributors and the open-source community for making ShieldKey better with each release.