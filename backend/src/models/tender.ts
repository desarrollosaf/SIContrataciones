import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import sequelize from '../database/cuestionariosConnection';
import TenderItem from './tenderitem';
import Document from './Document';
import Milestone from './Milestone';
import Amendment from './amendments';
import Tenderer from './tenders';

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
  declare procurementMethodDetails: string;
  declare procurementMethodRationale: string;
  declare additionalProcurementCategories: object;
  declare awardCriteria: string;
  declare awardCriteriaDetails: string;
  declare submissionMethodDetails: string;
  declare hasEnquiries: string;
  declare eligibilityCriteria: string;
  declare mainProcurementCategory: string;
  declare submissionMethod: object;
  declare awardPeriod: object;
  declare contractPeriod: object;
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
    procurementMethodDetails: { type: DataTypes.STRING },
    procurementMethodRationale: { type: DataTypes.STRING },
    mainProcurementCategory: { type: DataTypes.STRING },
    additionalProcurementCategories: { type: DataTypes.JSON },
    awardCriteria: { type: DataTypes.STRING },
    awardCriteriaDetails: { type: DataTypes.STRING },
    submissionMethod: { type: DataTypes.JSON },
    submissionMethodDetails: { type: DataTypes.STRING },
    tenderPeriod: { type: DataTypes.JSON },
    enquiryPeriod: { type: DataTypes.JSON },
    hasEnquiries: { type: DataTypes.BOOLEAN },
    eligibilityCriteria: { type: DataTypes.STRING },
    awardPeriod: { type: DataTypes.JSON },
    contractPeriod: { type: DataTypes.JSON },
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
Tender.hasMany(Document, { foreignKey: 'parentId', constraints: false, scope: { parentType: 'Tender' }, as: 'documents' });
Tender.hasMany(Milestone, { foreignKey: 'parentId', constraints: false, scope: { parentType: 'Tender' }, as: 'milestones' });
Tender.hasMany(Amendment, { foreignKey: 'parentId', constraints: false, scope: { parentType: 'Tender' }, as: 'amendments' });
Tender.hasMany(Tenderer, {as: 'tenderers', foreignKey: 'tenderId'});
Tender.hasOne(Amendment, { foreignKey: 'parentId', constraints: false, scope: { parentType: 'Tender' }, as: 'amendment' });;

export default Tender;
