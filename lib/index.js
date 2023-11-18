
const PasswordStrengthChecker = {
    regex: {
      uppercase: /[A-Z]/,
      lowercase: /[a-z]/,
      number: /[0-9]/,
      special: /[!@#$%^&*()_+=-\[\]{};:,./<>?]/,
    },
  
    checkPasswordStrength: function (password, length=8) {
      let score = 0;
  
      for (const pattern in this.regex) {
        if (this.regex[pattern].test(password)) {
          score++;
        }
      }
       // Ensure that the password meets the length requirement
    if (password.length >= length) {
      score++;
    }

      if (score < 4) {
        return  'weak';
      } else if (score < 5) {
        return 'medium';
      } else {
        return 'strong';
      }
    }
  };
  
  module.exports = PasswordStrengthChecker;
  