
const PasswordStrengthChecker = {
    regex: {
      uppercase: /[A-Z]/,
      lowercase: /[a-z]/,
      number: /[0-9]/,
      special: /[!@#$%^&*()_+=-\[\]{};:,./<>?]/,
    },
  
    checkPasswordStrength: function (password) {
      let score = 0;
      for (const pattern in this.regex) {
        if (this.regex[pattern].test(password)) {
          score++;
        }
      }
       // Ensure that the password meets the length requirement
    if (password.length >= 8) {
      score++;
    }

      if (score < 4) {
        return  'weak';
      } else if (score < 5) {
        return 'medium';
      } else {
        return 'strong';
      }
    },

    customPasswordVerification: function(password, {uppercase = false, lowercase = false, number= false, special=false, length= 8, trimmed=true}){
      let passwordToCheck = password
      if (trimmed) passwordToCheck = passwordToCheck.trim();
      // Check for uppercase letters
      const uppercaseMatch = uppercase ? this.regex.uppercase.test(passwordToCheck) : true;

          // Check for lowercase letters
      const lowercaseMatch = lowercase ? this.regex.lowercase.test(passwordToCheck) : true;

      // Check for numbers
      const numberMatch = number ? this.regex.number.test(passwordToCheck) : true;

      // Check for special characters
      const specialMatch = special ? this.regex.special.test(passwordToCheck) : true;

      // Check for minimum length
      const lengthMatch = passwordToCheck.length >= length;

      // Return true if all criteria are met, otherwise false
      return uppercaseMatch && lowercaseMatch && numberMatch && specialMatch && lengthMatch;
    }
  };
  
  module.exports = PasswordStrengthChecker;
  