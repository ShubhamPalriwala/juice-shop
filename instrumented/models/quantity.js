"use strict";
/*
 * Copyright (c) 2014-2022 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

function cov_1eopnpntps() {
  var path = "/home/shubham/Desktop/juice-shop/build/models/quantity.js";
  var hash = "6caec6537cafbbad38907e380155e7e89f3b9fd0";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/shubham/Desktop/juice-shop/build/models/quantity.js",
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
          column: 33
        }
      },
      "4": {
        start: {
          line: 13,
          column: 26
        },
        end: {
          line: 40,
          column: 1
        }
      },
      "5": {
        start: {
          line: 14,
          column: 4
        },
        end: {
          line: 39,
          column: 7
        }
      },
      "6": {
        start: {
          line: 41,
          column: 0
        },
        end: {
          line: 41,
          column: 46
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 13,
            column: 26
          },
          end: {
            line: 13,
            column: 27
          }
        },
        loc: {
          start: {
            line: 13,
            column: 41
          },
          end: {
            line: 40,
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
      file: "quantity.js",
      sourceRoot: "",
      sources: ["../../models/quantity.ts"],
      names: [],
      mappings: ";AAAA;;;GAGG;;;AAEH,uBAAuB;AAEvB,yCAOkB;AAElB,MAAM,QAAS,SAAQ,iBAGtB;CAKA;AAkCoB,iCAAa;AAhClC,MAAM,iBAAiB,GAAG,CAAC,SAAoB,EAAE,EAAE;IACjD,QAAQ,CAAC,IAAI,CACX;QACE,SAAS,EAAE;YACT,IAAI,EAAE,qBAAS,CAAC,OAAO;SACxB;QACD,EAAE,EAAE;YACF,IAAI,EAAE,qBAAS,CAAC,OAAO;YACvB,UAAU,EAAE,IAAI;YAChB,aAAa,EAAE,IAAI;SACpB;QACD,QAAQ,EAAE;YACR,IAAI,EAAE,qBAAS,CAAC,OAAO;YACvB,QAAQ,EAAE;gBACR,KAAK,EAAE,IAAI;aACZ;SACF;QACD,YAAY,EAAE;YACZ,IAAI,EAAE,qBAAS,CAAC,OAAO;YACvB,QAAQ,EAAE;gBACR,KAAK,EAAE,IAAI;aACZ;YACD,YAAY,EAAE,IAAI;SACnB;KACF,EACD;QACE,SAAS,EAAE,YAAY;QACvB,SAAS;KACV,CACF,CAAA;AACH,CAAC,CAAA;AAEmC,8CAAiB"
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "6caec6537cafbbad38907e380155e7e89f3b9fd0"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1eopnpntps = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1eopnpntps();
cov_1eopnpntps().s[0]++;
Object.defineProperty(exports, "__esModule", {
  value: true
});
cov_1eopnpntps().s[1]++;
exports.QuantityModelInit = exports.QuantityModel = void 0;
/* jslint node: true */

const sequelize_1 = (cov_1eopnpntps().s[2]++, require("sequelize"));

class Quantity extends (sequelize_1.Model) {}

cov_1eopnpntps().s[3]++;
exports.QuantityModel = Quantity;
cov_1eopnpntps().s[4]++;

const QuantityModelInit = sequelize => {
  cov_1eopnpntps().f[0]++;
  cov_1eopnpntps().s[5]++;
  Quantity.init({
    ProductId: {
      type: sequelize_1.DataTypes.INTEGER
    },
    id: {
      type: sequelize_1.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    quantity: {
      type: sequelize_1.DataTypes.INTEGER,
      validate: {
        isInt: true
      }
    },
    limitPerUser: {
      type: sequelize_1.DataTypes.INTEGER,
      validate: {
        isInt: true
      },
      defaultValue: null
    }
  }, {
    tableName: 'Quantities',
    sequelize
  });
};

cov_1eopnpntps().s[6]++;
exports.QuantityModelInit = QuantityModelInit; //# sourceMappingURL=quantity.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQThCUTs7Ozs7Ozs7Ozs7Ozs7O0FBekJSOztBQUVBOztBQVNBLE1BQU1BLFFBQU4sVUFBdUJDLGlCQUF2QixFQUdDOzs7QUF1Q29CQzs7O0FBaENyQixNQUFNQyxpQkFBaUIsR0FBSUMsU0FBRCxJQUF5QjtFQUFBO0VBQUE7RUFDakRKLFFBQVEsQ0FBQ0ssSUFBVCxDQUNFO0lBQ0VDLFNBQVMsRUFBRTtNQUNUQyxJQUFJLEVBQUVOLHNCQUFVTztJQURQLENBRGI7SUFJRUMsRUFBRSxFQUFFO01BQ0ZGLElBQUksRUFBRU4sc0JBQVVPLE9BRGQ7TUFFRkUsVUFBVSxFQUFFLElBRlY7TUFHRkMsYUFBYSxFQUFFO0lBSGIsQ0FKTjtJQVNFQyxRQUFRLEVBQUU7TUFDUkwsSUFBSSxFQUFFTixzQkFBVU8sT0FEUjtNQUVSSyxRQUFRLEVBQUU7UUFDUkMsS0FBSyxFQUFFO01BREM7SUFGRixDQVRaO0lBZUVDLFlBQVksRUFBRTtNQUNaUixJQUFJLEVBQUVOLHNCQUFVTyxPQURKO01BRVpLLFFBQVEsRUFBRTtRQUNSQyxLQUFLLEVBQUU7TUFEQyxDQUZFO01BS1pFLFlBQVksRUFBRTtJQUxGO0VBZmhCLENBREYsRUF3QkU7SUFDRUMsU0FBUyxFQUFFLFlBRGI7SUFFRWI7RUFGRixDQXhCRjtBQTZCRCxDQTlCRDs7O0FBZ0NvQ0YsOEMiLCJuYW1lcyI6WyJRdWFudGl0eSIsInNlcXVlbGl6ZV8xIiwiZXhwb3J0cyIsIlF1YW50aXR5TW9kZWxJbml0Iiwic2VxdWVsaXplIiwiaW5pdCIsIlByb2R1Y3RJZCIsInR5cGUiLCJJTlRFR0VSIiwiaWQiLCJwcmltYXJ5S2V5IiwiYXV0b0luY3JlbWVudCIsInF1YW50aXR5IiwidmFsaWRhdGUiLCJpc0ludCIsImxpbWl0UGVyVXNlciIsImRlZmF1bHRWYWx1ZSIsInRhYmxlTmFtZSJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9tb2RlbHMvcXVhbnRpdHkudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=