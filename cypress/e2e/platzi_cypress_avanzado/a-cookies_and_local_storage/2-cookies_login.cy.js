describe("Cookies", () => {
  beforeEach(function () {
    cy.session("login", () => {
      cy.visit("/");
      cy.setCookie("nombre", "David");
    });
  });
  it("Obtener las cookies", function () {
    cy.clearAllCookies();
    cy.visit("/");
    cy.getCookies().should("be.empty");
  });
  it("Agregar una cookie", function () {
    cy.setCookie("nombre", "David");
    cy.getCookies().should("have.length", 1);
  });
});

// Session permite almacenar la cookies de la session y poder continuar la prueba estando logueado
