"use strict";
/*
 * Copyright (c) 2014-2022 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

function cov_7fi4f060n() {
  var path = "/home/shubham/Desktop/juice-shop/build/models/delivery.js";
  var hash = "8f54bd87b3c5a1b32c5d1cb6ed35316ddd823fe5";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/shubham/Desktop/juice-shop/build/models/delivery.js",
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
          column: 59
        }
      },
      "2": {
        start: {
          line: 8,
          column: 20
        },
        end: {
          line: 8,
          column: 40
        }
      },
      "3": {
        start: {
          line: 11,
          column: 0
        },
        end: {
          line: 11,
          column: 33
        }
      },
      "4": {
        start: {
          line: 12,
          column: 26
        },
        end: {
          line: 28,
          column: 1
        }
      },
      "5": {
        start: {
          line: 13,
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
          column: 46
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 12,
            column: 26
          },
          end: {
            line: 12,
            column: 27
          }
        },
        loc: {
          start: {
            line: 12,
            column: 41
          },
          end: {
            line: 28,
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
      "6": 0
    },
    f: {
      "0": 0
    },
    b: {},
    inputSourceMap: {
      version: 3,
      file: "delivery.js",
      sourceRoot: "",
      sources: ["../../models/delivery.ts"],
      names: [],
      mappings: ";AAAA;;;GAGG;;;AAEH,yCAOkB;AAElB,MAAM,QAAS,SAAQ,iBAGtB;CAOA;AAuBoB,iCAAa;AArBlC,MAAM,iBAAiB,GAAG,CAAC,SAAoB,EAAE,EAAE;IACjD,QAAQ,CAAC,IAAI,CACX;QACE,EAAE,EAAE;YACF,IAAI,EAAE,qBAAS,CAAC,OAAO;YACvB,UAAU,EAAE,IAAI;YAChB,aAAa,EAAE,IAAI;SACpB;QACD,IAAI,EAAE,qBAAS,CAAC,MAAM;QACtB,KAAK,EAAE,qBAAS,CAAC,KAAK;QACtB,WAAW,EAAE,qBAAS,CAAC,KAAK;QAC5B,GAAG,EAAE,qBAAS,CAAC,KAAK;QACpB,IAAI,EAAE,qBAAS,CAAC,MAAM;KACvB,EACD;QACE,SAAS,EAAE,YAAY;QACvB,SAAS;KACV,CACF,CAAA;AACH,CAAC,CAAA;AAEmC,8CAAiB"
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "8f54bd87b3c5a1b32c5d1cb6ed35316ddd823fe5"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_7fi4f060n = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_7fi4f060n();
cov_7fi4f060n().s[0]++;
Object.defineProperty(exports, "__esModule", {
  value: true
});
cov_7fi4f060n().s[1]++;
exports.DeliveryModelInit = exports.DeliveryModel = void 0;
const sequelize_1 = (cov_7fi4f060n().s[2]++, require("sequelize"));

class Delivery extends (sequelize_1.Model) {}

cov_7fi4f060n().s[3]++;
exports.DeliveryModel = Delivery;
cov_7fi4f060n().s[4]++;

const DeliveryModelInit = sequelize => {
  cov_7fi4f060n().f[0]++;
  cov_7fi4f060n().s[5]++;
  Delivery.init({
    id: {
      type: sequelize_1.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: sequelize_1.DataTypes.STRING,
    price: sequelize_1.DataTypes.FLOAT,
    deluxePrice: sequelize_1.DataTypes.FLOAT,
    eta: sequelize_1.DataTypes.FLOAT,
    icon: sequelize_1.DataTypes.STRING
  }, {
    tableName: 'Deliveries',
    sequelize
  });
};

cov_7fi4f060n().s[6]++;
exports.DeliveryModelInit = DeliveryModelInit; //# sourceMappingURL=delivery.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQStCUTs7Ozs7Ozs7Ozs7Ozs7O0FBMUJSOztBQVNBLE1BQU1BLFFBQU4sVUFBdUJDLGlCQUF2QixFQUdDOzs7QUE4Qm9CQzs7O0FBckJyQixNQUFNQyxpQkFBaUIsR0FBSUMsU0FBRCxJQUF5QjtFQUFBO0VBQUE7RUFDakRKLFFBQVEsQ0FBQ0ssSUFBVCxDQUNFO0lBQ0VDLEVBQUUsRUFBRTtNQUNGQyxJQUFJLEVBQUVOLHNCQUFVTyxPQURkO01BRUZDLFVBQVUsRUFBRSxJQUZWO01BR0ZDLGFBQWEsRUFBRTtJQUhiLENBRE47SUFNRUMsSUFBSSxFQUFFVixzQkFBVVcsTUFObEI7SUFPRUMsS0FBSyxFQUFFWixzQkFBVWEsS0FQbkI7SUFRRUMsV0FBVyxFQUFFZCxzQkFBVWEsS0FSekI7SUFTRUUsR0FBRyxFQUFFZixzQkFBVWEsS0FUakI7SUFVRUcsSUFBSSxFQUFFaEIsc0JBQVVXO0VBVmxCLENBREYsRUFhRTtJQUNFTSxTQUFTLEVBQUUsWUFEYjtJQUVFZDtFQUZGLENBYkY7QUFrQkQsQ0FuQkQ7OztBQXFCb0NGLDhDIiwibmFtZXMiOlsiRGVsaXZlcnkiLCJzZXF1ZWxpemVfMSIsImV4cG9ydHMiLCJEZWxpdmVyeU1vZGVsSW5pdCIsInNlcXVlbGl6ZSIsImluaXQiLCJpZCIsInR5cGUiLCJJTlRFR0VSIiwicHJpbWFyeUtleSIsImF1dG9JbmNyZW1lbnQiLCJuYW1lIiwiU1RSSU5HIiwicHJpY2UiLCJGTE9BVCIsImRlbHV4ZVByaWNlIiwiZXRhIiwiaWNvbiIsInRhYmxlTmFtZSJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9tb2RlbHMvZGVsaXZlcnkudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=