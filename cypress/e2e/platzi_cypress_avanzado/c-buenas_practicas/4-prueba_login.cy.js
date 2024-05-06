import { loginPage } from "./pageObjects/LoginPage";

describe("login con POM", function () {
  beforeEach(() => {
    loginPage.visit();
  });

  it("Login erroneo", function () {
    loginPage.validateLoginPage();
    loginPage.login("lalala", "lalala");
    loginPage.validateErrorLogin();
  });

  it("Login exitoso", function () {
    loginPage.validateLoginPage();
    loginPage.login("username", "password");
  });
});
