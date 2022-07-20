"use strict";
/*
 * Copyright (c) 2014-2022 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

function cov_1puevxjokp() {
  var path = "/home/shubham/Desktop/juice-shop/build/models/securityAnswer.js";
  var hash = "a4044dc53c4d41bdaf1d9ee47f7620c72dcdd513";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/shubham/Desktop/juice-shop/build/models/securityAnswer.js",
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
          column: 0
        },
        end: {
          line: 7,
          column: 71
        }
      },
      "2": {
        start: {
          line: 9,
          column: 20
        },
        end: {
          line: 9,
          column: 40
        }
      },
      "3": {
        start: {
          line: 10,
          column: 17
        },
        end: {
          line: 10,
          column: 45
        }
      },
      "4": {
        start: {
          line: 13,
          column: 0
        },
        end: {
          line: 13,
          column: 45
        }
      },
      "5": {
        start: {
          line: 14,
          column: 32
        },
        end: {
          line: 38,
          column: 1
        }
      },
      "6": {
        start: {
          line: 15,
          column: 4
        },
        end: {
          line: 37,
          column: 7
        }
      },
      "7": {
        start: {
          line: 31,
          column: 16
        },
        end: {
          line: 31,
          column: 67
        }
      },
      "8": {
        start: {
          line: 39,
          column: 0
        },
        end: {
          line: 39,
          column: 58
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 14,
            column: 32
          },
          end: {
            line: 14,
            column: 33
          }
        },
        loc: {
          start: {
            line: 14,
            column: 47
          },
          end: {
            line: 38,
            column: 1
          }
        },
        line: 14
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 30,
            column: 12
          },
          end: {
            line: 30,
            column: 13
          }
        },
        loc: {
          start: {
            line: 30,
            column: 24
          },
          end: {
            line: 32,
            column: 13
          }
        },
        line: 30
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
      "1": 0
    },
    b: {},
    inputSourceMap: {
      version: 3,
      file: "securityAnswer.js",
      sourceRoot: "",
      sources: ["../../models/securityAnswer.ts"],
      names: [],
      mappings: ";AAAA;;;GAGG;;;AAEH,uBAAuB;AACvB,yCAOkB;AAClB,MAAM,QAAQ,GAAG,OAAO,CAAC,mBAAmB,CAAC,CAAA;AAE7C,MAAM,cAAe,SAAQ,iBAG5B;CAKA;AAgC0B,6CAAmB;AA9B9C,MAAM,uBAAuB,GAAG,CAAC,SAAoB,EAAE,EAAE;IACvD,cAAc,CAAC,IAAI,CACjB;QACE,MAAM,EAAE;YACN,IAAI,EAAE,qBAAS,CAAC,OAAO;YACvB,MAAM,EAAE,IAAI;SACb;QACD,kBAAkB,EAAE;YAClB,IAAI,EAAE,qBAAS,CAAC,OAAO;SACxB;QAED,EAAE,EAAE;YACF,IAAI,EAAE,qBAAS,CAAC,OAAO;YACvB,UAAU,EAAE,IAAI;YAChB,aAAa,EAAE,IAAI;SACpB;QACD,MAAM,EAAE;YACN,IAAI,EAAE,qBAAS,CAAC,MAAM;YACtB,GAAG,CAAE,MAAM;gBACT,IAAI,CAAC,YAAY,CAAC,QAAQ,EAAE,QAAQ,CAAC,IAAI,CAAC,MAAM,CAAC,CAAC,CAAA;YACpD,CAAC;SACF;KACF,EACD;QACE,SAAS,EAAE,iBAAiB;QAC5B,SAAS;KACV,CACF,CAAA;AACH,CAAC,CAAA;AAE+C,0DAAuB"
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "a4044dc53c4d41bdaf1d9ee47f7620c72dcdd513"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1puevxjokp = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1puevxjokp();
cov_1puevxjokp().s[0]++;
Object.defineProperty(exports, "__esModule", {
  value: true
});
cov_1puevxjokp().s[1]++;
exports.SecurityAnswerModelInit = exports.SecurityAnswerModel = void 0;
/* jslint node: true */

const sequelize_1 = (cov_1puevxjokp().s[2]++, require("sequelize"));
const security = (cov_1puevxjokp().s[3]++, require('../lib/insecurity'));

