"use strict";

function cov_o1tiq4myv() {
  var path = "/home/shubham/Desktop/juice-shop/build/rsn/rsn-update.js";
  var hash = "7bd5f4c5de736977661a9e68657da276dd9a8dbf";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/shubham/Desktop/juice-shop/build/rsn/rsn-update.js",
    statementMap: {
      "0": {
        start: {
          line: 2,
          column: 0
        },
        end: {
          line: 2,
          column: 62
        }
      },
      "1": {
        start: {
          line: 3,
          column: 18
        },
        end: {
          line: 3,
          column: 38
        }
      },
      "2": {
        start: {
          line: 4,
          column: 15
        },
        end: {
          line: 4,
          column: 37
        }
      },
      "3": {
        start: {
          line: 5,
          column: 13
        },
        end: {
          line: 5,
          column: 39
        }
      },
      "4": {
        start: {
          line: 6,
          column: 0
        },
        end: {
          line: 15,
          column: 3
        }
      },
      "5": {
        start: {
          line: 8,
          column: 4
        },
        end: {
          line: 8,
          column: 61
        }
      },
      "6": {
        start: {
          line: 9,
          column: 4
        },
        end: {
          line: 9,
          column: 37
        }
      },
      "7": {
        start: {
          line: 10,
          column: 4
        },
        end: {
          line: 10,
          column: 104
        }
      },
      "8": {
        start: {
          line: 13,
          column: 4
        },
        end: {
          line: 13,
          column: 21
        }
      },
      "9": {
        start: {
          line: 14,
          column: 4
        },
        end: {
          line: 14,
          column: 25
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 7,
            column: 10
          },
          end: {
            line: 7,
            column: 11
          }
        },
        loc: {
          start: {
            line: 7,
            column: 18
          },
          end: {
            line: 11,
            column: 1
          }
        },
        line: 7
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 12,
            column: 11
          },
          end: {
            line: 12,
            column: 12
          }
        },
        loc: {
          start: {
            line: 12,
            column: 18
          },
          end: {
            line: 15,
            column: 1
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
      "8": 0,
      "9": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    inputSourceMap: {
      version: 3,
      file: "rsn-update.js",
      sourceRoot: "",
      sources: ["../../rsn/rsn-update.ts"],
      names: [],
      mappings: ";;AAAA,uCAA8D;AAC9D,MAAM,MAAM,GAAG,OAAO,CAAC,aAAa,CAAC,CAAA;AAErC,MAAM,IAAI,GAAG,IAAA,mBAAS,GAAE,CAAA;AACxB,IAAA,oBAAU,EAAC,IAAI,CAAC;KACb,IAAI,CAAC,IAAI,CAAC,EAAE;IACX,OAAO,CAAC,GAAG,CAAC,CAAC,yCAAyC,CAAC,CAAC,CAAA;IACxD,IAAA,qBAAW,EAAC,IAAI,CAAC,CAAA;IACjB,OAAO,CAAC,GAAG,CAAC,GAAG,MAAM,CAAC,IAAI,CAAC,kCAAkC,CAAC,oCAAoC,CAAC,CAAA;AACrG,CAAC,CAAC;KACD,KAAK,CAAC,GAAG,CAAC,EAAE;IACX,OAAO,CAAC,GAAG,CAAC,GAAG,CAAC,CAAA;IAChB,OAAO,CAAC,QAAQ,GAAG,CAAC,CAAA;AACtB,CAAC,CAAC,CAAA"
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "7bd5f4c5de736977661a9e68657da276dd9a8dbf"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_o1tiq4myv = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_o1tiq4myv();
cov_o1tiq4myv().s[0]++;
Object.defineProperty(exports, "__esModule", {
  value: true
});
const rsnUtil_1 = (cov_o1tiq4myv().s[1]++, require("./rsnUtil"));
const colors = (cov_o1tiq4myv().s[2]++, require('colors/safe'));
const keys = (cov_o1tiq4myv().s[3]++, (0, rsnUtil_1.readFiles)());
cov_o1tiq4myv().s[4]++;
(0, rsnUtil_1.checkDiffs)(keys).then(data => {
  cov_o1tiq4myv().f[0]++;
  cov_o1tiq4myv().s[5]++;
  console.log('---------------------------------------');
  cov_o1tiq4myv().s[6]++;
  (0, rsnUtil_1.writeToFile)(data);
  cov_o1tiq4myv().s[7]++;
  console.log(`${colors.bold('All file diffs have been locked!')} Commit changed cache.json to git.`);
}).catch(err => {
  cov_o1tiq4myv().f[1]++;
  cov_o1tiq4myv().s[8]++;
  console.log(err);
  cov_o1tiq4myv().s[9]++;
  process.exitCode = 1;
}); //# sourceMappingURL=rsn-update.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0EsTUFBTUEsTUFBTSw0QkFBR0MsT0FBTyxDQUFDLGFBQUQsQ0FBVixDQUFaO0FBRUEsTUFBTUMsSUFBSSw0QkFBRywwQkFBSCxDQUFWOztBQUNBLDBCQUFXQSxJQUFYLEVBQ0dDLElBREgsQ0FDUUMsSUFBSSxJQUFHO0VBQUE7RUFBQTtFQUNYQyxPQUFPLENBQUNDLEdBQVIsQ0FBYSx5Q0FBYjtFQURXO0VBRVgsMkJBQVlGLElBQVo7RUFGVztFQUdYQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxHQUFHTixNQUFNLENBQUNPLElBQVAsQ0FBWSxrQ0FBWixDQUErQyxvQ0FBOUQ7QUFDRCxDQUxILEVBTUdDLEtBTkgsQ0FNU0MsR0FBRyxJQUFHO0VBQUE7RUFBQTtFQUNYSixPQUFPLENBQUNDLEdBQVIsQ0FBWUcsR0FBWjtFQURXO0VBRVhDLE9BQU8sQ0FBQ0MsUUFBUixHQUFtQixDQUFuQjtBQUNELENBVEgsRSIsIm5hbWVzIjpbImNvbG9ycyIsInJlcXVpcmUiLCJrZXlzIiwidGhlbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiYm9sZCIsImNhdGNoIiwiZXJyIiwicHJvY2VzcyIsImV4aXRDb2RlIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3Jzbi9yc24tdXBkYXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19