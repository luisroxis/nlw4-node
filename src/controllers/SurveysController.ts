import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import { SurveysRepository } from '../repositories/SurveysRepository'


class SurveysController {
  async index(request: Request, response: Response) {
    const surveysRepository = getCustomRepository(SurveysRepository)
    const surveys = await surveysRepository.find()

    return response.status(201).json(surveys)
  }

  async create(request: Request, response: Response) {
    const {title, description} = request.body
    const surveysRepository = getCustomRepository(SurveysRepository)

    const survey = surveysRepository.create({title, description})

    await surveysRepository.save(survey)

    return response.status(201).json(survey)

  }

  async show(request: Request, response: Response) {}

  async update(request: Request, response: Response) {}

  async delete(request: Request, response: Response) {}

}

export { SurveysController }
