"use strict";
/*
 * Copyright (c) 2014-2022 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

function cov_11n2r1n22() {
  var path = "/home/shubham/Desktop/juice-shop/build/routes/memory.js";
  var hash = "e09a001b641abe981154d3585bf5b181ef1c88a1";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/shubham/Desktop/juice-shop/build/routes/memory.js",
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
          column: 17
        },
        end: {
          line: 7,
          column: 44
        }
      },
      "2": {
        start: {
          line: 8,
          column: 15
        },
        end: {
          line: 8,
          column: 40
        }
      },
      "3": {
        start: {
          line: 9,
          column: 0
        },
        end: {
          line: 20,
          column: 2
        }
      },
      "4": {
        start: {
          line: 10,
          column: 4
        },
        end: {
          line: 19,
          column: 6
        }
      },
      "5": {
        start: {
          line: 12,
          column: 23
        },
        end: {
          line: 16,
          column: 9
        }
      },
      "6": {
        start: {
          line: 17,
          column: 23
        },
        end: {
          line: 17,
          column: 64
        }
      },
      "7": {
        start: {
          line: 18,
          column: 8
        },
        end: {
          line: 18,
          column: 66
        }
      },
      "8": {
        start: {
          line: 21,
          column: 0
        },
        end: {
          line: 26,
          column: 2
        }
      },
      "9": {
        start: {
          line: 22,
          column: 4
        },
        end: {
          line: 25,
          column: 6
        }
      },
      "10": {
        start: {
          line: 23,
          column: 25
        },
        end: {
          line: 23,
          column: 92
        }
      },
      "11": {
        start: {
          line: 24,
          column: 8
        },
        end: {
          line: 24,
          column: 68
        }
      }
    },
    fnMap: {
      "0": {
        name: "addMemory",
        decl: {
          start: {
            line: 9,
            column: 36
          },
          end: {
            line: 9,
            column: 45
          }
        },
        loc: {
          start: {
            line: 9,
            column: 48
          },
          end: {
            line: 20,
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
            column: 37
          },
          end: {
            line: 19,
            column: 5
          }
        },
        line: 10
      },
      "2": {
        name: "getMemories",
        decl: {
          start: {
            line: 21,
            column: 38
          },
          end: {
            line: 21,
            column: 49
          }
        },
        loc: {
          start: {
            line: 21,
            column: 52
          },
          end: {
            line: 26,
            column: 1
          }
        },
        line: 21
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 22,
            column: 11
          },
          end: {
            line: 22,
            column: 12
          }
        },
        loc: {
          start: {
            line: 22,
            column: 37
          },
          end: {
            line: 25,
            column: 5
          }
        },
        line: 22
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 14,
            column: 58
          },
          end: {
            line: 14,
            column: 122
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 14,
            column: 102
          },
          end: {
            line: 14,
            column: 108
          }
        }, {
          start: {
            line: 14,
            column: 111
          },
          end: {
            line: 14,
            column: 122
          }
        }],
        line: 14
      },
      "1": {
        loc: {
          start: {
            line: 14,
            column: 58
          },
          end: {
            line: 14,
            column: 99
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 14,
            column: 58
          },
          end: {
            line: 14,
            column: 82
          }
        }, {
          start: {
            line: 14,
            column: 86
          },
          end: {
            line: 14,
            column: 99
          }
        }],
        line: 14
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
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    inputSourceMap: {
      version: 3,
      file: "memory.js",
      sourceRoot: "",
      sources: ["../../routes/memory.ts"],
      names: [],
      mappings: ";AAAA;;;GAGG;;AAGH,6CAA8C;AAC9C,yCAA0C;AAE1C,MAAM,CAAC,OAAO,CAAC,SAAS,GAAG,SAAS,SAAS;IAC3C,OAAO,KAAK,EAAE,GAAY,EAAE,GAAa,EAAE,IAAkB,EAAE,EAAE;;QAC/D,MAAM,MAAM,GAAG;YACb,OAAO,EAAE,GAAG,CAAC,IAAI,CAAC,OAAO;YACzB,SAAS,EAAE,+BAA+B,IAAG,MAAA,GAAG,CAAC,IAAI,0CAAE,QAAQ,CAAA;YAC/D,MAAM,EAAE,GAAG,CAAC,IAAI,CAAC,MAAM;SACxB,CAAA;QACD,MAAM,MAAM,GAAG,MAAM,oBAAW,CAAC,MAAM,CAAC,MAAM,CAAC,CAAA;QAC/C,GAAG,CAAC,MAAM,CAAC,GAAG,CAAC,CAAC,IAAI,CAAC,EAAE,MAAM,EAAE,SAAS,EAAE,IAAI,EAAE,MAAM,EAAE,CAAC,CAAA;IAC3D,CAAC,CAAA;AACH,CAAC,CAAA;AAED,MAAM,CAAC,OAAO,CAAC,WAAW,GAAG,SAAS,WAAW;IAC/C,OAAO,KAAK,EAAE,GAAY,EAAE,GAAa,EAAE,IAAkB,EAAE,EAAE;QAC/D,MAAM,QAAQ,GAAG,MAAM,oBAAW,CAAC,OAAO,CAAC,EAAE,OAAO,EAAE,CAAC,gBAAS,CAAC,EAAE,CAAC,CAAA;QACpE,GAAG,CAAC,MAAM,CAAC,GAAG,CAAC,CAAC,IAAI,CAAC,EAAE,MAAM,EAAE,SAAS,EAAE,IAAI,EAAE,QAAQ,EAAE,CAAC,CAAA;IAC7D,CAAC,CAAA;AACH,CAAC,CAAA"
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "e09a001b641abe981154d3585bf5b181ef1c88a1"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_11n2r1n22 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_11n2r1n22();
cov_11n2r1n22().s[0]++;
Object.defineProperty(exports, "__esModule", {
  value: true
});
const memory_1 = (cov_11n2r1n22().s[1]++, require("../models/memory"));
const user_1 = (cov_11n2r1n22().s[2]++, require("../models/user"));
cov_11n2r1n22().s[3]++;

module.exports.addMemory = function addMemory() {
  cov_11n2r1n22().f[0]++;
  cov_11n2r1n22().s[4]++;
  return async (req, res, next) => {
    cov_11n2r1n22().f[1]++;

    var _a;

    const record = (cov_11n2r1n22().s[5]++, {
      caption: req.body.caption,
      imagePath: 'assets/public/images/uploads/' + ((cov_11n2r1n22().b[1][0]++, (_a = req.file) === null) || (cov_11n2r1n22().b[1][1]++, _a === void 0) ? (cov_11n2r1n22().b[0][0]++, void 0) : (cov_11n2r1n22().b[0][1]++, _a.filename)),
      UserId: req.body.UserId
    });
    const memory = (cov_11n2r1n22().s[6]++, await memory_1.MemoryModel.create(record));
    cov_11n2r1n22().s[7]++;
    res.status(200).json({
      status: 'success',
      data: memory
    });
  };
};

cov_11n2r1n22().s[8]++;

module.exports.getMemories = function getMemories() {
  cov_11n2r1n22().f[2]++;
  cov_11n2r1n22().s[9]++;
  return async (req, res, next) => {
    cov_11n2r1n22().f[3]++;
    const memories = (cov_11n2r1n22().s[10]++, await memory_1.MemoryModel.findAll({
      include: [user_1.UserModel]
    }));
    cov_11n2r1n22().s[11]++;
    res.status(200).json({
      status: 'success',
      data: memories
    });
  };
}; //# sourceMappingURL=memory.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBZUs7Ozs7Ozs7Ozs7Ozs7QUFUTDtBQUNBOzs7QUFFQUEsTUFBTSxDQUFDQyxPQUFQLENBQWVDLFNBQWYsR0FBMkIsU0FBU0EsU0FBVCxHQUFrQjtFQUFBO0VBQUE7RUFDM0MsT0FBTyxPQUFPQyxHQUFQLEVBQXFCQyxHQUFyQixFQUFvQ0MsSUFBcEMsS0FBMEQ7SUFBQTs7OztJQUMvRCxNQUFNQyxNQUFNLDRCQUFHO01BQ2JDLE9BQU8sRUFBRUosR0FBRyxDQUFDSyxJQUFKLENBQVNELE9BREw7TUFFYkUsU0FBUyxFQUFFLG1DQUFrQyxxQ0FBRyxDQUFDQyxJQUFKLE1BQVEsSUFBUixpQ0FBUUMsYUFBUixnQ0FBUSxNQUFSLGdDQUFRQSxHQUFFQyxRQUFWLENBQWxDLENBRkU7TUFHYkMsTUFBTSxFQUFFVixHQUFHLENBQUNLLElBQUosQ0FBU0s7SUFISixDQUFILENBQVo7SUFLQSxNQUFNQyxNQUFNLDRCQUFHLE1BQU1DLHFCQUFZQyxNQUFaLENBQW1CVixNQUFuQixDQUFULENBQVo7SUFOK0Q7SUFPL0RGLEdBQUcsQ0FBQ2EsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO01BQUVELE1BQU0sRUFBRSxTQUFWO01BQXFCRSxJQUFJLEVBQUVMO0lBQTNCLENBQXJCO0VBQ0QsQ0FSRDtBQVNELENBVkQ7Ozs7QUFZQWQsTUFBTSxDQUFDQyxPQUFQLENBQWVtQixXQUFmLEdBQTZCLFNBQVNBLFdBQVQsR0FBb0I7RUFBQTtFQUFBO0VBQy9DLE9BQU8sT0FBT2pCLEdBQVAsRUFBcUJDLEdBQXJCLEVBQW9DQyxJQUFwQyxLQUEwRDtJQUFBO0lBQy9ELE1BQU1nQixRQUFRLDZCQUFHLE1BQU1OLHFCQUFZTyxPQUFaLENBQW9CO01BQUVDLE9BQU8sRUFBRSxDQUFDQyxnQkFBRDtJQUFYLENBQXBCLENBQVQsQ0FBZDtJQUQrRDtJQUUvRHBCLEdBQUcsQ0FBQ2EsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO01BQUVELE1BQU0sRUFBRSxTQUFWO01BQXFCRSxJQUFJLEVBQUVFO0lBQTNCLENBQXJCO0VBQ0QsQ0FIRDtBQUlELENBTEQsQyIsIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJhZGRNZW1vcnkiLCJyZXEiLCJyZXMiLCJuZXh0IiwicmVjb3JkIiwiY2FwdGlvbiIsImJvZHkiLCJpbWFnZVBhdGgiLCJmaWxlIiwiX2EiLCJmaWxlbmFtZSIsIlVzZXJJZCIsIm1lbW9yeSIsIm1lbW9yeV8xIiwiY3JlYXRlIiwic3RhdHVzIiwianNvbiIsImRhdGEiLCJnZXRNZW1vcmllcyIsIm1lbW9yaWVzIiwiZmluZEFsbCIsImluY2x1ZGUiLCJ1c2VyXzEiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcm91dGVzL21lbW9yeS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==