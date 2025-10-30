import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  HasManyGetAssociationsMixin,
} from 'sequelize';
import sequelize from '../database/cuestionariosConnection';
import MilestoneDocument from './MilestoneDocument';

class Milestone extends Model<
  InferAttributes<Milestone>,
  InferCreationAttributes<Milestone>
> {
  declare id: CreationOptional<number>;
  declare parentType: string;
  declare parentId: number;
  declare title: string;
  declare type: string;
  declare description: string | null;
  declare code: string | null;
  declare dueDate: Date | null;
  declare dateMet: Date | null;
  declare dateModified: Date | null;
  declare status: string;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;

  // Association mixins
  declare getMilestoneDocuments: HasManyGetAssociationsMixin<MilestoneDocument>;
}

Milestone.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    parentType: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: 'planning, tender, contract, etc.',
    },
    parentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    code: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    dueDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    dateMet: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    dateModified: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    tableName: 'Milestones',
    modelName: 'Milestone',
    timestamps: true,
  }
);

// Asociaciones
Milestone.hasMany(MilestoneDocument, {
  foreignKey: 'milestoneId',
  as: 'documents',
});

export default Milestone;
