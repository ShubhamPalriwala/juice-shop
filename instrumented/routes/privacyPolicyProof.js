"use strict";
/*
 * Copyright (c) 2014-2022 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

function cov_8s7qsyv8w() {
  var path = "/home/shubham/Desktop/juice-shop/build/routes/privacyPolicyProof.js";
  var hash = "fdb31967fa06185f710c0cf4116b94ff1199878a";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/shubham/Desktop/juice-shop/build/routes/privacyPolicyProof.js",
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
          column: 95
        }
      },
      "7": {
        start: {
          line: 12,
          column: 79
        },
        end: {
          line: 12,
          column: 91
        }
      },
      "8": {
        start: {
          line: 13,
          column: 8
        },
        end: {
          line: 13,
          column: 90
        }
      }
    },
    fnMap: {
      "0": {
        name: "servePrivacyPolicyProof",
        decl: {
          start: {
            line: 10,
            column: 26
          },
          end: {
            line: 10,
            column: 49
          }
        },
        loc: {
          start: {
            line: 10,
            column: 52
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
            column: 71
          },
          end: {
            line: 12,
            column: 72
          }
        },
        loc: {
          start: {
            line: 12,
            column: 77
          },
          end: {
            line: 12,
            column: 93
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
      file: "privacyPolicyProof.js",
      sourceRoot: "",
      sources: ["../../routes/privacyPolicyProof.ts"],
      names: [],
      mappings: ";AAAA;;;GAGG;;AAEH,6BAA6B;AAG7B,wDAAwD;AACxD,MAAM,UAAU,GAAG,OAAO,CAAC,mBAAmB,CAAC,CAAC,UAAU,CAAA;AAE1D,MAAM,CAAC,OAAO,GAAG,SAAS,uBAAuB;IAC/C,OAAO,CAAC,GAAY,EAAE,GAAa,EAAE,EAAE;QACrC,cAAc,CAAC,OAAO,CAAC,UAAU,CAAC,2BAA2B,EAAE,GAAG,EAAE,GAAG,OAAO,IAAI,CAAA,CAAC,CAAC,CAAC,CAAA;QACrF,GAAG,CAAC,QAAQ,CAAC,IAAI,CAAC,OAAO,CAAC,qDAAqD,CAAC,CAAC,CAAA;IACnF,CAAC,CAAA;AACH,CAAC,CAAA"
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "fdb31967fa06185f710c0cf4116b94ff1199878a"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_8s7qsyv8w = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_8s7qsyv8w();
cov_8s7qsyv8w().s[0]++;
Object.defineProperty(exports, "__esModule", {
  value: true
});
const path = (cov_8s7qsyv8w().s[1]++, require("path"));
const challengeUtils = (cov_8s7qsyv8w().s[2]++, require("../lib/challengeUtils"));
const challenges = (cov_8s7qsyv8w().s[3]++, require('../data/datacache').challenges);
cov_8s7qsyv8w().s[4]++;

module.exports = function servePrivacyPolicyProof() {
  cov_8s7qsyv8w().f[0]++;
  cov_8s7qsyv8w().s[5]++;
  return (req, res) => {
    cov_8s7qsyv8w().f[1]++;
    cov_8s7qsyv8w().s[6]++;
    challengeUtils.solveIf(challenges.privacyPolicyProofChallenge, () => {
      cov_8s7qsyv8w().f[2]++;
      cov_8s7qsyv8w().s[7]++;
      return true;
    });
    cov_8s7qsyv8w().s[8]++;
    res.sendFile(path.resolve('frontend/dist/frontend/assets/private/thank-you.jpg'));
  };
}; //# sourceMappingURL=privacyPolicyProof.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLQTtBQUdBO0FBQ0EsTUFBTUEsVUFBVSw0QkFBR0MsT0FBTyxDQUFDLG1CQUFELENBQVAsQ0FBNkJELFVBQWhDLENBQWhCOzs7QUFFQUUsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLFNBQVNDLHVCQUFULEdBQWdDO0VBQUE7RUFBQTtFQUMvQyxPQUFPLENBQUNDLEdBQUQsRUFBZUMsR0FBZixLQUFnQztJQUFBO0lBQUE7SUFDckNDLGNBQWMsQ0FBQ0MsT0FBZixDQUF1QlIsVUFBVSxDQUFDUywyQkFBbEMsRUFBK0QsTUFBSztNQUFBO01BQUE7TUFBRyxPQUFPLElBQVA7SUFBYSxDQUFwRjtJQURxQztJQUVyQ0gsR0FBRyxDQUFDSSxRQUFKLENBQWFDLElBQUksQ0FBQ0MsT0FBTCxDQUFhLHFEQUFiLENBQWI7RUFDRCxDQUhEO0FBSUQsQ0FMRCxDIiwibmFtZXMiOlsiY2hhbGxlbmdlcyIsInJlcXVpcmUiLCJtb2R1bGUiLCJleHBvcnRzIiwic2VydmVQcml2YWN5UG9saWN5UHJvb2YiLCJyZXEiLCJyZXMiLCJjaGFsbGVuZ2VVdGlscyIsInNvbHZlSWYiLCJwcml2YWN5UG9saWN5UHJvb2ZDaGFsbGVuZ2UiLCJzZW5kRmlsZSIsInBhdGgiLCJyZXNvbHZlIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3JvdXRlcy9wcml2YWN5UG9saWN5UHJvb2YudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=