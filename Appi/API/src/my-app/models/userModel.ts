import db from "../db/mysql/db";

interface IUser {
    id?: number;
    name: string;
    lastName: string;
    email: string;
    password: string;
    role: string;
}

class User {
    static async register(name: string, lastName: string, email: string, password: string, role: string): Promise<any> {
        const query = 'INSERT INTO users (name, last_name, email, password, role) VALUES (?, ?, ?, ?, ?)';
        const [results] = await db.query(query, [name, lastName, email, password, role]);
        return results;
    }

    static async findByEmail(email: string): Promise<IUser | null> {
        const query = 'SELECT * FROM users WHERE email = ?';
        const [results] = await db.query(query, [email]);
        const users = results as IUser[];
        return users.length ? users[0] : null;
    }

    static async updateUserLevel(userId: number, newLevel: number): Promise<any> {
        const query = 'UPDATE users SET level = ? WHERE id = ?';
        const [results] = await db.query(query, [newLevel, userId]);
        return results;
    }

    static async getUserLevel(userId: number): Promise<number> {
        const query = 'SELECT level FROM users WHERE id = ?';
        const [results] = await db.query(query, [userId]);
        const levels = results as { level: number }[];
        return levels.length ? levels[0].level : 0;  // Retorna el nivel si existe, de lo contrario 0
    }
}

export default User;
