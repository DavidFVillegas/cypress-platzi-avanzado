describe("Local Storage", () => {
  it("Crear una tarea", () => {
    cy.visit("https://todo-cypress-iota.vercel.app");
    cy.get("#title").type("Titulo de prueba");
    cy.get("#description").type("Descripcion de prueba");
    cy.contains("Create").click();

    cy.contains("Titulo de prueba");
    cy.reload();
    cy.contains("Titulo de prueba");

    cy.contains("Remove")
      .click()
      .then(() => {
        expect(localStorage.getItem("Titulo de prueba")).to.be.null;
      });

    cy.clearLocalStorage("Titulo de prueba").should((ls) => {
      expect(ls.getItem("Titulo de prueba")).to.be.null;
    });
  });
});
