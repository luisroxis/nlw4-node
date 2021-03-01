import { Router } from 'express'
import {AnswerController} from '../controllers/AnswerController'

const answerController = new AnswerController()
const answerRouter = Router()


answerRouter.get('/:nota', answerController.execute)

export default answerRouter
