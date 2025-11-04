import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import sequelize from '../database/cuestionariosConnection';
import Supplier from './supplier';
import Document from './Document';
import Milestone from './Milestone';
import AwardsItem from './awarditem';


class Award extends Model<
  InferAttributes<Award>,
  InferCreationAttributes<Award>
> {
  declare id: CreationOptional<number>;
  declare releaseId: number;
  declare title: string;
  declare description: string;
  declare status: string;
  declare date: Date;
  declare value: object;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}

Award.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    releaseId: { type: DataTypes.INTEGER },
    title: { type: DataTypes.STRING },
    description: { type: DataTypes.TEXT },
    status: { type: DataTypes.STRING },
    date: { type: DataTypes.DATE },
    value: { type: DataTypes.JSON },
    createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  {
    sequelize,
    tableName: 'Awards',
  }
);
Award.hasOne(Supplier, {as: 'suppliers', foreignKey: 'awardId'})
Award.hasMany(Document, { foreignKey: 'parentId', constraints: false, scope: { parentType: 'Award' }, as: 'documents' });
Award.hasMany(Milestone, { foreignKey: 'parentId', constraints: false, scope: { parentType: 'Award' }, as: 'milestones' });
Award.hasOne(AwardsItem, {as: 'awardsitem', foreignKey: 'awardId'})

export default Award;
