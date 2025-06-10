/// <reference types="cypress" />

describe('1st test suite', () => {
    it('1st test', () => {

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        // by tag name
        cy.get('input')

        // by ID
        cy.get('#inputEmail1')

        // by class value
        cy.get('.input-full-width')

        // by attribute name
        cy.get('[fullwidth]')

        // by attribute & value
        cy.get('[placeholder="Email"]')

        // by entire class value
        cy.get('[class="input-full-width size-medium shape-rectangle"]')

        // by 2 attributes
        cy.get('[placeholder="Email"][fullwidth]')

        // by tag, attribute id and class
        cy.get('input[placeholder="Email"]#inputEmail1.input-full-width')

        // by cypr7ess test ID   --> RECOMMEND
        cy.get('[data-cy="imputEmail1"]')
    })

    it('2nd test', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        // THEORY
        // get() - find elements on page by locator globally
        // find() - find child elements by locator
        // contains() - find HTML text and by text and locator

        cy.contains('Sign in')
        cy.contains('[status="warning"]','Sign in')
        cy.contains('nb-card','Horizontal form').find('button')
        cy.contains('nb-card','Horizontal form').contains('Sign in')
        cy.contains('nb-card','Horizontal form').get('button')

        // cypress chains and DOM
        cy.get('#inputEmail3')
            .parents('form')
            .find('button')
            .should('contain','Sign in')
            .parents('form')
            .find('nb-checkbox')
            .click()    // any action command, stop and begin new chain
    })

    it('save subject of the command', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        cy.contains('nb-card', 'Using the Grid').find('[for="inputEmail1"]').should('contain', 'Email')
        cy.contains('nb-card', 'Using the Grid').find('[for="inputPassword2"]').should('contain', 'Password')

        // // Can't do thing like this
        // const usingTheGrid = cy.contains('nb-card','Using the Grid')
        // usingTheGrid.find('[for="inputEmail1"]').should('contain','Email')
        // usingTheGrid.find('[for="inputPassword2"]').should('contain','Password')

        // #1 cypress alias
        cy.contains('nb-card', 'Using the Grid').as('usingTheGrid')     // global variable
        cy.get('@usingTheGrid').find('[for="inputEmail1"]').should('contain', 'Email')
        cy.get('@usingTheGrid').find('[for="inputPassword2"]').should('contain', 'Password')

        // #2 cypress then() methods
        cy.contains('nb-card', 'Using the Grid').then(usingTheGridForm => {
            cy.wrap(usingTheGridForm).find('[for="inputEmail1"]').should('contain', 'Email')
            cy.wrap(usingTheGridForm).find('[for="inputPassword2"]').should('contain', 'Password')
        })
    })

    it.only('extract text value', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        // extract text value #1
        cy.get('[for="exampleInputEmail1"]').should('contain', 'Email address')

        // extract text value #2
        cy.get('[for="exampleInputEmail1"]').then( label => {
            const labelText = label.text()
            expect(labelText).to.equal('Email address')
            cy.wrap(labelText).should('contain', 'Email address')
        })
        
        // extract text value #3
        cy.get('[for="exampleInputEmail1"]').invoke('text').then( text => {
            expect(text).to.equal('Email address')
        })

        // extract text value #4
        cy.get('[for="exampleInputEmail1"]').invoke('attr', 'class').then( classValue => {
            expect(classValue).to.equal('label')
        })

        // invoke propoties
        cy.get('#exampleInputEmail1').type('test@test.com')
        cy.get('#exampleInputEmail1').invoke('prop', 'value').should('contain', 'test@test.com').then( property => {
            expect(property).to.equal('test@test.com')
        })
    })

})


// // defined test suite #1
// describe('1st test suite', () => {

//     // nested suite
//     describe('suite section', () => {

//         beforeEach('login', () => {
//             // repeat for every test in 'suite section'
//         })
//         it('1st test', () => {
//             // put code of the test
//         })
//         it('2nd test', () => {
//             // put code of the test
//         })
//     })

//     it('1st test', () => {
//         // put code of the test
//     })

//     it('2nd test', () => {
//         // put code of the test
//     })

//     it('3rd test', () => {
//         // put code of the test
//     })

// })

// describe('2nd test suite', () => {

//     it('1st test', () => {
//         // put code of the test
//     })

//     it('2nd test', () => {
//         // put code of the test
//     })

//     it('3rd test', () => {
//         // put code of the test
//     })

// })

// // defined test suite #2
// context()