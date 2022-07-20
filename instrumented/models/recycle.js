"use strict";
/*
 * Copyright (c) 2014-2022 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

function cov_20rsh2a9s1() {
  var path = "/home/shubham/Desktop/juice-shop/build/models/recycle.js";
  var hash = "de856f598b189b98d747bcaeb10662ee5b19f8fa";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/shubham/Desktop/juice-shop/build/models/recycle.js",
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
          column: 57
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
          column: 31
        }
      },
      "4": {
        start: {
          line: 13,
          column: 25
        },
        end: {
          line: 33,
          column: 1
        }
      },
      "5": {
        start: {
          line: 14,
          column: 4
        },
        end: {
          line: 32,
          column: 7
        }
      },
      "6": {
        start: {
          line: 34,
          column: 0
        },
        end: {
          line: 34,
          column: 44
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 13,
            column: 25
          },
          end: {
            line: 13,
            column: 26
          }
        },
        loc: {
          start: {
            line: 13,
            column: 40
          },
          end: {
            line: 33,
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
      file: "recycle.js",
      sourceRoot: "",
      sources: ["../../models/recycle.ts"],
      names: [],
      mappings: ";AAAA;;;GAGG;;;AAEH,uBAAuB;AAEvB,yCAOkB;AAElB,MAAM,OAAQ,SAAQ,iBAGrB;CAOA;AA2BmB,+BAAY;AAzBhC,MAAM,gBAAgB,GAAG,CAAC,SAAoB,EAAE,EAAE;IAChD,OAAO,CAAC,IAAI,CACV;QACE,MAAM,EAAE;YACN,IAAI,EAAE,qBAAS,CAAC,OAAO;SACxB;QACD,SAAS,EAAE;YACT,IAAI,EAAE,qBAAS,CAAC,OAAO;SACxB;QACD,EAAE,EAAE;YACF,IAAI,EAAE,qBAAS,CAAC,OAAO;YACvB,UAAU,EAAE,IAAI;YAChB,aAAa,EAAE,IAAI;SACpB;QACD,QAAQ,EAAE,qBAAS,CAAC,OAAO;QAC3B,QAAQ,EAAE,EAAE,IAAI,EAAE,qBAAS,CAAC,OAAO,EAAE,YAAY,EAAE,KAAK,EAAE;QAC1D,IAAI,EAAE,qBAAS,CAAC,IAAI;KACrB,EACD;QACE,SAAS,EAAE,UAAU;QACrB,SAAS;KACV,CACF,CAAA;AACH,CAAC,CAAA;AAEiC,4CAAgB"
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "de856f598b189b98d747bcaeb10662ee5b19f8fa"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_20rsh2a9s1 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_20rsh2a9s1();
cov_20rsh2a9s1().s[0]++;
Object.defineProperty(exports, "__esModule", {
  value: true
});
cov_20rsh2a9s1().s[1]++;
exports.RecycleModelInit = exports.RecycleModel = void 0;
/* jslint node: true */

const sequelize_1 = (cov_20rsh2a9s1().s[2]++, require("sequelize"));

class Recycle extends (sequelize_1.Model) {}

cov_20rsh2a9s1().s[3]++;
exports.RecycleModel = Recycle;
cov_20rsh2a9s1().s[4]++;

const RecycleModelInit = sequelize => {
  cov_20rsh2a9s1().f[0]++;
  cov_20rsh2a9s1().s[5]++;
  Recycle.init({
    UserId: {
      type: sequelize_1.DataTypes.INTEGER
    },
    AddressId: {
      type: sequelize_1.DataTypes.INTEGER
    },
    id: {
      type: sequelize_1.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    quantity: sequelize_1.DataTypes.INTEGER,
    isPickup: {
      type: sequelize_1.DataTypes.BOOLEAN,
      defaultValue: false
    },
    date: sequelize_1.DataTypes.DATE
  }, {
    tableName: 'Recycles',
    sequelize
  });
};

cov_20rsh2a9s1().s[6]++;
exports.RecycleModelInit = RecycleModelInit; //# sourceMappingURL=recycle.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWdDUTs7Ozs7Ozs7Ozs7Ozs7O0FBM0JSOztBQUVBOztBQVNBLE1BQU1BLE9BQU4sVUFBc0JDLGlCQUF0QixFQUdDOzs7QUFrQ21CQzs7O0FBekJwQixNQUFNQyxnQkFBZ0IsR0FBSUMsU0FBRCxJQUF5QjtFQUFBO0VBQUE7RUFDaERKLE9BQU8sQ0FBQ0ssSUFBUixDQUNFO0lBQ0VDLE1BQU0sRUFBRTtNQUNOQyxJQUFJLEVBQUVOLHNCQUFVTztJQURWLENBRFY7SUFJRUMsU0FBUyxFQUFFO01BQ1RGLElBQUksRUFBRU4sc0JBQVVPO0lBRFAsQ0FKYjtJQU9FRSxFQUFFLEVBQUU7TUFDRkgsSUFBSSxFQUFFTixzQkFBVU8sT0FEZDtNQUVGRyxVQUFVLEVBQUUsSUFGVjtNQUdGQyxhQUFhLEVBQUU7SUFIYixDQVBOO0lBWUVDLFFBQVEsRUFBRVosc0JBQVVPLE9BWnRCO0lBYUVNLFFBQVEsRUFBRTtNQUFFUCxJQUFJLEVBQUVOLHNCQUFVYyxPQUFsQjtNQUEyQkMsWUFBWSxFQUFFO0lBQXpDLENBYlo7SUFjRUMsSUFBSSxFQUFFaEIsc0JBQVVpQjtFQWRsQixDQURGLEVBaUJFO0lBQ0VDLFNBQVMsRUFBRSxVQURiO0lBRUVmO0VBRkYsQ0FqQkY7QUFzQkQsQ0F2QkQ7OztBQXlCa0NGLDRDIiwibmFtZXMiOlsiUmVjeWNsZSIsInNlcXVlbGl6ZV8xIiwiZXhwb3J0cyIsIlJlY3ljbGVNb2RlbEluaXQiLCJzZXF1ZWxpemUiLCJpbml0IiwiVXNlcklkIiwidHlwZSIsIklOVEVHRVIiLCJBZGRyZXNzSWQiLCJpZCIsInByaW1hcnlLZXkiLCJhdXRvSW5jcmVtZW50IiwicXVhbnRpdHkiLCJpc1BpY2t1cCIsIkJPT0xFQU4iLCJkZWZhdWx0VmFsdWUiLCJkYXRlIiwiREFURSIsInRhYmxlTmFtZSJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9tb2RlbHMvcmVjeWNsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==