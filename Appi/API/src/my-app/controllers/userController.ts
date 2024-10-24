import { Request, Response } from "express";
import User from "../models/userModel";
import Loan from "../models/loanModel";

interface CustomRequest extends Request {
    user: {
        id: number; 
    };
}

export const checkAndUpdateUserLevel = async (userId: number, userRole: 'prestamista' | 'cliente'): Promise<void> => {
    try {
        const level = await User.getUserLevel(userId);

        if (userRole === 'prestamista') {
            const paymentsOnTime = await Loan.getPaymentsOnTime(userId); 
            if (paymentsOnTime >= 5) {
                await User.updateUserLevel(userId, level + 1);
            }
        } else if (userRole === 'cliente') {
            const loansTaken = await Loan.getLoansTaken(userId); 
            if (loansTaken >= 3) {
                await User.updateUserLevel(userId, level + 1);
            }
        }
    } catch (err) {
        console.error(err);
    }
};

export const acceptLoan = async (req: CustomRequest, res: Response) => {
    const loanId: number = Number(req.params.loanId);
    const userId = req.user.id;

    try {
        await Loan.acceptLoan(loanId);
        await checkAndUpdateUserLevel(userId, 'prestamista');
        res.status(200).json({ message: 'Loan accepted successfully!' });
    } catch (err) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
