import { Request, Response } from 'express';

import pool from '../database';

class FiltrosController {
    
    public async getFiltros(req: Request, res: Response): Promise<any> {
        const [categorias] = await pool.query('SELECT * FROM categorias');
        const [ranges] = await pool.query(` 
                                            SELECT MAX(art_precio) AS precioMAX, 
                                            MIN(art_precio) AS precioMIN, 
                                            MAX(art_creacion) AS fechaMAX, 
                                            MIN(art_creacion) AS fechaMIN 
                                            FROM articulos`);

        var filtros = {
            "listaCategorias": categorias,
            "listaRangos": ranges
        }

        res.json(filtros);
    }
}

const filtrosController = new FiltrosController;
export default filtrosController;