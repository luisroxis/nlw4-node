import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import { AppError } from '../error/AppError'
import { SurveysUsersRepository } from '../repositories/SurveysUserRepository'

class AnswerController {
  async execute(request: Request, response: Response) {
    const { nota } = request.params
    const { u } = request.query

    const surveysUsersRepository = getCustomRepository(SurveysUsersRepository)

    const surveyUser = await surveysUsersRepository.findOne({
      id: String(u)
     })

    if(!surveyUser) {
      throw new AppError('SurveyUser not found')
    }

    surveyUser.value = Number(nota)

    await surveysUsersRepository.save(surveyUser)

    return response.status(201)
  }
}


export { AnswerController }
