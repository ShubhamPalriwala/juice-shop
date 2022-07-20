"use strict";
/*
 * Copyright (c) 2014-2022 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

function cov_15utqzf8mx() {
  var path = "/home/shubham/Desktop/juice-shop/build/routes/logfileServer.js";
  var hash = "3c698e17114cc1dacea820e64836107a2aed000c";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/shubham/Desktop/juice-shop/build/routes/logfileServer.js",
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
          column: 54
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
        name: "serveLogFiles",
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
      file: "logfileServer.js",
      sourceRoot: "",
      sources: ["../../routes/logfileServer.ts"],
      names: [],
      mappings: ";AAAA;;;GAGG;;AAEH,6BAA6B;AAG7B,MAAM,CAAC,OAAO,GAAG,SAAS,aAAa;IACrC,OAAO,CAAC,EAAE,MAAM,EAAW,EAAE,GAAa,EAAE,IAAkB,EAAE,EAAE;QAChE,MAAM,IAAI,GAAG,MAAM,CAAC,IAAI,CAAA;QAExB,IAAI,CAAC,IAAI,CAAC,QAAQ,CAAC,GAAG,CAAC,EAAE;YACvB,GAAG,CAAC,QAAQ,CAAC,IAAI,CAAC,OAAO,CAAC,OAAO,EAAE,IAAI,CAAC,CAAC,CAAA;SAC1C;aAAM;YACL,GAAG,CAAC,MAAM,CAAC,GAAG,CAAC,CAAA;YACf,IAAI,CAAC,IAAI,KAAK,CAAC,4CAA4C,CAAC,CAAC,CAAA;SAC9D;IACH,CAAC,CAAA;AACH,CAAC,CAAA"
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "3c698e17114cc1dacea820e64836107a2aed000c"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_15utqzf8mx = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_15utqzf8mx();
cov_15utqzf8mx().s[0]++;
Object.defineProperty(exports, "__esModule", {
  value: true
});
const path = (cov_15utqzf8mx().s[1]++, require("path"));
cov_15utqzf8mx().s[2]++;

module.exports = function serveLogFiles() {
  cov_15utqzf8mx().f[0]++;
  cov_15utqzf8mx().s[3]++;
  return ({
    params
  }, res, next) => {
    cov_15utqzf8mx().f[1]++;
    const file = (cov_15utqzf8mx().s[4]++, params.file);
    cov_15utqzf8mx().s[5]++;

    if (!file.includes('/')) {
      cov_15utqzf8mx().b[0][0]++;
      cov_15utqzf8mx().s[6]++;
      res.sendFile(path.resolve('logs/', file));
    } else {
      cov_15utqzf8mx().b[0][1]++;
      cov_15utqzf8mx().s[7]++;
      res.status(403);
      cov_15utqzf8mx().s[8]++;
      next(new Error('File names cannot contain forward slashes!'));
    }
  };
}; //# sourceMappingURL=logfileServer.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBZ0JNOzs7Ozs7Ozs7Ozs7O0FBWE47OztBQUdBQSxNQUFNLENBQUNDLE9BQVAsR0FBaUIsU0FBU0MsYUFBVCxHQUFzQjtFQUFBO0VBQUE7RUFDckMsT0FBTyxDQUFDO0lBQUVDO0VBQUYsQ0FBRCxFQUFzQkMsR0FBdEIsRUFBcUNDLElBQXJDLEtBQTJEO0lBQUE7SUFDaEUsTUFBTUMsSUFBSSw2QkFBR0gsTUFBTSxDQUFDRyxJQUFWLENBQVY7SUFEZ0U7O0lBR2hFLElBQUksQ0FBQ0EsSUFBSSxDQUFDQyxRQUFMLENBQWMsR0FBZCxDQUFMLEVBQXlCO01BQUE7TUFBQTtNQUN2QkgsR0FBRyxDQUFDSSxRQUFKLENBQWFDLElBQUksQ0FBQ0MsT0FBTCxDQUFhLE9BQWIsRUFBc0JKLElBQXRCLENBQWI7SUFDRCxDQUZELE1BRU87TUFBQTtNQUFBO01BQ0xGLEdBQUcsQ0FBQ08sTUFBSixDQUFXLEdBQVg7TUFESztNQUVMTixJQUFJLENBQUMsSUFBSU8sS0FBSixDQUFVLDRDQUFWLENBQUQsQ0FBSjtJQUNEO0VBQ0YsQ0FURDtBQVVELENBWEQsQyIsIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJzZXJ2ZUxvZ0ZpbGVzIiwicGFyYW1zIiwicmVzIiwibmV4dCIsImZpbGUiLCJpbmNsdWRlcyIsInNlbmRGaWxlIiwicGF0aCIsInJlc29sdmUiLCJzdGF0dXMiLCJFcnJvciJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9yb3V0ZXMvbG9nZmlsZVNlcnZlci50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==