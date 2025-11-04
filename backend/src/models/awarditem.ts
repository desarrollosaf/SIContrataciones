import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  ForeignKey,
} from 'sequelize';
import sequelize from '../database/cuestionariosConnection';
import Award from './award'; // asegúrate de tener el modelo Award importado

class AwardsItem extends Model<
  InferAttributes<AwardsItem>,
  InferCreationAttributes<AwardsItem>
> {
  declare id: CreationOptional<number>;
  declare awardId: ForeignKey<Award['id']>;
  declare description: string | null;
  declare classification: object | null;
  declare additionalClassifications: object | null;
  declare quantity: number | null;
  declare unit: object | null;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}

AwardsItem.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    awardId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Awards', key: 'id' },
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
    tableName: 'AwardsItems',
    modelName: 'AwardsItem',
    timestamps: true,
  }
);


export default AwardsItem;
