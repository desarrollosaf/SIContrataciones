import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import sequelize from '../database/cuestionariosConnection';

class Buyer extends Model<
  InferAttributes<Buyer>,
  InferCreationAttributes<Buyer>
> {
  declare id: CreationOptional<number>;
  declare releaseId: number;
  declare name: string;
  declare idOrg: string;
  declare identifier: object;
  declare additionalIdentifiers: object;
  declare address: object;
  declare contactPoint: object;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}

Buyer.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    releaseId: { type: DataTypes.INTEGER },
    name: { type: DataTypes.STRING },
    idOrg: { type: DataTypes.STRING },
    identifier: { type: DataTypes.JSON },
    additionalIdentifiers: { type: DataTypes.JSON },
    address: { type: DataTypes.JSON },
    contactPoint: { type: DataTypes.JSON },
    createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  {
    sequelize,
    tableName: 'Buyers',
  }
);

export default Buyer;
