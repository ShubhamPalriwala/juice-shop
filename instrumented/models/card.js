"use strict";
/*
 * Copyright (c) 2014-2022 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

function cov_42si8tqgl() {
  var path = "/home/shubham/Desktop/juice-shop/build/models/card.js";
  var hash = "ecfd8a6d9071beee22019bd0864a8ecac48f470e";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/shubham/Desktop/juice-shop/build/models/card.js",
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
          column: 51
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
          column: 25
        }
      },
      "4": {
        start: {
          line: 13,
          column: 22
        },
        end: {
          line: 52,
          column: 1
        }
      },
      "5": {
        start: {
          line: 14,
          column: 4
        },
        end: {
          line: 51,
          column: 7
        }
      },
      "6": {
        start: {
          line: 53,
          column: 0
        },
        end: {
          line: 53,
          column: 38
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 13,
            column: 22
          },
          end: {
            line: 13,
            column: 23
          }
        },
        loc: {
          start: {
            line: 13,
            column: 37
          },
          end: {
            line: 52,
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
      file: "card.js",
      sourceRoot: "",
      sources: ["../../models/card.ts"],
      names: [],
      mappings: ";AAAA;;;GAGG;;;AAEH,uBAAuB;AACvB,yCAOkB;AAClB,MAAM,IAAK,SAAQ,iBAGlB;CAOA;AA8CgB,yBAAS;AA5C1B,MAAM,aAAa,GAAG,CAAC,SAAoB,EAAE,EAAE;IAC7C,IAAI,CAAC,IAAI,CACP;QACE,MAAM,EAAE;YACN,IAAI,EAAE,qBAAS,CAAC,OAAO;SACxB;QACD,EAAE,EAAE;YACF,IAAI,EAAE,qBAAS,CAAC,OAAO;YACvB,UAAU,EAAE,IAAI;YAChB,aAAa,EAAE,IAAI;SACpB;QACD,QAAQ,EAAE,qBAAS,CAAC,MAAM;QAC1B,OAAO,EAAE;YACP,IAAI,EAAE,qBAAS,CAAC,OAAO;YACvB,QAAQ,EAAE;gBACR,KAAK,EAAE,IAAI;gBACX,GAAG,EAAE,gBAAgB;gBACrB,GAAG,EAAE,gBAAgB;aACtB;SACF;QACD,QAAQ,EAAE;YACR,IAAI,EAAE,qBAAS,CAAC,OAAO;YACvB,QAAQ,EAAE;gBACR,KAAK,EAAE,IAAI;gBACX,GAAG,EAAE,CAAC;gBACN,GAAG,EAAE,EAAE;aACR;SACF;QACD,OAAO,EAAE;YACP,IAAI,EAAE,qBAAS,CAAC,OAAO;YACvB,QAAQ,EAAE;gBACR,KAAK,EAAE,IAAI;gBACX,GAAG,EAAE,IAAI;gBACT,GAAG,EAAE,IAAI;aACV;SACF;KACF,EACD;QACE,SAAS,EAAE,OAAO;QAClB,SAAS;KACV,CACF,CAAA;AACH,CAAC,CAAA;AAE2B,sCAAa"
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "ecfd8a6d9071beee22019bd0864a8ecac48f470e"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_42si8tqgl = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_42si8tqgl();
cov_42si8tqgl().s[0]++;
Object.defineProperty(exports, "__esModule", {
  value: true
});
cov_42si8tqgl().s[1]++;
exports.CardModelInit = exports.CardModel = void 0;
/* jslint node: true */

const sequelize_1 = (cov_42si8tqgl().s[2]++, require("sequelize"));

class Card extends (sequelize_1.Model) {}

cov_42si8tqgl().s[3]++;
exports.CardModel = Card;
cov_42si8tqgl().s[4]++;

