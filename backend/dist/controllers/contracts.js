"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getdatos = void 0;
const release_1 = __importDefault(require("../models/release"));
const metadata_1 = __importDefault(require("../models/metadata"));
const publisher_1 = __importDefault(require("../models/publisher"));
const party_1 = __importDefault(require("../models/party"));
const buyer_1 = __importDefault(require("../models/buyer"));
const planning_1 = __importDefault(require("../models/planning"));
const budget_1 = __importDefault(require("../models/budget"));
const tender_1 = __importDefault(require("../models/tender"));
const award_1 = __importDefault(require("../models/award"));
const supplier_1 = __importDefault(require("../models/supplier"));
const contract_1 = __importDefault(require("../models/contract"));
const implementation_1 = __importDefault(require("../models/implementation"));
const transaction_1 = __importDefault(require("../models/transaction"));
const tenderitem_1 = __importDefault(require("../models/tenderitem"));
const getdatos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const page = parseInt(req.query.page) || 1;
        const pageSize = parseInt(req.query.pageSize) || 100;
        console.log(page);
        const { count, rows } = yield release_1.default.findAndCountAll({
            include: [
                { model: metadata_1.default, as: 'metadata' },
                { model: publisher_1.default, as: 'publisher' },
                { model: party_1.default, as: 'parties' },
                { model: buyer_1.default, as: 'buyer' },
                {
                    model: planning_1.default, as: 'planning',
                    include: [{ model: budget_1.default, as: 'budget' }]
                },
                {
                    model: tender_1.default, as: 'tender',
                    include: [{ model: tenderitem_1.default, as: 'items' }]
                },
                {
                    model: award_1.default, as: 'awards',
                    include: [{ model: supplier_1.default, as: 'suppliers' }]
                },
                {
                    model: contract_1.default, as: 'contracts',
                    include: [
                        {
                            model: implementation_1.default, as: 'implementation',
                            include: [{ model: transaction_1.default, as: 'transactions' }]
                        }
                    ]
                }
            ],
            limit: pageSize,
            offset: (page - 1) * pageSize,
            order: [['id', 'ASC']]
        });
        console.log(rows);
        const results = rows.map(r => {
            const release = r.toJSON(); // aquí puedes tiparlo más si quieres
            return {
                metadata: release.metadata || null,
                publisher: release.publisher || null,
                cycle: release.cycle,
                ocid: release.ocid,
                id: release.id,
                date: release.date,
                tag: release.tag || ['planning'],
                initiationType: release.initiationType,
                parties: release.parties || [],
                buyer: release.buyer || null,
                planning: release.planning
                    ? Object.assign(Object.assign({}, release.planning), { budget: release.planning.budget || null }) : null,
                tender: release.tender || null,
                language: release.language,
                awards: release.awards || [],
                contracts: release.contracts || []
            };
        });
        res.json({
            pagination: {
                pageSize,
                page,
                totalRows: count,
                hasNextPage: page * pageSize < count
            },
            results
        });
    }
    catch (error) {
        console.error('Error al obtener preguntas:', error);
        return res.status(500).json({ msg: 'Error interno del servidor' });
    }
});
exports.getdatos = getdatos;
