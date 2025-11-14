import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export const generateToken = async (req: Request, res: Response): Promise<any> => {
    const { client_id, client_secret, grant_type, scope, username, password } = req.body;
    console.log(client_id, client_secret, grant_type, scope)
    
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

    

    
    const token = jwt.sign(
        { client_id, scope },
        process.env.JWT_SECRET!,
        { expiresIn: 300 }
    );

    return res.json({
        access_token: token,
        token_type: 'Bearer',
        expires_in: 300,
        scope: 'read',
        refresh_token: 300 
    });
};
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
