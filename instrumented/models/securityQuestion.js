"use strict";
/*
 * Copyright (c) 2014-2022 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

function cov_y8kikabwy() {
  var path = "/home/shubham/Desktop/juice-shop/build/models/securityQuestion.js";
  var hash = "a73dcb69b35b86073c2ff3eb98b4bd67f0204922";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/shubham/Desktop/juice-shop/build/models/securityQuestion.js",
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
          column: 75
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
          line: 12,
          column: 0
        },
        end: {
          line: 12,
          column: 49
        }
      },
      "4": {
        start: {
          line: 13,
          column: 34
        },
        end: {
          line: 27,
          column: 1
        }
      },
      "5": {
        start: {
          line: 14,
          column: 4
        },
        end: {
          line: 26,
          column: 7
        }
      },
      "6": {
        start: {
          line: 28,
          column: 0
        },
        end: {
          line: 28,
          column: 62
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 13,
            column: 34
          },
          end: {
            line: 13,
            column: 35
          }
        },
        loc: {
          start: {
            line: 13,
            column: 49
          },
          end: {
            line: 27,
            column: 1
          }
        },
        line: 13
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
      "6": 0
    },
    f: {
      "0": 0
    },
    b: {},
    inputSourceMap: {
      version: 3,
      file: "securityQuestion.js",
      sourceRoot: "",
      sources: ["../../models/securityQuestion.ts"],
      names: [],
      mappings: ";AAAA;;;GAGG;;;AAEH,uBAAuB;AACvB,yCAOkB;AAElB,MAAM,gBAAiB,SAAQ,iBAG9B;CAGA;AAqB4B,iDAAqB;AAnBlD,MAAM,yBAAyB,GAAG,CAAC,SAAoB,EAAE,EAAE;IACzD,gBAAgB,CAAC,IAAI,CACnB;QACE,EAAE,EAAE;YACF,IAAI,EAAE,qBAAS,CAAC,OAAO;YACvB,UAAU,EAAE,IAAI;YAChB,aAAa,EAAE,IAAI;SACpB;QACD,QAAQ,EAAE;YACR,IAAI,EAAE,qBAAS,CAAC,MAAM;SACvB;KACF,EACD;QACE,SAAS,EAAE,mBAAmB;QAC9B,SAAS;KACV,CACF,CAAA;AACH,CAAC,CAAA;AAEmD,8DAAyB"
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "a73dcb69b35b86073c2ff3eb98b4bd67f0204922"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_y8kikabwy = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_y8kikabwy();
cov_y8kikabwy().s[0]++;
Object.defineProperty(exports, "__esModule", {
  value: true
});
cov_y8kikabwy().s[1]++;
exports.SecurityQuestionModelInit = exports.SecurityQuestionModel = void 0;
/* jslint node: true */

const sequelize_1 = (cov_y8kikabwy().s[2]++, require("sequelize"));

class SecurityQuestion extends (sequelize_1.Model) {}

cov_y8kikabwy().s[3]++;
exports.SecurityQuestionModel = SecurityQuestion;
cov_y8kikabwy().s[4]++;

const SecurityQuestionModelInit = sequelize => {
  cov_y8kikabwy().f[0]++;
  cov_y8kikabwy().s[5]++;
  SecurityQuestion.init({
    id: {
      type: sequelize_1.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    question: {
      type: sequelize_1.DataTypes.STRING
    }
  }, {
    tableName: 'SecurityQuestions',
    sequelize
  });
};

cov_y8kikabwy().s[6]++;
exports.SecurityQuestionModelInit = SecurityQuestionModelInit; //# sourceMappingURL=securityQuestion.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQTJCUTs7Ozs7Ozs7Ozs7Ozs7O0FBdEJSOztBQUNBOztBQVNBLE1BQU1BLGdCQUFOLFVBQStCQyxpQkFBL0IsRUFHQzs7O0FBd0I0QkM7OztBQW5CN0IsTUFBTUMseUJBQXlCLEdBQUlDLFNBQUQsSUFBeUI7RUFBQTtFQUFBO0VBQ3pESixnQkFBZ0IsQ0FBQ0ssSUFBakIsQ0FDRTtJQUNFQyxFQUFFLEVBQUU7TUFDRkMsSUFBSSxFQUFFTixzQkFBVU8sT0FEZDtNQUVGQyxVQUFVLEVBQUUsSUFGVjtNQUdGQyxhQUFhLEVBQUU7SUFIYixDQUROO0lBTUVDLFFBQVEsRUFBRTtNQUNSSixJQUFJLEVBQUVOLHNCQUFVVztJQURSO0VBTlosQ0FERixFQVdFO0lBQ0VDLFNBQVMsRUFBRSxtQkFEYjtJQUVFVDtFQUZGLENBWEY7QUFnQkQsQ0FqQkQ7OztBQW1Cb0RGLDhEIiwibmFtZXMiOlsiU2VjdXJpdHlRdWVzdGlvbiIsInNlcXVlbGl6ZV8xIiwiZXhwb3J0cyIsIlNlY3VyaXR5UXVlc3Rpb25Nb2RlbEluaXQiLCJzZXF1ZWxpemUiLCJpbml0IiwiaWQiLCJ0eXBlIiwiSU5URUdFUiIsInByaW1hcnlLZXkiLCJhdXRvSW5jcmVtZW50IiwicXVlc3Rpb24iLCJTVFJJTkciLCJ0YWJsZU5hbWUiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbW9kZWxzL3NlY3VyaXR5UXVlc3Rpb24udHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=