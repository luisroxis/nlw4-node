import { Router } from 'express'
import {SurveysController} from '../controllers/SurveysController'

const surveysController = new SurveysController()
const surveyRouter = Router()

surveyRouter.post('/', surveysController.create)
surveyRouter.get('/', surveysController.index)
surveyRouter.get('/:id', surveysController.show)
surveyRouter.put('/:id', surveysController.update)
surveyRouter.delete('/:id', surveysController.delete)

export default surveyRouter
