class LoginPage {
    elements = {
        inputPhoneNumber: () => cy.get('.input-none'),
        btnWhatsApp: () => cy.get('.absolute > .flex-col > .flex'),
        btnSMS: () => cy.get('.absolute > .w-full'),
        codeSMS0: () => cy.get('[data-testid="character-0"]'),
        codeSMS1: () => cy.get('[data-testid="character-1"]'),
        codeSMS2: () => cy.get('[data-testid="character-2"]'),
        codeSMS3: () => cy.get('[data-testid="character-3"]'),
        codeSMS4: () => cy.get('[data-testid="character-4"]'),
        btnContinue: () => cy.get('.h-screen > .w-full > .flex'),
        closeBanner: () => cy.get('.absolute > .items-center > .w-full > .color-white'),
        closeBanner1: () => cy.get('.active > .items-center > .w-full > .color-white'),
        btnYes: () => cy.get('.mt-3 > :nth-child(1) > .rounded-pic'),

    };
    openWebPage(organization) {
        switch(organization) {
            case "Prod":
                cy.visit('https://app-punto99-staging.vercel.app/home');
                break;
            case "Sandbox":
                cy.visit('https://app-punto99-staging.vercel.app/home');
                break;


        }
    }

    login(phoneNumber) {
        //cy.intercept('POST', 'https://misty-lake-3nfd19apvgdl.vapor-farm-a1.com/api/auth/generateSms/374').as('IdSMS')
        this.elements.inputPhoneNumber().type(`${phoneNumber}{enter}`);
        this.elements.btnSMS().click();
        cy.wait(2000);
        cy.request({
            method: 'POST',
            url: 'https://misty-lake-3nfd19apvgdl.vapor-farm-a1.com/api/auth/generateSms/374',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            },
            body: {
              forWhatsApp: false
            }
          })
          .then((response) => {
            // Verificar la respuesta de la API
            expect(response.status).to.equal(201);
            const accessCode = response.body.body.code;
            const newAccessCode = accessCode.substring(2);

            // Imprimir el código de acceso en la consola
            cy.log('Access Code:', accessCode);
            cy.wait(2000);
            this.elements.codeSMS0().type(`${newAccessCode}`);
            this.elements.btnContinue().click();

          });
          
          

    }
    home(){
        cy.wait(3501);
        this.elements.closeBanner().should('be.visible').click();
        cy.wait(1500);
        this.elements.closeBanner1().should('be.visible').click();
        cy.wait(1500);
        this.elements.btnYes().should('be.visible').click();

    }
}
export default new LoginPage();

