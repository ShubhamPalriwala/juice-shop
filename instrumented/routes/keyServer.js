"use strict";
/*
 * Copyright (c) 2014-2022 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

function cov_25mo00wo6() {
  var path = "/home/shubham/Desktop/juice-shop/build/routes/keyServer.js";
  var hash = "9adc9d498325d0c310e56980c895efd61a91b31a";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/shubham/Desktop/juice-shop/build/routes/keyServer.js",
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
          column: 0
        },
        end: {
          line: 19,
          column: 2
        }
      },
      "3": {
        start: {
          line: 9,
          column: 4
        },
        end: {
          line: 18,
          column: 6
        }
      },
      "4": {
        start: {
          line: 10,
          column: 21
        },
        end: {
          line: 10,
          column: 32
        }
      },
      "5": {
        start: {
          line: 11,
          column: 8
        },
        end: {
          line: 17,
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
          column: 64
        }
      },
      "7": {
        start: {
          line: 15,
          column: 12
        },
        end: {
          line: 15,
          column: 28
        }
      },
      "8": {
        start: {
          line: 16,
          column: 12
        },
        end: {
          line: 16,
          column: 74
        }
      }
    },
    fnMap: {
      "0": {
        name: "serveKeyFiles",
        decl: {
          start: {
            line: 8,
            column: 26
          },
          end: {
            line: 8,
            column: 39
          }
        },
        loc: {
          start: {
            line: 8,
            column: 42
          },
          end: {
            line: 19,
            column: 1
          }
        },
        line: 8
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 9,
            column: 11
          },
          end: {
            line: 9,
            column: 12
          }
        },
        loc: {
          start: {
            line: 9,
            column: 38
          },
          end: {
            line: 18,
            column: 5
          }
        },
        line: 9
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
            line: 17,
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
            line: 17,
            column: 9
          }
        }, {
          start: {
            line: 11,
            column: 8
          },
          end: {
            line: 17,
            column: 9
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
      "7": 0,
      "8": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0, 0]
    },
    inputSourceMap: {
      version: 3,
      file: "keyServer.js",
      sourceRoot: "",
      sources: ["../../routes/keyServer.ts"],
      names: [],
      mappings: ";AAAA;;;GAGG;;AAEH,6BAA6B;AAG7B,MAAM,CAAC,OAAO,GAAG,SAAS,aAAa;IACrC,OAAO,CAAC,EAAE,MAAM,EAAW,EAAE,GAAa,EAAE,IAAkB,EAAE,EAAE;QAChE,MAAM,IAAI,GAAG,MAAM,CAAC,IAAI,CAAA;QAExB,IAAI,CAAC,IAAI,CAAC,QAAQ,CAAC,GAAG,CAAC,EAAE;YACvB,GAAG,CAAC,QAAQ,CAAC,IAAI,CAAC,OAAO,CAAC,iBAAiB,EAAE,IAAI,CAAC,CAAC,CAAA;SACpD;aAAM;YACL,GAAG,CAAC,MAAM,CAAC,GAAG,CAAC,CAAA;YACf,IAAI,CAAC,IAAI,KAAK,CAAC,4CAA4C,CAAC,CAAC,CAAA;SAC9D;IACH,CAAC,CAAA;AACH,CAAC,CAAA"
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "9adc9d498325d0c310e56980c895efd61a91b31a"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_25mo00wo6 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_25mo00wo6();
cov_25mo00wo6().s[0]++;
Object.defineProperty(exports, "__esModule", {
  value: true
});
const path = (cov_25mo00wo6().s[1]++, require("path"));
cov_25mo00wo6().s[2]++;

module.exports = function serveKeyFiles() {
  cov_25mo00wo6().f[0]++;
  cov_25mo00wo6().s[3]++;
  return ({
    params
  }, res, next) => {
    cov_25mo00wo6().f[1]++;
    const file = (cov_25mo00wo6().s[4]++, params.file);
    cov_25mo00wo6().s[5]++;

    if (!file.includes('/')) {
      cov_25mo00wo6().b[0][0]++;
      cov_25mo00wo6().s[6]++;
      res.sendFile(path.resolve('encryptionkeys/', file));
    } else {
      cov_25mo00wo6().b[0][1]++;
      cov_25mo00wo6().s[7]++;
      res.status(403);
      cov_25mo00wo6().s[8]++;
      next(new Error('File names cannot contain forward slashes!'));
    }
  };
}; //# sourceMappingURL=keyServer.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBZ0JNOzs7Ozs7Ozs7Ozs7O0FBWE47OztBQUdBQSxNQUFNLENBQUNDLE9BQVAsR0FBaUIsU0FBU0MsYUFBVCxHQUFzQjtFQUFBO0VBQUE7RUFDckMsT0FBTyxDQUFDO0lBQUVDO0VBQUYsQ0FBRCxFQUFzQkMsR0FBdEIsRUFBcUNDLElBQXJDLEtBQTJEO0lBQUE7SUFDaEUsTUFBTUMsSUFBSSw0QkFBR0gsTUFBTSxDQUFDRyxJQUFWLENBQVY7SUFEZ0U7O0lBR2hFLElBQUksQ0FBQ0EsSUFBSSxDQUFDQyxRQUFMLENBQWMsR0FBZCxDQUFMLEVBQXlCO01BQUE7TUFBQTtNQUN2QkgsR0FBRyxDQUFDSSxRQUFKLENBQWFDLElBQUksQ0FBQ0MsT0FBTCxDQUFhLGlCQUFiLEVBQWdDSixJQUFoQyxDQUFiO0lBQ0QsQ0FGRCxNQUVPO01BQUE7TUFBQTtNQUNMRixHQUFHLENBQUNPLE1BQUosQ0FBVyxHQUFYO01BREs7TUFFTE4sSUFBSSxDQUFDLElBQUlPLEtBQUosQ0FBVSw0Q0FBVixDQUFELENBQUo7SUFDRDtFQUNGLENBVEQ7QUFVRCxDQVhELEMiLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwic2VydmVLZXlGaWxlcyIsInBhcmFtcyIsInJlcyIsIm5leHQiLCJmaWxlIiwiaW5jbHVkZXMiLCJzZW5kRmlsZSIsInBhdGgiLCJyZXNvbHZlIiwic3RhdHVzIiwiRXJyb3IiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcm91dGVzL2tleVNlcnZlci50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==