const CardModelInit = sequelize => {
  cov_42si8tqgl().f[0]++;
  cov_42si8tqgl().s[5]++;
  Card.init({
    UserId: {
      type: sequelize_1.DataTypes.INTEGER
    },
    id: {
      type: sequelize_1.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    fullName: sequelize_1.DataTypes.STRING,
    cardNum: {
      type: sequelize_1.DataTypes.INTEGER,
      validate: {
        isInt: true,
        min: 1000000000000000,
        max: 9999999999999998
      }
    },
    expMonth: {
      type: sequelize_1.DataTypes.INTEGER,
      validate: {
        isInt: true,
        min: 1,
        max: 12
      }
    },
    expYear: {
      type: sequelize_1.DataTypes.INTEGER,
      validate: {
        isInt: true,
        min: 2080,
        max: 2099
      }
    }
  }, {
    tableName: 'Cards',
    sequelize
  });
};

cov_42si8tqgl().s[6]++;
exports.CardModelInit = CardModelInit; //# sourceMappingURL=card.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQThCUTs7Ozs7Ozs7Ozs7Ozs7O0FBekJSOztBQUNBOztBQVFBLE1BQU1BLElBQU4sVUFBbUJDLGlCQUFuQixFQUdDOzs7QUFxRGdCQzs7O0FBNUNqQixNQUFNQyxhQUFhLEdBQUlDLFNBQUQsSUFBeUI7RUFBQTtFQUFBO0VBQzdDSixJQUFJLENBQUNLLElBQUwsQ0FDRTtJQUNFQyxNQUFNLEVBQUU7TUFDTkMsSUFBSSxFQUFFTixzQkFBVU87SUFEVixDQURWO0lBSUVDLEVBQUUsRUFBRTtNQUNGRixJQUFJLEVBQUVOLHNCQUFVTyxPQURkO01BRUZFLFVBQVUsRUFBRSxJQUZWO01BR0ZDLGFBQWEsRUFBRTtJQUhiLENBSk47SUFTRUMsUUFBUSxFQUFFWCxzQkFBVVksTUFUdEI7SUFVRUMsT0FBTyxFQUFFO01BQ1BQLElBQUksRUFBRU4sc0JBQVVPLE9BRFQ7TUFFUE8sUUFBUSxFQUFFO1FBQ1JDLEtBQUssRUFBRSxJQURDO1FBRVJDLEdBQUcsRUFBRSxnQkFGRztRQUdSQyxHQUFHLEVBQUU7TUFIRztJQUZILENBVlg7SUFrQkVDLFFBQVEsRUFBRTtNQUNSWixJQUFJLEVBQUVOLHNCQUFVTyxPQURSO01BRVJPLFFBQVEsRUFBRTtRQUNSQyxLQUFLLEVBQUUsSUFEQztRQUVSQyxHQUFHLEVBQUUsQ0FGRztRQUdSQyxHQUFHLEVBQUU7TUFIRztJQUZGLENBbEJaO0lBMEJFRSxPQUFPLEVBQUU7TUFDUGIsSUFBSSxFQUFFTixzQkFBVU8sT0FEVDtNQUVQTyxRQUFRLEVBQUU7UUFDUkMsS0FBSyxFQUFFLElBREM7UUFFUkMsR0FBRyxFQUFFLElBRkc7UUFHUkMsR0FBRyxFQUFFO01BSEc7SUFGSDtFQTFCWCxDQURGLEVBb0NFO0lBQ0VHLFNBQVMsRUFBRSxPQURiO0lBRUVqQjtFQUZGLENBcENGO0FBeUNELENBMUNEOzs7QUE0QzRCRixzQyIsIm5hbWVzIjpbIkNhcmQiLCJzZXF1ZWxpemVfMSIsImV4cG9ydHMiLCJDYXJkTW9kZWxJbml0Iiwic2VxdWVsaXplIiwiaW5pdCIsIlVzZXJJZCIsInR5cGUiLCJJTlRFR0VSIiwiaWQiLCJwcmltYXJ5S2V5IiwiYXV0b0luY3JlbWVudCIsImZ1bGxOYW1lIiwiU1RSSU5HIiwiY2FyZE51bSIsInZhbGlkYXRlIiwiaXNJbnQiLCJtaW4iLCJtYXgiLCJleHBNb250aCIsImV4cFllYXIiLCJ0YWJsZU5hbWUiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbW9kZWxzL2NhcmQudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=