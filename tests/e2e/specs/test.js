import { selectors } from '../../fixtures/selectors.js'
import { LITERALS } from '../../fixtures/constants.js'

describe('Contact book App', () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it('the user can create a new contact when clicks on "New contact" button', () => {
    cy.get(selectors.CONTACT_TABLE.ADD_CONTACT_BUTTON).click();
    cy.get(selectors.DIALOG_FORM.DIALOG).should('be.visible');
    cy.get(selectors.DIALOG_FORM.TITLE).should('have.text', LITERALS.DIALOG_FORM_TITLE);
    cy.get(selectors.DIALOG_FORM.FIRST_NAME_INPUT).type('Linda');
    cy.get(selectors.DIALOG_FORM.LAST_NAME_INPUT).type('Dog');
    cy.get(selectors.DIALOG_FORM.EMAIL_INPUT).type('linda@dog.com')
    cy.get(selectors.DIALOG_FORM.PHONE_NUMBER_INPUT).type('123456789')
    cy.get(selectors.DIALOG_FORM.SAVE_BUTTON).click();
    cy.get(selectors.DIALOG_FORM.DIALOG).should('not.be.visible');
  })
  it('the user can edit a contact when clicks on "Edit contact" button', () => {
    cy.get(selectors.CONTACT_TABLE.EDIT_CONTACT_BUTTON).click();
    cy.get(selectors.DIALOG_FORM.DIALOG).should('be.visible')
    cy.get(selectors.DIALOG_FORM.TITLE).should('have.text', LITERALS.DIALOG_FORM_EDIT_TITLE);
    cy.get(selectors.DIALOG_FORM.FIRST_NAME_INPUT).clear().type('Mora');
    cy.get(selectors.DIALOG_FORM.SAVE_BUTTON).click();
    cy.get(selectors.DIALOG_FORM.DIALOG).should('not.be.visible');
    
  })
  it('the user can delete a contact when clicks on "Delete contact" button', () => {
    cy.get(selectors.CONTACT_TABLE.DELETE_CONTACT_BUTTON).click();
    cy.get(selectors.DIALOG_DELETE_CONTACT.DIALOG).should('be.visible')
    cy.get(selectors.DIALOG_DELETE_CONTACT.SAVE_BUTTON).click();
    cy.get(selectors.DIALOG_DELETE_CONTACT.DIALOG).should('not.be.visible');

  })
  
})
