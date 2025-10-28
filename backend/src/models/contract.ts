import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import sequelize from '../database/cuestionariosConnection';
import Implementation from './implementation';

class Contract extends Model<
  InferAttributes<Contract>,
  InferCreationAttributes<Contract>
> {
  declare id: CreationOptional<number>;
  declare releaseId: number;
  declare awardId: number;
  declare title: string;
  declare description: string;
  declare status: string;
  declare period: object;
  declare value: object;
  declare dateSigned: Date;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}

Contract.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    releaseId: { type: DataTypes.INTEGER },
    awardId: { type: DataTypes.INTEGER },
    title: { type: DataTypes.STRING },
    description: { type: DataTypes.TEXT },
    status: { type: DataTypes.STRING },
    period: { type: DataTypes.JSON },
    value: { type: DataTypes.JSON },
    dateSigned: { type: DataTypes.DATE },
    createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  {
    sequelize,
    tableName: 'Contracts',
  }
);

Contract.hasOne(Implementation, {as: 'implementation', foreignKey: 'contractId'});

export default Contract;
