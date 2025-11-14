import { Router } from "express";
import { getdatos } from "../controllers/contracts";
import verifyAccessToken from '../middlewares/verifyAccessToken';

const router = Router();
router.post("/api/contrataciones", verifyAccessToken, getdatos)

export default router 