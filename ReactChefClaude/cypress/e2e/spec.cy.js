describe('Chef Gemini App', () => {
  it('renders the header', () => {
    cy.visit('http://localhost:4000')
    
    cy.get('[data-testid="chef-header"]')
      .should('exist')
      .and('contain.text', 'Chef Gemini')

    cy.get('[data-testid="chef-logo"]')
      .should('exist')
  })

  
  it('enters ingredients', () => {
    cy.visit('http://localhost:4000')

    enterIngredient("Oregano")
    enterIngredient("Basil")
    enterIngredient("Beef Mince")
    enterIngredient("Tomatoes")

    cy.get('.ingredients-list').should('exist')
    cy.get('.ingredients-list li').as('ingredientItems')
    
    cy.get('@ingredientItems').should('have.length', 4)

    cy.get('@ingredientItems').eq(0).should('contain.text', 'Oregano')
    cy.get('@ingredientItems').eq(1).should('contain.text', 'Basil')
    cy.get('@ingredientItems').eq(2).should('contain.text', 'Beef Mince')
    cy.get('@ingredientItems').eq(3).should('contain.text', 'Tomatoes')

  })

  it('enters ingredients and submits', () => {
    cy.visit('http://localhost:4000')

    enterIngredient("Oregano")
    enterIngredient("Basil")
    enterIngredient("Beef Mince")
    enterIngredient("Tomatoes")

    /*cy.window().then((win) => {
      cy.spy(win.console, 'error').as('consoleError')
    })
      */
    
    cy.get('.get-recipe-container button').click()
    
    cy.get('.recipe-result', { timeout: 10000 })  // 10 second timeout
      .should('exist')
      .and('contain.text', 'Chef Gemini Recommends:')

      //cy.get('@consoleError').should('not.have.been.called')
    
  })

  function enterIngredient(ingredient) {
    cy.get('input[aria-label="Add ingredient"]')
      .should('exist')
      .type(ingredient)

      cy.get('button')
      .should('exist')
      .click()
  }
})