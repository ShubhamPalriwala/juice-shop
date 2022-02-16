/*
 * Copyright (c) 2014-2022 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import {sequelize} from "../models/index";
import { Request, Response, NextFunction } from "express";
import ProductModel from "models/product";
import UserModel from "../models/user";

const utils = require("../lib/utils");
const challenges = require("../data/datacache").challenges;

// vuln-code-snippet start unionSqlInjectionChallenge dbSchemaChallenge
module.exports = function searchProducts() {
  return (req: Request, res: Response, next: NextFunction) => {
    let criteria: any = req.query.q === "undefined" ? "" : req.query.q ?? "";
    criteria = criteria.length <= 200 ? criteria : criteria.substring(0, 200);
    sequelize
      .query(
        `SELECT * FROM Products WHERE ((name LIKE '%${criteria}%' OR description LIKE '%${criteria}%') AND deletedAt IS NULL) ORDER BY name`
      ) // vuln-code-snippet vuln-line unionSqlInjectionChallenge dbSchemaChallenge
      .then((products: Array<ProductModel>) => {
        const dataString = JSON.stringify(products);
        if (utils.notSolved(challenges.unionSqlInjectionChallenge)) {
          // vuln-code-snippet hide-start
          let solved = true;
          UserModel.findAll().then((data) => {
            const users = utils.queryResultToJson(data);
            if (users.data?.length) {
              for (let i = 0; i < users.data.length; i++) {
                solved =
                  solved &&
                  utils.containsOrEscaped(dataString, users.data[i].email) &&
                  utils.contains(dataString, users.data[i].password);
                if (!solved) {
                  break;
                }
              }
              if (solved) {
                utils.solve(challenges.unionSqlInjectionChallenge);
              }
            }
          });
        }
        if (utils.notSolved(challenges.dbSchemaChallenge)) {
          let solved = true;
          sequelize
            .query("SELECT sql FROM sqlite_master")
            .then(([data]) => {
              const tableDefinitions = utils.queryResultToJson(data);
              if (tableDefinitions.data?.length) {
                for (let i = 0; i < tableDefinitions.data.length; i++) {
                  solved =
                    solved &&
                    utils.containsOrEscaped(
                      dataString,
                      tableDefinitions.data[i].sql
                    );
                  if (!solved) {
                    break;
                  }
                }
                if (solved) {
                  utils.solve(challenges.dbSchemaChallenge);
                }
              }
            });
        } // vuln-code-snippet hide-end
        for (let i = 0; i < products.length; i++) {
          products[i].name = req.__(products[i].name);
          products[i].description = req.__(products[i].description);
        }
        res.json(utils.queryResultToJson(products));
      })
      .catch((error: Error) => {
        next(error);
      });
  };
};
// vuln-code-snippet end unionSqlInjectionChallenge dbSchemaChallenge
