const { isValidEmail, isValidPassword } = require("./utils");

describe("Test suite Email", () => {
  test("Valid Email", () => {
    expect(isValidEmail("studente@gmail.com")).toBe(true);
  });

  test("Invalid Email without @", () => {
    expect(isValidEmail("studentegmail.com")).toBe(false);
  });

  test("Invalid Email without .", () => {
    expect(isValidEmail("studente@gmailcom")).toBe(false);
  });

  test("Invalid Email without @ and .", () => {
    expect(isValidEmail("studentegmailcom")).toBe(false);
  });

  test("Invalid Email with prefix empty before @", () => {
    expect(isValidEmail("@gmail.com")).toBe(false);
  });

  test("Invalid Email with empty email", () => {
    expect(isValidEmail("")).toBe(false);
  });
});

describe("Test suite Password", () => {
  test("Valid Password", () => {
    expect(isValidPassword("Password1")).toBe(true);
  });

  test("Invalid Password without uppercase", () => {
    expect(isValidPassword("password1")).toBe(false);
  });

  test("Invalid Password without lowercase", () => {
    expect(isValidPassword("PASSWORD1")).toBe(false);
  });

  test("Invalid Password without number", () => {
    expect(isValidPassword("Password")).toBe(false);
  });

  test("Invalid Password with less than 8 characters", () => {
    expect(isValidPassword("Pass1")).toBe(false);
  });

  test("Invalid Password with empty password", () => {
    expect(isValidPassword("")).toBe(false);
  });
});

