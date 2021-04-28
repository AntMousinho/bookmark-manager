describe('Bookmark-manager tests', () => {
	beforeEach(() => {
		cy.visit('/bookmarks');
	})

	context.only('On load', () => {
		it('displays a header', () => {
			cy.contains('Bookmark Manager');
		})

		it('displays form to add bookmark', () => {
			cy.get('#add-text').should('be.visible');
			cy.get('#add-button').should('have.value', 'Add bookmark');
		})

		it('displays initial bookmarks', () => {
			cy.get('#bookmarks').contains('www.firstBookmark.com');
			cy.get('#bookmarks').contains('www.secondBookmark.com');
			cy.get('#bookmarks').contains('www.thirdBookmark.com');
		})
		
		it('delete buttons also displayed', () => {
			cy.get('#delete-2').should('be.visible');
		})

		it('update buttons are displayed', () => {
			cy.get('#update-2').should('be.visible');
		})
	})

	context('Adding to bookmark list', () => {
		it('add a bookmark to the list', () => {
			cy.get('#add-text').type('www.addedBookmark.com');
			cy.get('#add-button').click();
			cy.get('#bookmarks').contains('www.addedBookmark.com');
		})
	})

	context('Deleting a bookmark', () => {
		it('clicking delete button removes bookmark', () => {
			cy.get('#add-text').type('www.toBeDeletedBookmark.com');
			cy.get('#add-button').click();
			cy.get('#delete-3').click();
			cy.get('#bookmark-3').should('not.exist');
		})
	})

	context.only('updating a bookmark', () => {
		it('bookmark updates correctly', () => {

		})
	})
})