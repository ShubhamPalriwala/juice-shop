/*
 * Copyright (c) 2014-2022 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

/* jslint node: false */
const sequelizeNoUpdateAttributes = require('sequelize-notupdate-attributes')
const Sequelize = require('sequelize')
const sequelize = new Sequelize('database', 'username', 'password', {
  dialect: 'sqlite',
  retry: {
    match: [
      /SQLITE_BUSY/
    ],
    name: 'query',
    max: 5
  },
  transactionType: 'IMMEDIATE',
  storage: 'data/juiceshop.sqlite',
  logging: false
})
sequelizeNoUpdateAttributes(sequelize)

import AddressModel from './address'
import BasketModel from './basket'
import BasketItemModel from './basketitem'
import ComplaintModel from './complaint'
import FeedbackModel from './feedback'
import ImageCaptchaModel from './imageCaptcha'
import MemoryModel from './memory'
import PrivacyRequestModel from './privacyRequests'
import ProductModel from './product'
import QuantityModel from './quantity'
import RecycleModel from './recycle'
import SecurityAnswerModel from './securityAnswer'
import SecurityQuestionModel from './securityQuestion'
import UserModel from './user'
import WalletModel from './wallet'

AddressModel.belongsTo(UserModel, {
  constraints: true,
  foreignKeyConstraint: true
})
BasketModel.belongsTo(UserModel, {
  constraints: true,
  foreignKeyConstraint: true
})
BasketModel.belongsToMany(ProductModel, {
  through: BasketItemModel,
  foreignKey: {
    name: 'BasketId'
    // TODO noUpdate: true
  }
})
ComplaintModel.belongsTo(UserModel, {
  constraints: true,
  foreignKeyConstraint: true
})
FeedbackModel.belongsTo(UserModel) // no FK constraint to allow anonymous feedback posts
ImageCaptchaModel.belongsTo(UserModel)
MemoryModel.belongsTo(UserModel, {
  constraints: true,
  foreignKeyConstraint: true
})
PrivacyRequestModel.belongsTo(UserModel, {
  constraints: true,
  foreignKeyConstraint: true
})
ProductModel.belongsToMany(BasketModel, {
  through: BasketItemModel,
  foreignKey: {
    name: 'ProductId'
    // noUpdate: true
    // TODO
  }
})
QuantityModel.belongsTo(ProductModel, {
  constraints: true,
  foreignKeyConstraint: true
})
RecycleModel.belongsTo(UserModel, {
  constraints: true,
  foreignKeyConstraint: true
})
RecycleModel.belongsTo(AddressModel, {
  constraints: true,
  foreignKeyConstraint: true
})
SecurityAnswerModel.belongsTo(UserModel)
SecurityAnswerModel.belongsTo(SecurityQuestionModel, {
  constraints: true,
  foreignKeyConstraint: true
})
WalletModel.belongsTo(UserModel, {
  constraints: true,
  foreignKeyConstraint: true
})

sequelize
  .sync({ force: false, logging: false })

export { sequelize }
