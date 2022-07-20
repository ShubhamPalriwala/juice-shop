"use strict";
/*
 * Copyright (c) 2014-2022 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

function cov_nstyr0yb8() {
  var path = "/home/shubham/Desktop/juice-shop/build/routes/premiumReward.js";
  var hash = "34342d4190a35d6689188e78217c29a81a120b90";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/shubham/Desktop/juice-shop/build/routes/premiumReward.js",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 0
        },
        end: {
          line: 6,
          column: 62
        }
      },
      "1": {
        start: {
          line: 7,
          column: 13
        },
        end: {
          line: 7,
          column: 28
        }
      },
      "2": {
        start: {
          line: 8,
          column: 23
        },
        end: {
          line: 8,
          column: 55
        }
      },
      "3": {
        start: {
          line: 9,
          column: 19
        },
        end: {
          line: 9,
          column: 58
        }
      },
      "4": {
        start: {
          line: 10,
          column: 0
        },
        end: {
          line: 15,
          column: 2
        }
      },
      "5": {
        start: {
          line: 11,
          column: 4
        },
        end: {
          line: 14,
          column: 6
        }
      },
      "6": {
        start: {
          line: 12,
          column: 8
        },
        end: {
          line: 12,
          column: 91
        }
      },
      "7": {
        start: {
          line: 12,
          column: 75
        },
        end: {
          line: 12,
          column: 87
        }
      },
      "8": {
        start: {
          line: 13,
          column: 8
        },
        end: {
          line: 13,
          column: 113
        }
      }
    },
    fnMap: {
      "0": {
        name: "servePremiumContent",
        decl: {
          start: {
            line: 10,
            column: 26
          },
          end: {
            line: 10,
            column: 45
          }
        },
        loc: {
          start: {
            line: 10,
            column: 48
          },
          end: {
            line: 15,
            column: 1
          }
        },
        line: 10
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 11,
            column: 11
          },
          end: {
            line: 11,
            column: 12
          }
        },
        loc: {
          start: {
            line: 11,
            column: 25
          },
          end: {
            line: 14,
            column: 5
          }
        },
        line: 11
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 12,
            column: 67
          },
          end: {
            line: 12,
            column: 68
          }
        },
        loc: {
          start: {
            line: 12,
            column: 73
          },
          end: {
            line: 12,
            column: 89
          }
        },
        line: 12
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {},
    inputSourceMap: {
      version: 3,
      file: "premiumReward.js",
      sourceRoot: "",
      sources: ["../../routes/premiumReward.ts"],
      names: [],
      mappings: ";AAAA;;;GAGG;;AAEH,6BAA6B;AAG7B,wDAAwD;AACxD,MAAM,UAAU,GAAG,OAAO,CAAC,mBAAmB,CAAC,CAAC,UAAU,CAAA;AAE1D,MAAM,CAAC,OAAO,GAAG,SAAS,mBAAmB;IAC3C,OAAO,CAAC,GAAY,EAAE,GAAa,EAAE,EAAE;QACrC,cAAc,CAAC,OAAO,CAAC,UAAU,CAAC,uBAAuB,EAAE,GAAG,EAAE,GAAG,OAAO,IAAI,CAAA,CAAC,CAAC,CAAC,CAAA;QACjF,GAAG,CAAC,QAAQ,CAAC,IAAI,CAAC,OAAO,CAAC,4EAA4E,CAAC,CAAC,CAAA;IAC1G,CAAC,CAAA;AACH,CAAC,CAAA"
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "34342d4190a35d6689188e78217c29a81a120b90"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_nstyr0yb8 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_nstyr0yb8();
cov_nstyr0yb8().s[0]++;
Object.defineProperty(exports, "__esModule", {
  value: true
});
const path = (cov_nstyr0yb8().s[1]++, require("path"));
const challengeUtils = (cov_nstyr0yb8().s[2]++, require("../lib/challengeUtils"));
const challenges = (cov_nstyr0yb8().s[3]++, require('../data/datacache').challenges);
cov_nstyr0yb8().s[4]++;

module.exports = function servePremiumContent() {
  cov_nstyr0yb8().f[0]++;
  cov_nstyr0yb8().s[5]++;
  return (req, res) => {
    cov_nstyr0yb8().f[1]++;
    cov_nstyr0yb8().s[6]++;
    challengeUtils.solveIf(challenges.premiumPaywallChallenge, () => {
      cov_nstyr0yb8().f[2]++;
      cov_nstyr0yb8().s[7]++;
      return true;
    });
    cov_nstyr0yb8().s[8]++;
    res.sendFile(path.resolve('frontend/dist/frontend/assets/private/JuiceShop_Wallpaper_1920x1080_VR.jpg'));
  };
}; //# sourceMappingURL=premiumReward.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLQTtBQUdBO0FBQ0EsTUFBTUEsVUFBVSw0QkFBR0MsT0FBTyxDQUFDLG1CQUFELENBQVAsQ0FBNkJELFVBQWhDLENBQWhCOzs7QUFFQUUsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLFNBQVNDLG1CQUFULEdBQTRCO0VBQUE7RUFBQTtFQUMzQyxPQUFPLENBQUNDLEdBQUQsRUFBZUMsR0FBZixLQUFnQztJQUFBO0lBQUE7SUFDckNDLGNBQWMsQ0FBQ0MsT0FBZixDQUF1QlIsVUFBVSxDQUFDUyx1QkFBbEMsRUFBMkQsTUFBSztNQUFBO01BQUE7TUFBRyxPQUFPLElBQVA7SUFBYSxDQUFoRjtJQURxQztJQUVyQ0gsR0FBRyxDQUFDSSxRQUFKLENBQWFDLElBQUksQ0FBQ0MsT0FBTCxDQUFhLDRFQUFiLENBQWI7RUFDRCxDQUhEO0FBSUQsQ0FMRCxDIiwibmFtZXMiOlsiY2hhbGxlbmdlcyIsInJlcXVpcmUiLCJtb2R1bGUiLCJleHBvcnRzIiwic2VydmVQcmVtaXVtQ29udGVudCIsInJlcSIsInJlcyIsImNoYWxsZW5nZVV0aWxzIiwic29sdmVJZiIsInByZW1pdW1QYXl3YWxsQ2hhbGxlbmdlIiwic2VuZEZpbGUiLCJwYXRoIiwicmVzb2x2ZSJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9yb3V0ZXMvcHJlbWl1bVJld2FyZC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==