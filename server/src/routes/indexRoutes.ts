import { Router } from 'express';

import filtrosController from '../controllers/filtros-controller';
import articulosController from '../controllers/articulos-controller';

class IndexRoutes {

    public router: Router = Router();

    constructor() {
     this.config();
    }

    config(): void {
        this.router.get('/filtros', filtrosController.getFiltros);
        this.router.get('/articulos', articulosController.getArticulos);
    }
    
}

const indexRoutes = new IndexRoutes();

export default indexRoutes.router;