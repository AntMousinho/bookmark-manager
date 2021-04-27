describe('Testing homepage on initial get reques', () => {
	beforeEach(() => {
		cy.visit('/');
	})

	it('displays heading', () => {
		cy.contains('Bookmark Manager');
	})

	it('displays bookmarks list', () => {
		cy.contains('http://firstBookmark.com')
		cy.contains('http://secondBookmark.com')
		cy.contains('http://thirdBookmark.com')
	})
})