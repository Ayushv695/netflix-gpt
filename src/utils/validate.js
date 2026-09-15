const EMAIL_REGEX = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

export const checkValidation = (email, password) => {
  // Email validation
  if (!email?.trim()) {
    return "Email is required";
  }

  if (!EMAIL_REGEX.test(email.trim())) {
    return "Please enter a valid email address";
  }

  // Password validation
  if (!password) {
    return "Password is required";
  }

  if (password.length < 8) {
    return "Password must be at least 8 characters long";
  }

  if (!/[a-z]/.test(password)) {
    return "Password must contain at least one lowercase letter";
  }

  if (!/[A-Z]/.test(password)) {
    return "Password must contain at least one uppercase letter";
  }

  if (!/\d/.test(password)) {
    return "Password must contain at least one number";
  }

  if (!/[@$!%*?&]/.test(password)) {
    return "Password must contain at least one special character (@$!%*?&)";
  }

  if (!/^[A-Za-z\d@$!%*?&]+$/.test(password)) {
    return "Password contains an invalid character";
  }

  return null;
};
