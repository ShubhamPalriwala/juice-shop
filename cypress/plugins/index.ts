/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */

import * as Config from "config";
import { Product } from "../../data/types";

export default (on, config) => {
  on("task", {
    GetBlueprint() {
      for (const product of Config.get<Product[]>("products")) {
        if (product.fileForRetrieveBlueprintChallenge) {
          let blueprint = product.fileForRetrieveBlueprintChallenge;
          return blueprint;
        }
      }
    },
    toISO8601() {
      // This is a copy of the utils.toISO8601(date) function but since it has an indirect dependency of gracfully, it is unable to import the function in a browser hence we natively use the code here.
      let date = new Date();
      let day = "" + date.getDate();
      let month = "" + (date.getMonth() + 1);
      const year = date.getFullYear();

      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;

      let updatedDate = [year, month, day].join("-");
      return updatedDate;
    },
  });
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
};
