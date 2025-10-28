import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import sequelize from '../database/cuestionariosConnection';

class Metadata extends Model<
  InferAttributes<Metadata>,
  InferCreationAttributes<Metadata>
> {
  declare id: CreationOptional<number>;
  declare releaseId: number;
  declare actualizacion: Date;
  declare institucion: string;
  declare contacto: string;
  declare personaContacto: string;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}

Metadata.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    releaseId: { type: DataTypes.INTEGER },
    actualizacion: { type: DataTypes.DATE },
    institucion: { type: DataTypes.STRING },
    contacto: { type: DataTypes.STRING },
    personaContacto: { type: DataTypes.STRING },
    createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  {
    sequelize,
    tableName: 'Metadata',
  }
);

export default Metadata;
