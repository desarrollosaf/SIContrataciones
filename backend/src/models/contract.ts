import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import sequelize from '../database/cuestionariosConnection';
import Implementation from './implementation';
import Document from './Document';
import Milestone from './Milestone';
import Amendment from './amendments';
import ContractItem from './contractsitem';

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
  declare relatedProcesses: object;
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
    relatedProcesses: { type: DataTypes.JSON },
    createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  {
    sequelize,
    tableName: 'Contracts',
  }
);

Contract.hasOne(Implementation, {as: 'implementation', foreignKey: 'contractId'});
Contract.hasMany(Document, { foreignKey: 'parentId', constraints: false, scope: { parentType: 'Contract' }, as: 'documents' });
Contract.hasMany(Milestone, { foreignKey: 'parentId', constraints: false, scope: { parentType: 'Contract' }, as: 'milestones' });
Contract.hasMany(Amendment, { foreignKey: 'parentId', constraints: false, scope: { parentType: 'Contract' }, as: 'amendments' });
Contract.hasOne(Amendment, { foreignKey: 'parentId', constraints: false, scope: { parentType: 'Contract' }, as: 'amendment' });
Contract.hasMany(ContractItem, { foreignKey: 'contractId', as: 'items' });

export default Contract;
