import { selectors } from '../../fixtures/selectors.js'
import { LITERALS } from '../../fixtures/constants.js'

describe('Contact book App', () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it('The user can see the home page', () => {
    cy.contains('h3', LITERALS.HOME_TITLE)
  })
  
})
