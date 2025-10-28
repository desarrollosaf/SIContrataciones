"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const contracts_1 = require("../controllers/contracts");
const verifyAccessToken_1 = __importDefault(require("../middlewares/verifyAccessToken"));
const router = (0, express_1.Router)();
router.get("/api/contracts/get", verifyAccessToken_1.default, contracts_1.getdatos);
exports.default = router;
