import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import sequelize from '../database/cuestionariosConnection';

class Party extends Model<
  InferAttributes<Party>,
  InferCreationAttributes<Party>
> {
  declare id: CreationOptional<number>;
  declare releaseId: number;
  declare name: string;
  declare partyId: string;
  declare identifier: object;
  declare additionalIdentifiers: object;
  declare address: object;
  declare contactPoint: object;
  declare roles: object;
  declare details: object;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}

Party.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    releaseId: { type: DataTypes.INTEGER },
    name: { type: DataTypes.STRING },
    partyId: { type: DataTypes.STRING },
    identifier: { type: DataTypes.JSON },
    additionalIdentifiers: { type: DataTypes.JSON },
    address: { type: DataTypes.JSON },
    contactPoint: { type: DataTypes.JSON },
    roles: { type: DataTypes.JSON },
    details: { type: DataTypes.JSON },
    createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  {
    sequelize,
    tableName: 'Parties',
  }
);

export default Party;
