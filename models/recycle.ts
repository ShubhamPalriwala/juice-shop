/*
 * Copyright (c) 2014-2022 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

/* jslint node: true */

import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  DataTypes,
  CreationOptional
} from 'sequelize'
import { sequelize } from './index'

class RecycleModel extends Model<
InferAttributes<RecycleModel>,
InferCreationAttributes<RecycleModel>
> {
  declare id: CreationOptional<number>
  declare UserId: number
  declare AddressId: number
  declare quantity: number
  declare isPickup: boolean
  declare date: string
}

RecycleModel.init(
// @ts-expect-error
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    // TODO set this as DataTypes.INTEGER(4)
    quantity: DataTypes.INTEGER,
    isPickup: { type: DataTypes.BOOLEAN, defaultValue: false },
    date: DataTypes.DATE
  },
  {
    tableName: 'Recycle',
    sequelize
  }
)

export default RecycleModel
