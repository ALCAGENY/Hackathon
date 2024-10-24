import { Router } from "express";
const { createLoan, getLoans, acceptLoan } = require('../controllers/loanController');
const { authenticate } = require('../middlewares/authMiddleware'); // Middleware para autenticar al usuario

const router = Router();

router.post('/', authenticate, createLoan); // Crear publicación de préstamo
router.get('/', getLoans); // Obtener publicaciones de préstamos
router.put('/:loanId/accept', authenticate, acceptLoan); // Aceptar publicación de préstamo

module.exports = router;