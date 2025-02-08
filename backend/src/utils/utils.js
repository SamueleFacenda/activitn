function isValidEmail(email) {
  // A simple email validation function
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}

function isValidPassword(password) {
  if (password.length < 8) {
    return false;
  }

  if (password.search(/[a-z]/) === -1) {
    return false;
  }

  if (password.search(/[A-Z]/) === -1) {
    return false;
  }

  if (password.search(/[0-9]/) === -1) {
    return false;
  }

  return true;
}

module.exports = {isValidEmail, isValidPassword};

