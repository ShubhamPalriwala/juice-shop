"use strict";
/*
 * Copyright (c) 2014-2022 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

function cov_1fcqsgboa1() {
  var path = "/home/shubham/Desktop/juice-shop/build/models/wallet.js";
  var hash = "8599b303d024a783c147bd354baa0e816f0cc72f";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/shubham/Desktop/juice-shop/build/models/wallet.js",
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
          line: 34,
          column: 1
        }
      },
      "5": {
        start: {
          line: 14,
          column: 4
        },
        end: {
          line: 33,
          column: 7
        }
      },
      "6": {
        start: {
          line: 35,
          column: 0
        },
        end: {
          line: 35,
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
            line: 34,
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
      file: "wallet.js",
      sourceRoot: "",
      sources: ["../../models/wallet.ts"],
      names: [],
      mappings: ";AAAA;;;GAGG;;;AAEH,uBAAuB;AACvB,yCAOkB;AAElB,MAAM,MAAO,SAAQ,iBAGpB;CAIA;AA4BkB,6BAAW;AA1B9B,MAAM,eAAe,GAAG,CAAC,SAAoB,EAAE,EAAE;IAC/C,MAAM,CAAC,IAAI,CACT;QACE,MAAM,EAAE;YACN,IAAI,EAAE,qBAAS,CAAC,OAAO;SACxB;QACD,EAAE,EAAE;YACF,IAAI,EAAE,qBAAS,CAAC,OAAO;YACvB,UAAU,EAAE,IAAI;YAChB,aAAa,EAAE,IAAI;SACpB;QACD,OAAO,EAAE;YACP,IAAI,EAAE,qBAAS,CAAC,OAAO;YACvB,QAAQ,EAAE;gBACR,KAAK,EAAE,IAAI;aACZ;YACD,YAAY,EAAE,CAAC;SAChB;KACF,EACD;QACE,SAAS,EAAE,SAAS;QACpB,SAAS;KACV,CACF,CAAA;AACH,CAAC,CAAA;AAE+B,0CAAe"
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "8599b303d024a783c147bd354baa0e816f0cc72f"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1fcqsgboa1 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1fcqsgboa1();
cov_1fcqsgboa1().s[0]++;
Object.defineProperty(exports, "__esModule", {
  value: true
});
cov_1fcqsgboa1().s[1]++;
exports.WalletModelInit = exports.WalletModel = void 0;
/* jslint node: true */

const sequelize_1 = (cov_1fcqsgboa1().s[2]++, require("sequelize"));

class Wallet extends (sequelize_1.Model) {}

cov_1fcqsgboa1().s[3]++;
exports.WalletModel = Wallet;
cov_1fcqsgboa1().s[4]++;

const WalletModelInit = sequelize => {
  cov_1fcqsgboa1().f[0]++;
  cov_1fcqsgboa1().s[5]++;
  Wallet.init({
    UserId: {
      type: sequelize_1.DataTypes.INTEGER
    },
    id: {
      type: sequelize_1.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    balance: {
      type: sequelize_1.DataTypes.INTEGER,
      validate: {
        isInt: true
      },
      defaultValue: 0
    }
  }, {
    tableName: 'Wallets',
    sequelize
  });
};

cov_1fcqsgboa1().s[6]++;
exports.WalletModelInit = WalletModelInit; //# sourceMappingURL=wallet.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQTRCUTs7Ozs7Ozs7Ozs7Ozs7O0FBdkJSOztBQUNBOztBQVNBLE1BQU1BLE1BQU4sVUFBcUJDLGlCQUFyQixFQUdDOzs7QUFnQ2tCQzs7O0FBMUJuQixNQUFNQyxlQUFlLEdBQUlDLFNBQUQsSUFBeUI7RUFBQTtFQUFBO0VBQy9DSixNQUFNLENBQUNLLElBQVAsQ0FDRTtJQUNFQyxNQUFNLEVBQUU7TUFDTkMsSUFBSSxFQUFFTixzQkFBVU87SUFEVixDQURWO0lBSUVDLEVBQUUsRUFBRTtNQUNGRixJQUFJLEVBQUVOLHNCQUFVTyxPQURkO01BRUZFLFVBQVUsRUFBRSxJQUZWO01BR0ZDLGFBQWEsRUFBRTtJQUhiLENBSk47SUFTRUMsT0FBTyxFQUFFO01BQ1BMLElBQUksRUFBRU4sc0JBQVVPLE9BRFQ7TUFFUEssUUFBUSxFQUFFO1FBQ1JDLEtBQUssRUFBRTtNQURDLENBRkg7TUFLUEMsWUFBWSxFQUFFO0lBTFA7RUFUWCxDQURGLEVBa0JFO0lBQ0VDLFNBQVMsRUFBRSxTQURiO0lBRUVaO0VBRkYsQ0FsQkY7QUF1QkQsQ0F4QkQ7OztBQTBCZ0NGLDBDIiwibmFtZXMiOlsiV2FsbGV0Iiwic2VxdWVsaXplXzEiLCJleHBvcnRzIiwiV2FsbGV0TW9kZWxJbml0Iiwic2VxdWVsaXplIiwiaW5pdCIsIlVzZXJJZCIsInR5cGUiLCJJTlRFR0VSIiwiaWQiLCJwcmltYXJ5S2V5IiwiYXV0b0luY3JlbWVudCIsImJhbGFuY2UiLCJ2YWxpZGF0ZSIsImlzSW50IiwiZGVmYXVsdFZhbHVlIiwidGFibGVOYW1lIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL21vZGVscy93YWxsZXQudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=