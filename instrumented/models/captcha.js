"use strict";
/*
 * Copyright (c) 2014-2022 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

function cov_138z4lmqxw() {
  var path = "/home/shubham/Desktop/juice-shop/build/models/captcha.js";
  var hash = "cb2e4e96b0b4272861c22a2a9529ddb5ec5c98e4";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/shubham/Desktop/juice-shop/build/models/captcha.js",
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
          column: 31
        }
      },
      "4": {
        start: {
          line: 12,
          column: 25
        },
        end: {
          line: 23,
          column: 1
        }
      },
      "5": {
        start: {
          line: 13,
          column: 4
        },
        end: {
          line: 22,
          column: 7
        }
      },
      "6": {
        start: {
          line: 24,
          column: 0
        },
        end: {
          line: 24,
          column: 44
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 12,
            column: 25
          },
          end: {
            line: 12,
            column: 26
          }
        },
        loc: {
          start: {
            line: 12,
            column: 40
          },
          end: {
            line: 23,
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
      file: "captcha.js",
      sourceRoot: "",
      sources: ["../../models/captcha.ts"],
      names: [],
      mappings: ";AAAA;;;GAGG;;;AAEH,yCAMkB;AAElB,MAAM,OAAQ,SAAQ,iBAGrB;CAIA;AAkBmB,+BAAY;AAhBhC,MAAM,gBAAgB,GAAG,CAAC,SAAoB,EAAE,EAAE;IAChD,OAAO,CAAC,IAAI,CACV;QACE,SAAS,EAAE;YACT,IAAI,EAAE,qBAAS,CAAC,OAAO;SACxB;QACD,OAAO,EAAE,qBAAS,CAAC,MAAM;QACzB,MAAM,EAAE,qBAAS,CAAC,MAAM;KACzB,EACD;QACE,SAAS,EAAE,UAAU;QACrB,SAAS;KACV,CACF,CAAA;AACH,CAAC,CAAA;AAEiC,4CAAgB"
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "cb2e4e96b0b4272861c22a2a9529ddb5ec5c98e4"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_138z4lmqxw = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_138z4lmqxw();
cov_138z4lmqxw().s[0]++;
Object.defineProperty(exports, "__esModule", {
  value: true
});
cov_138z4lmqxw().s[1]++;
exports.CaptchaModelInit = exports.CaptchaModel = void 0;
const sequelize_1 = (cov_138z4lmqxw().s[2]++, require("sequelize"));

class Captcha extends (sequelize_1.Model) {}

cov_138z4lmqxw().s[3]++;
exports.CaptchaModel = Captcha;
cov_138z4lmqxw().s[4]++;

const CaptchaModelInit = sequelize => {
  cov_138z4lmqxw().f[0]++;
  cov_138z4lmqxw().s[5]++;
  Captcha.init({
    captchaId: {
      type: sequelize_1.DataTypes.INTEGER
    },
    captcha: sequelize_1.DataTypes.STRING,
    answer: sequelize_1.DataTypes.STRING
  }, {
    tableName: 'Captchas',
    sequelize
  });
};

cov_138z4lmqxw().s[6]++;
exports.CaptchaModelInit = CaptchaModelInit; //# sourceMappingURL=captcha.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQTJCTzs7Ozs7Ozs7Ozs7Ozs7O0FBdEJQOztBQVFBLE1BQU1BLE9BQU4sVUFBc0JDLGlCQUF0QixFQUdDOzs7QUFzQm1CQzs7O0FBaEJwQixNQUFNQyxnQkFBZ0IsR0FBSUMsU0FBRCxJQUF5QjtFQUFBO0VBQUE7RUFDaERKLE9BQU8sQ0FBQ0ssSUFBUixDQUNFO0lBQ0VDLFNBQVMsRUFBRTtNQUNUQyxJQUFJLEVBQUVOLHNCQUFVTztJQURQLENBRGI7SUFJRUMsT0FBTyxFQUFFUixzQkFBVVMsTUFKckI7SUFLRUMsTUFBTSxFQUFFVixzQkFBVVM7RUFMcEIsQ0FERixFQVFFO0lBQ0VFLFNBQVMsRUFBRSxVQURiO0lBRUVSO0VBRkYsQ0FSRjtBQWFELENBZEQ7OztBQWdCa0NGLDRDIiwibmFtZXMiOlsiQ2FwdGNoYSIsInNlcXVlbGl6ZV8xIiwiZXhwb3J0cyIsIkNhcHRjaGFNb2RlbEluaXQiLCJzZXF1ZWxpemUiLCJpbml0IiwiY2FwdGNoYUlkIiwidHlwZSIsIklOVEVHRVIiLCJjYXB0Y2hhIiwiU1RSSU5HIiwiYW5zd2VyIiwidGFibGVOYW1lIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL21vZGVscy9jYXB0Y2hhLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19