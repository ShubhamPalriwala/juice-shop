describe("/#/complain", () => {
  beforeEach(() => {
    cy.login({
      email: "admin",
      password: "admin123",
    });
  });

  beforeEach(() => {
    cy.visit("/#/complain");
  });

  describe('challenge "uploadSize"', () => {
    it("should be possible to upload files greater 100 KB directly through backend", () => {
      cy.window().then(() => {
        const over100KB = Array.apply(null, new Array(11000)).map(
          String.prototype.valueOf,
          "1234567890"
        );
        const blob = new Blob(over100KB, { type: "application/pdf" });

        const data = new FormData();
        data.append("file", blob, "invalidSizeForClient.pdf");

        const request = new XMLHttpRequest();
        request.open("POST", `${Cypress.env("baseUrl")}/file-upload`);
        request.send(data);
      });
      cy.visit("/");
      cy.expectChallengeSolved({ challenge: "Upload Size" });
    });
  });

  describe('challenge "uploadType"', () => {
    it("should be possible to upload files with other extension than .pdf directly through backend", () => {
      cy.window().then(() => {
        const data = new FormData();
        const blob = new Blob(["test"], { type: "application/x-msdownload" });
        data.append("file", blob, "invalidTypeForClient.exe");

        const request = new XMLHttpRequest();
        request.open("POST", `${Cypress.env("baseUrl")}/file-upload`);
        request.send(data);
      });
      cy.visit("/");
      cy.expectChallengeSolved({ challenge: "Upload Type" });
    });
  });

  describe('challenge "deprecatedInterface"', () => {
    it("should be possible to upload XML files", () => {
      cy.get("#complaintMessage").type("XML all the way!");
      cy.task("GetPath", "test/files/deprecatedTypeForServer.xml").then(
        (resolvedFilepath: any) => {
          cy.get("#file").selectFile(resolvedFilepath);
        }
      );
      cy.get("#submitButton").click();
      cy.expectChallengeSolved({ challenge: "Deprecated Interface" });
    });
  });

  if (!utils.disableOnContainerEnv()) {
  describe('challenge "xxeFileDisclosure"', () => {
    it("should be possible to retrieve file from Windows server via .xml upload with XXE attack", () => {
      void complaintMessage.sendKeys("XXE File Exfiltration Windows!");
      void file.sendKeys(path.resolve("test/files/xxeForWindows.xml"));
      void submitButton.click();
    });

    it("should be possible to retrieve file from Linux server via .xml upload with XXE attack", () => {
      void complaintMessage.sendKeys("XXE File Exfiltration Linux!");
      void file.sendKeys(path.resolve("test/files/xxeForLinux.xml"));
      void submitButton.click();
    });

    afterAll(() => {
      expectChallengeSolved({ challenge: "XXE Data Access" });
    });
  });

  // describe('challenge "xxeDos"', () => {
  //   it("should be possible to trigger request timeout via .xml upload with Quadratic Blowup attack", () => {
  //     void complaintMessage.sendKeys("XXE Quadratic Blowup!");
  //     void file.sendKeys(path.resolve("test/files/xxeQuadraticBlowup.xml"));
  //     void submitButton.click();
  //   });

  //   it("should be possible to trigger request timeout via .xml upload with dev/random attack", () => {
  //     void complaintMessage.sendKeys("XXE Quadratic Blowup!");
  //     void file.sendKeys(path.resolve("test/files/xxeDevRandom.xml"));
  //     void submitButton.click();
  //   });

  //   afterAll(() => {
  //     expectChallengeSolved({ challenge: "XXE DoS" });
  //   });
  // });

  // describe('challenge "arbitraryFileWrite"', () => {
  //   it("should be possible to upload zip file with filenames having path traversal", () => {
  //     void complaintMessage.sendKeys("Zip Slip!");
  //     void file.sendKeys(path.resolve("test/files/arbitraryFileWrite.zip"));
  //     void submitButton.click();
  //   });
  //   expectChallengeSolved({ challenge: "Arbitrary File Write" });
  // });

  describe('challenge "videoXssChallenge"', () => {
    it("should be possible to inject js in subtitles by uploading zip file with filenames having path traversal", () => {
      // const EC = protractor.ExpectedConditions;
      // file = element(by.id("file"));
      // complaintMessage = element(by.id("complaintMessage"));
      // submitButton = element(by.id("submitButton"));

      cy.get("#complaintMessage").type("Here we go!");
      cy.task("GetPath", "test/files/videoExploit.zip").then(
        (resolvedFilepath: any) => {
          cy.get("#file").selectFile(resolvedFilepath);
        }
      );
      cy.get("#submitButton").click();

      cy.visit("/promotion");
      cy.on("window:alert", (t) => {
        expect(t).to.equal("xss");
      });
      cy.visit("/");
      cy.expectChallengeSolved({ challenge: "Video XSS" });
    });
  });
  }
});
