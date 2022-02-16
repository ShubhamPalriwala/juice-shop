/*
 * Copyright (c) 2014-2022 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

const db = require("../data/mongodb");
import { Request, Response, NextFunction } from "express";
import { Review } from "data/types";

const utils = require("../lib/utils");
const challenges = require("../data/datacache").challenges;
const security = require("../lib/insecurity");

module.exports = function productReviews() {
  return (req: Request, res: Response, next: NextFunction) => {
    const user = security.authenticatedUsers.from(req);
    utils.solveIf(challenges.forgedReviewChallenge, () => {
      return user && user.data.email !== req.body.author;
    });
    db.reviews
      .insert({
        product: req.params.id,
        message: req.body.message,
        author: req.body.author,
        likesCount: 0,
        likedBy: [],
      })
      .then(
        (_: Review) => {
          res.status(201).json({ staus: "success" });
        },
        (err: Error) => {
          res.status(500).json(err);
        }
      );
  };
};
