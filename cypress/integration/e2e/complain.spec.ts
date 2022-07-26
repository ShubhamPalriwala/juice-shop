describe("/#/complain", () => {
  beforeEach(() => {
    cy.login({
      email: "admin",
      password: "admin123",
    });
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
        (resolvedFilepath: string) => {
          cy.get("#file").selectFile(resolvedFilepath);
        }
      );
      cy.get("#submitButton").click();
      cy.expectChallengeSolved({ challenge: "Deprecated Interface" });
    });
  });

  describe('challenge "xxeFileDisclosure"', () => {
    it("should be possible to retrieve file from Windows server via .xml upload with XXE attack", () => {
      cy.task("disableOnContainerEnv").then((disableOnContainerEnv) => {
        if (!disableOnContainerEnv) {
          cy.get("#complaintMessage").type("XXE File Exfiltration Windows!");
          cy.task("GetPath", "test/files/xxeForWindows.xml").then(
            (resolvedFilepath: any) => {
              cy.get("#file").selectFile(resolvedFilepath);
              cy.get("#submitButton").click();
            }
          );
          cy.visit("/");
        }
      });
    });

    it("should be possible to retrieve file from Linux server via .xml upload with XXE attack", () => {
      cy.task("disableOnContainerEnv").then((disableOnContainerEnv) => {
        if (!disableOnContainerEnv) {
          cy.get("#complaintMessage").type("XXE File Exfiltration Linux!");
          cy.task("GetPath", "test/files/xxeForLinux.xml").then(
            (resolvedFilepath: any) => {
              cy.get("#file").selectFile(resolvedFilepath);
              cy.get("#submitButton").click();
            }
          );
          cy.visit("/");
        }
      });
    });

    after(() => {
      cy.task("disableOnContainerEnv").then((disableOnContainerEnv) => {
        if (!disableOnContainerEnv) {
          cy.expectChallengeSolved({ challenge: "XXE Data Access" });
        }
      });
    });
  });

  describe('challenge "xxeDos"', () => {
    it("should be possible to trigger request timeout via .xml upload with Quadratic Blowup attack", () => {
      cy.task("disableOnContainerEnv").then((disableOnContainerEnv) => {
        if (!disableOnContainerEnv) {
          cy.get("#complaintMessage").type("XXE Quadratic Blowup!");
          cy.task("GetPath", "test/files/xxeQuadraticBlowup.xml").then(
            (resolvedFilepath: string) => {
              cy.get("#file").selectFile(resolvedFilepath);
            }
          );
          cy.get("#submitButton").click();
        }
      });
    });

    it("should be possible to trigger request timeout via .xml upload with dev/random attack", () => {
      cy.task("disableOnContainerEnv").then((disableOnContainerEnv) => {
        if (!disableOnContainerEnv) {
          cy.get("#complaintMessage").type("XXE Quadratic Blowup!");
          cy.task("GetPath", "test/files/xxeDevRandom.xml").then(
            (resolvedFilepath: string) => {
              cy.get("#file").selectFile(resolvedFilepath);
            }
          );
          cy.get("#submitButton").click();
        }
      });
    });

    after(() => {
      cy.task("disableOnContainerEnv").then((disableOnContainerEnv) => {
        if (!disableOnContainerEnv) {
          cy.expectChallengeSolved({ challenge: "XXE DoS" });
        }
      });
    });
  });

  describe('challenge "arbitraryFileWrite"', () => {
    it("should be possible to upload zip file with filenames having path traversal", () => {
      cy.task("disableOnContainerEnv").then((disableOnContainerEnv) => {
        if (!disableOnContainerEnv) {
          cy.get("#complaintMessage").type("Zip Slip!");
          cy.task("GetPath", "test/files/arbitraryFileWrite.zip").then(
            (resolvedFilepath: string) => {
              cy.get("#file").selectFile(resolvedFilepath);
            }
          );
          cy.get("#submitButton").click();
          cy.expectChallengeSolved({ challenge: "Arbitrary File Write" });
        }
      });
    });
  });

  describe('challenge "videoXssChallenge"', () => {
    it("should be possible to inject js in subtitles by uploading zip file with filenames having path traversal", () => {
      cy.task("disableOnContainerEnv").then((disableOnContainerEnv) => {
        if (!disableOnContainerEnv) {
          cy.get("#complaintMessage").type("Here we go!");
          cy.task("GetPath", "test/files/videoExploit.zip").then(
            (resolvedFilepath: string) => {
              cy.get("#file").selectFile(resolvedFilepath);
            }
          );
          cy.get("#submitButton").click();

          cy.visit("/promotion");
          cy.on("window:alert", (t) => {
            expect(t).to.equal("xss");
          });
          cy.expectChallengeSolved({ challenge: "Video XSS" });
        }
      });
    });
  });
});
