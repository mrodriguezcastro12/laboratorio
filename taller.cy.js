describe('Swaglabs home', () => {



  it('identificacion correcta', () => {

    cy.visit('https://www.saucedemo.com/')
    cy.viewport('macbook-15')
    cy.get('[data-test="username"]').should('be.visible').type("problem_user")
    cy.get('[data-test="password"]').should('be.visible').type("secret_sauce")
    cy.wait(2000)
    cy.get('[data-test="login-button"]').click()
    cy.wait(1000)
    cy.get(':nth-child(2) > :nth-child(1) > #inventory_container')

   
   
  })


  it('salir', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.viewport('macbook-15')
    cy.get('[data-test="username"]').should('be.visible').type("problem_user")
    cy.get('[data-test="password"]').should('be.visible').type("secret_sauce")
    cy.wait(2000)
    cy.get('[data-test="login-button"]').click()
    cy.wait(1000)
    cy.get('#react-burger-menu-btn').click()
    cy.wait(1000)
    cy.get('#logout_sidebar_link').click()
    cy.wait(1000)
    cy.get('html')
    cy.wait(1000)

    

  })

  it('contraseña incorrecta', () => {

    cy.visit('https://www.saucedemo.com/')
    cy.viewport('macbook-15')
    cy.get('[data-test="username"]').should('be.visible').type("problem_user")
    cy.get('[data-test="password"]').should('be.visible').type("rod345")
    cy.wait(2000)
    cy.get('[data-test="login-button"]').click()
    cy.wait(1000)
    cy.get('[data-test="error"]').should('have.text','Epic sadface: Username and password do not match any user in this service')
    cy.wait(2000)
    


    
  })

  
  it('info producto', () => {

    cy.visit('https://www.saucedemo.com/')
    cy.viewport('macbook-15')
    cy.get('[data-test="username"]').should('be.visible').type("problem_user")
    cy.get('[data-test="password"]').should('be.visible').type("secret_sauce")
    cy.wait(2000)
    cy.get('[data-test="login-button"]').click()
    cy.wait(1000)
    cy.get(':nth-child(2) > :nth-child(1) > #inventory_container')
    cy.wait(1000)
    cy.get('#item_4_title_link > .inventory_item_name').click()
    cy.wait(1000)
    cy.get('#inventory_item_container')
    

  })
  

  it('negativo compra', () => {

    cy.visit('https://www.saucedemo.com/')
    cy.viewport('macbook-15')
    cy.get('[data-test="username"]').should('be.visible').type("problem_user")
    cy.get('[data-test="password"]').should('be.visible').type("secret_sauce")
    cy.wait(2000)
    cy.get('[data-test="login-button"]').click()
    cy.wait(1000)
    cy.get(':nth-child(2) > :nth-child(1) > #inventory_container')
    cy.wait(1000)
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.wait(1000)
    cy.get('.shopping_cart_link').click()
    cy.wait(1000)
    cy.get('[data-test="checkout"]').click()
    cy.wait(1000)
    cy.get('#checkout_info_container')
    cy.get('[data-test="firstName"]').should('be.visible').type("isabella")
    cy.get('[data-test="postalCode"]').should('be.visible').type("123456")
    cy.wait(2000)
    cy.get('[data-test="continue"]').click()
    cy.get('.error-message-container').should('have.text','Error: Last Name is required')


  })

  Cypress.on('uncaught:exception', (err, runnable) =>{
    return false;
  })


})