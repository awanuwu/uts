const login = require('./login');

test('Login dengan kredensial benar', () => {
  expect(login("user@example.com", "password123")).toBe("Login successful");
});

test('Login dengan password salah', () => {
  expect(login("user@example.com", "salah")).toBe("Login failed");
});
