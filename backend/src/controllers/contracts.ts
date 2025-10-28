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


export const getdatos = async (req: Request, res: Response): Promise<any> => {
    try {
    const page = parseInt(req.query.page as string) || 1;
    const pageSize = parseInt(req.query.pageSize as string) || 100;
    console.log(page)

    const { count, rows } = await Release.findAndCountAll({
      include: [
        { model: Metadata, as: 'metadata' },
        { model: Publisher, as: 'publisher' },
        { model: Party, as: 'parties' },
        { model: Buyer, as: 'buyer' },
        { 
          model: Planning, as: 'planning', 
          include: [{ model: Budget, as: 'budget' }] 
        },
        { 
          model: Tender, as: 'tender', 
          include: [{ model: TenderItem, as: 'items' }] 
        },
        { 
          model: Award, as: 'awards', 
          include: [{ model: Supplier, as: 'suppliers' }] 
        },
        { 
          model: Contract, as: 'contracts', 
          include: [
            { 
              model: Implementation, as: 'implementation',  
              include: [{ model: Transaction, as: 'transactions' }] 
            }
          ] 
        }
      ],
      limit: pageSize,
      offset: (page - 1) * pageSize,
      order: [['id', 'ASC']]
    });
    console.log(rows)
 
    const results = rows.map(r => {
      const release = r.toJSON() as any; // aquí puedes tiparlo más si quieres
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
          ? { ...release.planning, budget: release.planning.budget || null } 
          : null,
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

  } catch (error) {
     console.error('Error al obtener preguntas:', error);
    return res.status(500).json({ msg: 'Error interno del servidor' });
  }
}
