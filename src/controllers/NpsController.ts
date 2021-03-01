import { Request, Response } from 'express'
import { getCustomRepository, IsNull, Not } from 'typeorm'
import { SurveysUsersRepository } from '../repositories/SurveysUserRepository'

class NpsController {
  async execute(request: Request, response: Response) {
    const surveysUsersRepository = getCustomRepository(SurveysUsersRepository)

    const {surveyId} = request.params

    const surveysUsers = await surveysUsersRepository.find({
      surveyId,
      value: Not(IsNull())
    })

    const detractor = surveysUsers.filter(survey =>
      (survey.value >= 0 && survey.value <= 6)
    ).length

    const promoters = surveysUsers.filter(survey =>
      (survey.value >=9)
    ).length

    const passive = surveysUsers.filter(survey =>
      (survey.value >= 7 && survey.value <= 8)
    ).length

    const total = surveysUsers.length

    const calculate  = ((promoters - detractor) / total) * 100

    return response.status(201).json({
      detractor,
      passive,
      promoters,
      total,
      nps: Number(calculate.toFixed(2))
    })
  }
}

export {NpsController}
