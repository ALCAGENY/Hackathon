import db from "../db/mysql/db";

const query = async (sql: string, params?: any[]): Promise<any> => {
    try {
        const [results] = await db.query(sql, params); // La función db.query ya retorna una promesa
        return results;
    } catch (err) {
        throw err;
    }
};


class Loan {
    static createLoan(userId: number, amount: number, term: number, interestRate: number): Promise<any> {
        const sql = 'INSERT INTO loans (user_id, amount, term, interest_rate) VALUES (?, ?, ?, ?)';
        return query(sql, [userId, amount, term, interestRate]); // Pasa los parámetros correctamente
    }

    static getLoans(): Promise<any> {
        const sql = 'SELECT * FROM loans WHERE status = "pendiente"';
        return query(sql); // Sin parámetros adicionales
    }

    static acceptLoan(loanId: number): Promise<any> {
        const sql = 'UPDATE loans SET status = "aceptado" WHERE id = ?';
        return query(sql, [loanId]); // Pasa los parámetros correctamente
    }

    // Método para contar los pagos a tiempo
    static getPaymentsOnTime(userId: number): Promise<number> {
        const sql = 'SELECT COUNT(*) AS count FROM payments WHERE user_id = ? AND status = "on_time"';
        return query(sql, [userId]).then((results: any) => {
            const countResult = results as { count: number }[];
            return countResult[0]?.count || 0; // Asegúrate de que el resultado sea un array
        });
    }

    // Método para contar los préstamos tomados
    static getLoansTaken(userId: number): Promise<number> {
        const sql = 'SELECT COUNT(*) AS count FROM loans WHERE user_id = ?';
        return query(sql, [userId]).then((results: any) => {
            const countResult = results as { count: number }[];
            return countResult[0]?.count || 0; // Asegúrate de que el resultado sea un array
        });
    }
}

export default Loan;
