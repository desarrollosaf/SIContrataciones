import { Router } from "express";
import { getdatos } from "../controllers/contracts";
import verifyAccessToken from '../middlewares/verifyAccessToken';

const router = Router();
router.get("/api/contracts/get", verifyAccessToken, getdatos)

export default router 