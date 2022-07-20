"use strict";
/*
 * Copyright (c) 2014-2022 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

function cov_1jp3mv2s2g() {
  var path = "/home/shubham/Desktop/juice-shop/build/models/memory.js";
  var hash = "c15ed40a3a4d88fafc8ba8219f5206bf16ca98f9";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/shubham/Desktop/juice-shop/build/models/memory.js",
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
          line: 29,
          column: 1
        }
      },
      "5": {
        start: {
          line: 14,
          column: 4
        },
        end: {
          line: 28,
          column: 7
        }
      },
      "6": {
        start: {
          line: 30,
          column: 0
        },
        end: {
          line: 30,
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
            line: 29,
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
      file: "memory.js",
      sourceRoot: "",
      sources: ["../../models/memory.ts"],
      names: [],
      mappings: ";AAAA;;;GAGG;;;AAEH,uBAAuB;AAEvB,yCAOkB;AAElB,MAAM,MAAO,SAAQ,iBAGpB;CAKA;AAuBkB,6BAAW;AArB9B,MAAM,eAAe,GAAG,CAAC,SAAoB,EAAE,EAAE;IAC/C,MAAM,CAAC,IAAI,CACT;QACE,MAAM,EAAE;YACN,IAAI,EAAE,qBAAS,CAAC,OAAO;SACxB;QACD,EAAE,EAAE;YACF,IAAI,EAAE,qBAAS,CAAC,OAAO;YACvB,UAAU,EAAE,IAAI;YAChB,aAAa,EAAE,IAAI;SACpB;QACD,OAAO,EAAE,qBAAS,CAAC,MAAM;QACzB,SAAS,EAAE,qBAAS,CAAC,MAAM;KAC5B,EACD;QACE,SAAS,EAAE,UAAU;QACrB,SAAS;KACV,CACF,CAAA;AACH,CAAC,CAAA;AAE+B,0CAAe"
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "c15ed40a3a4d88fafc8ba8219f5206bf16ca98f9"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1jp3mv2s2g = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1jp3mv2s2g();
cov_1jp3mv2s2g().s[0]++;
Object.defineProperty(exports, "__esModule", {
  value: true
});
cov_1jp3mv2s2g().s[1]++;
exports.MemoryModelInit = exports.MemoryModel = void 0;
/* jslint node: true */

const sequelize_1 = (cov_1jp3mv2s2g().s[2]++, require("sequelize"));

class Memory extends (sequelize_1.Model) {}

cov_1jp3mv2s2g().s[3]++;
exports.MemoryModel = Memory;
cov_1jp3mv2s2g().s[4]++;

const MemoryModelInit = sequelize => {
  cov_1jp3mv2s2g().f[0]++;
  cov_1jp3mv2s2g().s[5]++;
  Memory.init({
    UserId: {
      type: sequelize_1.DataTypes.INTEGER
    },
    id: {
      type: sequelize_1.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    caption: sequelize_1.DataTypes.STRING,
    imagePath: sequelize_1.DataTypes.STRING
  }, {
    tableName: 'Memories',
    sequelize
  });
};

cov_1jp3mv2s2g().s[6]++;
exports.MemoryModelInit = MemoryModelInit; //# sourceMappingURL=memory.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQThCUTs7Ozs7Ozs7Ozs7Ozs7O0FBekJSOztBQUVBOztBQVNBLE1BQU1BLE1BQU4sVUFBcUJDLGlCQUFyQixFQUdDOzs7QUE0QmtCQzs7O0FBckJuQixNQUFNQyxlQUFlLEdBQUlDLFNBQUQsSUFBeUI7RUFBQTtFQUFBO0VBQy9DSixNQUFNLENBQUNLLElBQVAsQ0FDRTtJQUNFQyxNQUFNLEVBQUU7TUFDTkMsSUFBSSxFQUFFTixzQkFBVU87SUFEVixDQURWO0lBSUVDLEVBQUUsRUFBRTtNQUNGRixJQUFJLEVBQUVOLHNCQUFVTyxPQURkO01BRUZFLFVBQVUsRUFBRSxJQUZWO01BR0ZDLGFBQWEsRUFBRTtJQUhiLENBSk47SUFTRUMsT0FBTyxFQUFFWCxzQkFBVVksTUFUckI7SUFVRUMsU0FBUyxFQUFFYixzQkFBVVk7RUFWdkIsQ0FERixFQWFFO0lBQ0VFLFNBQVMsRUFBRSxVQURiO0lBRUVYO0VBRkYsQ0FiRjtBQWtCRCxDQW5CRDs7O0FBcUJnQ0YsMEMiLCJuYW1lcyI6WyJNZW1vcnkiLCJzZXF1ZWxpemVfMSIsImV4cG9ydHMiLCJNZW1vcnlNb2RlbEluaXQiLCJzZXF1ZWxpemUiLCJpbml0IiwiVXNlcklkIiwidHlwZSIsIklOVEVHRVIiLCJpZCIsInByaW1hcnlLZXkiLCJhdXRvSW5jcmVtZW50IiwiY2FwdGlvbiIsIlNUUklORyIsImltYWdlUGF0aCIsInRhYmxlTmFtZSJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9tb2RlbHMvbWVtb3J5LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19