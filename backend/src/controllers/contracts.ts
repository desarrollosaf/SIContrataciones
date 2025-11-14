import { Router, Request, Response, NextFunction } from 'express';
import Release from "../models/release";
import Metadata from "../models/metadata";
import Publisher from "../models/publisher";
import Party from "../models/party";
import Buyer from "../models/buyer";
import Planning from "../models/planning";
import Budget from "../models/budget";
import Tender from "../models/tender";
import Award from "../models/award";
import Supplier from "../models/supplier";
import Contract from "../models/contract";
import Implementation from "../models/implementation";
import Transaction from "../models/transaction";
import TenderItem from "../models/tenderitem";
import Milestone from "../models/Milestone";
import MilestoneDocument from "../models/MilestoneDocument";
import DocumentModel from "../models/Document";
import Tenderer from "../models/tenders";
import Amendment from "../models/amendments";
import AwardsItem from "../models/awarditem";
import ContractItem from "../models/contractsitem";


export const getdatos = async (req: Request, res: Response): Promise<any> => {
    try {
    const { fechaCaptura, limite_registros, pagina } = req.body;
    console.log('llege')
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    //const page = parseInt(req.query.page as string) || 1;
    //const pageSize = parseInt(req.query.pageSize as string) || 100;
    const limite = Number(limite_registros);
    const page = Number(pagina);  
    console.log(page, fechaCaptura, limite_registros, pagina)

    if(!regex.test(fechaCaptura)){
      return res.status(401).json({
            error: '401',
            message: 'Formato de fecha incorrecto'
      });

    }else if (isNaN(limite) || isNaN(page)){
      return res.status(401).json({
            error: '401',
            message: 'Formato incorrecto'
      });
    }

    const limit = limite;                      
    const offset = (page - 1) * limite; 
    

    const { count, rows } = await Release.findAndCountAll({
      include: [
        { model: Metadata, as: 'metadata' },
        { model: Publisher, as: 'publisher' },
        { model: Party, as: 'parties' },
        { model: Buyer, as: 'buyer' },

        { 
          model: Planning, as: 'planning',
          include: [
            { model: Budget, as: 'budget' },
            { model: DocumentModel , as: 'documents' },
            { 
              model: Milestone, as: 'milestones',
              include: [{ model: MilestoneDocument, as: 'documents' }]
            }
          ]
        },

        { 
          model: Tender, as: 'tender',
          include: [
            { model: TenderItem, as: 'items' },
            { model: Tenderer, as: 'tenderers' },
            { model: DocumentModel , as: 'documents' },
            { 
              model: Amendment, 
              as: 'amendments',
              where: { isCurrent: 0 },
              required: false 
            },
            { 
              model: Amendment, 
              as: 'amendment',
              where: { isCurrent: 1 },
              required: false
            },
            { 
              model: Milestone, as: 'milestones',
              include: [{ model: MilestoneDocument, as: 'documents' }]
            },
          ]
        },

        { 
          model: Award, as: 'awards',
          include: [
            { model: Supplier, as: 'suppliers' },
            { model: AwardsItem, as: 'items' },
            { model: DocumentModel, as: 'documents' },
            { 
              model: Amendment, 
              as: 'amendments',
              where: { isCurrent: 0 },
              required: false 
            },
            { 
              model: Amendment, 
              as: 'amendment',
              where: { isCurrent: 1 },
              required: false
            },
          ]
        },

        { 
          model: Contract, as: 'contracts',
          include: [
            { model: DocumentModel, as: 'documents' },
            { model: ContractItem, as: 'items' },
            { 
              model: Milestone, as: 'milestones',
              include: [{ model: MilestoneDocument, as: 'documents' }]
            },
            { 
              model: Implementation, as: 'implementation',
              include: [
                { model: Transaction, as: 'transactions' },
                { model: DocumentModel, as: 'documents' },
                { 
                  model: Milestone, as: 'milestones',
                  include: [{ model: MilestoneDocument, as: 'documents' }]
                }
              ]
            },
            { 
              model: Amendment, 
              as: 'amendments',
              where: { isCurrent: 0 },
              required: false 
            },
            { 
              model: Amendment, 
              as: 'amendment',
              where: { isCurrent: 1 },
              required: false
            },
          ]
        }
      ],
      limit: limit,
      offset: offset,
      order: [['id', 'ASC']]
    });

    console.log(rows)
 
    const results = rows.map(r => {
      const release = r.toJSON() as any; 
      return {
        metadata: release.metadata || null,
        publisher: release.publisher || null,
        cycle: release.cycle,
        ocid: release.ocid,
        id: release.id,
        date: release.date,
        tag: release.tag || ['planning'],
        initiationType: release.initiationType,
        parties: [release.parties || []],
        buyer: release.buyer || null,
        planning: release.planning 
          ? { ...release.planning, budget: release.planning.budget || null } 
          : null,
        tender: release.tender || null,
        language: release.language,
        awards: release.awards || [],
        contracts: [release.contracts || []]
      };
    });

    res.json({
      pagination: {
        page,
        limit,
        totalRows: count,
        hasNextPage: page * limit < count
      },
      results
    });

  } catch (error) {
     console.error('Error al obtener contracts:', error);
    return res.status(500).json({ msg: 'Error interno del servidor' });
  }
}
