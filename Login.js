function login(email, password) {
  if (email === "user@example.com" && password === "password123") {
    return "Login successful";
  }
  return "Login failed";
}

module.exports = login;
