"use strict";
/*
 * Copyright (c) 2014-2022 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

function cov_1bb4nwkacd() {
  var path = "/home/shubham/Desktop/juice-shop/build/models/complaint.js";
  var hash = "4638d38b5da2086cb464071263a1a8ee4e7b028f";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/shubham/Desktop/juice-shop/build/models/complaint.js",
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
      file: "complaint.js",
      sourceRoot: "",
      sources: ["../../models/complaint.ts"],
      names: [],
      mappings: ";AAAA;;;GAGG;;;AAEH,uBAAuB;AAEvB,yCAOkB;AAElB,MAAM,SAAU,SAAQ,iBAGvB;CAKA;AAuBqB,mCAAc;AArBpC,MAAM,kBAAkB,GAAG,CAAC,SAAoB,EAAE,EAAE;IAClD,SAAS,CAAC,IAAI,CACZ;QACE,MAAM,EAAE;YACN,IAAI,EAAE,qBAAS,CAAC,OAAO;SACxB;QACD,EAAE,EAAE;YACF,IAAI,EAAE,qBAAS,CAAC,OAAO;YACvB,UAAU,EAAE,IAAI;YAChB,aAAa,EAAE,IAAI;SACpB;QACD,OAAO,EAAE,qBAAS,CAAC,MAAM;QACzB,IAAI,EAAE,qBAAS,CAAC,MAAM;KACvB,EACD;QACE,SAAS,EAAE,YAAY;QACvB,SAAS;KACV,CACF,CAAA;AACH,CAAC,CAAA;AAEqC,gDAAkB"
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "4638d38b5da2086cb464071263a1a8ee4e7b028f"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1bb4nwkacd = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1bb4nwkacd();
cov_1bb4nwkacd().s[0]++;
Object.defineProperty(exports, "__esModule", {
  value: true
});
cov_1bb4nwkacd().s[1]++;
exports.ComplaintModelInit = exports.ComplaintModel = void 0;
/* jslint node: true */

const sequelize_1 = (cov_1bb4nwkacd().s[2]++, require("sequelize"));

class Complaint extends (sequelize_1.Model) {}

cov_1bb4nwkacd().s[3]++;
exports.ComplaintModel = Complaint;
cov_1bb4nwkacd().s[4]++;

const ComplaintModelInit = sequelize => {
  cov_1bb4nwkacd().f[0]++;
  cov_1bb4nwkacd().s[5]++;
  Complaint.init({
    UserId: {
      type: sequelize_1.DataTypes.INTEGER
    },
    id: {
      type: sequelize_1.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    message: sequelize_1.DataTypes.STRING,
    file: sequelize_1.DataTypes.STRING
  }, {
    tableName: 'Complaints',
    sequelize
  });
};

cov_1bb4nwkacd().s[6]++;
exports.ComplaintModelInit = ComplaintModelInit; //# sourceMappingURL=complaint.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQThCUTs7Ozs7Ozs7Ozs7Ozs7O0FBekJSOztBQUVBOztBQVNBLE1BQU1BLFNBQU4sVUFBd0JDLGlCQUF4QixFQUdDOzs7QUE0QnFCQzs7O0FBckJ0QixNQUFNQyxrQkFBa0IsR0FBSUMsU0FBRCxJQUF5QjtFQUFBO0VBQUE7RUFDbERKLFNBQVMsQ0FBQ0ssSUFBVixDQUNFO0lBQ0VDLE1BQU0sRUFBRTtNQUNOQyxJQUFJLEVBQUVOLHNCQUFVTztJQURWLENBRFY7SUFJRUMsRUFBRSxFQUFFO01BQ0ZGLElBQUksRUFBRU4sc0JBQVVPLE9BRGQ7TUFFRkUsVUFBVSxFQUFFLElBRlY7TUFHRkMsYUFBYSxFQUFFO0lBSGIsQ0FKTjtJQVNFQyxPQUFPLEVBQUVYLHNCQUFVWSxNQVRyQjtJQVVFQyxJQUFJLEVBQUViLHNCQUFVWTtFQVZsQixDQURGLEVBYUU7SUFDRUUsU0FBUyxFQUFFLFlBRGI7SUFFRVg7RUFGRixDQWJGO0FBa0JELENBbkJEOzs7QUFxQnNDRixnRCIsIm5hbWVzIjpbIkNvbXBsYWludCIsInNlcXVlbGl6ZV8xIiwiZXhwb3J0cyIsIkNvbXBsYWludE1vZGVsSW5pdCIsInNlcXVlbGl6ZSIsImluaXQiLCJVc2VySWQiLCJ0eXBlIiwiSU5URUdFUiIsImlkIiwicHJpbWFyeUtleSIsImF1dG9JbmNyZW1lbnQiLCJtZXNzYWdlIiwiU1RSSU5HIiwiZmlsZSIsInRhYmxlTmFtZSJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9tb2RlbHMvY29tcGxhaW50LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19