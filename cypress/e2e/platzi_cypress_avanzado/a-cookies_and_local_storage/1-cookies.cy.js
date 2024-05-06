// https://docs.cypress.io/api/commands/session#Where-to-call-cysession

describe("Cookies", () => {
  beforeEach(() => {
    cy.session("Cookies", () => {
      cy.setCookie("nombre", "David");
    });
  });

  it("Obtener las cookies", () => {
    cy.clearAllCookies();
    cy.visit("/");
    cy.getCookies().should("be.empty");
  });

  it("Agregar una cookie", () => {
    cy.setCookie("nombre", "David");
    cy.getCookies().should("have.length", 1);
  });

  it("Obtener cookie especifica", () => {
    cy.getCookie("nombre").should("have.a.property", "value", "David");
  });
});

// Para entender mejor como hacer login y manejar la sesión del usuario leer:
// https://applitools.com/blog/whats-new-in-cypress-12/
