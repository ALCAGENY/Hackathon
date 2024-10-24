import { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

// Carga las variables de entorno
dotenv.config();

// Define un tipo personalizado para el Request
interface CustomRequest extends Request {
    user?: any; // Define `user` como opcional y de tipo `any` (puedes ajustarlo según tus necesidades)
}

// Middleware de autenticación
export const authenticate = (req: CustomRequest, res: Response, next: NextFunction) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    // Verifica que `JWT_SECRET` esté definido
    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret) {
        return res.status(500).json({ message: 'JWT secret not configured' });
    }

    jwt.verify(token, jwtSecret, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Forbidden' });
        }
        req.user = user; // Almacena el usuario en el Request
        next();
    });
};
