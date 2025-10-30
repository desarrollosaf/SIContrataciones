import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import sequelize from '../database/cuestionariosConnection';
import Budget from './budget';
import Document from './Document';
import Milestone from './Milestone';

class Planning extends Model<
  InferAttributes<Planning>,
  InferCreationAttributes<Planning>
> {
  declare id: CreationOptional<number>;
  declare releaseId: number;
  declare rationale: string;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}

Planning.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    releaseId: { type: DataTypes.INTEGER },
    rationale: { type: DataTypes.TEXT },
    createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  {
    sequelize,
    tableName: 'Plannings',
  }
);
Planning.hasOne(Budget, { as: 'budget', foreignKey: 'planningId' });
Planning.hasMany(Document, { foreignKey: 'parentId', constraints: false, scope: { parentType: 'Planning' }, as: 'documents' });
Planning.hasMany(Milestone, { foreignKey: 'parentId', constraints: false, scope: { parentType: 'Planning' }, as: 'milestones' });


export default Planning;
