import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import User from '../models/userModel';

export const register = async (req: Request, res: Response): Promise<void> => {
    const { name, lastName, email, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        await User.register(name, lastName, email, hashedPassword, 'cliente');

        res.status(201).json({ message: 'User registered successfully' });
    } catch (err: any) {
        res.status(500).json({ error: err.message });
    }
};

export const login = async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body;

    try {
        const user = await User.findByEmail(email);
        
        if (!user) {
            res.status(401).json({ message: 'Invalid credentials' });
            return;
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            res.status(401).json({ message: 'Invalid credentials' });
            return;
        }

        res.status(200).json({ message: 'Login successful', user });
    } catch (err: any) {
        res.status(500).json({ error: err.message });
    }
};
