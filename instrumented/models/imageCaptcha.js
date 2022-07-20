"use strict";
/*
 * Copyright (c) 2014-2022 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

function cov_2440mztv25() {
  var path = "/home/shubham/Desktop/juice-shop/build/models/imageCaptcha.js";
  var hash = "24c1b1c0ef281611a3ee09fbea014e5a8e527a89";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/shubham/Desktop/juice-shop/build/models/imageCaptcha.js",
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
          column: 67
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
          column: 41
        }
      },
      "4": {
        start: {
          line: 12,
          column: 30
        },
        end: {
          line: 27,
          column: 1
        }
      },
      "5": {
        start: {
          line: 13,
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
          column: 54
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 12,
            column: 30
          },
          end: {
            line: 12,
            column: 31
          }
        },
        loc: {
          start: {
            line: 12,
            column: 45
          },
          end: {
            line: 27,
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
      file: "imageCaptcha.js",
      sourceRoot: "",
      sources: ["../../models/imageCaptcha.ts"],
      names: [],
      mappings: ";AAAA;;;GAGG;;;AAEH,yCAOkB;AAElB,MAAM,YAAa,SAAQ,iBAG1B;CAMA;AAsBwB,yCAAiB;AApB1C,MAAM,qBAAqB,GAAG,CAAC,SAAoB,EAAE,EAAE;IACrD,YAAY,CAAC,IAAI,CACf;QACE,EAAE,EAAE;YACF,IAAI,EAAE,qBAAS,CAAC,OAAO;YACvB,UAAU,EAAE,IAAI;YAChB,aAAa,EAAE,IAAI;SACpB;QACD,KAAK,EAAE,qBAAS,CAAC,MAAM;QACvB,MAAM,EAAE,qBAAS,CAAC,MAAM;QACxB,MAAM,EAAE,EAAE,IAAI,EAAE,qBAAS,CAAC,OAAO,EAAE;QACnC,SAAS,EAAE,qBAAS,CAAC,IAAI;KAC1B,EACD;QACE,SAAS,EAAE,eAAe;QAC1B,SAAS;KACV,CACF,CAAA;AACH,CAAC,CAAA;AAE2C,sDAAqB"
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "24c1b1c0ef281611a3ee09fbea014e5a8e527a89"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2440mztv25 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2440mztv25();
cov_2440mztv25().s[0]++;
Object.defineProperty(exports, "__esModule", {
  value: true
});
cov_2440mztv25().s[1]++;
exports.ImageCaptchaModelInit = exports.ImageCaptchaModel = void 0;
const sequelize_1 = (cov_2440mztv25().s[2]++, require("sequelize"));

class ImageCaptcha extends (sequelize_1.Model) {}

cov_2440mztv25().s[3]++;
exports.ImageCaptchaModel = ImageCaptcha;
cov_2440mztv25().s[4]++;

const ImageCaptchaModelInit = sequelize => {
  cov_2440mztv25().f[0]++;
  cov_2440mztv25().s[5]++;
  ImageCaptcha.init({
    id: {
      type: sequelize_1.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    image: sequelize_1.DataTypes.STRING,
    answer: sequelize_1.DataTypes.STRING,
    UserId: {
      type: sequelize_1.DataTypes.INTEGER
    },
    createdAt: sequelize_1.DataTypes.DATE
  }, {
    tableName: 'ImageCaptchas',
    sequelize
  });
};

cov_2440mztv25().s[6]++;
exports.ImageCaptchaModelInit = ImageCaptchaModelInit; //# sourceMappingURL=imageCaptcha.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQThCUTs7Ozs7Ozs7Ozs7Ozs7O0FBekJSOztBQVNBLE1BQU1BLFlBQU4sVUFBMkJDLGlCQUEzQixFQUdDOzs7QUE0QndCQzs7O0FBcEJ6QixNQUFNQyxxQkFBcUIsR0FBSUMsU0FBRCxJQUF5QjtFQUFBO0VBQUE7RUFDckRKLFlBQVksQ0FBQ0ssSUFBYixDQUNFO0lBQ0VDLEVBQUUsRUFBRTtNQUNGQyxJQUFJLEVBQUVOLHNCQUFVTyxPQURkO01BRUZDLFVBQVUsRUFBRSxJQUZWO01BR0ZDLGFBQWEsRUFBRTtJQUhiLENBRE47SUFNRUMsS0FBSyxFQUFFVixzQkFBVVcsTUFObkI7SUFPRUMsTUFBTSxFQUFFWixzQkFBVVcsTUFQcEI7SUFRRUUsTUFBTSxFQUFFO01BQUVQLElBQUksRUFBRU4sc0JBQVVPO0lBQWxCLENBUlY7SUFTRU8sU0FBUyxFQUFFZCxzQkFBVWU7RUFUdkIsQ0FERixFQVlFO0lBQ0VDLFNBQVMsRUFBRSxlQURiO0lBRUViO0VBRkYsQ0FaRjtBQWlCRCxDQWxCRDs7O0FBb0I0Q0Ysc0QiLCJuYW1lcyI6WyJJbWFnZUNhcHRjaGEiLCJzZXF1ZWxpemVfMSIsImV4cG9ydHMiLCJJbWFnZUNhcHRjaGFNb2RlbEluaXQiLCJzZXF1ZWxpemUiLCJpbml0IiwiaWQiLCJ0eXBlIiwiSU5URUdFUiIsInByaW1hcnlLZXkiLCJhdXRvSW5jcmVtZW50IiwiaW1hZ2UiLCJTVFJJTkciLCJhbnN3ZXIiLCJVc2VySWQiLCJjcmVhdGVkQXQiLCJEQVRFIiwidGFibGVOYW1lIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL21vZGVscy9pbWFnZUNhcHRjaGEudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=