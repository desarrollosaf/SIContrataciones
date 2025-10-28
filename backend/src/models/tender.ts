import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import sequelize from '../database/cuestionariosConnection';
import TenderItem from './tenderitem';

class Tender extends Model<
  InferAttributes<Tender>,
  InferCreationAttributes<Tender>
> {
  declare id: CreationOptional<number>;
  declare releaseId: number;
  declare title: string;
  declare description: string;
  declare status: string;
  declare procuringEntity: object;
  declare value: object;
  declare minValue: object;
  declare procurementMethod: string;
  declare mainProcurementCategory: string;
  declare submissionMethod: object;
  declare tenderPeriod: object;
  declare enquiryPeriod: object;
  declare numberOfTenderers: number;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}

Tender.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    releaseId: { type: DataTypes.INTEGER },
    title: { type: DataTypes.STRING },
    description: { type: DataTypes.TEXT },
    status: { type: DataTypes.STRING },
    procuringEntity: { type: DataTypes.JSON },
    value: { type: DataTypes.JSON },
    minValue: { type: DataTypes.JSON },
    procurementMethod: { type: DataTypes.STRING },
    mainProcurementCategory: { type: DataTypes.STRING },
    submissionMethod: { type: DataTypes.JSON },
    tenderPeriod: { type: DataTypes.JSON },
    enquiryPeriod: { type: DataTypes.JSON },
    numberOfTenderers: { type: DataTypes.INTEGER },
    createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  {
    sequelize,
    tableName: 'Tenders',
  }
);
Tender.hasOne(TenderItem, { as: 'items',  foreignKey: 'tenderId'})

export default Tender;
