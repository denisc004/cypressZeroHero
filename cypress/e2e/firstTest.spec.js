/// <reference types="cypress" />

describe('First test suite', () => {


    it('first test', () => {    

        cy.visit('/') //navigate to base url
        //by text
        cy.contains('Forms').click()
        cy.contains('Form Layout').click()


        //by tag mane
        cy.get('input') //get webelements
        //by id
        cy.get('#inputEmail1')
        //by class
        cy.get('.input-full-width')
        //by attribute
        cy.get('[fullwidth]')
        //by att and value
        cy.get('[placeholder="Email"]')
        //by class value
        cy.get('[class="input-full-width size-medium shape-rectangle"]')
        // by two attributes
        cy.get('[placeholder="Email"][fullwidth]')
        // by tag, attribute, id and class
        cy.get('input[placeholder="Email"]#inputEmail1.input-full-width')
        //cypress test ID
        cy.get('[data-cy="imputEmail1"]')





    })

    it.only('second test', () => {    

        cy.visit('/') //navigate to base url
        //by text
        cy.contains('Forms').click()
        cy.contains('Form Layout').click()

        //get() 
        //find()
        //contains() finds the first match

        cy.contains('Sign in')
        cy.contains('[status="warning"]', 'Sign in')
        cy.contains('nb-card', 'Horizontal form').find('button')
        cy.contains('nb-card', 'Horizontal form').contains('Sign in')
        cy.contains('nb-card', 'Horizontal form').get('button')

        // cypress chaining command.

        cy.get('#inputEmail3')
            .parents('form')
            .find('button')
            .should('contain','Sign in')//assertion
            .parents('form')
            .find('nb-checkbox')
            .click()






    })


})



// context() is the same as describe

