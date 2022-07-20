"use strict";
/*
 * Copyright (c) 2014-2022 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

function cov_27wfc08shc() {
  var path = "/home/shubham/Desktop/juice-shop/build/models/address.js";
  var hash = "507ecbda819640ec45444b1b05c949dd9451c919";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/shubham/Desktop/juice-shop/build/models/address.js",
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
          line: 53,
          column: 1
        }
      },
      "5": {
        start: {
          line: 14,
          column: 4
        },
        end: {
          line: 52,
          column: 7
        }
      },
      "6": {
        start: {
          line: 54,
          column: 0
        },
        end: {
          line: 54,
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
            line: 53,
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
      file: "address.js",
      sourceRoot: "",
      sources: ["../../models/address.ts"],
      names: [],
      mappings: ";AAAA;;;GAGG;;;AAEH,yCAOkB;AAClB,uBAAuB;AACvB,MAAM,OAAQ,SAAQ,iBAGrB;CAUA;AA+CmB,+BAAY;AA7ChC,MAAM,gBAAgB,GAAG,CAAC,SAAoB,EAAE,EAAE;IAChD,OAAO,CAAC,IAAI,CACV;QACE,MAAM,EAAE;YACN,IAAI,EAAE,qBAAS,CAAC,OAAO;SACxB;QACD,EAAE,EAAE;YACF,IAAI,EAAE,qBAAS,CAAC,OAAO;YACvB,UAAU,EAAE,IAAI;YAChB,aAAa,EAAE,IAAI;SACpB;QACD,QAAQ,EAAE;YACR,IAAI,EAAE,qBAAS,CAAC,MAAM;SACvB;QACD,SAAS,EAAE;YACT,IAAI,EAAE,qBAAS,CAAC,OAAO;YACvB,QAAQ,EAAE;gBACR,KAAK,EAAE,IAAI;gBACX,GAAG,EAAE,OAAO;gBACZ,GAAG,EAAE,UAAU;aAChB;SACF;QACD,OAAO,EAAE;YACP,IAAI,EAAE,qBAAS,CAAC,MAAM;YACtB,QAAQ,EAAE;gBACR,GAAG,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC;aACZ;SACF;QACD,aAAa,EAAE;YACb,IAAI,EAAE,qBAAS,CAAC,MAAM;YACtB,QAAQ,EAAE;gBACR,GAAG,EAAE,CAAC,CAAC,EAAE,GAAG,CAAC;aACd;SACF;QACD,IAAI,EAAE,qBAAS,CAAC,MAAM;QACtB,KAAK,EAAE,qBAAS,CAAC,MAAM;QACvB,OAAO,EAAE,qBAAS,CAAC,MAAM;KAC1B,EACD;QACE,SAAS,EAAE,WAAW;QACtB,SAAS;KACV,CACF,CAAA;AACH,CAAC,CAAA;AAEiC,4CAAgB"
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "507ecbda819640ec45444b1b05c949dd9451c919"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_27wfc08shc = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_27wfc08shc();
cov_27wfc08shc().s[0]++;
Object.defineProperty(exports, "__esModule", {
  value: true
});
cov_27wfc08shc().s[1]++;
exports.AddressModelInit = exports.AddressModel = void 0;
const sequelize_1 = (cov_27wfc08shc().s[2]++, require("sequelize"));
/* jslint node: true */

class Address extends (sequelize_1.Model) {}

cov_27wfc08shc().s[3]++;
exports.AddressModel = Address;
cov_27wfc08shc().s[4]++;

