"use strict";
/*
 * Copyright (c) 2014-2022 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

function cov_1nfxtmmm7n() {
  var path = "/home/shubham/Desktop/juice-shop/build/models/basketitem.js";
  var hash = "030e2738458a4465ebf3c1fc0b4563861feb7338";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/shubham/Desktop/juice-shop/build/models/basketitem.js",
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
          column: 63
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
          column: 37
        }
      },
      "4": {
        start: {
          line: 13,
          column: 28
        },
        end: {
          line: 31,
          column: 1
        }
      },
      "5": {
        start: {
          line: 14,
          column: 4
        },
        end: {
          line: 30,
          column: 7
        }
      },
      "6": {
        start: {
          line: 32,
          column: 0
        },
        end: {
          line: 32,
          column: 50
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 13,
            column: 28
          },
          end: {
            line: 13,
            column: 29
          }
        },
        loc: {
          start: {
            line: 13,
            column: 43
          },
          end: {
            line: 31,
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
      file: "basketitem.js",
      sourceRoot: "",
      sources: ["../../models/basketitem.ts"],
      names: [],
      mappings: ";AAAA;;;GAGG;;;AAEH,uBAAuB;AACvB,yCAOkB;AAElB,MAAM,UAAW,SAAQ,iBAGxB;CAKA;AAyBsB,qCAAe;AAvBtC,MAAM,mBAAmB,GAAG,CAAC,SAAoB,EAAE,EAAE;IACnD,UAAU,CAAC,IAAI,CACb;QACE,SAAS,EAAE;YACT,IAAI,EAAE,qBAAS,CAAC,OAAO;SACxB;QACD,QAAQ,EAAE;YACR,IAAI,EAAE,qBAAS,CAAC,OAAO;SACxB;QACD,EAAE,EAAE;YACF,IAAI,EAAE,qBAAS,CAAC,OAAO;YACvB,UAAU,EAAE,IAAI;YAChB,aAAa,EAAE,IAAI;SACpB;QACD,QAAQ,EAAE,qBAAS,CAAC,OAAO;KAC5B,EACD;QACE,SAAS,EAAE,aAAa;QACxB,SAAS;KACV,CACF,CAAA;AACH,CAAC,CAAA;AAEuC,kDAAmB"
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "030e2738458a4465ebf3c1fc0b4563861feb7338"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1nfxtmmm7n = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1nfxtmmm7n();
cov_1nfxtmmm7n().s[0]++;
Object.defineProperty(exports, "__esModule", {
  value: true
});
cov_1nfxtmmm7n().s[1]++;
exports.BasketItemModelInit = exports.BasketItemModel = void 0;
/* jslint node: true */

const sequelize_1 = (cov_1nfxtmmm7n().s[2]++, require("sequelize"));

class BasketItem extends (sequelize_1.Model) {}

cov_1nfxtmmm7n().s[3]++;
exports.BasketItemModel = BasketItem;
cov_1nfxtmmm7n().s[4]++;

const BasketItemModelInit = sequelize => {
  cov_1nfxtmmm7n().f[0]++;
  cov_1nfxtmmm7n().s[5]++;
  BasketItem.init({
    ProductId: {
      type: sequelize_1.DataTypes.INTEGER
    },
    BasketId: {
      type: sequelize_1.DataTypes.INTEGER
    },
    id: {
      type: sequelize_1.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    quantity: sequelize_1.DataTypes.INTEGER
  }, {
    tableName: 'BasketItems',
    sequelize
  });
};

cov_1nfxtmmm7n().s[6]++;
exports.BasketItemModelInit = BasketItemModelInit; //# sourceMappingURL=basketitem.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQTZCUTs7Ozs7Ozs7Ozs7Ozs7O0FBeEJSOztBQUNBOztBQVNBLE1BQU1BLFVBQU4sVUFBeUJDLGlCQUF6QixFQUdDOzs7QUE4QnNCQzs7O0FBdkJ2QixNQUFNQyxtQkFBbUIsR0FBSUMsU0FBRCxJQUF5QjtFQUFBO0VBQUE7RUFDbkRKLFVBQVUsQ0FBQ0ssSUFBWCxDQUNFO0lBQ0VDLFNBQVMsRUFBRTtNQUNUQyxJQUFJLEVBQUVOLHNCQUFVTztJQURQLENBRGI7SUFJRUMsUUFBUSxFQUFFO01BQ1JGLElBQUksRUFBRU4sc0JBQVVPO0lBRFIsQ0FKWjtJQU9FRSxFQUFFLEVBQUU7TUFDRkgsSUFBSSxFQUFFTixzQkFBVU8sT0FEZDtNQUVGRyxVQUFVLEVBQUUsSUFGVjtNQUdGQyxhQUFhLEVBQUU7SUFIYixDQVBOO0lBWUVDLFFBQVEsRUFBRVosc0JBQVVPO0VBWnRCLENBREYsRUFlRTtJQUNFTSxTQUFTLEVBQUUsYUFEYjtJQUVFVjtFQUZGLENBZkY7QUFvQkQsQ0FyQkQ7OztBQXVCd0NGLGtEIiwibmFtZXMiOlsiQmFza2V0SXRlbSIsInNlcXVlbGl6ZV8xIiwiZXhwb3J0cyIsIkJhc2tldEl0ZW1Nb2RlbEluaXQiLCJzZXF1ZWxpemUiLCJpbml0IiwiUHJvZHVjdElkIiwidHlwZSIsIklOVEVHRVIiLCJCYXNrZXRJZCIsImlkIiwicHJpbWFyeUtleSIsImF1dG9JbmNyZW1lbnQiLCJxdWFudGl0eSIsInRhYmxlTmFtZSJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9tb2RlbHMvYmFza2V0aXRlbS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==