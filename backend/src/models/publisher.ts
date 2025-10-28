import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import sequelize from '../database/cuestionariosConnection';

class Publisher extends Model<
  InferAttributes<Publisher>,
  InferCreationAttributes<Publisher>
> {
  declare id: CreationOptional<number>;
  declare releaseId: number;
  declare name: string;
  declare scheme: string;
  declare uid: string;
  declare uri: string;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}

Publisher.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    releaseId: { type: DataTypes.INTEGER },
    name: { type: DataTypes.STRING },
    scheme: { type: DataTypes.STRING },
    uid: { type: DataTypes.STRING },
    uri: { type: DataTypes.STRING },
    createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  {
    sequelize,
    tableName: 'Publishers',
  }
);

export default Publisher;
