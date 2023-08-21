class reportPage {
    elements = {
        btnMyEarning: () => cy.get(':nth-child(1) > :nth-child(2) > .rounded-pic'),
        btnPresent: () => cy.get(':nth-child(1) > .w-full.flex-col > .py-2 > .w-5\\/12 > .w-max > .py-0\\.5'),
        btnPendingPayment: () => cy.get(':nth-child(3) > .w-full.flex-col > .py-2 > .w-5\\/12 > .w-max > .py-0\\.5'),
        btnSeeDetail: () => cy.get(':nth-child(3) > .w-full.flex-col > :nth-child(2) > .justify-center > .color-green99'),
        btnExcel: () => cy.get('.slide-open > .items-center > .w-10\\/12 > .w-full > :nth-child(1)'),
        btnPdf: () => cy.get('.slide-open > .items-center > .w-10\\/12 > .w-full > :nth-child(2)'),

    };

    myEarning(){
        cy.wait(1500);
        this.elements.btnMyEarning().should('be.visible').click();
    }
    report(){
        cy.wait(1500);
        this.elements.btnSeeDetail().should('be.visible').click();
        cy.wait(1500);
        this.elements.btnPdf().should('be.visible').click();
    }
}
export default new reportPage();

