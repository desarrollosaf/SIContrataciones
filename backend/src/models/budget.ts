import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import sequelize from '../database/cuestionariosConnection';

class Budget extends Model<
  InferAttributes<Budget>,
  InferCreationAttributes<Budget>
> {
  declare id: CreationOptional<number>;
  declare planningId: number;
  declare description: string;
  declare amount: number;
  declare currency: string;
  declare project: string;
  declare projectID: string;
  declare uri: string;
  declare source: string;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}

Budget.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    planningId: { type: DataTypes.INTEGER },
    description: { type: DataTypes.STRING },
    amount: { type: DataTypes.FLOAT },
    currency: { type: DataTypes.STRING },
    project: { type: DataTypes.STRING },
    projectID: { type: DataTypes.STRING },
    uri: { type: DataTypes.STRING },
    source: { type: DataTypes.STRING },
    createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  {
    sequelize,
    tableName: 'Budgets',
  }
);

export default Budget;
