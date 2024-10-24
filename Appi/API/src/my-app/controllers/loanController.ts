import { Request as ExpressRequest, Response } from "express";
import Loan from "../models/loanModel";

interface Request extends ExpressRequest {
    user?: {
        id: string; 
    };
}

exports.createLoan = async (req: Request, res: Response) => {
    const { amount, term } = req.body;
    const userId = req.user?.id; 

    if (!userId) {
        return res.status(400).json({ message: 'User ID is required' });
    }

    const userIdAsNumber = parseInt(userId, 10);

    if (isNaN(userIdAsNumber)) {
        return res.status(400).json({ message: 'Invalid User ID' });
    }

    if (typeof amount !== 'number' || typeof term !== 'number') {
        return res.status(400).json({ message: 'Amount and term must be numbers' });
    }

    const interestRate = parseFloat((amount * 0.15).toFixed(2));

    try {
        await Loan.createLoan(userIdAsNumber, amount, term, interestRate); 
        res.status(201).json({ message: 'Loan publication created successfully!' });
    } catch (err) {
        res.status(500).json({ message: 'Internal Server' });
    }
};

exports.getLoans = async (req: Request, res: Response) => {
    try {
        const loans = await Loan.getLoans();
        res.status(200).json(loans);
    } catch (err) {
        res.status(500).json({ message: 'Internal Server' });
    }
};

exports.acceptLoan = async (req: Request, res: Response) => {
    const loanId = parseInt(req.params.loanId, 10);

    if (isNaN(loanId)) {
        return res.status(400).json({ message: 'Invalid loan ID' });
    }

    try {
        await Loan.acceptLoan(loanId);
        res.status(200).json({ message: 'Loan accepted successfully!' });
    } catch (err) {
        res.status(500).json({ message: 'Internal Server' });
    }
};
