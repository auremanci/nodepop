import { Request, Response } from 'express';

import pool from '../database';

class ArticulosController {
    
    public async getArticulos(req: Request, res: Response): Promise<any> {
        const [articulos] = await pool.query('SELECT * FROM articulos');

        res.json(articulos);
    }
}

const articulosController = new ArticulosController;
export default articulosController;