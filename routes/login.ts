/*
 * Copyright (c) 2014-2022 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { sequelize } from "../models/index";
import { Request, Response, NextFunction } from "express";
import UserModel from "../models/user";
import BasketModel from "../models/basket";

const utils = require("../lib/utils");
const security = require("../lib/insecurity");
const challenges = require("../data/datacache").challenges;
const users = require("../data/datacache").users;
const config = require("config");

// vuln-code-snippet start loginAdminChallenge loginBenderChallenge loginJimChallenge
module.exports = function login() {
  function afterLogin(user: UserModel, res: Response, next: NextFunction) {
    verifyPostLoginChallenges(user); // vuln-code-snippet hide-line
    BasketModel.findOrCreate({
      where: { UserId: user.id },
    })
      .then(([basket]) => {
        const token = security.authorize(user);
        const newUser:any=user;
        // user.bid = basket.id; // keep track of original basket
        newUser.bid=basket.id; // keep track of original basket
        security.authenticatedUsers.put(token, newUser);
        res.json({
          authentication: { token, bid: basket.id, umail: newUser.email },
        });
      })
      .catch((error: Error) => {
        next(error);
      });
  }

  return (req: Request, res: Response, next: NextFunction) => {
    verifyPreLoginChallenges(req); // vuln-code-snippet hide-line
    sequelize
      .query(
        `SELECT * FROM Users WHERE email = '${
          req.body.email || ""
        }' AND password = '${security.hash(
          req.body.password || ""
        )}' AND deletedAt IS NULL`,
        { model: UserModel, plain: true }
      ) // vuln-code-snippet vuln-line loginAdminChallenge loginBenderChallenge loginJimChallenge
      .then((authenticatedUser: UserModel) => {
        // vuln-code-snippet neutral-line loginAdminChallenge loginBenderChallenge loginJimChallenge
        const user = utils.queryResultToJson(authenticatedUser);
        if (user.data?.id && user.data.totpSecret !== "") {
          res.status(401).json({
            status: "totp_token_required",
            data: {
              tmpToken: security.authorize({
                userId: user.data.id,
                type: "password_valid_needs_second_factor_token",
              }),
            },
          });
        } else if (user.data?.id) {
          afterLogin(user, res, next);
        } else {
          res.status(401).send(res.__("Invalid email or password."));
        }
      })
      .catch((error: Error) => {
        next(error);
      });
  };
  // vuln-code-snippet end loginAdminChallenge loginBenderChallenge loginJimChallenge

  function verifyPreLoginChallenges(req: Request) {
    utils.solveIf(challenges.weakPasswordChallenge, () => {
      return (
        req.body.email === "admin@" + config.get("application.domain") &&
        req.body.password === "admin123"
      );
    });
    utils.solveIf(challenges.loginSupportChallenge, () => {
      return (
        req.body.email === "support@" + config.get("application.domain") &&
        req.body.password === "J6aVjTgOpRs@?5l!Zkq2AYnCE@RF$P"
      );
    });
    utils.solveIf(challenges.loginRapperChallenge, () => {
      return (
        req.body.email ===
          "mc.safesearch@" + config.get("application.domain") &&
        req.body.password === "Mr. N00dles"
      );
    });
    utils.solveIf(challenges.loginAmyChallenge, () => {
      return (
        req.body.email === "amy@" + config.get("application.domain") &&
        req.body.password === "K1f....................."
      );
    });
    utils.solveIf(challenges.dlpPasswordSprayingChallenge, () => {
      return (
        req.body.email === "J12934@" + config.get("application.domain") &&
        req.body.password === "0Y8rMnww$*9VFYE§59-!Fg1L6t&6lB"
      );
    });
    utils.solveIf(challenges.oauthUserPasswordChallenge, () => {
      return (
        req.body.email === "bjoern.kimminich@gmail.com" &&
        req.body.password === "bW9jLmxpYW1nQGhjaW5pbW1pay5ucmVvamI="
      );
    });
  }

  function verifyPostLoginChallenges(user: UserModel) {
    utils.solveIf(challenges.loginAdminChallenge, () => {
      return user.id === users.admin.id;
    });
    utils.solveIf(challenges.loginJimChallenge, () => {
      return user.id === users.jim.id;
    });
    utils.solveIf(challenges.loginBenderChallenge, () => {
      return user.id === users.bender.id;
    });
    utils.solveIf(challenges.ghostLoginChallenge, () => {
      return user.id === users.chris.id;
    });
    if (
      utils.notSolved(challenges.ephemeralAccountantChallenge) &&
      user.email === "acc0unt4nt@" + config.get("application.domain") &&
      user.role === "accounting"
    ) {
      UserModel.count({
        where: { email: "acc0unt4nt@" + config.get("application.domain") },
      }).then((count: number) => {
        if (count === 0) {
          utils.solve(challenges.ephemeralAccountantChallenge);
        }
      });
    }
  }
};
