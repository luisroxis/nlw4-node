import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import { SurveysRepository } from '../repositories/SurveysRepository'
import { SurveysUsersRepository } from '../repositories/SurveysUserRepository'
import { UsersRepository } from '../repositories/UsersRepository'
import SendMailService from '../services/SendMailService'
import {resolve} from 'path';
import { AppError } from '../error/AppError';

class SendMailController {
  async execute(request: Request, response: Response) {
    const { email, surveyId } = request.body

    const npsPath = resolve(__dirname,'..','views','emails','npsMail.hbs')

    const usersRepository = getCustomRepository(UsersRepository)
    const surveysRepository = getCustomRepository(SurveysRepository)
    const surveysUsersRepository = getCustomRepository(SurveysUsersRepository)

    const user = await usersRepository.findOne({email})

    if(!user) {
      throw new AppError('User not found', 400)
    }

    const survey = await surveysRepository.findOne({id: surveyId})

    if(!survey) {
      throw new AppError('Survey not found',400)
    }

    const surveyUserExists = await surveysUsersRepository.findOne({
      where: {userId: user.id, value: null},
      relations: ['user', 'survey'],
    })
    const link =  'http://' + process.env.HOST +':'+ process.env.PORT +'/answers'

    const variables = {
      name: user.name,
      title: survey.title,
      description: survey.description,
      id: '',
      link
    }

    if(surveyUserExists) {
      variables.id = surveyUserExists.id
      await SendMailService.execute(email,survey.title, variables ,npsPath)
      return response.status(201).json(surveyUserExists)
    }

    const surveyUser = surveysUsersRepository.create({
      userId: user.id,
      surveyId
    })

    await surveysUsersRepository.save(surveyUser)
    variables.id = surveyUser.id

    await SendMailService.execute(email,survey.title, variables ,npsPath)

    return response.status(201).json(surveyUser)
  }

}

export { SendMailController }
