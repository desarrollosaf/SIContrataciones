import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  ForeignKey,
} from 'sequelize';
import sequelize from '../database/cuestionariosConnection';
import Contract from './contract'; // asegúrate de tener este modelo creado

class ContractItem extends Model<
  InferAttributes<ContractItem>,
  InferCreationAttributes<ContractItem>
> {
  declare id: CreationOptional<number>;
  declare contractId: ForeignKey<Contract['id']>;
  declare description: string | null;
  declare classification: object | null;
  declare additionalClassifications: object | null;
  declare quantity: number | null;
  declare unit: object | null;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}

ContractItem.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    contractId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Contracts', key: 'id' },
      onDelete: 'CASCADE',
    },
    description: { type: DataTypes.TEXT },
    classification: { type: DataTypes.JSON },
    additionalClassifications: { type: DataTypes.JSON },
    quantity: { type: DataTypes.INTEGER },
    unit: { type: DataTypes.JSON },
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
    tableName: 'ContractsItems',
    modelName: 'ContractItem',
    timestamps: true,
  }
);


export default ContractItem;