const AddressModelInit = sequelize => {
  cov_27wfc08shc().f[0]++;
  cov_27wfc08shc().s[5]++;
  Address.init({
    UserId: {
      type: sequelize_1.DataTypes.INTEGER
    },
    id: {
      type: sequelize_1.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    fullName: {
      type: sequelize_1.DataTypes.STRING
    },
    mobileNum: {
      type: sequelize_1.DataTypes.INTEGER,
      validate: {
        isInt: true,
        min: 1000000,
        max: 9999999999
      }
    },
    zipCode: {
      type: sequelize_1.DataTypes.STRING,
      validate: {
        len: [1, 8]
      }
    },
    streetAddress: {
      type: sequelize_1.DataTypes.STRING,
      validate: {
        len: [1, 160]
      }
    },
    city: sequelize_1.DataTypes.STRING,
    state: sequelize_1.DataTypes.STRING,
    country: sequelize_1.DataTypes.STRING
  }, {
    tableName: 'Addresses',
    sequelize
  });
};

cov_27wfc08shc().s[6]++;
exports.AddressModelInit = AddressModelInit; //# sourceMappingURL=address.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWlDUTs7Ozs7Ozs7Ozs7Ozs7O0FBNUJSO0FBUUE7O0FBQ0EsTUFBTUEsT0FBTixVQUFzQkMsaUJBQXRCLEVBR0M7OztBQXlEbUJDOzs7QUE3Q3BCLE1BQU1DLGdCQUFnQixHQUFJQyxTQUFELElBQXlCO0VBQUE7RUFBQTtFQUNoREosT0FBTyxDQUFDSyxJQUFSLENBQ0U7SUFDRUMsTUFBTSxFQUFFO01BQ05DLElBQUksRUFBRU4sc0JBQVVPO0lBRFYsQ0FEVjtJQUlFQyxFQUFFLEVBQUU7TUFDRkYsSUFBSSxFQUFFTixzQkFBVU8sT0FEZDtNQUVGRSxVQUFVLEVBQUUsSUFGVjtNQUdGQyxhQUFhLEVBQUU7SUFIYixDQUpOO0lBU0VDLFFBQVEsRUFBRTtNQUNSTCxJQUFJLEVBQUVOLHNCQUFVWTtJQURSLENBVFo7SUFZRUMsU0FBUyxFQUFFO01BQ1RQLElBQUksRUFBRU4sc0JBQVVPLE9BRFA7TUFFVE8sUUFBUSxFQUFFO1FBQ1JDLEtBQUssRUFBRSxJQURDO1FBRVJDLEdBQUcsRUFBRSxPQUZHO1FBR1JDLEdBQUcsRUFBRTtNQUhHO0lBRkQsQ0FaYjtJQW9CRUMsT0FBTyxFQUFFO01BQ1BaLElBQUksRUFBRU4sc0JBQVVZLE1BRFQ7TUFFUEUsUUFBUSxFQUFFO1FBQ1JLLEdBQUcsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKO01BREc7SUFGSCxDQXBCWDtJQTBCRUMsYUFBYSxFQUFFO01BQ2JkLElBQUksRUFBRU4sc0JBQVVZLE1BREg7TUFFYkUsUUFBUSxFQUFFO1FBQ1JLLEdBQUcsRUFBRSxDQUFDLENBQUQsRUFBSSxHQUFKO01BREc7SUFGRyxDQTFCakI7SUFnQ0VFLElBQUksRUFBRXJCLHNCQUFVWSxNQWhDbEI7SUFpQ0VVLEtBQUssRUFBRXRCLHNCQUFVWSxNQWpDbkI7SUFrQ0VXLE9BQU8sRUFBRXZCLHNCQUFVWTtFQWxDckIsQ0FERixFQXFDRTtJQUNFWSxTQUFTLEVBQUUsV0FEYjtJQUVFckI7RUFGRixDQXJDRjtBQTBDRCxDQTNDRDs7O0FBNkNrQ0YsNEMiLCJuYW1lcyI6WyJBZGRyZXNzIiwic2VxdWVsaXplXzEiLCJleHBvcnRzIiwiQWRkcmVzc01vZGVsSW5pdCIsInNlcXVlbGl6ZSIsImluaXQiLCJVc2VySWQiLCJ0eXBlIiwiSU5URUdFUiIsImlkIiwicHJpbWFyeUtleSIsImF1dG9JbmNyZW1lbnQiLCJmdWxsTmFtZSIsIlNUUklORyIsIm1vYmlsZU51bSIsInZhbGlkYXRlIiwiaXNJbnQiLCJtaW4iLCJtYXgiLCJ6aXBDb2RlIiwibGVuIiwic3RyZWV0QWRkcmVzcyIsImNpdHkiLCJzdGF0ZSIsImNvdW50cnkiLCJ0YWJsZU5hbWUiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbW9kZWxzL2FkZHJlc3MudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=