"use strict";
/*
 * Copyright (c) 2014-2022 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

function cov_2q3admjatr() {
  var path = "/home/shubham/Desktop/juice-shop/build/models/basket.js";
  var hash = "acafda680bb3b728b40c49a75acf56c3a100408f";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/shubham/Desktop/juice-shop/build/models/basket.js",
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
          column: 55
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
          column: 29
        }
      },
      "4": {
        start: {
          line: 13,
          column: 24
        },
        end: {
          line: 28,
          column: 1
        }
      },
      "5": {
        start: {
          line: 14,
          column: 4
        },
        end: {
          line: 27,
          column: 7
        }
      },
      "6": {
        start: {
          line: 29,
          column: 0
        },
        end: {
          line: 29,
          column: 42
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 13,
            column: 24
          },
          end: {
            line: 13,
            column: 25
          }
        },
        loc: {
          start: {
            line: 13,
            column: 39
          },
          end: {
            line: 28,
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
      file: "basket.js",
      sourceRoot: "",
      sources: ["../../models/basket.ts"],
      names: [],
      mappings: ";AAAA;;;GAGG;;;AAEH,uBAAuB;AAEvB,yCAQkB;AAGlB,MAAM,MAAO,SAAQ,iBAGpB;CAKA;AAsBkB,6BAAW;AApB9B,MAAM,eAAe,GAAG,CAAC,SAAoB,EAAE,EAAE;IAC/C,MAAM,CAAC,IAAI,CACT;QACE,EAAE,EAAE;YACF,IAAI,EAAE,qBAAS,CAAC,OAAO;YACvB,UAAU,EAAE,IAAI;YAChB,aAAa,EAAE,IAAI;SACpB;QACD,MAAM,EAAE,qBAAS,CAAC,MAAM;QACxB,MAAM,EAAE;YACN,IAAI,EAAE,qBAAS,CAAC,OAAO;SACxB;KACF,EACD;QACE,SAAS,EAAE,SAAS;QACpB,SAAS;KACV,CACF,CAAA;AACH,CAAC,CAAA;AAE+B,0CAAe"
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "acafda680bb3b728b40c49a75acf56c3a100408f"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2q3admjatr = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2q3admjatr();
cov_2q3admjatr().s[0]++;
Object.defineProperty(exports, "__esModule", {
  value: true
});
cov_2q3admjatr().s[1]++;
exports.BasketModelInit = exports.BasketModel = void 0;
/* jslint node: true */

const sequelize_1 = (cov_2q3admjatr().s[2]++, require("sequelize"));

class Basket extends (sequelize_1.Model) {}

cov_2q3admjatr().s[3]++;
exports.BasketModel = Basket;
cov_2q3admjatr().s[4]++;

const BasketModelInit = sequelize => {
  cov_2q3admjatr().f[0]++;
  cov_2q3admjatr().s[5]++;
  Basket.init({
    id: {
      type: sequelize_1.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    coupon: sequelize_1.DataTypes.STRING,
    UserId: {
      type: sequelize_1.DataTypes.INTEGER
    }
  }, {
    tableName: 'Baskets',
    sequelize
  });
};

cov_2q3admjatr().s[6]++;
exports.BasketModelInit = BasketModelInit; //# sourceMappingURL=basket.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWdDUTs7Ozs7Ozs7Ozs7Ozs7O0FBM0JSOztBQUVBOztBQVdBLE1BQU1BLE1BQU4sVUFBcUJDLGlCQUFyQixFQUdDOzs7QUEyQmtCQzs7O0FBcEJuQixNQUFNQyxlQUFlLEdBQUlDLFNBQUQsSUFBeUI7RUFBQTtFQUFBO0VBQy9DSixNQUFNLENBQUNLLElBQVAsQ0FDRTtJQUNFQyxFQUFFLEVBQUU7TUFDRkMsSUFBSSxFQUFFTixzQkFBVU8sT0FEZDtNQUVGQyxVQUFVLEVBQUUsSUFGVjtNQUdGQyxhQUFhLEVBQUU7SUFIYixDQUROO0lBTUVDLE1BQU0sRUFBRVYsc0JBQVVXLE1BTnBCO0lBT0VDLE1BQU0sRUFBRTtNQUNOTixJQUFJLEVBQUVOLHNCQUFVTztJQURWO0VBUFYsQ0FERixFQVlFO0lBQ0VNLFNBQVMsRUFBRSxTQURiO0lBRUVWO0VBRkYsQ0FaRjtBQWlCRCxDQWxCRDs7O0FBb0JnQ0YsMEMiLCJuYW1lcyI6WyJCYXNrZXQiLCJzZXF1ZWxpemVfMSIsImV4cG9ydHMiLCJCYXNrZXRNb2RlbEluaXQiLCJzZXF1ZWxpemUiLCJpbml0IiwiaWQiLCJ0eXBlIiwiSU5URUdFUiIsInByaW1hcnlLZXkiLCJhdXRvSW5jcmVtZW50IiwiY291cG9uIiwiU1RSSU5HIiwiVXNlcklkIiwidGFibGVOYW1lIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL21vZGVscy9iYXNrZXQudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=