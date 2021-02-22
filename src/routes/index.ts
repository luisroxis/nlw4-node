import { Router, RouterOptions } from 'express';

const routes = Router();

routes.get('/', (request, response) => {
  return response.json({msg: 'NLW4 - Trilha Node'})
})


export default routes;
