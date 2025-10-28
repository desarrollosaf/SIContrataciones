import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import sequelize from '../database/cuestionariosConnection';

class Supplier extends Model<
  InferAttributes<Supplier>,
  InferCreationAttributes<Supplier>
> {
  declare id: CreationOptional<number>;
  declare awardId: number;
  declare name: string;
  declare identifier: object;
  declare address: object;
  declare contactPoint: object;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}

Supplier.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    awardId: { type: DataTypes.INTEGER },
    name: { type: DataTypes.STRING },
    identifier: { type: DataTypes.JSON },
    address: { type: DataTypes.JSON },
    contactPoint: { type: DataTypes.JSON },
    createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  {
    sequelize,
    tableName: 'Suppliers',
  }
);

export default Supplier;
