import { Router, RouterOptions } from 'express';
import usersRouter from './user.routes'
import surveyRouter from './survey.routes'

const routes = Router();
routes.use('/users', usersRouter)
routes.use('/surveys', surveyRouter)

routes.get('/', (request, response) => {
  return response.json({msg: 'NLW4 - Trilha Node'})
})


export default routes;
