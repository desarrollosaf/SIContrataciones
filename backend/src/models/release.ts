import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import sequelize from '../database/cuestionariosConnection';
import Metadata from './metadata';
import Publisher from './publisher';
import Party from './party';
import Planning from './planning';
import Tender from './tender';
import Award from './award';
import Contract from './contract';
import Buyer from './buyer';

class Release extends Model<
  InferAttributes<Release>,
  InferCreationAttributes<Release>
> {
  declare id: CreationOptional<number>;
  declare ocid: string;
  declare cycle: number;
  declare language: string;
  declare date: Date;
  declare initiationType: string;
  declare tag: object;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}

Release.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    ocid: { type: DataTypes.STRING },
    cycle: { type: DataTypes.INTEGER },
    language: { type: DataTypes.STRING },
    date: { type: DataTypes.DATE },
    initiationType: { type: DataTypes.STRING },
    tag: { type: DataTypes.JSON },
    createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  {
    sequelize,
    tableName: 'Releases',
  }
);

Release.hasOne(Metadata, { as: 'metadata', foreignKey: 'releaseId' });
Release.hasOne(Publisher, { as: 'publisher', foreignKey: 'releaseId' });
Release.hasOne(Party, { as: 'parties', foreignKey: 'releaseId' });
Release.hasOne(Planning, { as: 'planning', foreignKey: 'releaseId' });
Release.hasOne(Tender, { as: 'tender', foreignKey: 'releaseId' });
Release.hasOne(Award, { as: 'awards', foreignKey: 'releaseId' });
Release.hasOne(Contract, { as: 'contracts', foreignKey: 'releaseId' });
Release.hasOne(Buyer, { as: 'buyer', foreignKey: 'releaseId' });


export default Release;
