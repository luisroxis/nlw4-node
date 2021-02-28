import { Request, Response } from 'express'

class AnswerController {
  async index(request: Request, response: Response) {
    console.log(request.params)
  }
}


export { AnswerController }
