
const PasswordStrengthChecker = {
    regex: {
      uppercase: /[A-Z]/,
      lowercase: /[a-z]/,
      number: /[0-9]/,
      special: /[!@#$%^&*()_+=-\[\]{};:,./<>?]/,
      length: /\S{8,}/
    },
  
    checkPasswordStrength: function (password) {
      let score = 0;
  
      for (const pattern in this.regex) {
        if (this.regex[pattern].test(password)) {
          score++;
        }
      }
  
      if (score < 4) {
        return 'weak';
      } else if (score < 6) {
        return 'medium';
      } else {
        return 'strong';
      }
    }
  };
  
  module.exports = PasswordStrengthChecker;
  