"use strict";
/*
 * Copyright (c) 2014-2022 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

function cov_1tebamb8o5() {
  var path = "/home/shubham/Desktop/juice-shop/build/models/privacyRequests.js";
  var hash = "5bf81e024115eafebd980580d0c5a75606594737";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/shubham/Desktop/juice-shop/build/models/privacyRequests.js",
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
          line: 12,
          column: 0
        },
        end: {
          line: 12,
          column: 50
        }
      },
      "4": {
        start: {
          line: 13,
          column: 32
        },
        end: {
          line: 31,
          column: 1
        }
      },
      "5": {
        start: {
          line: 14,
          column: 4
        },
        end: {
          line: 30,
          column: 7
        }
      },
      "6": {
        start: {
          line: 32,
          column: 0
        },
        end: {
          line: 32,
          column: 58
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 13,
            column: 32
          },
          end: {
            line: 13,
            column: 33
          }
        },
        loc: {
          start: {
            line: 13,
            column: 47
          },
          end: {
            line: 31,
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
      file: "privacyRequests.js",
      sourceRoot: "",
      sources: ["../../models/privacyRequests.ts"],
      names: [],
      mappings: ";AAAA;;;GAGG;;;AAEH,uBAAuB;AAEvB,yCAOkB;AAElB,MAAM,mBAAoB,SAAQ,iBAGjC;CAIA;AAwBQ,kDAAmB;AAvB5B,MAAM,uBAAuB,GAAG,CAAC,SAAoB,EAAE,EAAE;IACvD,mBAAmB,CAAC,IAAI,CACtB;QACE,EAAE,EAAE;YACF,IAAI,EAAE,qBAAS,CAAC,OAAO;YACvB,UAAU,EAAE,IAAI;YAChB,aAAa,EAAE,IAAI;SACpB;QACD,MAAM,EAAE;YACN,IAAI,EAAE,qBAAS,CAAC,OAAO;SACxB;QACD,iBAAiB,EAAE;YACjB,IAAI,EAAE,qBAAS,CAAC,OAAO;YACvB,YAAY,EAAE,KAAK;SACpB;KACF,EACD;QACE,SAAS,EAAE,iBAAiB;QAC5B,SAAS;KACV,CACF,CAAA;AACH,CAAC,CAAA;AAE6B,0DAAuB"
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "5bf81e024115eafebd980580d0c5a75606594737"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1tebamb8o5 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1tebamb8o5();
cov_1tebamb8o5().s[0]++;
Object.defineProperty(exports, "__esModule", {
  value: true
});
cov_1tebamb8o5().s[1]++;
exports.PrivacyRequestModelInit = exports.PrivacyRequestModel = void 0;
/* jslint node: true */

const sequelize_1 = (cov_1tebamb8o5().s[2]++, require("sequelize"));

class PrivacyRequestModel extends (sequelize_1.Model) {}

cov_1tebamb8o5().s[3]++;
exports.PrivacyRequestModel = PrivacyRequestModel;
cov_1tebamb8o5().s[4]++;

const PrivacyRequestModelInit = sequelize => {
  cov_1tebamb8o5().f[0]++;
  cov_1tebamb8o5().s[5]++;
  PrivacyRequestModel.init({
    id: {
      type: sequelize_1.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    UserId: {
      type: sequelize_1.DataTypes.INTEGER
    },
    deletionRequested: {
      type: sequelize_1.DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    tableName: 'PrivacyRequests',
    sequelize
  });
};

cov_1tebamb8o5().s[6]++;
exports.PrivacyRequestModelInit = PrivacyRequestModelInit; //# sourceMappingURL=privacyRequests.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQTRCUTs7Ozs7Ozs7Ozs7Ozs7O0FBdkJSOztBQUVBOztBQVNBLE1BQU1BLG1CQUFOLFVBQWtDQyxpQkFBbEMsRUFHQzs7O0FBNEJRQzs7O0FBdkJULE1BQU1DLHVCQUF1QixHQUFJQyxTQUFELElBQXlCO0VBQUE7RUFBQTtFQUN2REosbUJBQW1CLENBQUNLLElBQXBCLENBQ0U7SUFDRUMsRUFBRSxFQUFFO01BQ0ZDLElBQUksRUFBRU4sc0JBQVVPLE9BRGQ7TUFFRkMsVUFBVSxFQUFFLElBRlY7TUFHRkMsYUFBYSxFQUFFO0lBSGIsQ0FETjtJQU1FQyxNQUFNLEVBQUU7TUFDTkosSUFBSSxFQUFFTixzQkFBVU87SUFEVixDQU5WO0lBU0VJLGlCQUFpQixFQUFFO01BQ2pCTCxJQUFJLEVBQUVOLHNCQUFVWSxPQURDO01BRWpCQyxZQUFZLEVBQUU7SUFGRztFQVRyQixDQURGLEVBZUU7SUFDRUMsU0FBUyxFQUFFLGlCQURiO0lBRUVYO0VBRkYsQ0FmRjtBQW9CRCxDQXJCRDs7O0FBdUI4QkYsMEQiLCJuYW1lcyI6WyJQcml2YWN5UmVxdWVzdE1vZGVsIiwic2VxdWVsaXplXzEiLCJleHBvcnRzIiwiUHJpdmFjeVJlcXVlc3RNb2RlbEluaXQiLCJzZXF1ZWxpemUiLCJpbml0IiwiaWQiLCJ0eXBlIiwiSU5URUdFUiIsInByaW1hcnlLZXkiLCJhdXRvSW5jcmVtZW50IiwiVXNlcklkIiwiZGVsZXRpb25SZXF1ZXN0ZWQiLCJCT09MRUFOIiwiZGVmYXVsdFZhbHVlIiwidGFibGVOYW1lIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL21vZGVscy9wcml2YWN5UmVxdWVzdHMudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=