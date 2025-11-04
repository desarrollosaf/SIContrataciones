import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import sequelize from '../database/cuestionariosConnection';

class Transaction extends Model<
  InferAttributes<Transaction>,
  InferCreationAttributes<Transaction>
> {
  declare id: CreationOptional<number>;
  declare implementationId: number;
  declare source: string;
  declare date: Date;
  declare value: object;
  declare payer: object;
  declare payee: object;
  declare uri: string;
  declare amount: object;
  declare providerOrganization: object;
  declare receiverOrganization: object;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}

Transaction.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    implementationId: { type: DataTypes.INTEGER },
    source: { type: DataTypes.STRING },
    date: { type: DataTypes.DATE },
    value: { type: DataTypes.JSON },
    payer: { type: DataTypes.JSON },
    payee: { type: DataTypes.JSON },
    uri: { type: DataTypes.STRING },
    amount: { type: DataTypes.JSON },
    providerOrganization: { type: DataTypes.JSON },
    receiverOrganization: { type: DataTypes.JSON },
    createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  {
    sequelize,
    tableName: 'Transactions',
  }
);

export default Transaction;
