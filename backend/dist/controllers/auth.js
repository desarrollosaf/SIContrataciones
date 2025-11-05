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
exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generateToken = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { client_id, client_secret, grant_type, scope, username, password } = req.body;
    console.log(client_id, client_secret, grant_type, scope);
    if (grant_type !== 'client_credentials') {
        return res.status(400).json({
            error: 'unsupported_grant_type',
            message: 'El grant_type debe ser client_credentials'
        });
    }
    if (client_id !== 'cliente_externo' || client_secret !== 'super_secreto' || username !== 'contrataciones@congresoedomex.gob.mx' || password !== 'c0ntr462LX') {
        return res.status(401).json({
            error: 'invalid_client',
            message: 'Credenciales inválidas'
        });
    }
    const token = jsonwebtoken_1.default.sign({ client_id, scope }, process.env.JWT_SECRET, { expiresIn: '3h' });
    return res.json({
        access_token: token,
        token_type: 'Bearer',
        expires_in: 10800,
        scope: 'read',
        refresh_token: 10800
    });
});
exports.generateToken = generateToken;
/*export const generateToken = async (req: Request, res: Response): Promise<any> => {
    const { client_id, client_secret } = req.body;

    if (client_id === 'cliente_externo' && client_secret === 'super_secreto') {
        const token = jwt.sign({ client_id }, process.env.JWT_SECRET!, { expiresIn: '3h' });

        return res.json({
            access_token: token,
            token_type: 'Bearer',
            expires_in: 3600
        });
    } else {
        return res.status(401).json({ message: 'Credenciales inválidas' });
    }
};*/
