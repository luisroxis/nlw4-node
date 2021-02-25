import {Request, Response } from 'express'
import { getCustomRepository, getRepository } from 'typeorm'
import { UsersRepository } from '../repositories/UsersRepository';


class UserController {


  async create(request: Request, response: Response) {
    const { name, email } = request.body;
    const userRepository = getCustomRepository(UsersRepository)

    const userExists = await userRepository.findOne({email})

    if(userExists) {
      return response.status(400).json({error: 'User already exists'})
    }

    const user = userRepository.create({ name, email})

    await userRepository.save(user)

    return response.status(201).json(user)
  }

  async index(request: Request, response: Response) {
    const userRepository = getCustomRepository(UsersRepository)

    const users = await userRepository.find()

    return response.status(201).json(users)
  }
  async update(request: Request, response: Response) {
    const userRepository = getCustomRepository(UsersRepository)
    const {id} = request.params;
    const { name, email } = request.body;

    const user = await userRepository.findOne({id})

    const updatedUser =  userRepository.merge( name, email )

    await userRepository.save(updatedUser)

    return response.status(201).json(updatedUser)




  }

  async delete(request: Request, response: Response) {}

  async show(request: Request, response: Response) {
    const userRepository = getCustomRepository(UsersRepository)
    const {id} = request.params;

    const user = await userRepository.findOne({id})

    response.status(200).json(user)
  }

}

export { UserController }
