import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import sequelize from '../database/cuestionariosConnection';

class Document extends Model<
  InferAttributes<Document>,
  InferCreationAttributes<Document>
> {
  declare id: CreationOptional<number>;
  declare parentType: string;
  declare parentId: number;
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

Document.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    parentType: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: 'planning, tender, contract, milestone, etc.',
    },
    parentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: 'id del registro asociado (Planning, Tender, etc.)',
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
    tableName: 'Documents',
    modelName: 'Document',
    timestamps: true,
  }
);

export default Document;
