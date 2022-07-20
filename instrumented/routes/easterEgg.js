"use strict";
/*
 * Copyright (c) 2014-2022 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

function cov_1zmslskc8b() {
  var path = "/home/shubham/Desktop/juice-shop/build/routes/easterEgg.js";
  var hash = "01a0263bd8a221bfacc63197070defaf5398f3cd";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/shubham/Desktop/juice-shop/build/routes/easterEgg.js",
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
          column: 94
        }
      },
      "7": {
        start: {
          line: 12,
          column: 78
        },
        end: {
          line: 12,
          column: 90
        }
      },
      "8": {
        start: {
          line: 13,
          column: 8
        },
        end: {
          line: 13,
          column: 94
        }
      }
    },
    fnMap: {
      "0": {
        name: "serveEasterEgg",
        decl: {
          start: {
            line: 10,
            column: 26
          },
          end: {
            line: 10,
            column: 40
          }
        },
        loc: {
          start: {
            line: 10,
            column: 43
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
            column: 70
          },
          end: {
            line: 12,
            column: 71
          }
        },
        loc: {
          start: {
            line: 12,
            column: 76
          },
          end: {
            line: 12,
            column: 92
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
      file: "easterEgg.js",
      sourceRoot: "",
      sources: ["../../routes/easterEgg.ts"],
      names: [],
      mappings: ";AAAA;;;GAGG;;AAEH,6BAA6B;AAG7B,wDAAwD;AACxD,MAAM,UAAU,GAAG,OAAO,CAAC,mBAAmB,CAAC,CAAC,UAAU,CAAA;AAE1D,MAAM,CAAC,OAAO,GAAG,SAAS,cAAc;IACtC,OAAO,CAAC,GAAY,EAAE,GAAa,EAAE,EAAE;QACrC,cAAc,CAAC,OAAO,CAAC,UAAU,CAAC,0BAA0B,EAAE,GAAG,EAAE,GAAG,OAAO,IAAI,CAAA,CAAC,CAAC,CAAC,CAAA;QACpF,GAAG,CAAC,QAAQ,CAAC,IAAI,CAAC,OAAO,CAAC,yDAAyD,CAAC,CAAC,CAAA;IACvF,CAAC,CAAA;AACH,CAAC,CAAA"
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "01a0263bd8a221bfacc63197070defaf5398f3cd"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1zmslskc8b = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1zmslskc8b();
cov_1zmslskc8b().s[0]++;
Object.defineProperty(exports, "__esModule", {
  value: true
});
const path = (cov_1zmslskc8b().s[1]++, require("path"));
const challengeUtils = (cov_1zmslskc8b().s[2]++, require("../lib/challengeUtils"));
const challenges = (cov_1zmslskc8b().s[3]++, require('../data/datacache').challenges);
cov_1zmslskc8b().s[4]++;

module.exports = function serveEasterEgg() {
  cov_1zmslskc8b().f[0]++;
  cov_1zmslskc8b().s[5]++;
  return (req, res) => {
    cov_1zmslskc8b().f[1]++;
    cov_1zmslskc8b().s[6]++;
    challengeUtils.solveIf(challenges.easterEggLevelTwoChallenge, () => {
      cov_1zmslskc8b().f[2]++;
      cov_1zmslskc8b().s[7]++;
      return true;
    });
    cov_1zmslskc8b().s[8]++;
    res.sendFile(path.resolve('frontend/dist/frontend/assets/private/threejs-demo.html'));
  };
}; //# sourceMappingURL=easterEgg.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLQTtBQUdBO0FBQ0EsTUFBTUEsVUFBVSw2QkFBR0MsT0FBTyxDQUFDLG1CQUFELENBQVAsQ0FBNkJELFVBQWhDLENBQWhCOzs7QUFFQUUsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLFNBQVNDLGNBQVQsR0FBdUI7RUFBQTtFQUFBO0VBQ3RDLE9BQU8sQ0FBQ0MsR0FBRCxFQUFlQyxHQUFmLEtBQWdDO0lBQUE7SUFBQTtJQUNyQ0MsY0FBYyxDQUFDQyxPQUFmLENBQXVCUixVQUFVLENBQUNTLDBCQUFsQyxFQUE4RCxNQUFLO01BQUE7TUFBQTtNQUFHLE9BQU8sSUFBUDtJQUFhLENBQW5GO0lBRHFDO0lBRXJDSCxHQUFHLENBQUNJLFFBQUosQ0FBYUMsSUFBSSxDQUFDQyxPQUFMLENBQWEseURBQWIsQ0FBYjtFQUNELENBSEQ7QUFJRCxDQUxELEMiLCJuYW1lcyI6WyJjaGFsbGVuZ2VzIiwicmVxdWlyZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJzZXJ2ZUVhc3RlckVnZyIsInJlcSIsInJlcyIsImNoYWxsZW5nZVV0aWxzIiwic29sdmVJZiIsImVhc3RlckVnZ0xldmVsVHdvQ2hhbGxlbmdlIiwic2VuZEZpbGUiLCJwYXRoIiwicmVzb2x2ZSJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9yb3V0ZXMvZWFzdGVyRWdnLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19