import { Router } from 'express'
import {NpsController} from '../controllers/NpsController'

const npsController = new NpsController()
const npsRouter = Router()


npsRouter.get('/:surveyId', npsController.execute)

export default npsRouter
