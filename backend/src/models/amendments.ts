import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import sequelize from '../database/cuestionariosConnection';

class Amendment extends Model<
  InferAttributes<Amendment>,
  InferCreationAttributes<Amendment>
> {
  declare id: CreationOptional<number>;
  declare parentType: string | null; // puede ser 'Tender', 'Contract', etc.
  declare parentId: number | null;   // ID del registro padre
  declare amendmentId: string | null;
  declare description: string | null;
  declare rationale: string | null;
  declare amendsReleaseID: string | null;
  declare releaseID: string | null;
  declare date: Date | null;
  declare changes: object | null;
  declare isCurrent: boolean;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}

Amendment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    parentType: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    parentId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    amendmentId: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    rationale: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    amendsReleaseID: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    releaseID: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    changes: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    isCurrent: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    tableName: 'Amendments',
    modelName: 'Amendment',
    timestamps: true,
  }
);

export default Amendment;
