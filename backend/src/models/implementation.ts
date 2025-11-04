import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import sequelize from '../database/cuestionariosConnection';
import Transaction from './transaction'; 
import Document from './Document'; 
import Milestone from './Milestone'; 


class Implementation extends Model<
  InferAttributes<Implementation>,
  InferCreationAttributes<Implementation>
> {
  declare id: CreationOptional<number>;
  declare contractId: number;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}

Implementation.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    contractId: { type: DataTypes.INTEGER },
    createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  {
    sequelize,
    tableName: 'Implementations',
  }
);

Implementation.hasMany(Transaction, {as: 'transactions', foreignKey: 'implementationId'})
Implementation.hasMany(Document, { foreignKey: 'parentId', constraints: false, scope: { parentType: 'Implementation' }, as: 'documents' });
Implementation.hasMany(Milestone, { foreignKey: 'parentId', constraints: false, scope: { parentType: 'Implementation' }, as: 'milestones' });


export default Implementation;
