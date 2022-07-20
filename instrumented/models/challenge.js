"use strict";
/*
 * Copyright (c) 2014-2022 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

function cov_iuhsja2ry() {
  var path = "/home/shubham/Desktop/juice-shop/build/models/challenge.js";
  var hash = "f56d0ade6a1157c059d37a5ab44c8626fffab764";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/shubham/Desktop/juice-shop/build/models/challenge.js",
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
          column: 61
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
          column: 35
        }
      },
      "4": {
        start: {
          line: 13,
          column: 27
        },
        end: {
          line: 37,
          column: 1
        }
      },
      "5": {
        start: {
          line: 14,
          column: 4
        },
        end: {
          line: 36,
          column: 7
        }
      },
      "6": {
        start: {
          line: 38,
          column: 0
        },
        end: {
          line: 38,
          column: 48
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 13,
            column: 27
          },
          end: {
            line: 13,
            column: 28
          }
        },
        loc: {
          start: {
            line: 13,
            column: 42
          },
          end: {
            line: 37,
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
      file: "challenge.js",
      sourceRoot: "",
      sources: ["../../models/challenge.ts"],
      names: [],
      mappings: ";AAAA;;;GAGG;;;AAEH,uBAAuB;AACvB,yCAOkB;AAClB,MAAM,SAAU,SAAQ,iBAGvB;CAeA;AA+BqB,mCAAc;AA7BpC,MAAM,kBAAkB,GAAG,CAAC,SAAoB,EAAE,EAAE;IAClD,SAAS,CAAC,IAAI,CACZ;QACE,EAAE,EAAE;YACF,IAAI,EAAE,qBAAS,CAAC,OAAO;YACvB,UAAU,EAAE,IAAI;YAChB,aAAa,EAAE,IAAI;SACpB;QACD,GAAG,EAAE,qBAAS,CAAC,MAAM;QACrB,IAAI,EAAE,qBAAS,CAAC,MAAM;QACtB,QAAQ,EAAE,qBAAS,CAAC,MAAM;QAC1B,IAAI,EAAE,qBAAS,CAAC,MAAM;QACtB,WAAW,EAAE,qBAAS,CAAC,MAAM;QAC7B,UAAU,EAAE,qBAAS,CAAC,OAAO;QAC7B,IAAI,EAAE,qBAAS,CAAC,MAAM;QACtB,OAAO,EAAE,qBAAS,CAAC,MAAM;QACzB,aAAa,EAAE,qBAAS,CAAC,MAAM;QAC/B,MAAM,EAAE,qBAAS,CAAC,OAAO;QACzB,WAAW,EAAE,qBAAS,CAAC,MAAM;QAC7B,aAAa,EAAE,qBAAS,CAAC,MAAM;QAC/B,qBAAqB,EAAE,qBAAS,CAAC,MAAM;KACxC,EACD;QACE,SAAS,EAAE,YAAY;QACvB,SAAS;KACV,CACF,CAAA;AACH,CAAC,CAAA;AAEqC,gDAAkB"
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "f56d0ade6a1157c059d37a5ab44c8626fffab764"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_iuhsja2ry = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_iuhsja2ry();
cov_iuhsja2ry().s[0]++;
Object.defineProperty(exports, "__esModule", {
  value: true
});
cov_iuhsja2ry().s[1]++;
exports.ChallengeModelInit = exports.ChallengeModel = void 0;
/* jslint node: true */

const sequelize_1 = (cov_iuhsja2ry().s[2]++, require("sequelize"));

class Challenge extends (sequelize_1.Model) {}

cov_iuhsja2ry().s[3]++;
exports.ChallengeModel = Challenge;
cov_iuhsja2ry().s[4]++;

