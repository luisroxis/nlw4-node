import { Router } from 'express'
import {SendMailController } from '../controllers/SendMailController'

const sendMailController = new SendMailController()
const sendMailRouter = Router()

sendMailRouter.post('/', sendMailController.execute)


export default sendMailRouter
