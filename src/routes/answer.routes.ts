import { Router } from 'express'
import {AnswerController} from '../controllers/AnswerController'

const answerController = new AnswerController()
const answerRouter = Router()


answerRouter.get('/', answerController.index)

export default answerRouter
