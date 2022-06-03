it("Should open the main page", () => {
  cy.visit("/");
  cy.login("test@test.com", "test");
  cy.contains("Добро пожаловать test@test.com").should("be.visible");
});

it("Should not login with empty login", () => {
  cy.visit("/");
  cy.login(" ", "test");
  cy.get("#mail")
    .then(($el) => $el[0].checkValidity())
    .should("be.false");
});

it("Should not login with empty password", () => {
  cy.visit("/");
  cy.loginEmptyPass("test@test.com");
  cy.get("#pass")
    .then(($el) => $el[0].checkValidity())
    .should("be.false");
});
