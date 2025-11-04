import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  ForeignKey,
} from 'sequelize';
import sequelize from '../database/cuestionariosConnection';
import Tender from './tender'; // asegúrate de tener este modelo importado

class Tenderer extends Model<
  InferAttributes<Tenderer>,
  InferCreationAttributes<Tenderer>
> {
  declare id: CreationOptional<number>;
  declare tenderId: ForeignKey<Tender['id']>;
  declare name: string | null;
  declare organizationId: string | null;
  declare identifier: object | null;
  declare additionalIdentifiers: object | null;
  declare address: object | null;
  declare contactPoint: object | null;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}

Tenderer.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    tenderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Tenders', key: 'id' },
      onDelete: 'CASCADE',
    },
    name: { type: DataTypes.STRING },
    organizationId: { type: DataTypes.STRING },
    identifier: { type: DataTypes.JSON },
    additionalIdentifiers: { type: DataTypes.JSON },
    address: { type: DataTypes.JSON },
    contactPoint: { type: DataTypes.JSON },
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
    tableName: 'Tenderers',
    modelName: 'Tenderer',
    timestamps: true,
  }
);



export default Tenderer;
