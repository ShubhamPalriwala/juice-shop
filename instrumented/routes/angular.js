"use strict";
/*
 * Copyright (c) 2014-2022 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

function cov_1y9qmznb3f() {
  var path = "/home/shubham/Desktop/juice-shop/build/routes/angular.js";
  var hash = "8f4f390d384fd0c5f12c95ea3e9f92b1ed9c4dea";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/shubham/Desktop/juice-shop/build/routes/angular.js",
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
          column: 14
        },
        end: {
          line: 8,
          column: 37
        }
      },
      "3": {
        start: {
          line: 9,
          column: 0
        },
        end: {
          line: 18,
          column: 2
        }
      },
      "4": {
        start: {
          line: 10,
          column: 4
        },
        end: {
          line: 17,
          column: 6
        }
      },
      "5": {
        start: {
          line: 11,
          column: 8
        },
        end: {
          line: 16,
          column: 9
        }
      },
      "6": {
        start: {
          line: 12,
          column: 12
        },
        end: {
          line: 12,
          column: 76
        }
      },
      "7": {
        start: {
          line: 15,
          column: 12
        },
        end: {
          line: 15,
          column: 55
        }
      }
    },
    fnMap: {
      "0": {
        name: "serveAngularClient",
        decl: {
          start: {
            line: 9,
            column: 26
          },
          end: {
            line: 9,
            column: 44
          }
        },
        loc: {
          start: {
            line: 9,
            column: 47
          },
          end: {
            line: 18,
            column: 1
          }
        },
        line: 9
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 10,
            column: 11
          },
          end: {
            line: 10,
            column: 12
          }
        },
        loc: {
          start: {
            line: 10,
            column: 35
          },
          end: {
            line: 17,
            column: 5
          }
        },
        line: 10
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 11,
            column: 8
          },
          end: {
            line: 16,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 11,
            column: 8
          },
          end: {
            line: 16,
            column: 9
          }
        }, {
          start: {
            line: 11,
            column: 8
          },
          end: {
            line: 16,
            column: 9
          }
        }],
        line: 11
      },
      "1": {
        loc: {
          start: {
            line: 11,
            column: 12
          },
          end: {
            line: 11,
            column: 77
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 11,
            column: 12
          },
          end: {
            line: 11,
            column: 42
          }
        }, {
          start: {
            line: 11,
            column: 46
          },
          end: {
            line: 11,
            column: 77
          }
        }],
        line: 11
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    inputSourceMap: {
      version: 3,
      file: "angular.js",
      sourceRoot: "",
      sources: ["../../routes/angular.ts"],
      names: [],
      mappings: ";AAAA;;;GAGG;;AAEH,6BAA6B;AAG7B,MAAM,KAAK,GAAG,OAAO,CAAC,cAAc,CAAC,CAAA;AAErC,MAAM,CAAC,OAAO,GAAG,SAAS,kBAAkB;IAC1C,OAAO,CAAC,EAAE,GAAG,EAAW,EAAE,GAAa,EAAE,IAAkB,EAAE,EAAE;QAC7D,IAAI,CAAC,KAAK,CAAC,UAAU,CAAC,GAAG,EAAE,MAAM,CAAC,IAAI,CAAC,KAAK,CAAC,UAAU,CAAC,GAAG,EAAE,OAAO,CAAC,EAAE;YACrE,GAAG,CAAC,QAAQ,CAAC,IAAI,CAAC,OAAO,CAAC,mCAAmC,CAAC,CAAC,CAAA;SAChE;aAAM;YACL,IAAI,CAAC,IAAI,KAAK,CAAC,mBAAmB,GAAG,GAAG,CAAC,CAAC,CAAA;SAC3C;IACH,CAAC,CAAA;AACH,CAAC,CAAA"
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "8f4f390d384fd0c5f12c95ea3e9f92b1ed9c4dea"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1y9qmznb3f = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1y9qmznb3f();
cov_1y9qmznb3f().s[0]++;
Object.defineProperty(exports, "__esModule", {
  value: true
});
const path = (cov_1y9qmznb3f().s[1]++, require("path"));
const utils = (cov_1y9qmznb3f().s[2]++, require('../lib/utils'));
cov_1y9qmznb3f().s[3]++;

module.exports = function serveAngularClient() {
  cov_1y9qmznb3f().f[0]++;
  cov_1y9qmznb3f().s[4]++;
  return ({
    url
  }, res, next) => {
    cov_1y9qmznb3f().f[1]++;
    cov_1y9qmznb3f().s[5]++;

    if ((cov_1y9qmznb3f().b[1][0]++, !utils.startsWith(url, '/api')) && (cov_1y9qmznb3f().b[1][1]++, !utils.startsWith(url, '/rest'))) {
      cov_1y9qmznb3f().b[0][0]++;
      cov_1y9qmznb3f().s[6]++;
      res.sendFile(path.resolve('frontend/dist/frontend/index.html'));
    } else {
      cov_1y9qmznb3f().b[0][1]++;
      cov_1y9qmznb3f().s[7]++;
      next(new Error('Unexpected path: ' + url));
    }
  };
}; //# sourceMappingURL=angular.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFnQks7Ozs7Ozs7Ozs7Ozs7QUFYTDtBQUdBLE1BQU1BLEtBQUssNkJBQUdDLE9BQU8sQ0FBQyxjQUFELENBQVYsQ0FBWDs7O0FBRUFDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixTQUFTQyxrQkFBVCxHQUEyQjtFQUFBO0VBQUE7RUFDMUMsT0FBTyxDQUFDO0lBQUVDO0VBQUYsQ0FBRCxFQUFtQkMsR0FBbkIsRUFBa0NDLElBQWxDLEtBQXdEO0lBQUE7SUFBQTs7SUFDN0QsSUFBSSw4QkFBQ1AsS0FBSyxDQUFDUSxVQUFOLENBQWlCSCxHQUFqQixFQUFzQixNQUF0QixDQUFELGtDQUFrQyxDQUFDTCxLQUFLLENBQUNRLFVBQU4sQ0FBaUJILEdBQWpCLEVBQXNCLE9BQXRCLENBQW5DLENBQUosRUFBdUU7TUFBQTtNQUFBO01BQ3JFQyxHQUFHLENBQUNHLFFBQUosQ0FBYUMsSUFBSSxDQUFDQyxPQUFMLENBQWEsbUNBQWIsQ0FBYjtJQUNELENBRkQsTUFFTztNQUFBO01BQUE7TUFDTEosSUFBSSxDQUFDLElBQUlLLEtBQUosQ0FBVSxzQkFBc0JQLEdBQWhDLENBQUQsQ0FBSjtJQUNEO0VBQ0YsQ0FORDtBQU9ELENBUkQsQyIsIm5hbWVzIjpbInV0aWxzIiwicmVxdWlyZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJzZXJ2ZUFuZ3VsYXJDbGllbnQiLCJ1cmwiLCJyZXMiLCJuZXh0Iiwic3RhcnRzV2l0aCIsInNlbmRGaWxlIiwicGF0aCIsInJlc29sdmUiLCJFcnJvciJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9yb3V0ZXMvYW5ndWxhci50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==