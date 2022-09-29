import { Router } from 'express';
import productsRouter from '@modules/products/routes/products.routes';

const routes = Router();

routes.use('/products', productsRouter);
routes.get('/payments', (req,res)=>{
// ... = SPREADOPERATOR
    const produto = {
      tipo: 'sapato',
      nome: 'Nike'
    }
    const pagamento = {
      status: 'Aprovado'
    }

    const pedido = {
       ...produto,
       ...pagamento
    }
    console.log(pedido)
    return res.status(200).json({pedido});
})




export default routes;
