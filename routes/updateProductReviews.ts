/*
 * Copyright (c) 2014-2022 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import utils = require("../lib/utils");
import { Request, Response, NextFunction } from "express";

const challenges = require("../data/datacache").challenges;
const db = require("../data/mongodb");
const security = require("../lib/insecurity");

// vuln-code-snippet start noSqlReviewsChallenge forgedReviewChallenge
module.exports = function productReviews() {
  return (req: Request, res: Response, next: NextFunction) => {
    const user = security.authenticatedUsers.from(req); // vuln-code-snippet vuln-line forgedReviewChallenge
    db.reviews
      .update(
        // vuln-code-snippet neutral-line forgedReviewChallenge
        { _id: req.body.id }, // vuln-code-snippet vuln-line noSqlReviewsChallenge forgedReviewChallenge
        { $set: { message: req.body.message } },
        { multi: true } // vuln-code-snippet vuln-line noSqlReviewsChallenge
      )
      .then(
        (result: { modified: number; original: { author: any }[] }) => {
          utils.solveIf(challenges.noSqlReviewsChallenge, () => {
            return result.modified > 1;
          }); // vuln-code-snippet hide-line
          utils.solveIf(challenges.forgedReviewChallenge, () => {
            return (
              user?.data &&
              result.original[0] &&
              result.original[0].author !== user.data.email &&
              result.modified === 1
            );
          }); // vuln-code-snippet hide-line
          res.json(result);
        },
        (err: Error) => {
          res.status(500).json(err);
        }
      );
  };
};
// vuln-code-snippet end noSqlReviewsChallenge forgedReviewChallenge
