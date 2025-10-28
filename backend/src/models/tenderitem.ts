import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import sequelize from '../database/cuestionariosConnection';

class TenderItem extends Model<
  InferAttributes<TenderItem>,
  InferCreationAttributes<TenderItem>
> {
  declare id: CreationOptional<number>;
  declare tenderId: number;
  declare description: string;
  declare classification: object;
  declare additionalClassifications: object;
  declare quantity: number;
  declare unit: object;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}

TenderItem.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    tenderId: { type: DataTypes.INTEGER },
    description: { type: DataTypes.TEXT },
    classification: { type: DataTypes.JSON },
    additionalClassifications: { type: DataTypes.JSON },
    quantity: { type: DataTypes.INTEGER },
    unit: { type: DataTypes.JSON },
    createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  {
    sequelize,
    tableName: 'TenderItems',
  }
);

export default TenderItem;