class SecurityAnswer extends (sequelize_1.Model) {}

cov_1puevxjokp().s[4]++;
exports.SecurityAnswerModel = SecurityAnswer;
cov_1puevxjokp().s[5]++;

const SecurityAnswerModelInit = sequelize => {
  cov_1puevxjokp().f[0]++;
  cov_1puevxjokp().s[6]++;
  SecurityAnswer.init({
    UserId: {
      type: sequelize_1.DataTypes.INTEGER,
      unique: true
    },
    SecurityQuestionId: {
      type: sequelize_1.DataTypes.INTEGER
    },
    id: {
      type: sequelize_1.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    answer: {
      type: sequelize_1.DataTypes.STRING,

      set(answer) {
        cov_1puevxjokp().f[1]++;
        cov_1puevxjokp().s[7]++;
        this.setDataValue('answer', security.hmac(answer));
      }

    }
  }, {
    tableName: 'SecurityAnswers',
    sequelize
  });
};

cov_1puevxjokp().s[8]++;
exports.SecurityAnswerModelInit = SecurityAnswerModelInit; //# sourceMappingURL=securityAnswer.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBNkJNOzs7Ozs7Ozs7Ozs7Ozs7QUF4Qk47O0FBQ0E7QUFRQSxNQUFNQSxRQUFRLDZCQUFHQyxPQUFPLENBQUMsbUJBQUQsQ0FBVixDQUFkOztBQUVBLE1BQU1DLGNBQU4sVUFBNkJDLGlCQUE3QixFQUdDOzs7QUFxQzBCQzs7O0FBOUIzQixNQUFNQyx1QkFBdUIsR0FBSUMsU0FBRCxJQUF5QjtFQUFBO0VBQUE7RUFDdkRKLGNBQWMsQ0FBQ0ssSUFBZixDQUNFO0lBQ0VDLE1BQU0sRUFBRTtNQUNOQyxJQUFJLEVBQUVOLHNCQUFVTyxPQURWO01BRU5DLE1BQU0sRUFBRTtJQUZGLENBRFY7SUFLRUMsa0JBQWtCLEVBQUU7TUFDbEJILElBQUksRUFBRU4sc0JBQVVPO0lBREUsQ0FMdEI7SUFTRUcsRUFBRSxFQUFFO01BQ0ZKLElBQUksRUFBRU4sc0JBQVVPLE9BRGQ7TUFFRkksVUFBVSxFQUFFLElBRlY7TUFHRkMsYUFBYSxFQUFFO0lBSGIsQ0FUTjtJQWNFQyxNQUFNLEVBQUU7TUFDTlAsSUFBSSxFQUFFTixzQkFBVWMsTUFEVjs7TUFFTkMsR0FBRyxDQUFFRixNQUFGLEVBQVE7UUFBQTtRQUFBO1FBQ1QsS0FBS0csWUFBTCxDQUFrQixRQUFsQixFQUE0Qm5CLFFBQVEsQ0FBQ29CLElBQVQsQ0FBY0osTUFBZCxDQUE1QjtNQUNEOztJQUpLO0VBZFYsQ0FERixFQXNCRTtJQUNFSyxTQUFTLEVBQUUsaUJBRGI7SUFFRWY7RUFGRixDQXRCRjtBQTJCRCxDQTVCRDs7O0FBOEJnREYsMEQiLCJuYW1lcyI6WyJzZWN1cml0eSIsInJlcXVpcmUiLCJTZWN1cml0eUFuc3dlciIsInNlcXVlbGl6ZV8xIiwiZXhwb3J0cyIsIlNlY3VyaXR5QW5zd2VyTW9kZWxJbml0Iiwic2VxdWVsaXplIiwiaW5pdCIsIlVzZXJJZCIsInR5cGUiLCJJTlRFR0VSIiwidW5pcXVlIiwiU2VjdXJpdHlRdWVzdGlvbklkIiwiaWQiLCJwcmltYXJ5S2V5IiwiYXV0b0luY3JlbWVudCIsImFuc3dlciIsIlNUUklORyIsInNldCIsInNldERhdGFWYWx1ZSIsImhtYWMiLCJ0YWJsZU5hbWUiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbW9kZWxzL3NlY3VyaXR5QW5zd2VyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19