const ChallengeModelInit = sequelize => {
  cov_iuhsja2ry().f[0]++;
  cov_iuhsja2ry().s[5]++;
  Challenge.init({
    id: {
      type: sequelize_1.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    key: sequelize_1.DataTypes.STRING,
    name: sequelize_1.DataTypes.STRING,
    category: sequelize_1.DataTypes.STRING,
    tags: sequelize_1.DataTypes.STRING,
    description: sequelize_1.DataTypes.STRING,
    difficulty: sequelize_1.DataTypes.INTEGER,
    hint: sequelize_1.DataTypes.STRING,
    hintUrl: sequelize_1.DataTypes.STRING,
    mitigationUrl: sequelize_1.DataTypes.STRING,
    solved: sequelize_1.DataTypes.BOOLEAN,
    disabledEnv: sequelize_1.DataTypes.STRING,
    tutorialOrder: sequelize_1.DataTypes.NUMBER,
    codingChallengeStatus: sequelize_1.DataTypes.NUMBER
  }, {
    tableName: 'Challenges',
    sequelize
  });
};

cov_iuhsja2ry().s[6]++;
exports.ChallengeModelInit = ChallengeModelInit; //# sourceMappingURL=challenge.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXNDUTs7Ozs7Ozs7Ozs7Ozs7O0FBakNSOztBQUNBOztBQVFBLE1BQU1BLFNBQU4sVUFBd0JDLGlCQUF4QixFQUdDOzs7QUE4Q3FCQzs7O0FBN0J0QixNQUFNQyxrQkFBa0IsR0FBSUMsU0FBRCxJQUF5QjtFQUFBO0VBQUE7RUFDbERKLFNBQVMsQ0FBQ0ssSUFBVixDQUNFO0lBQ0VDLEVBQUUsRUFBRTtNQUNGQyxJQUFJLEVBQUVOLHNCQUFVTyxPQURkO01BRUZDLFVBQVUsRUFBRSxJQUZWO01BR0ZDLGFBQWEsRUFBRTtJQUhiLENBRE47SUFNRUMsR0FBRyxFQUFFVixzQkFBVVcsTUFOakI7SUFPRUMsSUFBSSxFQUFFWixzQkFBVVcsTUFQbEI7SUFRRUUsUUFBUSxFQUFFYixzQkFBVVcsTUFSdEI7SUFTRUcsSUFBSSxFQUFFZCxzQkFBVVcsTUFUbEI7SUFVRUksV0FBVyxFQUFFZixzQkFBVVcsTUFWekI7SUFXRUssVUFBVSxFQUFFaEIsc0JBQVVPLE9BWHhCO0lBWUVVLElBQUksRUFBRWpCLHNCQUFVVyxNQVpsQjtJQWFFTyxPQUFPLEVBQUVsQixzQkFBVVcsTUFickI7SUFjRVEsYUFBYSxFQUFFbkIsc0JBQVVXLE1BZDNCO0lBZUVTLE1BQU0sRUFBRXBCLHNCQUFVcUIsT0FmcEI7SUFnQkVDLFdBQVcsRUFBRXRCLHNCQUFVVyxNQWhCekI7SUFpQkVZLGFBQWEsRUFBRXZCLHNCQUFVd0IsTUFqQjNCO0lBa0JFQyxxQkFBcUIsRUFBRXpCLHNCQUFVd0I7RUFsQm5DLENBREYsRUFxQkU7SUFDRUUsU0FBUyxFQUFFLFlBRGI7SUFFRXZCO0VBRkYsQ0FyQkY7QUEwQkQsQ0EzQkQ7OztBQTZCc0NGLGdEIiwibmFtZXMiOlsiQ2hhbGxlbmdlIiwic2VxdWVsaXplXzEiLCJleHBvcnRzIiwiQ2hhbGxlbmdlTW9kZWxJbml0Iiwic2VxdWVsaXplIiwiaW5pdCIsImlkIiwidHlwZSIsIklOVEVHRVIiLCJwcmltYXJ5S2V5IiwiYXV0b0luY3JlbWVudCIsImtleSIsIlNUUklORyIsIm5hbWUiLCJjYXRlZ29yeSIsInRhZ3MiLCJkZXNjcmlwdGlvbiIsImRpZmZpY3VsdHkiLCJoaW50IiwiaGludFVybCIsIm1pdGlnYXRpb25VcmwiLCJzb2x2ZWQiLCJCT09MRUFOIiwiZGlzYWJsZWRFbnYiLCJ0dXRvcmlhbE9yZGVyIiwiTlVNQkVSIiwiY29kaW5nQ2hhbGxlbmdlU3RhdHVzIiwidGFibGVOYW1lIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL21vZGVscy9jaGFsbGVuZ2UudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=