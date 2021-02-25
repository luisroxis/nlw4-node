import { Router } from 'express'
import {UserController} from '../controllers/UserController'

const userController = new UserController()
const userRouter = Router()

userRouter.post('/', userController.create)
userRouter.get('/', userController.index)
userRouter.get('/:id', userController.show)
userRouter.put('/:id', userController.update)
userRouter.delete('/:id', userController.delete)

export default userRouter
