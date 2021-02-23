import { Router, RouterOptions } from 'express';
import usersRouter from './user.routes'

const routes = Router();
routes.use('/users', usersRouter)

routes.get('/', (request, response) => {
  return response.json({msg: 'NLW4 - Trilha Node'})
})


export default routes;
