const bookOne = {
  title: "Ведьмак",
  description: "Приключение охотника на монстров",
  author: "Анджей Сапковский",
};

it.only("Should add book to favorite through add new book", () => {
  cy.visit("/");
  cy.login("test@test.com", "test");
  cy.contains("Добро пожаловать test@test.com").should("be.visible");
  cy.contains("Add new").click();
  cy.get("input#title").type(bookOne.title);
  cy.get("input#description").type(bookOne.description);
  cy.get("input#authors").type(bookOne.author);
  cy.get("input#favorite").click();
  cy.contains("Submit").click();
  cy.visit("http://localhost:3000/favorites");
  cy.get(".card-title").should("contain.text", bookOne.title);
});

it.only("Should delete book from favorite", () => {
  cy.visit("/");
  cy.login("test@test.com", "test");
  cy.contains("Добро пожаловать test@test.com").should("be.visible");
  cy.visit("http://localhost:3000/favorites");
  cy.contains(bookOne.title).should("be.visible");
  cy.contains(bookOne.title).within(() => cy.get(".btn").click());
});
