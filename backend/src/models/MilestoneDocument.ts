import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import sequelize from '../database/cuestionariosConnection';

class MilestoneDocument extends Model<
  InferAttributes<MilestoneDocument>,
  InferCreationAttributes<MilestoneDocument>
> {
  declare id: CreationOptional<number>;
  declare milestoneId: number;
  declare documentType: string | null;
  declare title: string | null;
  declare description: string | null;
  declare url: string | null;
  declare datePublished: Date | null;
  declare dateModified: Date | null;
  declare format: string | null;
  declare language: string | null;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}

MilestoneDocument.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    milestoneId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: 'ID del milestone asociado',
    },
    documentType: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    datePublished: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    dateModified: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    format: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    language: {
      type: DataTypes.STRING,
      allowNull: true,
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
    tableName: 'MilestoneDocuments',
    modelName: 'MilestoneDocument',
    timestamps: true,
  }
);

export default MilestoneDocument;
