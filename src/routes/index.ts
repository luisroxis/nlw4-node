import { Router, RouterOptions } from 'express';
import usersRouter from './user.routes'
import surveyRouter from './survey.routes'
import sendMailRouter from './sendMail.routes'
import answerRouter from './answer.routes'
import npsRouter from './nps.routes'

const routes = Router();
routes.use('/users', usersRouter)
routes.use('/surveys', surveyRouter)
routes.use('/send', sendMailRouter)
routes.use('/answers', answerRouter)
routes.use('/nps', npsRouter)

routes.get('/', (request, response) => {
  return response.json({msg: 'NLW4 - Trilha Node'})
})


export default routes;
